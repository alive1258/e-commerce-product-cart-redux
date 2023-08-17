// import { applyMiddleware, createStore, } from "redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./cart/actionType";
import { addManyQuantity, addProductQuantity, removeProductQuantity } from "./product/action";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const productManagementMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case ADD_TO_CART:
            store.dispatch(removeProductQuantity(action.payload));
            return next(action);

        case REMOVE_FROM_CART:
            store.dispatch(addProductQuantity(action.payload));
            return next(action)

        case DELETE_ITEM:
            store.dispatch(addManyQuantity(action.payload));
            return next(action)



        default:
            return next(action)
    }
}

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(productManagementMiddleware)))
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(productManagementMiddleware)))

export default store;
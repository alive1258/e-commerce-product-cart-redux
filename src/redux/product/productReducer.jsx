import { ADD_PRODUCT, ADD_MANY_QUANTITY, ADD_PRODUCT_QUANTITY, REMOVE_PRODUCT_QUANTITY } from "./actionType";

const nextId = (state) => state.reduce((maxID, item) => Math.max(item.id, maxID), 0) + 1;

const initialSate = [];

const productReducer = (state = initialSate, action) => {
  const copiedSate = [...state];
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      const newProduct = { ...payload, id: nextId(state) }
      copiedSate.push(newProduct)
      return copiedSate

    case ADD_PRODUCT_QUANTITY:
      return copiedSate.map(item => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item)

    case REMOVE_PRODUCT_QUANTITY:
      if (action.payload.quantity <= 0) {
        return state
      } else {
        return copiedSate.map(item => item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item)
      }

    case ADD_MANY_QUANTITY:
      return copiedSate.map(item => item.id === payload.id ? { ...item, quantity: item.quantity + payload.cartQuantity } : state)


    default:
      return state;
  }


}

export default productReducer;
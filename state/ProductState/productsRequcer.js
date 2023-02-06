import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  cart: [],
  error: false,
  light: true
};
export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        products: [],
        error: true,
      };
    case actionTypes.ADD_TO_CART:
      let ifExist = state.cart.find(item => item.id === action.payload.id)
      let item = {}
     if(ifExist){
      console.log(ifExist)

      item = {
        id: ifExist.id,
        quantity: 1
      }

     }else{
      // item = {
      //   id: action.payload.id,
      //   quantity: 1
      // }

     }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    
    default:
      return state;
  }


 
};

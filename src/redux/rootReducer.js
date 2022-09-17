import PRODUCT_LIST from "../data/products";

const initState = {
  productList: PRODUCT_LIST,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "productList/setProductList":
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

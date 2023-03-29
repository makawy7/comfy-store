import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, isProductsLoading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      isProductsLoading: false,
      products: action.payload,
      featuredProducts,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      isProductsLoading: false,
      productsError: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;

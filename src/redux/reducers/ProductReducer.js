import {
  allProductsAction,
  productDetailsAction,
} from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case allProductsAction.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        payload: [],
      };
    case allProductsAction.GET_PRODUCTS_SUCCESS:
      return {
        lading: false,
        payload: action.payload,
      };
    case allProductsAction.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.types) {
    case productDetailsAction.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        payload: false,
      };
    case productDetailsAction.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
      };
    case productDetailsAction.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case productDetailsAction.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

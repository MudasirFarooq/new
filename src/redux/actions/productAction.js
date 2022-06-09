
export const setProducts = (products) => {

    return {
        type: "SET_PRODUCTS",
        payload: products
    };
};

export const selectdProducts = (product) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: product
    };
};

export const addToCart = (product) => {
    // console.log("products from addtocart" , product)
    return {
        type: "ADD_TO_CART",
        payload: product
    };
};

export const removefromCart = (product) => {
    console.log("products from addtocart", product)
    return {
        type: "REMOVE_FROM_CART",
        payload: product
    };
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};

export const clearNoti = (product) => {
    console.log(product.id)
    return {
        type: 'REMOVE_NOTI',
        payload: product.id }
        ;
};

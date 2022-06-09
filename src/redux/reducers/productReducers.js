const initialState = {
    products : [],
    product: {},
    cart : [],
    notification: []

}

export const MyActions = (state = initialState, action) => {

    // console.log("payload data" ,action.payload)
    switch (action.type) {
      
  
      case "SET_PRODUCTS":
        return {
          ...state,
          products : action.payload,
        };
    case "SELECTED_PRODUCT":
        return{
            ...state,
            product : action.payload
        }
      case "ADD_TO_CART":
        const obj = state.cart.find( (item) => {
            return item.product.id === action.payload.id
        })
        if(obj){
             obj.quantity ++
            return {
                ...state,
                // cart : newobj,
                notification : [ ...state.notification , {id: action.payload.id , type : "alert-info" , massage : 'product added cart'} ]

            }
        }
          return {
            ...state ,
            cart : [...state.cart, {product:action.payload ,quantity : 1}],
            notification : [ ...state.notification , {id: action.payload.id , type : "alert-info" , massage : 'product added to cart'} ]
          }  
        case "REMOVE_FROM_CART" : 
        const newCart = state.cart.filter(item => {
            return item.product.id !== action.payload.product.id
        }) 
        return {
            ...state,
            cart : newCart,
            notification : [ ...state.notification , {id: action.payload.product.id , type : "alert-danger" , massage : 'product removed from cart'} ]

        }
        case "CLEAR_CART":
            return{
                ...state,
                cart: [],
                 notification : [ ...state.notification , {id: 1 , type : "alert-warning" , massage : 'all product removed from cart'} ]


            } 
        case "REMOVE_NOTI":
            console.log(action.payload)
            const newNoti = state.notification.filter( item => {
                return item.id !== action.payload
            }) 
            return{
                ...state,
                notification: newNoti
            }   
      default:
        return state;
    }

  };

  
        
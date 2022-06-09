import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartDetails from './CartDetails';
import EmptyCart from './EmptyCart';

function CartMain(props) {
    const cart = useSelector( state => state.MyActions.cart)
    let Total = 0
    cart.forEach( item => {
       return Total += item.product.price * item.quantity
     });
     console.log(Total)

    // console.log("cart data" , cart?.length)
    if(cart.length > 0){
        console.log(Total)

        return <CartDetails cart={cart} Total={Total.toFixed(2)}/>
    }else{
        return <EmptyCart/>


    }
    // return (
    //     <div>
    //         <CartDetails/>
    //     </div>
    // );
}

export default CartMain;
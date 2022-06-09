import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Cart(props) {
    const cart = useSelector( state => state.MyActions.cart)

    return (
        <Link to={'/cart'} style={{paddingTop:'15px'}}>
          
                  <p style={{borderLeft:'1px solid #000'}} className='ps-2'> <i className="fas fa-shopping-cart purple   "> <span className="purple">{cart.length} </span>  </i>  </p>
         
        </Link>
    );
}

export default Cart;
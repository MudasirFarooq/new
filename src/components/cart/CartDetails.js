import React from 'react';
import { useDispatch } from 'react-redux';
import {removefromCart ,clearCart} from '../../redux/actions/productAction'

function CartDetails({cart ,Total}) {

  const dispatch = useDispatch()
    return (
        <div>
       <div className="container cont">
      <h3 className="text-center mt-5 mb-2">Shoping cart</h3>
      <p className="text-center mb-2"><b> {cart.length}</b> Items in your Cart</p>
      <table className="table table-striped">
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
        </tr>
        {
          cart.map( (item) => (
            <tr  key={item.product.id}>
            <td className="d-flex">
                <img src={item.product.image} className='img1' alt=""/>
                <p className="mt-2">{item.product.title}</p>
            </td>
            <td>${item.product.price}</td>
            <td>{item.quantity}</td>
            <td><p
            className="badge bg-secondary pclas" 
            onClick={() => dispatch(removefromCart(item))}
          >remove</p></td>
        </tr>
          ))
        }

        
      </table>
      <div className="cont mt-3 text-end">
            <h5>Subtotal:</h5> 
            <h3>${Total}</h3> 
            <button className='hero-btn me-2' onClick={()=>dispatch(clearCart())} >Clear Cart</button>
            <button className='hero-btn'>Checkout</button>
      </div>
      <div className="mb-5">
      <a className="link-success pclas" to="/about"><b className="hhhh">&#8592;</b> Continue Shoping</a>
      </div>
    </div> 
    </div>
    );
}

export default CartDetails;
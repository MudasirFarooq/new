import React from 'react';

function EmptyCart(props) {
    return (
        <div className='container cartempty d-flex align-items-center justify-content-center'>  
            <h4  className='shadow-lg p-5'>Your Cart Is Empty! Please Select Some Items</h4>
        </div>
    );
}

export default EmptyCart;
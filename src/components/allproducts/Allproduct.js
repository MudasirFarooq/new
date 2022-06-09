import React, { useEffect } from 'react';
import Navbar from '../home/Navbar';
import NotificationList from '../notification/NotificationList';
import ProductList from './ProductList';

function Allproduct(props) {
    // useEffect( () => {
    //     // console.log("in all product")
    // } , [])
    // console.log("hrlllovd")
    return (

        <div>
            <div>


            <Navbar/>
            </div>
            <div className="p-5 mt-5">
                <div className="row">
                    <div className="col-3 col1 mt-5">
                        <h3 className="head">Search by Categories</h3>
                        <ul>
                            <li >Men's Clothe</li>
                            <li >Women's Clothe</li>
                            <li>Jewelery</li>
                            <li >Electronics</li>
                        </ul>

                    </div>
                    <div className="col-9 col2">
                        <h3>ALL Products</h3>

                        {/* <Productlist/>   */}
                        <div className='row'> 
                        {
                            console.log('mudasie')
                        }
                        <ProductList />
                        </div>
                    </div>
                </div>
            </div>
            {/* <NotificationList/> */}
        </div>
    );
}

export default Allproduct;
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-white text-dark fixed-top">
            <div className="container text-center mt-2">
                <h1 className="navbar-brand"> <strong>SHOPIFY</strong>  </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                       
                        <li className="nav-item ">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                     
                          
                        <li className="nav-item">
                        <Link to={'/products'} className="nav-link">All products</Link>
                        </li>
                        

                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Disabled</a>
                        </li>
                    </ul>
                </div>
                 <li className="nav-item" style={{listStyleType : 'none'}}>
                            <a className="nav-link ">Login</a>
                 </li>
                 
                <Cart/>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
{/* <img style={{width:'150px'}} src="https://carvago.com/images/logo.svg" className="img-fluid"></img> */}
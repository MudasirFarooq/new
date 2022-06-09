import React from 'react';
import NotificationList from '../notification/NotificationList';
import { Footer } from './Footer';
import Navbar from './Navbar';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <div className='container-fluied hero-section'>

            </div>
            <div className='container p-5'>
                <div className='d-flex mb-5 my-3 flex-column'>
                    <h2>All Categories</h2>
                    <div className='spann'></div>
                </div>
                <div className='row    justify-content-center'>
                    <div className='col-3 one me-5 d-flex align-items-center justify-content-center' >
                        <h3>WOMEN'S</h3>
                    </div>
                    <div className='col-3 me-5 d-flex one align-items-center justify-content-center'>
                    <h3>MEN'S</h3>
                    </div>
                    <div className='col-3 one d-flex align-items-center justify-content-center'>
                    <h3>ACCESSORIES</h3>
                    </div>

                </div>
            </div>

            <Footer/>
            {/* <NotificationList/> */}
        </div>
    );
}

export default Home;
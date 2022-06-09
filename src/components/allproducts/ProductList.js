import React, { useEffect } from 'react';
import axios, { Axios } from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts ,addToCart } from '../../redux/actions/productAction'
import ProductDetail from '../ProductDetail';
import { useNavigate } from 'react-router-dom';



function ProductList(props) {
    const product = useSelector( state => state.MyActions.products)
    // console.log("data from redux " , product)

    const cart = useSelector( state => state.MyActions.cart)
    // console.log("data from redux " , cart)


    //  const {id , title} = products[0
    const dispatch = useDispatch()
    const navigat = useNavigate()
   
// console.log("out side the useeffect")
useEffect(() => {
    const fetchdata = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
           dispatch(setProducts(res.data));
        //   console.log(res.data)
        })
        .catch((e) => console.log(e));
    };
    fetchdata();
  }, []);

  const ProductDetail = (id) => {
    navigat(`/detail/${id}`)
  }

  const list = product.map( (list) => (
    <div className="col-3 mt-3 " key={list.id}>
            <div className="card h-100 text-center border-0">
                <img className="w-100" src={list.image} alt="" width={200} height={250} onClick={() => ProductDetail(list.id)}/>
                <div className="card-body">
                    <h4 className="card-title px-0 my-0">
                        <p className="nav-link active"
                        >{list.title}</p><span>{list.price}</span>
                    </h4>
                </div>
                <div className="px-4 pb-3 mt-0 ">
                    <button className="hero-btn px-5" onClick={() => dispatch(addToCart(list))} >Add to cart</button>
                </div>
            </div>
        </div>
  ))
return list

    
        

    
}

export default ProductList;
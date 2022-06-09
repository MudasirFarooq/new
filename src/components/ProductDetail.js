import React, { useEffect  ,} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import axios  from 'axios';
import { selectdProducts } from '../redux/actions/productAction';

function ProductDetail(props) {
    const product = useSelector( state => state.MyActions.product)

    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    const fetchdata =async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
           dispatch(selectdProducts(res.data));
           console.log(res.data)
        })
        .catch((e) => console.log(e));
    }
    useEffect( () =>{
        fetchdata() 
    },[id])
    return (
        <div>
            <div class="row m-5">
       <div class="col-4">
            <img class="w-100 " src={product.image} alt="" />
        </div>
        <div class="col-7 mt-5">
            <h4>{product.title}  {id}</h4>
            <h3>{product.price}</h3>
            <p class="mt-4"> {product.description}</p>
            <button class="btn btn-primary">Add to cart</button>
        </div> 
    </div>
        </div>
    );
}

export default ProductDetail;
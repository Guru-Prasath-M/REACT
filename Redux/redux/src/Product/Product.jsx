import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decraction, incraction } from '../Redux/product/product.action';

const Product = () => {
    let dispatch = useDispatch();
    let product = useSelector((state)=>{
        return state.product;
    })
    let incrHandler = () =>{
        dispatch(incraction())
    }
  return (
    
    <div>
        <h2>Products</h2>
        <pre>{JSON.stringify(product)}</pre>
        <h5>Product Name : {product.product_name}</h5>
        <h5>Product Price : {product.price}</h5>
        <button onClick={()=>{dispatch(decraction())}}>-</button>
        {product.qty}
        <button onClick={incrHandler}>+</button>
        
        
    </div>
  )
}

export default Product;
import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

let Products = () => {
  let [products , setProducts] = useState([])
  useEffect(()=>{
    Axios.get('http://127.0.0.1:5000/api/products')
    .then((resp)=>{setProducts(resp.data)})
    .catch((err)=>{console.log(err)})
  },[])


  return <div className='container'>
            <pre>{JSON.stringify(products)}</pre>
            <div className="row">
              {
                products.length>0? <>
                                    {
                                      products.map((product)=>{
                                        return <div className='col-3'>
                                        <div className="card">
                                          <div className="card-header">
                                            <img src={product.image} alt="" />
                                          </div>
                                          <div className="card-body">
                                          <ul className='list-group'>
                                            <li className='list-group-item'>{product.name}</li>
                                            <li className='list-group-item'>{product.price}</li>
                                            <li className='list-group-item'>{product.info}</li>
                                            <li className='list-group-item'><button className='btn btn-success'>Add to Cart</button><button className='btn btn-danger' style={{marginLeft:"20px"}}>Delete</button></li>
                                          </ul>
                                          </div>
                                        </div>
                                        </div>
                                      })
                                    }   
                                   </>: <h4>No Data</h4>
              }
            </div>
          </div>



}

export default Products;

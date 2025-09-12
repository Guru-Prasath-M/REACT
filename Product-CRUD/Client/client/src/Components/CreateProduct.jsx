import React, { useState } from 'react'
import Axios from 'axios'

 const CreateProduct = () => {

  let [product,setProducts] = useState({name:"",image:"",price:"",qty:"",info:""})

  let updateHandler=(event)=>{
    setProducts({...product,[event.target.name] : event.target.value})
  }

  let imageHandler = (event)=>{
    let imgFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.addEventListener("load",()=>{
      if(reader.result){
        setProducts({...product,image:reader.result})
      }
    })
  }

let submitHandler = (event)=>{
    event.preventDefault();
    let url='http://127.0.0.1:5000/api/products'
    Axios.post(url,product)
    .then(()=>{})
    .catch(()=>{})
  }

  return( 
    <div className="container mt-4">
      <pre>{JSON.stringify(product)}</pre>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h4>Create New Product</h4>
            </div>

            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" onChange={updateHandler} className='form-control'name='name' />
                </div>

                <div className="form-group mt-3">
                  <label>Image</label>
                  <input type="file" className='form-control' onInput={imageHandler}/>
                </div>

                <div className="form-group mt-3">
                  <label>Price</label>
                  <input type="text" onChange={updateHandler} className='form-control' name='price'/>
                </div>

                <div className="form-group mt-3">
                  <label>Quantity</label>
                  <input type="text" onChange={updateHandler} className='form-control' name='qty'/>
                </div>

                <div className="form-group mt-3">
                  <label>Info</label>
                  <input type="text" onChange={updateHandler} className='form-control' name='info'/>
                </div>

                <input type="submit" value="Create Product" className='btn btn-success mt-4'/>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct;

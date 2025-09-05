import React from "react";
class Product extends React.Component{
    state ={
        Prod_Name : "Pen",
        Price : 20,
        Qty : 1
    }

    incrHandler = ()=>{
        this.setState({Qty : this.state.Qty + 1 })
    }

    decrHandler = ()=>{
        this.setState({Qty : this.state.Qty - 1 })
    }

    render(){
        return <div>
            <h2>Product Qty: <button onClick={this.incrHandler}> + </button> {this.state.Qty} <button onClick={this.decrHandler}> - </button><br />
            <input type="submit" value={"Buy Now"} />
            </h2>  
            
        </div>
    }
}

export default Product;
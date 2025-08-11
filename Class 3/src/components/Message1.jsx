import React from "react";
class Message1 extends React.Component{
    //msg="Hello.."
    state={
        "msg":"Hello,....."
    }
    gmHandler=()=>{
        this.setState({"msg":"Good Morning  "})
    }
    gnHandler=()=>{
        this.setState({"msg":"Good Night"})
    }
    render(){
        console.log("Inside Render Method")
        return <div>
                <h3>Message Component</h3>
                <h3>Message Value:{this.state.msg}</h3>
                <button onClick={this.gmHandler}>Gud Mrng</button>
                <button onClick={this.gnHandler}>Gud Night</button>
               
        
                </div>
    }
}
export default Message1;
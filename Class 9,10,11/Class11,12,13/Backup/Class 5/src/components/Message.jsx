import React from "react";
class Message extends React.Component{
    msg = "Hello";
   gmhandler = ()=>{
    this.msg='Good Morning'
    // console.log(this.msg)
    this.forceUpdate()
   }

   gnhandler = ()=>{
    this.msg='Good Night'
    // console.log(this.msg);
    this.forceUpdate()
   }

    render(){
        return <div>
            <h2>Message :{this.msg}</h2>
            <button onClick={this.gmhandler}>Gud Mrng</button>
            <button onClick={this.gnhandler}>Gud Night</button>
        </div>
    }
}

export default Message;
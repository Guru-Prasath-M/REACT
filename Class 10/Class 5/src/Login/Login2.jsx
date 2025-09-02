//Using Single Handler with the help of attribute name

import { useState } from "react";


let Login2 = ()=>{
    let [user,setUser]=useState({"email":"" , "pwd":""})
    let updateHandler = (event)=>{
        setUser({...user,[event.target.name] : event.target.value})
    }

    let submitHandler = (event)=>{
        event.preventDefault() //debugging purpose
        console.log(user);
        
    }

    return <div>
        <pre>{JSON.stringify(user)}</pre>
        <form onSubmit={submitHandler}>
            <label>Email :::::::::</label>
            <input type="email" name="email" onChange={updateHandler}/><br />
            <label>Password :</label>
            <input type="password" name="pwd" onChange={updateHandler}/><br />

            <input type="submit" value="Login" />
        </form>
    </div>
}

export default Login2;
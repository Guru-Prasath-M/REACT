//Using Multiple Handlers

import { useState } from "react";


let Login1 = ()=>{
    let [user,setUser]=useState({"email":"" , "password":""})
    let emailHandler = (event)=>{
        setUser({...user,"email":event.target.value})
    }
    let pwdHandler = (event)=>{
        setUser({...user,"password":event.target.value})
    }
    

    return <div>
        <pre>{JSON.stringify(user)}</pre>
        <h3>Login Details</h3>
        <form>
            <label>Email :::::::::</label>
            <input type="text" onChange={emailHandler}/>
            <br />
            <label>Password :</label>
            <input type="password" onChange={pwdHandler}/><br />
            <input type="submit" value="Login"/>
        </form>
    </div>

}

export default Login1;
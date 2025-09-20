import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { gmAction,gaAction } from '../Redux/message/message.action'
const Message = () => {
    let message = useSelector((state)=>{return state})
    let dispatch = useDispatch();
    let gmHandler = () =>{
        dispatch(gmAction())
    }
    let gaHandler = () =>{
        dispatch(gaAction())
    }
  return (
    <div>
    
        {/* <h2>Message component</h2> */}
        <pre>message component</pre>
        <pre>{JSON.stringify(message)}</pre>

        <button onClick={gmHandler}>Gm</button>
        <button onClick={gaHandler}>GA</button>
    </div>
  )
}

export default Message
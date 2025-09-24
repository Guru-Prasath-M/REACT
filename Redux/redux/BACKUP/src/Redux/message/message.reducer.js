import {GM,GA} from '../message/message.action'
let initalState = {
    "msg" : 'Hello'
}


let messageReducer = ( state= initalState,action ) => {

    switch(action.type){
        case 'GM':
            return {'msg':'Good Morning'}
        case 'GA':
            return {'msg': 'Good Afternoon'}
        default :
            return state;
    }

}

export {messageReducer}
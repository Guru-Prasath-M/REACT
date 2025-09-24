// Action type
const INCR = "INCR";
const DECR = "DECR";

//action

let incraction = ()=>{
    return {'type':INCR}
}
let decraction = ()=>{
    return {'type':DECR}
}

export {incraction,decraction,INCR,DECR}
import Movies from "./components/Movies";
import CompA from "./PropsEx/CompA";
import CompB from "./PropsEx/CompB";
import Message from "./components/Message";
import Message1 from "./components/Message1";
import Product from "./components/Product";
import Message2 from "./components/Message2";


let App = ()=>{
    return <div>
        <h1>GM</h1>

        {/* <Movies/>
        <CompA/>
        <CompB/> */}
        <Message/> <hr/>
        <Message1/> <hr/>
        <Product/> <hr/>
        <Message2/> <hr/>
    </div>
}

export default App;
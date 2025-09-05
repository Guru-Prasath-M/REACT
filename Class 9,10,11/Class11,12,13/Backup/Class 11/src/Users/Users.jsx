// import { useState } from "react";
// import Axios from "axios";
// let Users=()=>{
//     let [users,setUsers]  = useState([])
//     let get_Data=()=>{
//         Axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((resp)=>{
//             setUsers(resp.data)
//         })
//         .catch()
//     }
//     return <div>
//                 <h3>User Component</h3>
//                 <hr/>
//                 <button onClick={get_Data}>Get data</button>
//                 <pre>{JSON.stringify(users)}</pre>
//             </div>
// }
// export default Users;





import React from "react";
import Axios from 'axios'
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={users:[]}
    }
   componentDidMount(){  
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState({users:resp.data})
        })
        .catch(()=>{})
    }
    render(){
        return <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <h4>Users Component</h4>
                    <pre>{JSON.stringify(this.state.users)}</pre>
                   
                    <table className="table table-bordered border-5 border-dark table-striped" >
                        <thead className="table-dark">
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((user)=>{
                                return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                            })
                        }
                        </tbody>
                    </table>
                            </div>
                        </div>
                    
                </div>
    }
}

export default Users;
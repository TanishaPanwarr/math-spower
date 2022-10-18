import React from "react";
import { useEffect ,useState} from "react";
import axios from 'axios';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Api=()=>{
    let[data,updatedata]=useState([]);
    let[pid,updatepid]=useState();
    let[pro,updatepro]=useState({roll:'',branch:'',year:'',username:'',first_name:'',last_name:'',email:'',password:''})
    useEffect(
        function()
        {
            async function show()
            {
                var res=await axios.get("http://restp.herokuapp.com/student/")
                updatedata(res.data)
            }
            show();
        }
    );
    function changeval(e)
    {
   updatepid(e.target.value);     
    }
    const adddata=(e)=>{
        updatepro({...pro,[e.target.name]:e.target.value});
    }
    return(
        <>
        <input type="number" name="pid" value={pid} onChange={changeval}/>
        <button onClick={()=>{
            async function Search(){
            var rest=await axios.get(`http://restp.herokuapp.com/Student/{$pid}`)
            updatedata([rest.data])
        } Search();
        }}>Search</button><br/><br/>
                <form onSubmit={(e)=>{
                            e.preventDefault();
                        if(pro.id==='')
                        {
                            async function addvalue()
                            {
                                var res=await axios.post("http://restp.herokuapp.com/Student",pro)
                                updatepro({...pro,[e.target.name]:e.target.value})
                                if(res.status===201)
                                {
                                    alert("Added successfully")
                                }
                            }
                            addvalue();
                        }
                        else{
                            async function updatepros()
                            {
                                var res=await axios.put(`http://restp.herokuapp.com/Student/{$pro.id}`,pro)
                                    updatedata([res.data])
                                    if(res.status===200)
                                    {
                                        alert("update successfully")
                                    }
                            }
                            updatepros();
                        }
                    }} >
                        Roll:<input type="number" name="roll" value={pro.roll} onChange={adddata}/><br/>
                        Branch: <input type="text" name="branch" value={pro.branch} onChange={adddata}/><br/>
                        Year: <input type="number" name="year" value={pro.year} onChange={adddata}/><br/>
                        Username: <input type="text" name="username" value={pro.username} onChange={adddata}/><br/>
                       Firstname: <input type="text" name="first_name" value={pro.first_name} onChange={adddata}/><br/>
                       Lastname: <input type="text" name="last_name"  value={pro.last_name} onChange={adddata}/><br/>
                       Email:  <input type="text" name="email"value={pro.email} onChange={adddata}/><br/>
                       Password: <input type="text" name="password"value={pro.password} onChange={adddata}/><br/>
                        <button id="b1">AddData</button>
                        <button id="b2">Update </button>
                    </form>
            <table className="table table-bordered table-center">
                <tr>
                    <th>Roll</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Username</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                
                    {data.map((v)=>{
                        return(
                           <>
                           <tr>
                           {v.id}
                           <td>{v.roll}</td>
                            <td>{v.branch}</td>
                            <td>{v.year}</td>
                            <td>{v.username}</td>
                            <td>{v.first_name}</td>
                            <td>{v.last_name}</td>
                            <td>{v.email}</td>
                            <td>{v.password}</td>
                            <td onClick={()=>{updatepro(v);}}>Update</td>
                            <td><button  onClick={()=>{
                                async function deletes(){
                                    var rest=await axios.delete(`http://restp.herokuapp.com/Student/${pid}`)
                                    if(rest.statusText===204)
                                    {
                                        alert(" delete successfully")
                                    }
                                    updatedata([rest.data])
                                }deletes();
                            }}>Delete</button></td>
                              </tr>
                           </> 
                        )
                    }
                    )}
              
            </table>
            
        </>
    )
}
export default Api;

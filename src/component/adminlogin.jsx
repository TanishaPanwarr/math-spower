import React from "react";
import {useState} from "react";
import { useNavigate} from "react-router-dom";
const Adminlogin=()=>{
    //let obj=useParams();
    let[Data,updatedata]=useState()
    let navigate=useNavigate();
    const change=(e)=>{
       updatedata({...Data,[e.target.name]:e.target.value})
  
    }
    const submit=(e)=>{
        e.preventDefault();
        if(Data.id==='admin'&& Data.pwd==='12345')
        {
            navigate("/api")
        }
        else{
            alert("invalied id or password")
        }
    }
    
    return(
        <>

            <h1>adminlogin component is running</h1>
            <form onSubmit={submit}>
            ID: <input type="text" name="id" id="i1" onChange={change}/>
            Password: <input type="text" name="pwd" id="p1" onChange={change}/>
                <button>Login</button>
            </form>
            
        </>
    )
}
export default Adminlogin;
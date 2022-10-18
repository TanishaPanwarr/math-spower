import React from "react";
import { useState } from "react";
const ContactUs=()=>{
        let [data,updatedata]=useState();
        const Change=(e)=>
        {
            updatedata({...data,[e.target.name]:e.target.value})
        }
        const submit=(e)=>
        {
            e.preventDefault();   
            console.log(data);
            updatedata(data)
        }
    return(
        <>
            
            <img src="images/mpc.png" alt=""/>
           <br/><br/> <h1 id="t2">Contact one of our Math Couching using the contact form provided below.</h1>
            <form onSubmit={submit}>
            Name: <input type="text" name="name" placeholder="Enter Your Name" onChange={Change}/><br/><br/>
           Email:      <input type="email" name="email" placeholder="Type Your Email Address" onChange={Change}/><br/><br/>
            Phone: <input type="number" name="phone" placeholder="Enter Your Phone Number" onChange={Change}/><br/><br/>
            Subject message:<input type="text" name="msg" placeholder="Enter a Subject For Your Message" onChange={Change}/><br/><br/>
            Massage:<input type="text" name="massage" onChange={Change}/><br/><br/>
                <select>
                    <option>I am interested in</option>
                    <option>Maths</option>
                    <option>Physics</option>
                </select><br/>
                <input type="checkbox" name="chk" onChange={Change}/>Subscribe to our Couching <br/><br/>
                <button>Submit</button><br/>
            </form>
        </>
    )
}
export default ContactUs;
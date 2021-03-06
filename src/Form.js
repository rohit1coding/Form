import React,{useState} from 'react'
import './App.css'
import Axios from 'axios'
import M from 'materialize-css'
const Form = () => {
    const [fullname,setName]=useState("")
    const [phonenumber,setContact]=useState("")
    const [email,setEmail]=useState("")
    const [textarea,setTextArea]=useState("")
    const uploadField=()=>{
        if(!fullname){
            M.toast({html: "Enter Name", classes:"#c62828 red darken-3"})
              return
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            M.toast({html: "Invalid Email", classes:"#c62828 red darken-3"})
              return
        }
        if(phonenumber.length!=10)
        {
            M.toast({html: "Enter 10 digit Contact Number", classes:"#c62828 red darken-3"})
              return
        }
        const state={fullname,email,phonenumber,textarea}
        console.log(state)
        Axios.post('https://sheet.best/api/sheets/89643199-b39a-4f9f-bb2a-8b86890e1773',state)
        .then(response => {
          console.log(response);
        })
    }
    return (
        <div className="myCard">
            <div className="card auth-card">
                <h2 className="fame">InternTest</h2>
                    <input type="text" placeholder="* Full Name" 
                        value={fullname} onChange={(e)=>setName(e.target.value)} /> 
                    <input type="email" placeholder="* email" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="number" placeholder="* Mob Number"
                        value={phonenumber} onChange={(e)=>setContact(e.target.value)} />
                    <textArea className="materialize-textarea" placeholder="text Area"
                        value={textarea} onChange={(e)=>setTextArea(e.target.value)} />
                    <button className="#7e57c2 deep-purple lighten-1 btn" type="submit"
                        onClick={()=>{uploadField()}}
                        >Submit</button>
            </div>
        </div>
    )
}

export default Form

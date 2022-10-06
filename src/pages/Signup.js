import React,{useState} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../styles/Signup.css"
function Signup(){
    //States
    const [tel,setTel]=useState("")
    const [Mail,setMail]=useState("")
    const [Name,setName]=useState("")
    const [pass,setPass]=useState("")
    const [Cpass,setCpass]=useState("")
    //Function for Signup Button
    const upload=async ()=>{
       //Left for backend 
    }
    //Function for Reset button
    const reset=()=>{
        setPass("");
        setCpass("")
        setTel("")
        setName("")
        setMail("")
    }
    return <div className="App">
        <img className="signup-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9BZD6iMPDJTb-obK1EgTuB9EIO4sZ6FVZs8US_OhiBmDizEwigp1ruMS9835BvSBTX0&usqp=CAU" alt=""/>

        <form onSubmit={(e)=> e.preventDefault()} id="Signup-form">

            <p ><b id="Signup-p">Signup</b></p>

            <TextField id="filled-basic" label="Email" onChange={(e)=>setMail(e.target.value)} value={Mail} type={"email"} variant="filled" />

            <TextField id="filled-basic" label="Name" onChange={(e)=>setName(e.target.value)} value={Name} type={"text"} variant="filled" className="fields" />

            <TextField id="filled-basic" label="Contact number" onChange={(e)=>setTel(e.target.value)} value={tel} type={"tel"} variant="filled" className="fields" />

            <TextField id="filled-basic" label="PassWord" onChange={(e)=>setPass(e.target.value)} value={pass} type={"text"} variant="filled" className="fields" />

            <TextField id="filled-basic" label="Confirm PassWord" onChange={(e)=>setCpass(e.target.value)} value={Cpass} type={"password"} variant="filled"  className="fields" />
        
            <p>
                <Button  variant="contained" size="medium"  onClick={upload}><b>Signup</b>
                </Button><Button  variant="contained"  onClick={reset}><b>Reset</b></Button>
            </p>
        
    </form></div>
}

export default Signup;
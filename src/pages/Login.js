import React, { useState } from 'react'
import style from "../styles/login.module.css"


function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submit=()=>{
        console.log(email)
        console.log(password)
    }

    return (
        <>

            <div className={style.container}>

                <img src="mobile login.svg" className={style.loginpic} alt="Login" />

                <div className={style.login}>

                    <div className={style.top_head}>Login to your account</div>
                    <div className={style.input_form}>

                        <input type="email" className={style.user_email_password} id="exampleFormControlInput1" onChange={(e) => {

                            setemail(e.target.value)

                        }} placeholder="Enter your user ID" />

                    </div>
                    <div className={style.input_form}>

                        <input type="password" class={style.user_email_password} id="exampleFormControlInput1" onChange={(e) => {

                            setpassword(e.target.value)

                        }} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className={style.submit_btn} onClick={submit} >Login</button>


                </div>


            </div>

        </>
    )
}

export default Login
import React, { useState } from "react";
import axios from 'axios';
import style from "../../styles/login.module.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [valid, setValid] = useState("d-none");

  const submit = () => {
    const info = { email, password };
    const url = "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/login"

    const PostInfo = async() => {
      await axios.post(url, info)
      .then(() => {
        setValid("d-none");
        window.alert("Success");
      })
      .catch((e) => {
        if(e.response.status === 401){
          setValid("d-inline-block")
        }
      });
      
    }
    
    PostInfo();
  };

  return (
    <>
      <div className={style.container}>
        <img src="mobile login.svg" className={style.loginpic} alt="Login" />

        <div className={style.login}>
          <div className={style.top_head}>Login to your account</div>
          <div className={style.input_form}>
            <input
              type="email"
              className={style.user_email_password}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Enter your email_Id"
            />
          </div>
          <div className={style.input_form}>
            <input
              type="password"
              className={style.user_email_password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="Enter your password"
            />
            <div className={`${valid} invalid-feedback`}>Invalid UserName or Password!!!</div>
          </div>
          <button type="submit" className={style.submit_btn} onClick={submit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;

import { useState } from "react";
import axios from 'axios';
import "../../styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkValid, setCheckValid] = useState("");
  const [checkLen, setCheckLen] = useState("d-none");
  const info = { name, email, contactNumber, password, confirmPassword };


  function validateFormData(e){
    
    if(password.length <= 6 || password.length <= 6){
      setCheckLen("d-inline-block");
    }
    else if(password !== confirmPassword){
      setCheckLen("d-none");
      setCheckValid("is-invalid");
    }
    else{
      const url = "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/signup"
      setCheckLen("d-none");
      setCheckValid("is-valid");
      const PostInfo = async() => {
        await axios.post(url, info)
        .then(() => window.location.replace("/login"))
        .catch((e) => console.log(e));
      }
      
      PostInfo();
    }
  }

  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center p-3"
        id="customSection"
      >
        <div className="card card-body px-4 px-lg-5" id="customCard">
          <div className="d-flex justify-content-center pt-2">
            <h2>Create an account</h2>
          </div>
          <hr />
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if(e.target.checkValidity()){
                console.log("...")
                validateFormData();
              }
            }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  pattern="[0-9]{10}"
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter 10 digit number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${checkValid}`}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <div className="invalid-feedback">Password do not match.</div>
                <div className={`${checkLen} invalid-feedback`}>Password should be greater than 6 digits.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${checkValid}`}
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <div className="invalid-feedback">Password do not match.</div>
                <div className={`${checkLen} invalid-feedback`}>Password should be greater than 6 digits.</div>
              </div>
              <div className="d-flex justify-content-center p-3">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  id="customBtn"
                  // onClick={validateFormData}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

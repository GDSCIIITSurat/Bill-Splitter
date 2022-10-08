import { useState } from "react";
import "../styles/Signup.css"

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <section className="d-flex justify-content-center align-items-center p-3" id="customSection">
        <div className="card card-body px-4 px-lg-5" id="customCard">
          <div className="d-flex justify-content-center pt-2">
            <h2>Create an account</h2>
          </div>
          <hr />
          <div>
            <form>
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
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email" className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  type="tel" className="form-control"
                  id="phone"
                  pattern="[0-9]{10}"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10 digit number"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="d-flex justify-content-center p-3">
                <button type="submit" className="btn btn-outline-success" id="customBtn">
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

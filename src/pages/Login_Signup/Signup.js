import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Signup.css";
import PasswordStrengthBar from "react-password-strength-bar";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkValid, setCheckValid] = useState("");
  const [checkCaptcha, setCheckCaptcha] = useState("d-none");
  const [checkLen, setCheckLen] = useState("d-none");
  const [captcha, setCaptcha] = useState("");
  const [Usercaptcha, setUserCaptcha] = useState("");
  const [display, setDisplay] = useState("password");
  const [text, setText] = useState("Show");
  const [loading, setLoading] = useState(false);
  const info = { name, email, contactNumber, password, confirmPassword };

  function PasswordGenerator(ran) {
    const random = (min = 0, max = 1) => {
      return Math.floor(Math.random() * (max + 1 - min) + min);
    };
    const randomSymbol = () => {
      const symbols = "$%@#&!?abcdefghijklmnoXHBCJDHECDHCDSHC123456789";
      return symbols[random(0, symbols.length - 1)];
    };
    let pass = "";
    for (let i = 0; i < ran; i++) {
      pass += randomSymbol();
    }
    return pass;
  }
  const suggest = (e) => {
    e.preventDefault();
    let value = PasswordGenerator(10);
    setPassword(value);
  };
  useEffect(() => {
    let value = PasswordGenerator(6);
    setCaptcha(value);
  }, []);
  const refreshCaptch = (e) => {
    e.preventDefault();
    let value = PasswordGenerator(6);
    setCaptcha(value);
  };

  const topple = (e) => {
    e.preventDefault();
    if (display === "text") {
      setDisplay("password");
      setText("Show");
    } else {
      setDisplay("text");
      setText("Hide");
    }
  };
  function validateFormData(e) {
    setLoading(true);
    if (password.length <= 6 || password.length <= 6) {
      setCheckLen("d-inline-block");
      setLoading(false);
    } else if (password !== confirmPassword) {
      setCheckLen("d-none");
      setCheckValid("is-invalid");
      setLoading(false);
    } else if (Usercaptcha !== captcha) {
      setCheckCaptcha("d-inline-block");
      setLoading(false);
    } else {
      const url =
        "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/signup";
      setCheckLen("d-none");
      setCheckValid("is-valid");
      const PostInfo = async () => {
        await axios
          .post(url, info)
          .then(() => {
            navigate("/login");
            setLoading(false);
          })
          .catch((e) => console.log(e));
      };

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target.checkValidity()) {
                  console.log("...");
                  validateFormData();
                }
              }}
            >
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
              <button id="suggestionButton" onClick={(e) => suggest(e)}>
                suggest Password
              </button>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type={display}
                  className={`form-control ${checkValid}`}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  value={password}
                />
                <button id="suggestionButton" onClick={(e) => topple(e)}>
                  {text}
                </button>
                <PasswordStrengthBar password={password} />
                <div className="invalid-feedback">Password do not match.</div>
                <div className={`${checkLen} invalid-feedback`}>
                  Password should be greater than 6 digits.
                </div>
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
                <div className={`${checkLen} invalid-feedback`}>
                  Password should be greater than 6 digits.
                </div>
              </div>
              <p className="captcha">{captcha}</p>
              <input
                placeholder="Enter above Captcha"
                onChange={(e) => setUserCaptcha(e.target.value)}
              ></input>
              <button
                className="btn btn-outline-success"
                onClick={(e) => refreshCaptch(e)}
              >
                refreshCaptch
              </button>
              <div className={`${checkCaptcha} invalid-feedback`}>
                Cptcha Invalid
              </div>
              <div className="d-flex justify-content-center p-3">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  id="customBtn"
                >
                  {loading ? (
                    <div className="loader">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    "Register"
                  )}
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

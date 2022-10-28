 /***************************************** Validating and posting the data ****************************************/

 function validateFormData(password, confirmPassword, info) {
  var element = document.getElementsByClassName("register-pass");
  
  /********************************** Validating password and confirm password *************************************/


  if (
    password.length <= 6 || confirmPassword.length <= 6 || password !== confirmPassword ) {
    console.log(element);
    for (var i = 0; i < element.length; i++) {
      element[i].classList.add("is-invalid");
    }
  } else {
    const url = "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/signup"; /*Sending data(info) to this url*/
    for (var i = 0; i < element.length; i++) {
      element[i].classList.remove("is-invalid");
      element[i].classList.add("is-valid");
    }


    /*********************** Asyncrhonous function which Posts data and give response accordingly ******************/

    const PostInfo = async (info) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(info);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };
        
        fetch(url, requestOptions)
          .then((res) => {
            console.log(res);
            if(res.status === 403){
              window.alert("User already exists for this emailId. Try Login Instead.");
              window.location.replace("register.html");
            }
            else if(res.status === 201){
              window.alert("Registration successfully completed.");
              window.location.assign("/profile/profile.html")
            }
            else{
              window.alert("error");
            }
          })
          .catch(error => console.log('error', error));
    };

    PostInfo(info);
  }
}

/******************************************* Accessing DOM Elements ************************************************/

document.querySelector("#registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const Name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const contactNumber = document.getElementById("contactNumber").value;


  const info = { name: Name, email, password, confirmPassword, contactNumber }; /* Making an object */

  if (e.target.checkValidity()) {
    console.log("...");
    validateFormData(password, confirmPassword, info);
  }
});

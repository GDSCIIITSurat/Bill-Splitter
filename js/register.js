function validateFormData(password, confirmPassword, info) {
  var element = document.getElementsByClassName("register-pass");
  if (
    password.length <= 6 || confirmPassword.length <= 6 || password !== confirmPassword ) {
    console.log(element);
    for (var i = 0; i < element.length; i++) {
      element[i].classList.add("is-invalid");
    }
  } else {
    const url = "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/signup";
    for (var i = 0; i < element.length; i++) {
      element[i].classList.remove("is-invalid");
      element[i].classList.add("is-valid");
    }

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
          .then(response => response.text())
          .then(() => window.location.replace("login.html"))   //Redirect here
          .catch(error => console.log('error', error));
    };

    PostInfo(info);
  }
}

document.querySelector("#registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const Name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const contactNumber = document.getElementById("contactNumber").value;

  const info = { name: Name, email, password, confirmPassword, contactNumber };

  if (e.target.checkValidity()) {
    console.log("...");
    validateFormData(password, confirmPassword, info);
  }
});
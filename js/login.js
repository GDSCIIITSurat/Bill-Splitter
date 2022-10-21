/*********************** Asyncrhonous function which Posts data and give response accordingly **********************/

const PostInfo = async (info) => {
  document.getElementById("button").disabled = true;
  const url = "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/login"; /*Sending data(info) to this url*/
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(info);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  await fetch(url, requestOptions)
    .then(res => {
      console.log(res);

      if (res.status === 401) {
        window.alert(res.statusText);
        document.getElementById("button").disabled = false;
        document.getElementById("password").value="";

      }
      else if (res.status === 200) {
        window.alert(res.statusText);
      }
      else if (res.status === 400) {
        window.alert(res.statusText);
        document.getElementById("button").disabled = false;
        document.getElementById("password").value="";
      }

    })
    .catch(error => console.log('error', error));

};

/******************************************* Accessing DOM Elements ***********************************************/

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const info = { email: email, password }; /* Making an object */
  PostInfo(info);
});

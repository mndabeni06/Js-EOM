function toggleResetPswd(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle(); // display:block or none
  $("#logreg-forms .form-reset").toggle(); // display:block or none
}

function toggleSignUp(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle(); // display:block or none
  $("#logreg-forms .form-signup").toggle(); // display:block or none
}

$(() => {
  // Login Register Form
  $("#logreg-forms #forgot_pswd").click(toggleResetPswd);
  $("#logreg-forms #cancel_reset").click(toggleResetPswd);
  $("#logreg-forms #btn-signup").click(toggleSignUp);
  $("#logreg-forms #cancel_signup").click(toggleSignUp);
});

// Login Function //

const baseURL = "https://ancient-dawn-92955.herokuapp.com/auth";
const accesstoken = window.localStorage.getItem("jwt-token");

function login() {
  fetch(authentication, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      myStorage = window.localStorage;
      console.log(res["access_token"]);
      myStorage.setItem("jwt-token", res["access_token"]);
    });
}

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

function signin() {
  fetch("https://ancient-dawn-92955.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data["access_token"]);
      mystorage.setItem("jwt-token", data["access_token"]);
      window.location.href = "./products.html";
    });
}

let submit = document.getElementById("submit");
let error = document.getElementsByClassName("error")[0];
let form = document.getElementsByTagName("form")[0];
let emailValidation = /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  if (email == "") {
    error.innerHTML = "Email can not be empty!!!";
    error.classList.add("show");
    setTimeout(hideErrorMsg, 5000);
  }

  if (!emailValidation.test(email)) {
    error.innerHTML = "Email not valid!!!";
    error.classList.add("show");
    setTimeout(hideErrorMsg, 5000);
  }
});

function hideErrorMsg() {
  error.innerHTML = "";
}

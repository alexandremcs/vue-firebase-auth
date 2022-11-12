const x = document.getElementById("login-form")
const y =  document.getElementById("register-form")
const z = document.getElementById("btn")

function showLogin () {
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "110px"
}

function showRegister () {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "0px"
}
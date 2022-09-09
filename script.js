let username = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("userError");
let passwordError = document.getElementById("passwordError");
let flag = 1;
function validateFOrm() {
    if (username.value == '') {

        userError.innerHTML = "user name is empty"
        flag = 0;
    } else if (username.value.length < 3) {
        userError.innerHTML = "User Name require min 3 char"
        flag = 0;
    } else {
        userError.innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        passwordError.innerHTML = "password is empty"
        flag = 0;
    } else {
        passwordError.innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}
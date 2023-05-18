//#region 
const input = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

input.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

function daoTT() {
    var mk = document.getElementById("password");
    mk.type = (mk.type === "password") ? "text" : "password";
}
//#endregion

//#region Kiểm tra Email
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function checkEmail() {
    let Email = document.getElementById("email").value;
    if (emailIsValid(Email)) {
        return true;
    } else {
        alert("Email không đúng định dạng !");
    }
}
//#endregion

function Registry(e) {
    event.preventDefault();
    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;

    let SV = {
        Username: Username,
        Password: Password
    }

    var json = JSON.stringify(SV);
    localStorage.setItem(Username, json);

    if (Username == "" && Password == "") {
        alert("Hãy nhập đủ thông tin !");
    } else if (Username.length > 2 && Password.length > 2 && checkEmail()) {
        alert("Đăng ký thành công !");
        window.location.href = "login.html";
    } else {
        alert("Đăng ký không thành công !");
    }
}

function Login(e) {
    event.preventDefault();
    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;

    var userpass = localStorage.getItem(Username, Password);
    var data = JSON.parse(userpass);

    if (Username == "" && Password == "") {
        alert("Hãy nhập đủ thông tin !");
    } else if (Username == data.Username && Password == data.Password) {
        alert("Đăng nhập thành công !");
        window.location.href = "index.html";
    } else {
        alert("Đăng nhập không thành công !");
    }
}







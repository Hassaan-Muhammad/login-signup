let page = location.href.split("/");
page = page[page.length - 1];


let users = []
let loggedin = []


function getAllUsers() {
    let userstringfy = localStorage.getItem(users)
    let loggedinform = localStorage.getItem(loggedin)
    users = JSON.parse(userstringfy) || [];
    loggedin = JSON.parse(loggedinform) || []
    console.log(users);
    console.log(loggedin);
}
getAllUsers();




function dashboard() {
    if (page === "dashboard.html") {

        let userName = document.getElementById('userName');
        let userEmail = document.getElementById('userEmail');
        let userGender = document.getElementById('userGender');
        let userAge = document.getElementById('userAge');



        userName.innerText = loggedin.user_firstname;
        userEmail.innerText = loggedin.user_email;
        userGender.innerText = loggedin.user_gender;
        userAge.innerText = loggedin.user_Age;
        console.log("loggedin.user_firstname: ", loggedin);
    }
}
dashboard();




function signup() {
    let firstname = document.getElementById('userName')
    let age = document.getElementById('userAge')
    let gender = document.getElementById('userGender')
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');


    let newUser = {
        user_firstname: firstname.value,
        user_Age: age.value,
        user_gender: gender.value,
        user_email: email.value,
        user_password: pass.value,

    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    function move() {
        window.location.href = "./login.html ";
    }

    move();

}




function login() {
    let logemail = document.getElementById("email-login")
    let logpass = document.getElementById("pass-login")

    for (let i = 0; i < length; i++) {
        if (users[i].user_email == logemail.value && users[i].user_password == logpass.value) {
            localStorage.setItem("logged in", JSON.stringify(users[i]))
            window.location.href = './information.html';
            break
        }
        else if (users[i].user_email !== logemail.value && users[i].user_password !== logpass.value) {
        }
    }
}




























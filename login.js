function getAllUsers(){
    let userstringfy= localStorage.getItem(users)
    users= JSON.parse(userstringfy) || [];
    console.log(users);

}

function ReturnSignUp() {
    window.location.href = "./index.html ";
}

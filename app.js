let users=[]

function adduser(){
 
    let newUser= {
        email : document.querySelector("#email").value ,
        password : document.querySelector("#pass").value 
      
    } 

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))
    
    function move() {
        window.location.href = "./login.html ";
    }

    move() ;

}

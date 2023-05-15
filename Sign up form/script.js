const pwd = document.getElementById("error_pwd");
const cpwd = document.getElementById("error_cpwd")
const btn = document.getElementsByClassName("create_account")[0]; 
const error_message = document.getElementById("error_msg");

btn.addEventListener("click", function(){
    validation();
})
function validation(){
    const password = pwd.value;
    const confirm = cpwd.value;
    const enterpwd = document.createElement("p");
    if(password === "" && confirm === ""){
        enterpwd.textContent = " * Please enter password!";
        error_message.appendChild(enterpwd);
        enterpwd.style.color = "red"
        enterpwd.style.fontSize = "12px";
        enterpwd.style.marginLeft = "0px"

    }else if(password === confirm){
        alert("You are logged in!!!");

    
    }else{
        enterpwd.textContent = " * Password do not match!!!";
        error_message.appendChild(enterpwd);
        enterpwd.style.color = "red"
        enterpwd.style.fontSize = "12px";
        enterpwd.style.marginLeft = "0px"
    }

}
let FullName = document.getElementById("FullName");
let FullNameid = document.getElementById("FullNameid");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let Password = document.getElementById("Password");
let confirmpassword = document.getElementById("confirmpassword");



function valid(){
    if (FullName.value == ""){
        FullNameid.innerHTML = "Full Name Required.";
        
        document.getElementById("emailid").innerHTML = "";
        document.getElementById("contactid").innerHTML = "";
        document.getElementById("Passwordid").innerHTML = "";
        document.getElementById("confirmpasswordid").innerHTML = "";
        return false;
    }else if (email.value == ""){
        document.getElementById("emailid").innerHTML = "Enter email."
        document.getElementById("FullNameid").innerHTML = "";

        document.getElementById("contactid").innerHTML = "";
        document.getElementById("Passwordid").innerHTML = "";
        document.getElementById("confirmpasswordid").innerHTML = "";
        return false;
    }else if (contact.value == ""){
        document.getElementById("contactid").innerHTML = "Enter Contact no.";
        document.getElementById("FullNameid").innerHTML = "";
        document.getElementById("emailid").innerHTML = "";

        document.getElementById("Passwordid").innerHTML = "";
        document.getElementById("confirmpasswordid").innerHTML = "";
        return false;
    }
    else if (Password.value == ""){
        document.getElementById("Passwordid").innerHTML = "Enter a password.Password must have at least 6 characters.";
        document.getElementById("FullNameid").innerHTML = "";
        document.getElementById("emailid").innerHTML = "";
        document.getElementById("contactid").innerHTML = "";

        document.getElementById("confirmpasswordid").innerHTML = "";
        return false;

    }else if (confirmpassword.value == "" || confirmpassword.value != Password.value){
        document.getElementById("confirmpasswordid").innerHTML = "Confirm Password";
        document.getElementById("FullNameid").innerHTML = "";
        document.getElementById("emailid").innerHTML = "";
        document.getElementById("contactid").innerHTML = "";
        document.getElementById("Passwordid").innerHTML = "";

        return false;
    }
        

        
    

    
}

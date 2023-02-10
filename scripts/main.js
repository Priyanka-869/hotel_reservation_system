$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");


var emailArray=["spriyanka8989@gmail.com"];
var passwordArray=[btoa("Happiness")];

localStorage.setItem("emailArray",JSON.stringify(emailArray));
localStorage.setItem("passwordArray",JSON.stringify(passwordArray));

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("login");
var regTab = document.getElementById("signup");

function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    /*regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";*/
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    /*loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";*/
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    /*regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";*/

}


function register(){
    event.preventDefault();

    var email = document.getElementById("signEmail").value;
    var password = document.getElementById("signPassword").value;
    var passwordRetype = document.getElementById("signRepeatPassword").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        var emailArr = JSON.parse(localStorage.getItem("emailArray"));
        var passwordArr = JSON.parse(localStorage.getItem("passwordArray"));
        emailArr.push(email);
        passwordArr.push(btoa(password));
        localStorage.setItem("emailArray",JSON.stringify(emailArr));
        localStorage.setItem("passwordArray",JSON.stringify(passwordArr));


        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("signEmail").value ="";
        document.getElementById("signPassword").value="";
        document.getElementById("signRepeatPassword").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
    event.preventDefault();

    var email = document.getElementById("logmail").value;
    var password = document.getElementById("logPassword").value;

    var emailArr = JSON.parse(localStorage.getItem("emailArray"));
    var passwordArr = JSON.parse(localStorage.getItem("passwordArray"));
    
    var i = emailArr.indexOf(email);

    if(i == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(atob(passwordArr[i]) != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");
        sessionStorage.setItem("currentloggedin",emailArr[i]);
        welcomePage();
        document.getElementById("logmail").value ="";
        document.getElementById("logPassword").value="";
        return ;
    }

}
function welcomePage(){
    window.location="index.html";
}
function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}
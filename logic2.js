
document.getElementById("numberInput1").addEventListener("input", function () {
    const input = this.value;
    const regex = /^\d{14}$/;
    const errorMessage = document.querySelector(".error-id");
    if (regex.test(input)) {
        errorMessage.style.display = "none"; 
        this.dataset.valid ="true" ; 
    } else {
        errorMessage.style.display = "block";
        this.dataset.valid ="false" ;  
    }
});

document.getElementById("numberInput2").addEventListener("input", function () {
    const input = this.value;
    const regex = /^.{8,}$/;
    const errorMessage = document.querySelector(".error-password");
    if (regex.test(input)) {
        errorMessage.style.display = "none"; 
        this.dataset.valid ="true" ; 
    } else {
        errorMessage.style.display = "block";
        this.dataset.valid ="false" ;   
    }
});
    
let  startButton = document.querySelector("input[type='submit']");
    let ID = document.getElementById("numberInput1");
    let password = document.getElementById("numberInput1")
startButton.addEventListener("click", function(event) {
    event.preventDefault(); 

    if (ID.dataset.valid ==="true" && password.dataset.valid ==="true"){
        window.location.href = "questionView.html?examStarted=true";

    }else {
        document.querySelector(".error-id").style.display ="block" ;
        document.querySelector(".error-password").style.display ="block" ; 

    }
    
});


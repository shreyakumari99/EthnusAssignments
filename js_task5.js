document.querySelector("button").addEventListener("click", function () {
    var flag=0;
    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(document.querySelector("#name").value==""){
        flag=1;
        document.querySelector("#name").style.borderColor = "red";
        document.querySelector("#name").style.borderWidth = "3px";
        document.querySelector(".name-invalid").innerHTML = "This field is required";
        document.querySelector(".name-invalid").style.color = "red";
    }

    if(!document.querySelector("#email").value.match(validRegex)){
        flag=1;
        // document.querySelector("#email").value="";
        document.querySelector("#email").style.borderColor = "red";
        document.querySelector("#email").style.borderWidth = "3px";
        document.querySelector(".email-invalid").innerHTML = "A valid email address is required";
        document.querySelector(".email-invalid").style.color = "red";
    }

    const isValidUrl = urlString =>{
        var inputElement = document.createElement('input');
        inputElement.type = 'url';
        inputElement.value = urlString;
  
        if (!inputElement.checkValidity()) {
          return false;
        } else {
          return true;
        }
    } 
    if(document.querySelector("#website").value==""){
        flag=1;
        document.querySelector("#website").style.borderColor = "red";
        document.querySelector("#website").style.borderWidth = "3px";
        document.querySelector(".url-invalid").innerHTML = "This field is required";
        document.querySelector(".url-invalid").style.color = "red";
    }
    else if(!isValidUrl(document.querySelector("#website").value)){
        flag=1;
        // document.querySelector("#url").value="";
        document.querySelector("#website").style.borderColor = "red";
        document.querySelector("#website").style.borderWidth = "3px";
        document.querySelector(".url-invalid").innerHTML = "A valid url is required";
        document.querySelector(".url-invalid").style.color = "red";
    }

    if(document.querySelector("#message").value==""){
        flag=1;
        document.querySelector("#message").style.borderColor = "red";
        document.querySelector("#message").style.borderWidth = "3px";
        document.querySelector(".message-invalid").innerHTML = "This field is required";
        document.querySelector(".message-invalid").style.color = "red";
    }

    if(flag==0){
        // return false;
        window.location.href = document.querySelector("#website").value;
    }
    
});
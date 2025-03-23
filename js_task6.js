function check()
{
    var re = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(document.querySelector("#password").value);
}
function login()
{
    var Email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(Email =='')
    {
        alert("please enter user name.");
    }
    else if(password=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(Email))
    {
        alert("Enter valid email id.");
    }
    else if(password.length < 10 || password.length > 11)
    {
        alert("Password min and max length is 10.");
    }
    else
    {
alert('Thank You for Login & You are Redirecting to Campuslife Website');
//    window.location = "https://www.campuslife.co.in";
        }
}
// //Reset Inputfield code.
function Clear()
{
    document.getElementById("email").value=" ";
    document.getElementById("password").value="";
}	
function login1()
{
    var Email = document.getElementById("email").value;
    if(Email==Email){
        alert('Get start')
    }
    else{
        alert('email error')
    }
}
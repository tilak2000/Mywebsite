function dynamic()
{
if(document.getElementById('show').checked)
{
document.getElementById('hour').style.display = "block";
}
else
{
document.getElementById('hour').style.display = "none";
}
function postData(path, name, value){
    document.getElementById("formField").name  = name;
    document.getElementById("formField").value = value;
 
 document.getElementById("form").action = path;
 document.getElementById("form").submit();
}

postData("https://httpbin.org/post ");

return;
}



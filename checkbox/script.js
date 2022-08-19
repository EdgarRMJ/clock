window.onload = function()
{
    
    var myForm = document.getElementById("myForm");
    var submitButton = document.getElementById("myForm").submitButton;
    
    var info = document.getElementById("info");

    
    submitButton.onclick = function()
    {
        var tmpString = "";
        for (var i = 0; i < myForm.courseName.length; i++)
        {
            if(myForm.courseName[i].checked)
            tmpString += myForm.courseName[i].value + " ";
        }
        
        info.innerHTML += tmpString + "<br>";
        
    }

    for(var i = 0; i< myForm.acceptationOfToS.length; i++)
    {
        myForm.acceptationOfToS[i].onclick = function(e)
        {
            submitButton.disabled = this.value === "true";
        }
    }
   
}


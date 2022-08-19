function isNumber(valueToCheck)
{
    return !isNaN(valueToCheck);
}

window.onload = function()
{
    var numberField = document.getElementById("myForm").numberField;
    var textField = document.getElementById("myForm").textField;
    var submitMyFormButton = document.getElementById("myForm").submitMyFormButton;

    var info = document.getElementById("info");
    var i = 0;
    
    numberField.onkeydown = function(e)
    {
        //if(!isNumber(this.value))
        if(!isNumber(String.fromCharCode(e.which)) && e.which !== 8 && e.which !== 110)
        {
            info.innerHTML = "Please, type a number";
            //info.innerHTML = e.which;
            this.style.backgroundColor = "red";
            e.preventDefault();
        }
        else {
            info.innerHTML = "";
            this.style.backgroundColor = "green";
        }
    }

}
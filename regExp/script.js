window.onload = function()
{
    var info = document.getElementById("info");

    var pw = document.getElementById("myForm").pw;

    var test = document.getElementById("myForm").test;

    

    test.onclick= function(e)
    {
        e.preventDefault();
        var pw = document.getElementById("myForm").pw.value;

        var formula = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/;

        var Uper = /(?=.*[A-Z])(?=.*[0-9]).{6,}/;

        var lower = /(?=.*[a-z])(?=.*[0-9]).{6,}/;

        var numChar = /.{6,}/;

        if(!numChar.test(pw))
        {
            info.innerHTML = "The number of characters is lower than 6";
                     
        }
        
        if(!lower.test(pw))
        {
            var tmp = /(?=.*[A-Z])/;
            var onlyLower = /(?=.*[a-z])/;
            if(onlyLower.test(pw))
            {
                info.innerHTML = "Your password only have Lower case character";
            }
           
            else if(Uper.test(pw))
            {
                info.innerHTML = "Your password doesn´t have Lower case character";
            }
        }
        else if(!Uper.test(pw))
        {
            var tmp = /(?=.*[A-Z])/;
            if(tmp.test(pw))
            {
                info.innerHTML = "Your password only have Uper case character";
                
            } 
            else if(!Uper.test(pw))
            {
                info.innerHTML = "Your password doesn´t have Uper case character";
            }
            
        }
        else
        {
            document.getElementById("myForm").submit();
        }
    }
    
    

}
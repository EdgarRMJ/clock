window.onload = function()
{
    var myForm = document.getElementById("myForm");

    var info = document.getElementById("info");

    var videoCourses = myForm.videoCourses;

    var newOption = document.createElement("option");

    newOption.text = "COMPASS";

    videoCourses.add(newOption, 0)

    //videoCourses.selectedIndex = 0;

    videoCourses.onchange = function()
    {
    
        info.innerHTML = this.value;
    }
    
}
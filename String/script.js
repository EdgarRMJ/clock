window.onload = function() 
{
    var info = document.getElementById("info");

    var tmp = "arkaduiz"

    var link = window.location + " ";

    var tmpString = "HTML PHP COMPASS SASS GRUNT.js"

    var tmpArray = tmpString.split(" ");

    tmpString = tmpString.replace("HTML", "HTML 5");

    var newString = tmpArray.join(", ")
    info.innerHTML = newString;

    //link.substring(link.lastIndexOf("/") + 1); 
    //tmp.charAt(0).toLocaleUpperCase() + tmp.substring(1, 4);;
}
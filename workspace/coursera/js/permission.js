
function masterPerm(){
    var masterResponse = prompt("Hi What do you want to play today? \n I have a Color or Number guessing game for you. \n\n Please type in 'number' or 'color' to start.");
    
    if (!masterResponse){masterPerm();}
    
    if(isNaN(masterResponse)) {
        if(masterResponse.toLowerCase() === "number" || masterResponse.toLowerCase() === "num"){permission(); return true;}
        else if(masterResponse.toLowerCase() === "color" || masterResponse.toLowerCase() === "col"){colorPermission(); return true;}
        else {console.log(masterResponse); return false;}
    }
    else {console.log(masterResponse); return false;}
}

document.addEventListener("DOMContentLoaded", masterPerm(), false);
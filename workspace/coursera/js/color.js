
var colors = ["blue", "cyan", "gold", "green", "magenta", "orange", "red", "white", "yellow"],
    targetColor = colors[Math.floor(Math.random() * 9)],
    guess = [],
    bodyColor = document.getElementsByTagName("body")[0];

function colorPermission(){
    var colorPerm = prompt("So you want to play a color guessing game, eh?");
    
    if(!colorPerm){ 
        if (colorPerm == ""){colorPermission()}
        else masterPerm();
        return false;
    }
    if(isNaN(colorPerm)){
        if(colorPerm.toLowerCase() === "yes" || colorPerm.toLowerCase() === "ok" || colorPerm.toLowerCase() === "sure"){
            guessColor();
        }
        else {console.log(colorPerm); return false;}
    }
    else {console.log(colorPerm); return false;}
} 
    
function guessColor(){
    var userColor = prompt("I have one of these colors in my mind: \n\n" + colors + "\n Can you guess what it is?");
    
    while (!userColor){guessColor(); return false;} 
    
    var caseLowered = userColor.toLowerCase();
    guess.push(caseLowered);
    
    if (colors.indexOf(caseLowered) < 0){ alert("Sorry I could not find your input in my color list.\n\n Please pick a color from the list."); guessColor(); return false; }
    
    if (caseLowered == targetColor){
        if(guess.length === 1){alert("Wow, You must be good at this Sailor! You got it in your first try! \n Have a cold beer for this \n You try was: " + guess + "\n\n Thank you for playing. Hope you enjoyed it.")}
        else {alert("Congratulations! Not shabby at all! \n You have successfully guessed the color in " + guess.length + "tries. \n Thank you for playing this game with me.");}
        bodyColor.style.backgroundColor = targetColor;
        var heading = document.createElement("h1");
        heading.innerHTML = "Yeah! " +targetColor+ " is the color baby!";
        heading.style.textAlign = "center";
        bodyColor.appendChild(heading);
        return true;
    }
    
    if(caseLowered > targetColor){alert("Sorry that is incorrect. \n\n Hint: Your color is alphabetically higher than mine. \n\n Try again."); guessColor(); return false;}
    if(caseLowered < targetColor){alert("Sorry that is incorrect. \n\n Hint: Your color is alphabetically lower than mine. \n\n Try again."); guessColor(); return false;}
    
}

// document.addEventListener("DOMContentLoaded", colorPermission(), false);
var layer = document.getElementById("promptLayer"),
    box = document.getElementById("promptDiv");
    
function setPage(){
    layer.style.display = "block";
    box.style.display = "block";
}


var userNums, 
    target,
    guess = [],
    min, max;

function permission(){ 
    var perm = prompt("Wanna play guessing game? Please type: yes, ok or sure.");
    
    if(!perm){ 
        // if (perm == ""){permission()}
       masterPerm();
        return false;
    }
    
    if(isNaN(perm)) {
        if(perm.toLowerCase() === "yes" || perm.toLowerCase() === "ok" || perm.toLowerCase() === "sure"){
            getRange();
        }
        else {console.log(perm); return false;}
    }
    else {console.log(perm); return false;}
}

function getRange(){
    do{userNums = prompt("Select a range upto which you want to guess. Type in a number. Bigger the range, more fun! \n But dont go beyond 5 digits. That's just pushing too much")}
    while(isNaN(userNums) || !userNums)
    
    userRange(Number(userNums), Math.floor(Math.random()) + 1);
}

function userRange(a, b){
    
    if (!a) {getRange();}
    if (b == null || undefined){max = 1}
    if (a == b){alert("You did not provide a range, please input different numbers."); getRange(); return false;}

    max = Math.max(a,b);
    min = Math.min(a,b);
    
    target = Math.floor(Math.random() * max-(min-1)) + min;
    guessprompt(max, min);
}

function guessprompt(mx, mn){
    
    var gs;
    
    do{gs = prompt("Now guess a number that I have in my mind between which is in between " + mx + " and " + mn + ".");}
    while(isNaN(gs))
    
    var roundguess = Math.round(gs);
    if (roundguess > max || roundguess < min){
        alert("Hold on to your horse there Jose. You're running out of bounds!"); 
        guess.push(roundguess); 
        guessprompt(max, min);  
        return false;
    }
    
    processGuess(target, roundguess);
}

function processGuess(t, g){
    
    guess.push(g);
    
    if(t == g) {
        if(guess.length === 1){alert("Wow, You must be good at this Sailor! You got it in your first try! \n Have a cold beer for this \n You try was: " + guess + "\n\n Thank you for playing. Hope you enjoyed it.")}
        else if(guess.length > 1 && guess.length < 5 ){alert("Not bad! Not bad at all! \n You got it within 5 tries. You get a pat on the back for this \n You tries were: " + guess + "\n\n Thank you for playing. Hope you enjoyed it.")}
        else {alert("Congratulations! A little late but You found it! \n You guessed it in " + guess.length +  " tries. \n Your tries were: " + guess + "\n\n Thank you for playing. Hope you enjoyed it.");}
        console.log(guess);
        return true;
    }
    
    
    
    if(t < g) {
        if (g-t > 10) {alert("Yup, why not start way too big, right?"); }
        else if (g-t <= 10 && g-t >= 5) {alert("You're close but higher than my number")}
        else if (g-t > 2 && g-t <= 5) {alert("Almost there but still big! Bit less!")}
        else {alert("Tantalizingly close");}
        guessprompt(max, min);
        }
    
    if(t > g) {
        if (t-g > 10) {alert("Way to pull off a short, Ringo"); }
        else if (t-g <= 10 && t-g >= 5) {alert("You're close but short of my number")}
        else if (t-g > 2 && t-g <= 5) {alert("Almost there but still short! Bit more!")}
        else {alert("Tantalizingly close");}
        guessprompt(max, min);
        }
    
}

// function init(){setPage(); permission();}

// document.addEventListener('DOMContentLoaded', permission , false);
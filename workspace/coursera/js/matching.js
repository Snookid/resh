

/*function foo(){
var min, max = 0;

function displayWindowSize() {
    // var min, max = 0;
        
    min = document.getElementById("leftSide").clientWidth;
    max = document.getElementById("leftSide").clientHeight;
    
    document.getElementById("dynamic").innerHTML = min + "x" + max;

    console.log(min);
    console.log(max);
    
}
return displayWindowSize();
}


window.addEventListener("resize", foo, false);
*/



var numberOfFaces = 5,
    leftSide = document.getElementById("leftSide"), x, y,
    rightSide = document.getElementById("rightSide");var level = 1;
    // var smile = document.createElement('img');
    
function resize(){
    x = document.getElementById("leftSide").clientWidth,
    y = document.getElementById("leftSide").clientHeight;
    
    generateFaces(x, y);
}


function generateFaces(lt, tp){
    
    console.log(tp);
    console.log(lt);
    for(var i=0; i < numberOfFaces; i++){
        var smile = document.createElement('img');
        smile.src = "smile.png";
        smile.style.top = (Math.random() * (tp-50))  +"px";
        smile.style.left = (Math.random() * (lt-50)) + "px";
        leftSide.appendChild(smile);
        console.log((Math.random() * (lt-50)));
    }
    
    
    var hold = leftSide.cloneNode(true);
    hold.removeChild(hold.lastChild);
    
    hold.removeAttribute('id');
    
    rightSide.appendChild(hold);
    
    //this bit is creating a bit of bug so gotta figure it out
   /* while(rightSide.firstElementChild.firstElementChild){
        rightSide.insertBefore(rightSide.firstElementChild.firstElementChild, rightSide.firstElementChild.nextElementSibling);
    }
    rightSide.removeChild(rightSide.firstElementChild);*/
    
    leftSide.addEventListener("click", function nextLevel(event){
        
        event.stopPropagation();
        if(event.target == leftSide.lastChild){
            level += 1;
            alert("Congratulations you're on " +level+ " level.");
            numberOfFaces += 1;
            resize();
        }
        else alert("Game over!\n You reached " +level+ " level.");
            leftSide.removeEventListener("click", nextLevel, false); return;
        },
        false);

}

window.addEventListener("resize", resize, false);
document.addEventListener("DOMContentLoaded", resize, false);   
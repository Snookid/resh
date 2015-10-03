//  Mother Array with Objects
var navbarArray = [];

//  Mother function to make them
function items(name, url){
    this.name = name;
    this.url = url;
    function returnName(){
        return this.name;
    }
    function returnURL(){
        return this.url;
    }
}

//  Populate the navbarArray here
navbarArray.push(new items("Home", "index.html"));
navbarArray.push(new items("Stuffs", ""));
navbarArray.push(new items("Contact", "contact.html"));

//  Populate the Stuffs Submenu here
navbarArray[1].submenu = []; //Declare submenu for Stuffs
navbarArray[1].submenu.push(new items("Blog", "http://snookid.wordpress.com"));
navbarArray[1].submenu.push(new items("Music", "music.html"));
navbarArray[1].submenu.push(new items("Graphics", "graphics.html"));
navbarArray[1].submenu.push(new items("Photos", "photos.html"));
navbarArray[1].submenu.push(new items("Projects", "projects.html"));
navbarArray[1].submenu.push(new items("Videos", "videos.html"));

//  Catch all the names and url from navbarArray
    var names = [];
    var urls = [];
    var submenuStuffNames = [];
    var submenuStuffURLS = [];
    for(var i=0; i<navbarArray.length; i++){
        names.push(navbarArray[i].name);
        urls.push(navbarArray[i].url);
    }

//  Now catch all the submenu items name and url for Stuffs
    for(var i=0; i<navbarArray[1].submenu.length; i++){
        submenuStuffNames.push(navbarArray[1].submenu[i].name);
        submenuStuffURLS.push(navbarArray[1].submenu[i].url);
    }

// Creating new Links
var getA = document.createElement("a");
var getLi = document.createElement("li");
getLi.appendChild(getA);

for(var i=0; i<1; i++){                                                                         //1 for Graphics
        document.getElementById("newNav").querySelector("ul.stuffsLevel").appendChild(getLi);
        
    }


//  GET THE STUFFS! imagine Bubarey Dudley ...Yeah go get the from DOM
var getTopMenu = document.getElementById("newNav").querySelectorAll("ul.topLevel > li > a"); //  TopLevel Menu
var getStuffsMenu = document.getElementById("newNav").querySelectorAll("ul.stuffsLevel > li > a"); //StuffsLevel Menu




//  Now implement it on to the DOM and to the page!
function forTopLevel(){
    for(var i=0; i<getTopMenu.length; i++){
        getTopMenu[i].innerHTML = names[i];
        getTopMenu[i].setAttribute("href", urls[i]);
    }
    
    for(var j=0; j<getStuffsMenu.length; j++){
        getStuffsMenu[j].innerHTML = submenuStuffNames[j];
        getStuffsMenu[j].setAttribute("href", submenuStuffURLS[j]);
    }
}

forTopLevel();


/*console.log(navbarArray[1].submenu);
console.log(getStuffsMenu);*/






// For title

var ico = document.createElement('i');
ico.className = "fa fa-hand-peace-o";
console.log(ico);

var titleText = "Portal de Resh";

document.title = titleText;
/*
var title = document.title;

title = "Passion before Rationality before Conformity";

var i = document.createElement('i');
i.className = "fa fa-hand-peace-0 fa-lg";
document.title.appendChild(i);


var gh = document.getElementsByTagName('title');
gh.prototype.innerHTML = 'Passion before Rationality before Conformity';
console.log(gh);*/
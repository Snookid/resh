// Display Array Elements one at a time

    //Create a div for this
    
    var h = document.createElement('h2');
    var hText = document.createTextNode("Display Array Elements one at a time");
    h.appendChild(hText);
    h.style.textAlign = "center";
    h.style.display = "block";
    
    var h5 = document.createElement('h5');
    h5.innerHTML = "Click the button to see the list of songs titles, artist and file object array of the site";
    h5.style.textAlign ="center";
    h5.style.display = "block";

    var btn = document.createElement('button');
    btn.setAttribute("type", "button");
    btn.setAttribute("onclick", "displayArray()");
    btn.innerHTML  = "Get Array";
    btn.style.display = "block";
    btn.style.margin = "2% auto";
    btn.style.position = "relative";
    
    var p = document.createElement('p');
    var pText = document.createTextNode('');
    p.appendChild(pText);
    p.style.display = "block";
    p.style.textAlign = "center"
    
    var clearDiv = document.createElement('div');
    clearDiv.className = "clearfix";
    
    var div = document.createElement("div");
    div.className = "wrapper arrayWrapper";
    div.style.width = "80%";
    div.style.height = "auto";
    div.style.position = "relative";
    div.style.paddingTop = "2%";
    div.style.paddingBottom = "2%";
    div.style.margin = "5% auto";
    
    //append to wrapper
    div.appendChild(h);
    div.appendChild(h5);
    div.appendChild(btn);
    div.appendChild(p);
    div.appendChild(clearDiv);
    
    console.log(div);
    
    document.getElementsByTagName('article')[0].appendChild(div);
    
    
    //Functions goes here.
    
    
    function displayArray(){
        var i = 0; i<songs.length;
        var t = setInterval(populate, 1000);
        
        function populate(){
            var breaks = document.createElement("br");
            p.innerHTML += songs[i].artist + " - " + songs[i].title +  "<br />";
            i += 1;
        }
        
        setTimeout(stopPopulate, (songs.length+1)*1000);
        console.log(parseInt((songs.length+1)*1000));
        function stopPopulate(){clearInterval(t)}
    }
    
    
    
    
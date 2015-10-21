//  Lets draw some controls first!

      //Previous Button first  
/*      var previous = document.getElementById('previous');
      
      
      (function canPrev(){
      var context = previous.getContext('2d');
      
      //draw the rectangle 
      context.beginPath();
      context.moveTo(45,5);
      context.lineTo(20,27.5);
      context.lineTo(45,45);
      context.closePath();
        
      //draw the line-rectangle    
      context.rect(5, 5, 10, 40);
      
      //fill the color    
      context.fillStyle = '#c01f2c';
      context.fill();


      })();
      
      
      //Play button next
      var play = document.getElementById('play');
      
      (function canPlay(){
        var context = play.getContext('2d');
        
        context.beginPath();
        context.moveTo(17.5, 5);
        context.lineTo(42.5, 25);
        context.lineTo(17.5, 45);
        context.closePath();
        
        context.fillStyle = '#c01f2c';
        context.fill();})();
      
      //Lastly, Next button
      var next = document.getElementById('next');
        (function canNext(){
          var context = next.getContext('2d');
          
          context.beginPath();
          context.moveTo(5,5);
          context.lineTo(27.5,27.5);
          context.lineTo(5,45);
          context.closePath();
        
      //draw the line-rectangle    
      context.rect(35, 5, 10, 40);
      
      //fill the color    
      context.fillStyle = '#c01f2c';
      context.fill();
          
        })();
                
      
      
//Add mouseevent constructors
      function mouseEvents(idName){
        var context = idName.getContext('2d');
        
        idName.addEventListener("mouseover", function(event){
        context.fillStyle = '#f01f2c';
        context.fill();
      }, false);
      
        idName.addEventListener("mouseout", function(event){
        context.fillStyle = '#c01f2c';
        context.fill(); 
      }, false);
      }

//link them to the ids
      mouseEvents(previous);
      mouseEvents(play);
      mouseEvents(next);*/
      
      
      
//////////////////////////////ACTUAL STUFF/////////////////////////////////////////////

// Load the audios
var songs = [];

function populateSongs(artist, title, file, thumb){
  this.artist = artist;
  this.title = title;
  this.file = file;
  this.thumb = thumb;
}

songs.push(new populateSongs("Deftones", "Passenger", "htmls/music/audios/Deftones - Passenger.mp3", "deftones-passenger.jpg"));
songs.push(new populateSongs("Radiohead", "Creep", "htmls/music/audios/Radiohead - Creep.mp3", "radiohead-creep.jpg"));
songs.push(new populateSongs("Radiohead", "House of Cards", "htmls/music/audios/Radiohead - House Of Cards.mp3", "radiohead-house_of_cards.jpg"));
songs.push(new populateSongs("Radiohead", "How to Disappear Completely", "htmls/music/audios/Radiohead - How to Disappear Completely.mp3", "radiohead-how_to_disappear_completely.jpg"));
songs.push(new populateSongs("Radiohead", "The National Anthem", "htmls/music/audios/Radiohead - The National Anthem", "radiohead-national_anthem.jpg"));
songs.push(new populateSongs("Tool", "Parabola", "htmls/music/audios/Tool - Parabola.mp3", "tool-parabola.jpg"));
songs.push(new populateSongs("Tool", "Sober", "htmls/music/audios/Tool - Sober.mp3", "tool-sober.jpg"));
songs.push(new populateSongs("Tool", "Stinkfist", "htmls/music/audios/Tool - Stinkfist.mp3", "tool-stinkfist.jpg"));
songs.push(new populateSongs("Tool", "Vicarious", "htmls/music/audios/Tool - Vicarious.mp3", "tool-vicarious.png"));

// ***************** toTime prototype ************************
String.prototype.toTime = function () {
    var sec_num = parseInt(this, 10), // don't forget the second param
    //var hours   = Math.floor(sec_num / 3600);
        mins = Math.floor(sec_num / 60),
        secs = parseInt(sec_num % 60 );

    //if (hours   < 10) {hours   = "0"+hours;}
    if (mins < 10) {mins = "0"+mins;}
    if (secs < 10) {secs = "0"+secs;}
    return mins+':'+secs;
    
}

Number.prototype.toTime = function () {
    var sec_num = parseInt(this, 10), // don't forget the second param
    //var hours   = Math.floor(sec_num / 3600);
        mins = Math.floor(sec_num / 60),
        secs = Math.floor(sec_num % 60);

    //if (hours   < 10) {hours   = "0"+hours;}
    if (mins < 10) {mins = "0"+mins;}
    if (secs < 10) {secs = "0"+secs;}
    return mins+':'+secs;
    
}
// Initialize the Song Gallery
  //Get the arrays ready
  var thumbs = [],
      artists = [],
      titles = [];
  for (var i=0; i<songs.length; i++){
    thumbs.push(songs[i].thumb);
  }
  for (var i=0; i<songs.length; i++){
    artists.push(songs[i].artist);
  }
  for (var i=0; i<songs.length; i++){
    titles.push(songs[i].title);
  }
  console.log(titles);

// Create the Gallery!
var musicGallery = document.getElementById("audioGallery");

(function makeMusicGallery(){
  for(var i = 0; i<songs.length; i++){
    var spanP = document.createElement("p");
    var spanText = document.createTextNode(songs[i].artist + " - " + songs[i].title);
    var spanEl = document.createElement("span");
    spanP.appendChild(spanText);
    spanEl.appendChild(spanP);
    spanEl.className = "_label";
    
    var images = document.createElement("img");
    images.setAttribute("src", "htmls/music/audios/thmb/" + songs[i].thumb);
    
    var lis = document.createElement("li");
    lis.className = "flexIt";
    lis.appendChild(images);
    lis.appendChild(spanEl);
    
    musicGallery.appendChild(lis);
  }
})();



// Initialize the Audio Bar!
// Get the DOM Elements!
      var audioBar = document.getElementsByClassName("audioBar"),
          playerBtn = document.getElementsByClassName("playerBtn"),
          prev = document.getElementById('prev'),
          play = document.getElementById('play'),
          pause = document.getElementById('pause'),
          pause = document.getElementById('stop'),
          next = document.getElementById('next'),
          seek = document.getElementById("seek"),
          vol = document.getElementById("vol"),
          songInfo = document.getElementById("songInfo").querySelectorAll("p"),
      
          eListener;
      for(var i=0; i<playerBtn.length; i++){ 
          playerBtn[i].addEventListener("click", whichButton, true);
          eListener = playerBtn[i];
      }
      
      var audio = new Audio(), 
          factor = (seek.clientWidth/audio.duration) * parseFloat(audio.currentTime) / (seek.clientWidth/100);
      // audio.currentTime = 0;
          audio.src = function (){songs[0].file};
          vol.value = 5;
      console.log(Audio);
      
      function progress(){
        seek.value = 0;
        seek.value = (seek.clientWidth/audio.duration) * parseFloat(audio.currentTime) / (seek.clientWidth/100);
        songInfo[0].textContent = songs[0].artist + " - " + songs[0].title;
        songInfo[1].textContent = String(audio.currentTime).toTime() + " | " + String(audio.duration).toTime();
        
        if(audio.ended || audio.paused) {play.childNodes[0].className = "fa fa-play fa-2x";}
      }
      
      function volChange(){ vol.value = event.target.value; audio.volume = vol.value/10; }
      
      function seekupdate(){ seek.value = event.target.value; audio.currentTime = seek.value/(seek.clientWidth/audio.duration) * (seek.clientWidth/100) }
      
      audio.addEventListener("timeupdate", progress);
      seek.addEventListener("input", seekupdate);
      vol.addEventListener("input", volChange);
      
      console.log(audio);
      
      function  whichButton(eListener){ 
          var whichID = eListener.target.parentElement.id,
              whichClass = eListener.target.className;
              event.preventDefault();
          
          if(!(audio.paused) && whichID === "stop") {audio.pause(); audio.currentTime = 0;}
            
          if((audio.paused) && whichClass === "fa fa-play fa-2x") {audio.play(); event.target.className = "fa fa-pause fa-2x";}

          if(!(audio.paused) && whichClass === "fa fa-pause fa-2x") {audio.pause(); event.target.className = "fa fa-play fa-2x";}
          
      }
      





  
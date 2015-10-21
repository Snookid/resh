function whichButton(eListener){
          var whichID = eListener.target.parentElement.id;
          
          event.preventDefault();
          switch(whichID){
            case "prev":
              prevIt();
              break;
            case "play":
              playIt();
              break;
            case "stop":
              stopIt();
              break;
            case "next":
              nextIt();
              break;
            default:
            event.preventDefault();    
          }
      }
          
          function audio(src){                                      //constructor for audio for future efficiency
                      var currentSong = new Audio(src);
                      this.src = src;
                      this.play = function(){currentSong.play();};
                      this.pause = function(){currentSong.pause();};
                      this.stop = function(){currentSong.pause(); currentSong.currentTime=0};
                      // return currentSong;
                  }
          var passenger = new audio(songs[0].file); 
            
          console.log(passenger);
          
          
          function playIt(){
            var whichClass = eListener.target.className;
            // var currentSong;
                  passenger.play();
                    
                    if (whichClass === "fa fa-play fa-2x" /*&& passenger.paused*/){
                          event.target.className = "fa fa-pause fa-2x";
                          console.log(whichClass);
                          console.log("playing it");
                          /*passenger.play();
                          stopIt(passenger);*/
                          // console.log(passenger);             //Checking which passenger is being played
                        }
                    else {
                          event.target.className = "fa fa-play fa-2x";
                          // console.log(whichClass);
                          console.log("pausing it");       // << This works great!
                          passenger.pause();              // << But this does not
                        }
                  // return passenger;
            }
            // console.log(passenger);                   //Same passenger as the above one
      
          function stopIt(){
                // passenger.stop();                   //passing Same passenger to stop function but does not do it.
                passenger.pause();
                passenger.currentTime = 0;
                console.log("stopping it");
              
            }
            
          function nextIt(){
              console.log("next one");
            }
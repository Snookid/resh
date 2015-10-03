//  Lets draw some controls first!

      //Previous Button first  
      var previous = document.getElementById('previous');
      
      
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
      mouseEvents(next);
      
      
      
//////////////////////////////ACTUAL STUFF/////////////////////////////////////////////
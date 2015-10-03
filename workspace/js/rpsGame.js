function doMe(form){

            var rawUserChoice = form.uChoice.value;
            var userChoice = rawUserChoice.toLowerCase();
            var errorText = document.getElementById("errorText")
            var result = document.getElementById("resultH");

            if ((userChoice === "") || (userChoice !== ("rock" || "paper" || "scissors"))){
                //alert("Please choose rock paper or scissors");
                form.reset(); 
                form.uChoice.focus();
                errorText.innerHTML = "Please choose between rock, paper or scissors";
                result.innerHTML = "";
                return "Please choose rock paper or scissors";
            } else {
                    console.log("Your Choice: " + userChoice);
                    console.log(typeof userChoice);

                    var computerChoice = Math.random();
                        if (computerChoice < 0.34) {
                                computerChoice = "rock";
                            } else if(computerChoice <= 0.67) {
                                computerChoice = "paper";
                            } else {
                                computerChoice = "scissors";
                            }

                        console.log("Computer: " + computerChoice);
                        form.display.value = computerChoice;
                        errorText.style.display = "none";

            }


            
                
            
            var compare = function (choice1, choice2){
                if(choice1 === choice2){
                    console.log("The result is a tie!");
                    result.innerHTML = "The result is a tie!";
                }
                else if (choice1 === "rock"){
                    if(choice2 === "scissors"){
                        console.log("Rock wins!");
                        result.innerHTML = "Rock wins!";
                    }
                    else {
                        console.log("Paper wins!");
                        result.innerHTML = "Paper wins!";
                    }
                }
                else if(choice1 === "paper"){
                    if(choice2 === "rock"){
                        console.log("Paper wins!");
                        result.innerHTML = "Paper wins!";
                    }
                    else {
                        console.log("Scissors wins!");
                        result.innerHTML = "Scissors wins!";
                    }
                }
                else if(choice1 === "scissors"){
                    if(choice2 === "rock"){
                        console.log("Rock wins!");
                        result.innerHTML = "Rock wins!";
                    }
                    else {
                        console.log("Scissors wins!");
                        result.innerHTML = "Scissors wins!";
                    }
                }
                //else result.innerHTML = "You didn't input Rock, Paper or Scissors";
            };

            compare(userChoice, computerChoice);
        }
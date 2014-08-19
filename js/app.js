$(document).ready(function(){
 
 var firstGuess = true;
 var secretNumber;
 var prevCloseUserGuess = "";
 var feedback = ""; 
 var counter = 0;
 var userGuessNum;
 
 /*--- Display information modal box ---*/
 $(".what").click(function(){
   $(".overlay").fadeIn(1000);
 });

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
   $(".overlay").fadeOut(1000);
 });


 $('#userGuess').on('keydown', function(e){
 	return e.which !== 32;
 });

 $('a.new').click(function(){
 	counter = 0;
 	$('#count').text(counter);
 	$('#guessList').children().remove();
 	$('#feedback').text("Enter your Guess");
 	newGame();
 });

 $('#guessButton').click(function(event){
 	event.preventDefault();
	userGuessNum = $('#userGuess').val();

    
	if( (userGuessNum != "") && (!isNaN(userGuessNum)) && ((userGuessNum >=0) && (userGuessNum <= 100))) {
 		 counter += 1;
	     
	     $('#count').text(counter);
	     checkAnswer();
	}

	else{
		$('#feedback').text("Type a number between 1-100!");
		$('#userGuess').val('');
	}
 });


 function newGame(){
   var firstGuess = true;
   secretNumber = Math.floor(Math.random() * 100 + 1); // generates random # 1-100
   var prevCloseUserGuess = "";
   var feedback = "";

   console.log('secretNumber: ' + secretNumber);
}

 function checkAnswer() {
   console.log('checking answer');

	   $('#guessList').append('<li>' + userGuessNum + '</li>'); // adds number to the guess history.
	   $('#userGuess').val(''); // resets text input

	   
	   if(userGuessNum == secretNumber){
	     feedback = '****YOU WON!!!****';
	   }
	   else if((userGuessNum > secretNumber - 6) && (userGuessNum < secretNumber + 6)){
	     feedback = 'On fire';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     } 
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 10) && (userGuessNum < secretNumber + 11)){
	     feedback = 'Very Hot';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 15) && (userGuessNum < secretNumber + 16)){
	     feedback = 'Hot';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 25) && (userGuessNum < secretNumber + 21)){
	     feedback = 'warm';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 25) && (userGuessNum < secretNumber + 26)){
	     feedback = 'Cold';
	     if(!firstGuess) {
	       secondaryCheck(userGuessNum);
	     }
	     console.log('prevCloseUserGuess: ' + prevCloseUserGuess);
	     console.log('userGuessNum: ' + userGuessNum);
	     prevCloseUserGuess = userGuessNum;
	   }
	   else if((userGuessNum > secretNumber - 30) && (userGuessNum < secretNumber + 35)){
	     feedback = 'Very cold';
	   }
	   else {
	     feedback = 'Freezing Cold';
	   }

	   if(firstGuess) {
	     firstGuess = false;
	   }

	   $('#feedback').text(feedback);
    

    

 }

 function secondaryCheck(currentUserGuess) {
   // Logic for secondary check. 

   var difference = currentUserGuess - prevCloseUserGuess;
   console.log('difference: ' +  difference);



   if((prevCloseUserGuess < secretNumber) && (currentUserGuess > secretNumber)){
   	if((currentUserGuess - secretNumber) < (secretNumber - prevCloseUserGuess)) {
     feedback += " and getting hotter";
   } 

  else if((currentUserGuess - secretNumber) > (secretNumber - prevCloseUserGuess)) {
     feedback += " and getting colder";
   } 
   }

   

   else if ((prevCloseUserGuess > secretNumber) && (currentUserGuess < secretNumber)){
   	if((prevCloseUserGuess - secretNumber) < (secretNumber - currentUserGuess)) {
     feedback += " and getting colder";
   } 

  if((prevCloseUserGuess - secretNumber) > (secretNumber - currentUserGuess)) {
     feedback += " and getting hotter";
   } 
   }

   
   else {


   if(currentUserGuess < secretNumber){
  
   if((difference >=1) && (difference <= 5)) {
     feedback += " and getting hotter";
   } 
   


   else if((difference <= -1) && (difference >= -5)) {
     feedback += " and getting colder";
   } 
}
   



   if(currentUserGuess > secretNumber){
   if((difference <= -1) && (difference >= -5)) {
     feedback += " and getting hotter";
   } 
   

   else if((difference >= 1) && (difference <= 5)) {
     feedback += " and getting colder";
   } 
} 

} 

 } 

 newGame();

});
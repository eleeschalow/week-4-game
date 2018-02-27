$(document).ready(function() {

	var wins = 0; 
	var losses = 0;
	var userScore = 0;
	var randomNumber;   
	var gemOne;
	var gemTwo;
	var gemThree;
	var gemFour; 


function initializeVariables(){
	randomNumber=Math.floor(Math.random()*100+19); 
	$("#STM").html(randomNumber);  

	gemOne=Math.floor(Math.random()*12+1); 
	gemTwo=Math.floor(Math.random()*12+1); 
	gemThree=Math.floor(Math.random()*12+1);
	gemFour=Math.floor(Math.random()*12+1); 
	

	$("#wins").html("Wins:" + wins); 
	$("#losses").html("Losses" + losses); 
	$("#userScore").html(totalscore); 
	 

} } )






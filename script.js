// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// random varable arrays for random numbers, lowercase, uppercase and special characters. 
var randomNum = ['1','2','3','4','5','6','7','8','9','0'];
var randomLCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomUCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomSymbols = ["'","!","@","#","$","%","^","&","*","(",")","_","+","-",'=','[',']',"{","}",";",":",'"',"<",">","?","/",".",",","|","`","~","'" ];

// random Index integer generated a random numbers
function randomIndexInt(max, min){
  if(!max){
    max=min,
    min = 0
  };
  return Math.floor(min*(1- Math.random())+ Math.random()*max)
}
// gives random numbers in a passOptions array for the length passLength
function randomPassOptionsChoice(list){
  return list[randomIndexInt(0, list.length - 1 )];
};

//function that generates a random password for the user
function generatePassword(){
  // 1. Prompt generation 
  // a. prompt questions given to user after clicking the button. Confirmation for Y or N Q's
  var passLength = window.prompt("How many characters?", "(8-128)");
  var specChars = window.confirm("Special characters? (ex. !@#?)", "Y or N");
  var numChars = window.confirm("Numbers?", "Y or N");
  var upperChars = window.confirm("Uppercase characters? (ex. ABC)", "Y or N");
  var lowerChars = window.confirm("Lowercase characters? (ex. abc)", "Y or N ");
 
  // Forces user input of passLength to a number  
  var userPassLength = parseInt(passLength);
 
  // selected confirm prompts are added into
  var passOptions = [];
 
  // 2. Input Validation
  // if user choses a length outside of range or uses a non numeric number for passLength prompt
  if(isNaN(userPassLength)){
    alert("A number was not chosen. Please Try again")
  }else if(userPassLength < 8 || userPassLength > 128){
    alert("Desired Password length cannot be met please choose a number between 8 and 128"); 
  }
  
  // if user selects ok for Chars variables push the function of random selecting variables to the passOptions array
  if(specChars == true){
    passOptions.push(randomSymbols);
    console.log("User has selected Special Characters in their password")
  }
  if(numChars == true){
    passOptions.push(randomNum)
    console.log("User has selected Numbers in their password")
  }
  if(upperChars == true){
    passOptions.push(randomUCase)
    console.log("User has selected Upper Characters in their password")
  }
  if(lowerChars == true){
    passOptions.push(randomLCase)
    console.log("User has selected Lower Characters in their password")
  }
  // if user selects none of the options the default will be lowercase letters
  if(passOptions == 0){
    passOptions.push(randomLCase)
    alert("No parameters were selected random lowercase will be used!")
  }
  //3.Password Generation
  //generated Password to be filled by user chosen passLength
  var generatedPass = " "
  //Loops the random numbers for the length of pass options and then selects the options given in said list in randomList
  for(var i = 0; i< passLength; i++){
    var randomList = randomPassOptionsChoice(passOptions);
    var randomSelChar =randomPassOptionsChoice(randomList);
    generatedPass += randomSelChar
  }
  //4. Display Generated Password
  //returns the generated password to the card in Index
  return generatedPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// GIVEN I need a new, secure password
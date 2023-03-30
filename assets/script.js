// Declaring list of optional password characters 

var generateBtn = document.querySelector("#generate");
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz"
var numberList = "123456789"
var specialCharacterList = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"

// function that creates password based on user selections

function characterSelection(lCase,uCase,numCase,sCase, pLength){

  var passwordSelected = "";
  var passwordMAx = 0;
  
  //  Checking for every value to add a random item for each selected list 

for(var i=0; i < pLength; i++){

  if(lCase && passwordMAx < pLength){

    // charAt selects a value from the string given a random number by the internal/local Math functions
    // passwordMax contains the passwordSelected to the max length stablish by the user

    passwordSelected += lowerCaseList.charAt(Math.floor(Math.random() * lowerCaseList.length));
    passwordMAx += 1
  }

  if(uCase  && passwordMAx < pLength){
    passwordSelected += upperCaseList.charAt(Math.floor(Math.random() * upperCaseList.length));
    passwordMAx += 1
  }

  if(numCase  && passwordMAx < pLength){
    passwordSelected += numberList.charAt(Math.floor(Math.random() * numberList.length));
    passwordMAx += 1
  }
  
  if(sCase  && passwordMAx < pLength){
    passwordSelected += specialCharacterList.charAt(Math.floor(Math.random() * specialCharacterList.length));
    passwordMAx += 1
  }

}
// when no option has been selected

if(passwordSelected == ""){

    window.alert("--No selection made,try again.---");
    
}

  return passwordSelected;
  

} 

// prompts-collect information function 
function generatePassword(){

  var lengthP = prompt(" Enter password desire length, more than 8 less than 128 characters");
  var generatedPassword = "";

  if(lengthP < 8 || lengthP > 128){
    alert("Number is out of range, please try again.");
    return ""
  }else{
    var lowerC = confirm(" Do you want to include Lower case characters? ");
    var upperC = confirm(" Do you want to include Upper case characters? ");
    var numbC = confirm(" Do you want to include Numbers ? ");
    var specialC = confirm(" Do you want to include Special Characters ? ");


    return generatedPassword = characterSelection(lowerC,upperC,numbC,specialC,lengthP);
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password){
    passwordText.value = password;
  }else{
    passwordText.value = "Please, try again."
  }
  
  
}

// Add event listener to generate button to call the function
generateBtn.addEventListener("click", writePassword);

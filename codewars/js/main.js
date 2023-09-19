//Class 32 Codewars

//9-19

//Task
Code as fast as you can! You need to double the integer and return it.

//My answer

function doubleInteger(i) {
    let iTimes2 = i * 2;
    return iTimes2;
  }




//Task

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

//My answer

function validatePIN (pin) {
    if (pin.length === 4 || pin.length === 6){
      return /^\d+$/.test(pin)
    }else{
      return false;
    }
      }
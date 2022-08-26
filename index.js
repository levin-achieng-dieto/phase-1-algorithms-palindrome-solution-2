function isPalindrome(word) {
  // Write your algorithm here
  for(i=0; i<word.length/2; i++){
    const j = word.length -1 -i;
    if(word[i] === word[j]){
      return true
    }
    else{
      return false
    }
  }
}

/* 
  Add your pseudocode here
  create function that takes in a tring. if the 
  forward indexes corresponding with the backward indexes
  are equal, return true. else return false
*/

/*
  Add written explanation of your solution here
  create a function that takes in a string, and returns 
  true if the foward indexes and the corresponding backward
  backward indexes of a tring matches, else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("levin"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dieto"));
}

module.exports = isPalindrome;

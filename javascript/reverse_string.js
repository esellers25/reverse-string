function reverseString(str) {
  let reverse = ""; 
  for (let i = str.length - 1; i > -1; --i){
    reverse = reverse + str[i]
  }

  return reverse
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// initialize a variable called reverse and set it equal to an empty string

// iterate through the input string; 
// set reverse equal to reverse + new character 
// return reverse 
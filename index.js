function hasTargetSum(array, target) {
  
  // Write your algorithm here

  for (item of array){
    let result =target - item
    return array.includes(result)
    
  
  }
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/


/* 
  Add your pseudocode here
iterate through the array
assign a variable to the difference between the target and the item of the array
return true or false if the difference matches an item in the element
*/


/*
  Add written explanation of your solution here
  when an item  of the array is being iterate, the code should calculate the difference between the target and the item. 
  if the difference matches an item in the array then it should return true otherwoisw the code should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

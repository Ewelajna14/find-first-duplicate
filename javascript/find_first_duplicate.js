function findFirstDuplicate(arr) {

    const duplicated = arr.find((item, index) => 
     arr.indexOf(item) !== index)
   if (duplicated){
   return duplicated
   }
   else{
     return -1
   }
   
 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([2, 1, 4, 4, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// if there is duplicate
//Input: [2, 1, 3, 3, 2]
//Output: 3
// [a,b,c,d,e,f]
// if a = b return a
// if a =c return a ...
// check the index of each element 

//Input: [1, 2, 3, 4]
//Output: -1

// And a written explanation of your solution

// main.js

// the following fuctions have been loaded to this main file
const f = require('./functions');

//please look at functions.js and observe the inputs that being asked to use then enter them and check if expected results were given



/*Find a function that takes one of the other functions is output and use that output to enter it as a function is input.

for example lets say we have function s
*
sell(money) =>{return money * 5}
moneyMade(sold) => {return 20 * sold}
****
This function returns some number so I can use that output in such manner

moneyMade(sell(10))

do something like this.

*/


console.log(f.add(50,60))

console.log(f.subtract(40,10))

console.log(f.multiply(20,30))

console.log(f.divide(280,2)) 

let bananna = [10,20,40,60,30,20,25,78,99,35,88,100,120]
console.log(f.sort(bananna))

let minion = ["Vector","Agnes","Nefario","Margo","Edith","Stuart","Bob"]

console.log(f.sortAlphabetically(minion))

let gru = ["hattie","Dave","Tim","Phil","Jerry"]

let Bob = ["haTTie","DAVe","TiM","PHIl","JERry"]
console.log(f.sortByLength(gru))

console.log(f.convertNamesToLengths(gru))

console.log(f.toLowerCaseList(Bob))
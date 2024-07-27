const accountId = 144553
let accountEmail = "max@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;
//accountId = 2

/* 
 Not use var 
 because of issue in block scope and functional scope
*/

accountEmail = "demo@demo.com"
accountCity = "Delhi" 
accountPassword = "1010101010"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

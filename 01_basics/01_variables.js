const accountId = 1212112
let accountEmail = "mani@gm.com"
var accountPassword = "23232"
accountCity ="Meerut"   // variable can be declared but this is not good approch 
let accountState;  // variable declare but it's value is undefined 

// accountId =33333 // not allowed because it is constant

accountEmail ="md@pt.com"
accountPassword = "232l"
accountCity ="Bengaluru"

/*
Prefer not use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword, accountCity, accountState])
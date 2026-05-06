/* 
Datatypes in JavScript :

Primitive datatype:

1. number
2. string
3. boolean
4. undefined
5. null 

*/
/** Primitiva Data types using var Keyword */
//number:
console.log("**** Var Keyword Demo****\n");
var age = 32;
console.log("Age: " + age + " " + "TypeOf_Age: " + typeof(age));
//String
var mem_name = "Buvana";
console.log("MEM_Name: " + mem_name + " " + "TypeOf_mem_name: " + typeof(mem_name));
//Boolean:
var experienced = true;
console.log("Experiend: " + experienced + " " + "TypeOf_Experienced: " + typeof(experienced));

//undefined:
var offers;
console.log("Offer_Details: " + offers + " " + "TypeOf_offers: " + typeof(offers));

//null:
var position = null;
console.log("Position: " + position + " " + "TypeOf_position: " + typeof(position));


/*  Create the following variables using let (not using var) and check their typeOf     
a) firstName  
b) companyName  
c) mobileNumber  
d) isAutomation  
e) hasPlaywright (do not assign)  */
console.log("**** let Keyword Demo****\n");
let firstName = "Buvana";
console.log("First_Name: " + firstName + " " + "Type: "+typeof(firstName));

let companyName = "XXXX";
console.log("Company_Name: " + companyName + " " + "Type: "+typeof(companyName));

let mobileNumber = 8745637234;
console.log("mobileNumber: " + mobileNumber + " " + "Type: "+typeof(mobileNumber));

let isAutomation = true;
console.log("IS Automation: " + isAutomation + " " + "Type: "+typeof(isAutomation));

let hasPlaywright;
console.log("hasPlaywright: " + hasPlaywright + " " + "Type: "+typeof(hasPlaywright));

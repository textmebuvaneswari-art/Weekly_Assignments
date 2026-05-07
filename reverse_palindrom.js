/** Reverse given string and find out palindrome or not */
let reverse = (mystr) =>
{
    let mychar = mystr.split("");
let len = mychar.length;
let revstr = "";

for(let i = len -1; i >= 0; i--)
{
  revstr = revstr + mychar[i];
}

console.log("Mystring is: " + mystr);
console.log("MyRevString is: " + revstr);

//check for palindrome
if(mystr === revstr)
{
  console.log("yes, it is a palindrom");
}
else
{
 console.log("No, It is not a palindrom");

}
}

//calling reverse function
reverse("madam");
reverse("word");
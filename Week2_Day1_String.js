/** Java script with String */
/* Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word.  */

let str = "Hello word";
let str_split = str.split(" ");
console.log(str_split);
let final_word = str_split[str_split.length -1];
console.log("Length of final word is: " + final_word.length);

/* Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length  */

let str1 = " fly me to the moon ";
let str2 = str1.trim();
console.log("String after trim(): " +str2);
let str_split1 = str2.split(" ");
console.log(str_split1);
let final_word1 = str_split1[str_split1.length -1];
console.log("Length of final word is: " + final_word1.length);

/* Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result 
 */

let ex_str1 = "Hello"; //"listen";
let ex_str2 = "Word"; //"silent";
let s1 = ex_str1.replaceAll(" ", "").toLowerCase();
let s2 = ex_str2.replaceAll(" ", "").toLowerCase();

/** Sorting */
let sort1 = s1.split("").sort().join("");


let sort2= s2.split("").sort().join("");
console.log("SOrt1: " + sort1 +" " + "Sort2: " +sort2);
if(sort1 === sort2)
{
    console.log("Both are Anagrams");
}
else 
{
     console.log("Both are not anagrams");
}


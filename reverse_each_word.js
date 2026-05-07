let reverse = (mystr) =>
{
    let mywords = mystr.split(" "); //Each word of the string
    let len = 0;
    let revstr = "";
    let final_array = [];
        for(let idx = 0; idx < mywords.length; idx ++) //taking Each word one by one
        {

        len = mywords[idx].length; //getting length of each word
        for(let i = len -1; i >= 0; i--) //Reversing characters of each word
        {
           revstr = revstr + mywords[idx][i];
        }
        final_array.push(revstr); //Pusing reversed word of string into an array
        revstr = "";

        }
    let final_string = final_array.join("  ");// converting reversed word of array into string 
    console.log("Mystring is: " + mystr);
    console.log("MyRevString is: " + final_string);

}

//calling
reverse("hello word");

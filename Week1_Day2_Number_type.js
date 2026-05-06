/** JavaScript program to find a number is positive, nagative or zero */
function numType(givenNum) {
    /** Find given number is positve or nagative */
    if(givenNum == 0)
    {
        console.log("Given Number " + givenNum + " " + "is Zero");
    }
    else if(givenNum >0)
    {
      console.log("Given Number " + givenNum + " " + "is Positive");
    }
    else if(givenNum < 0)
    {
      console.log("Given Number " + givenNum + " " + "is Negative");
    }
    else{
    
    }
}

numType(2); //Check for positive
    numType(-2); //Check for Negative
    numType(0); //Check for Zero
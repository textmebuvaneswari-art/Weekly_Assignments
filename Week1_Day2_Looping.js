/** Loop Statement */

function printOddNumbers() {
    console.log("Printing Odd numbers between 1 to 25");
        for(let i = 1; i <= 25; i++)
        {   
          
            if(i % 2 != 0)
            {
                console.log(i);
            }
            
        }
    }
    
    /** Calling function */
    printOddNumbers();
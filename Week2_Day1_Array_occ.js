/** Finding Occurrence of the element inside the array */
let myArray = [2,4,5,2,1,2];
const k = 2;
let count = 0;
for(let i = 0; i <myArray.length; i++)
{

    if(k == myArray[i])
    {
        count++;
    }
}
console.log("Occurrence of " + k + " inside array is: " +count );
/** Array intersection */
let resultArr = [];
let intersection = (arr1, arr2)=>{
    resultArr = arr1.slice();
    for(let value of arr1)
    {
        if(!resultArr.includes(value))
        {
            resultArr.push(value);
        }
    }
    for(let value of arr2)
    {
        if(!resultArr.includes(value))
        {
            resultArr.push(value);
        }
    }
    return resultArr;
}
let arr1 = [2 ,4,5,6,7];
let arr2 = [4,5,3,9];
console.log(intersection(arr1,arr2));
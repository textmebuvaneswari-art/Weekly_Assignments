genderType = "female";
function printGender()
{
    let color = "brown";
    if(genderType === "female")
    {
        var age = 30;
        let color = "pink";
        console.log("Color is: " + color);

    }
    console.log("Age is: " + age);
}

//Calling
printGender();
/* Output: PS C:\Playwright_Workspace\Playwrite_Test\tests> node .\Week1_Day2_Scop_under.js
Color is: pink
Age is: 30

PS C:\Playwright_Workspace\Playwrite_Test\tests> node .\Week1_Day2_Scop_under.js
Age is: undefined
 */
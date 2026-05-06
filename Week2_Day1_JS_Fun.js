/** Java script functions */
//task1
let userProfile = (name) => console.log("Hello: " + name);

  userProfile("Buvana"); //calling

  //Task 2
    let double =(value) => 
    {
        console.log("Double of " +value + " " + value*value);    
    }
    double(2); //calling
 //tsk 3
    setTimeout(function () {
        console.log("This message is delayed by 2 seconds");

    }, 3000);

//Task 4

    function getUserData(callback) {
        setTimeout( () => {
            callback();
        },3000);
    }

    getUserData(() => {
        console.log("Call Back Function");
    });
    

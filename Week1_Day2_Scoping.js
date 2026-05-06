    const browserName = "chrome";
    function getBrowserName() {
        if(browserName === "chrome")
        {
            //let browserName = chrome;//Referrence Error
            var browserName = chrome; //Undefined
            
        }
        console.log("BrowserName is: " +browserName);
    }
    
    /** Calling function */
    getBrowserName();

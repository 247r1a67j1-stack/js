// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

// global scopes poulation removal-IIFE

((name)=>{
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`hitesh`);







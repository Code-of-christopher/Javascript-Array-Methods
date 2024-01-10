const divElement = document.getElementById('div');



{
    /* Immediately Invoked Function Expressions (IIFE) */
    const result = (function(a,b){
        return a+b;
    })(2,5);

    //divElement.innerHTML = result;
}



{   
    /* Function within a function */
    function createFunction(){
        function f(a,b){
            return a+b;
        }
        return f;
    }
    
    const g = createFunction();
    //divElement.innerHTML = g(3, 4);
}



{
    /* Function Hoisting - A function can be used before it is initialized */
    function createFunction(){
        return f;
        function f(a,b){
            return a+b;
        }
    }

    const g = createFunction();
    //divElement.innerHTML = g(3, 5);
}



{
    /* Closures - The combination of a function and its Lexical environment */
    function createAdder(a){
        function f(b){
            return a+b;
        }
        return f;
    }

    const g = createAdder(5);
    //divElement.innerHTML = g(5);
}



{
    /* Arrow Functions */
    const f = (a,b) => a + b;
    //divElement.innerHTML = f(9, 8);
}



{
    /* Rest Arguments ( ... ) - Access all the passed arguments as an array */
    function f(...args) {
        return args[0] + args[1];
    }

    //divElement.innerHTML = f(3, 3);
}



{
    /* Higher Order Functions - a function that accepts and/or returns a function */
    function log(inputFunction){
        return function(...args){
            //console.log("Input", args);
            const result = inputFunction(...args);
            //console.log( "Output" ,result);
            return result;
        }
    }

    const g = log((a,b) => a + b);
    g(4,5);
}
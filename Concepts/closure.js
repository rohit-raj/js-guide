/**
 * A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

    The closure has access to the variable in three scopes:

    Variable declared in his own scope
    Variable declared in parent function scope
    Variable declared in the global namespace

    innerFunction is closure which is defined inside outerFunction and has access to all variable 
    which is declared and defined in outerFunction scope. In addition to this function defined inside 
    the function as closure has access to the variable which is declared in global namespace

 */
'use strict';

(function () {
    var globalVar = "abc";

    // Parent self invoking function
    (function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope
    var outerFuncVar = 'x';    
    // Closure self-invoking function
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y";
        console.log(         
        "outerArg = " + outerArg + "\n" +
        "outerFuncVar = " + outerFuncVar + "\n" +
        "innerArg = " + innerArg + "\n" +
        "innerFuncVar = " + innerFuncVar + "\n" +
        "globalVar = " + globalVar);

        outerFuncVar = 'rohit'; //can be set from inside inner function
    // end of scope innerFunction
    })(5); // Pass 5 as parameter
    console.log("outerFuncVar ==> ", outerFuncVar);
    // end of scope outerFunction
    })(7); // Pass 7 as parameter
})();
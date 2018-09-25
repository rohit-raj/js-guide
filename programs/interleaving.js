/**
 * Check whether a given string is an interleaving of two other given strings
 * Given three strings A, B and C. Write a function that checks whether C is an interleaving of A and B.
 * C is said to be interleaving A and B, if it contains all characters of A and B and order of 
 * all characters in individual strings is preserved.
 * geeksforgeeks : https://www.geeksforgeeks.org/check-whether-a-given-string-is-an-interleaving-of-two-other-given-strings/
 */
(function(){
    'use strict';
    function isInterleaved(a, b, c){
        var j = 0;
        var k = 0;

        for(var i=0;i<c.length;i++){
            if(a[j] == c[i]){
                j++;
            }
            else if(b[k] == c[i]){
                k++;
            }
            else
                return false;
        }
      
        if(a[j] || b[k])
            return false;

        return true;
    }

    var A = "AB";
    var B = "CD";
    var C = "ACBG";

    if (isInterleaved(A, B, C) == true)
        console.log("yes");
    else
        console.log("false");
})();
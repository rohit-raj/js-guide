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

    function createArray(length) {
        var arr = new Array(length || 0),
            i = length;
    
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }
    
        return arr;
    }

    function isInterleavedByDP(a, b, c){
        var M = a.length;
        var N = b.length;

        var IL = createArray(M+1,N+1);

        for (var i=0; i <M+1; i++)
            for(var j=0; j<N+1; j++)
                IL[i][j] = false;

        if((M+N) != c.length)
            return false;
        
        for(i=0; i<=M; ++i){
            for(j=0; j<=N; ++j){
                if (i==0 && j==0)
                    IL[i][j] = true;
                else if (i==0 && b[j-1]==c[j-1]){
                    IL[i][j] = IL[i][j-1];
                }
                else if (j==0 && a[i-1]==c[i-1]){
                    IL[i][j] = IL[i-1][j];
                }
                else if(a[i-1]==c[i+j-1] && b[j-1]!=c[i+j-1]){
                    IL[i][j] = IL[i-1][j];
                }
                else if (a[i-1]!=c[i+j-1] && b[j-1]==c[i+j-1]){
                    IL[i][j] = IL[i][j-1];
                }
                else if (a[i-1]==c[i+j-1] && b[j-1]==c[i+j-1]){
                    IL[i][j]=(IL[i-1][j] || IL[i][j-1])
                }
            }
        }
        return IL[M][N];
    }

    var A = "AB";
    var B = "CD";
    var C = "ACBG";

    if(isInterleaved(A, B, C)){
        //This solution is basically used when there are no character repetition
        console.log("Yes");
    } else {
        console.log("No");
    }

    if (isInterleavedByDP("XY" ,"WZ" ,"WZXY"))
    //This solution is basically used when there are character repetitions
        console.log("Yes");
    else
        console.log("No");
})();
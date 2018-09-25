(function(){
    'use strict';
    function fn(n){
        if(n<=1)return 1;
        return n*fn(n-1);
    }
    console.log(fn(5));

    var n=5;
    var res = 1;
    for(x=1;x<=n;x++){
        res*=x;
    }
    console.log(res);

    var obj = {
        fact : function factotial(n){
            if(n<=1)return 1;
            return n*factotial(n-1);
        }
    }
    console.time("dbsave1");
    console.log('new ==> ', obj.fact(40));
    console.timeEnd("dbsave1");
})();
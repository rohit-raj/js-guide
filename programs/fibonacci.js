(function(){
    'use strict';
    function gen(n){
        var lst=[];
        for(x=0;x<n;x++){
            if(x<2){
                lst.push(1);
            } else {
                lst.push(lst[x-1]+lst[x-2]);
            }
        }
        return lst;
    }
    console.log(gen(7));

    function fib(n) {
        if(n<=1) {
            return n;
        }
        return fib(n-1)+fib(n-2);
    }

    console.log(fib(9)); //nth fibonacci number

    //fibonacci series
    var n = 7;
    var i=1;
    for(x=0;x<n;x++){
        console.log(fib(i));
        i++;
    }

    //Dynamic programming
    function fibo(n){
        var f = [];
        f[0] = 1;
        f[1] = 1;
        for(i=2;i < n; i++){
            f[i] = f[i-1] + f[i-2];
        }
        return f[n-1];
    }
    console.log('dp ==> ', fibo(10));

    //space optimised
    function op(n) {
        var x = 1;
        var y = 1;
        var z = 1;
        for(i=2;i<n;i++){
            z = x + y;
            x=y;
            y=z;
        }
       return z;
    }
    console.log(op(10));

    //fastest
    var fss=[];
    function fas(n) {
        if (n == 0)
		    return 0;
        if(n==1 || n==2){
            return (fss[n]=1);
        }
        if(fss[n])
            return fss[n];
        
        var k = (n & 1) ? (n+1)/2 : n/2;

        fss[n] = (n & 1) ? (fas(k) * fas(k) + fas(k-1)*fas(k-1)) : (2*fas(k-1) + fas(k))*fas(k);
        // console.log('fss ==> ', fss);
        return fss[n];
    }

    console.log('fas ==> ', fas(10));
    // console.log(n & 1);

    function fibonacci(number) {
        var sqRootOf5 = Math.sqrt(5);
    
        var Phi = (1+sqRootOf5)/2;
        var phi = (1-sqRootOf5)/2
    
        return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5);
    }
    console.log('binet ==> ', fibonacci(10));

    //big calculation
    var str = '';
    function big(n) {
        var x = 1;
        var y = 1;
        var z = 1;
        for(i=2;i<n;i++){
            z = x + y;
            x=y;
            y=z;
            str = str + ',' + z;
        }
       return z;
    }
    // big(100);
    console.log('str ==> ', big(85));
    console.log('max ==> ', Number.MAX_SAFE_INTEGER);
}());

    document.addEventListener('DOMContentLoaded', foo, false);
    // window.onload = foo;
    
    var barr = [],
        max, min;
    
    function foo(){
        var a = 10, b = 30;
        
        barr.push("asfd");
        min = Math.min(a,b);
        max = Math.max(a,b);
        console.log(barr);
    }
    
    // document.addEventListener('DOMContentLoaded', foo, false);
    // window.onload = foo;
    foo();
    
    console.log(barr);
    console.log(min);
    console.log(max);


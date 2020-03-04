

var k = function (){
    console.log(1+1);
    console.log(1+2);
}

// var i = if(true){console.log(1)}

// var w = while(true){console.log(1)};

var a = [k];
a[0]();

var o = {
    func:k
}
o.func();  //2 3
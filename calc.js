$(document).ready(function(){
    $('#one').click(function(){
        document.calc.display.value +=1;
    });

    $('#two').click(function(){
        document.calc.display.value +=2;
    });

    $('#three').click(function(){
        document.calc.display.value +=3;
    });

    $('#four').click(function(){
        document.calc.display.value +=4;
    });

    $('#five').click(function(){
        document.calc.display.value +=5;
    });

    $('#six').click(function(){
        document.calc.display.value +=6;
    });

    $('#seven').click(function(){
        document.calc.display.value +=7;
    });

    $('#eight').click(function(){
        document.calc.display.value +=8;
    });

    $('#nine').click(function(){
        document.calc.display.value +=9;
    });

    $('#zero').click(function(){
        document.calc.display.value +=0;
    });

    $('#add').click(function(){
        document.calc.display.value +='+';
    });

    $('#sub').click(function(){
        document.calc.display.value +='-';
    });

    $('#multi').click(function(){
        document.calc.display.value +='*';
    });

    $('#divide').click(function(){
        document.calc.display.value +='/';
    });

    $('#dot').click(function(){
        document.calc.display.value +='.';
    });

    $('#equal').click(function () {
        if(display.value=="") {
            alert("Please enter any numbers to calculate!");
        } else {
            document.calc.display.value =
            eval(document.calc.display.value)
        }
    });
    $('#clear').click(function () {
        document.calc.display.value = "";
    });
})
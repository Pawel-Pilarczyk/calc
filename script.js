// creating variables 

let a = 0;
let x = "";
let sighn = "";
var $textArea = $('input');
let $target = $('.bt-div');

//adding event Listener on the main Div

$target.on('click', function(e){

        // ==== Functionality of Numbers ====

        for(let i = 0; i < 10; i++){
            if(e.target.value == i){
                x+= i;
                $textArea.val(x);
            }
        }

        //=======Functionality of '.' button ===========

        if(e.target.value === "."){
            //if string is empty, add on the front
            if(x === ""){
                x+= "0.";
                $textArea.val(x)
            }
            //if there is already a "." dont give another one
            if(!x.includes(".")){
                x+= ".";
                $textArea.val(x);
            }    
        }

        //==========funcionality of 'C' button============ 

        if(e.target.value === "C"){
            x = "";
            a = 0;
            $textArea.val(x);
        }
        // ========== functionality of + button =================

        if(e.target.value === "+"){
            a = parseFloat(x);
            x = ""
            sighn = "+";
            $textArea.val(x);
        }

        // ========== functionality of - button =================
        
        if(e.target.value === "-"){
            a = parseFloat(x);
            x = ""
            sighn = "-";
            $textArea.val(x);
        }

        // ========== functionality of * button =================

        if(e.target.value === "*"){
            a = parseFloat(x);
            x = ""
            sighn = "*";
            $textArea.val(x);  
        }
        // ========== functionality of / button =================

        if(e.target.value === "/"){     
            if(x != ""){ 
                 a = parseFloat(x);
                 x = ""
                 sighn = "/";
                 $textArea.val(x);
            }
          }
         // ========== functionality of sqrt button =================

         if(e.target.value === "sqrt"){
            a = parseFloat(x);
            x = Math.sqrt(a).toString();
            $textArea.val(x);
        }

        // ========== functionality of / button =================

        if(e.target.value === "="){
            switch(sighn) {
                case "+":
                     x = add(a,parseFloat(x)).toString();
                     $textArea.val(x);
                     a = 0;
                     break;
                 case "-":
                     x = minus(a,parseFloat(x)).toString();
                     $textArea.val(x);
                     a = 0;
                     break;
                 case "*":
                     x = multiply(a,parseFloat(x)).toString();
                     $textArea.val(x);
                     a = 0;
                     break;
                 case "/":
                     x = devide(a,parseFloat(x)).toString();
                     $textArea.val(x);
                     a = 0;
                     break;
            }
        }  

        
    });



function add(a,b){
    return a + b;  
}

function minus(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function devide(a,b){
    return a / b;
}


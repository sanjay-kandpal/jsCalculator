const btnPressed = document.getElementsByClassName('btn');
const calContainer = document.getElementById('calculator-container');
const display = document.getElementById('display');
let operator = 0;
let operand1 = null;
let operand2= null;

let numBtn = btnPressed.length;

function btnPress(){
    let value = this.getAttribute('data-value');
    
    switch (value){
        case '+':{           
            operator = '+';
            display.innerText += operator;            
        }
        break;
        case '-':{

            operator = '-';
            display.innerText += operator; 
            console.log('running');

        }
        break;
        case '*':{
           
            operator = '*';
            display.innerText += operator; 

        }
        break;
        case '=':{

            let val = display.textContent;
            operand2 = val.split(operator);          
            console.log(operand2);  
            if(operand2.length === 3){
                display.innerText = eval(`${-operand2[1]} ${operator}  ${operand2[2]}`);
            }else{
                display.innerText = eval(`${operand2[0]} ${operator}  ${operand2[1]}`);
            }
            
 
        }
        break;
        case '%':{
            operator = '%';
            display.innerText += operator; 

        }
        break;
        case 'AC':{
            display.innerHTML = '';
            operand1 = null;
            operand2 = null;
        }
        break;
        case '/':{
            operator = '/';
            display.innerText += operator;   
        }
        break;
        case '+/-':{
            
            display.innerText = -display.textContent   
        }
        break;
        
        default:   display.innerText += value;
        
    }
   
    
}

for(var i = 0; i < numBtn; i++){
    btnPressed[i].addEventListener('click',btnPress,false);
}

var FirstNumber = parseFloat(prompt("Enter First Number"));

var Oper =  prompt("Enter Operator");
var SecondNumber = parseFloat(prompt("Enter Second Number"));

switch (Oper) {
    case '+':
        console.log("The sum is  "  +(FirstNumber + SecondNumber));
        break;

    case '-':
            console.log("The sum is  "  +(FirstNumber - SecondNumber));
            break;

    case '*':
            console.log("The Multiplication is  "  +(FirstNumber * SecondNumber));
            break;

    case '/':
            console.log("The Divison is  "  +(FirstNumber / SecondNumber));
            break;

    case '**':
            console.log("The exponential form is "  +(FirstNumber ** SecondNumber));
            break;
    default:
        console.log("Data is not provided by the Admin");
}


var name = "jadu";

// function that will calculate base on the operator
function Calculation(operator){
   // Get the operand values
    let num1 = document.mycalculator.input_a.value;
    let num2 = document.mycalculator.input_b.value;
    let result = '';

    // Check if both operands are numbers
    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        alert("Please enter valid numbers in both operands.");
        return;
    }

    // Parse operands as floats
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

   switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'X':
            result = num1 * num2;
            break;
        case ':':
            if (num2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator.');
            return;
    }
    // Update the textarea with the operation details
    const output = `Operation: ${num1} ${operator} ${num2} = ${result}`;
    document.mycalculator.output.value = output;

    // Also log the result in the console
    console.log(output);

    
}



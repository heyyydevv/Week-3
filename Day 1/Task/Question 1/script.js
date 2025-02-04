function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

   
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

   
    const isFaulty = Math.random() < 0.1;ce

    let result;
    switch (operation) {
        case 'add':
            result = isFaulty ? num1 - num2 : num1 + num2;
            break;
        case 'subtract':
            result = isFaulty ? num1 + num2 : num1 - num2;
            break;
        case 'multiply':
            result = isFaulty ? num1 / num2 : num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.textContent = "Division by zero is not allowed.";
                return;
            }
            result = isFaulty ? num1 * num2 : num1 / num2;
            break;
        default:
            result = "Unknown operation.";
    }

    resultElement.textContent = `Result: ${result}`;
}

let display; 
let result = ""; 

window.onload = function () {
    display = document.querySelector('input[name="display"]');
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operation');
    const clearButton = document.querySelector('.clear');
    const deleteButton = document.querySelector('.delete');
    const equalButton = document.querySelector('.equal-btn');
    
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(result!==""){
                display.value = '';
                result="";
            }
            display.value += button.value;
        });
    });

    operationButtons.forEach(button => {
    button.addEventListener('click', () => {

        result="";
        if(button.value==="+/-"){
            display.value = -1 * eval(display.value);
        }
        else if(!display.value.endsWith('%') && !display.value.endsWith('*') && !display.value.endsWith('-') && !display.value.endsWith('/') && !display.value.endsWith('+') && !display.value.endsWith('.')){
            display.value += button.value;
        }
        
    });
});

    clearButton.addEventListener('click', () => {
        display.value = '';
    });

    deleteButton.addEventListener('click', () => {
        if(display.value==='Error'){
            display.value='';
        }
        display.value = display.value.slice(0, -1);
    });

    equalButton.addEventListener('click', () => {
        try {
            let expr = display.value.trim();
            if (expr.endsWith('%') && !expr.includes(' ')) {
                let number = parseFloat(expr.slice(0, -1));
                display.value = number / 100;
            }
            display.value = eval(display.value);
            result = display.value;
        } catch {
            display.value = 'Error';
        }
    });
};

function evaluateExpression() {
    try {
        let expr = display.value.trim();
        if (expr.endsWith('%') && !expr.includes(' ')) {
            let number = parseFloat(expr.slice(0, -1));
            display.value = number / 100;
        } else {
            display.value = eval(expr);
        }
        result = display.value;
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    if (!display) return; 

    const key = event.key;

    if (!isNaN(key) || key === '.') {
        if (result !== "") {
            display.value = "";
            result = "";
        }
        display.value += key;
    }

    if (['+', '-', '*', '/'].includes(key)) {
        const lastChar = display.value.slice(-1);
        if (!['+', '-', '*', '/', '.', '%'].includes(lastChar)) {
            display.value += key;
        }
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault(); 
        evaluateExpression();
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        display.value = '';
        result = '';
    }

    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }

    if (key === '%') {
        const val = parseFloat(display.value);
        if (!isNaN(val)) {
            display.value = val / 100;
        }
    }
});
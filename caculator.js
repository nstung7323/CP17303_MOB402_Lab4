exports.cclt = (a, b, option) => {
        switch (option) {
            case '+': {
                return `Tổng của ${a} + ${b} là: ${a + b} \n`;
            }
            case '-': {
                return `Hiệu của ${a} - ${b} là: ${a - b} \n`;
            }
            case '*': {
                return `Tích của ${a} * ${b} là: ${a * b} \n`;
            }
            case '/': {
                return `Thương của ${a} / ${b} là: ${a / b} \n`;
            }
        }
}
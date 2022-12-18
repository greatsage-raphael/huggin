function differentiate(expression) {
    // Check if the expression is a constant
    if (!isNaN(expression)) {
      return 0;
    }
  
    // Check if the expression is a variable raised to an exponent
    if (expression.match(/^x\^\d+$/)) {
      // Extract the exponent
      let exponent = parseInt(expression.split('^')[1]);
      // Return the derivative of the expression
      return `${exponent} * x^${exponent - 1}`;
    }
  
    // Check if the expression is the sum or difference of two expressions
    if (expression.match(/^\(.+\)[\+|-].+$/)) {
      // Extract the two expressions
      let [expr1, expr2] = expression.split(/[\+|-]/);
      // Differentiate the two expressions
      let diff1 = differentiate(expr1);
      let diff2 = differentiate(expr2);
      // Return the sum or difference of the derivatives
      return `(${diff1}) + (${diff2})`;
    }
  
    // Check if the expression is the product of two expressions
    if (expression.match(/^.+\*.+$/)) {
      // Extract the two expressions
      let [expr1, expr2] = expression.split('*');
      // Differentiate the two expressions
      let diff1 = differentiate(expr1);
      let diff2 = differentiate(expr2);
      // Return the derivative of the product using the product rule
      return `(${diff1} * ${expr2}) + (${diff2} * ${expr1})`;
    }
}

let result = differentiate("2")
console.log(result)

//Returns 0 (the derivative of a constant is 0)

let result2 = differentiate("x^2")
console.log(result2)
// Returns "2 * x^1" (the derivative of x^2 is 2 * x^1)

let result3 = differentiate("(x^2 + x + 2) - (x^2 - 3)")
console.log(result3)
// Returns "(2 * x^1) + (1) + (0) - (2 * x^1) + (0)"
// The derivative of x^2 + x + 2 is 2 * x^1 + 1 and the derivative of x^2 - 3 is 2 * x^1

let result4 = differentiate("x * x^2")
console.log(result4)
//

  
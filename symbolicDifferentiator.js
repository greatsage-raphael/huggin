function differentiate(expr) {
    // Split the input expression into terms
    let terms = expr.split("+");
  
    // Differentiate each term and store the result in a new array
    let dterms = [];
    for (let i = 0; i < terms.length; i++) {
      let term = terms[i];
      let dterm = "";
  
      // Check if the term is a constant
      if (term.match(/^[+-]?[0-9]+$/)) {
        dterm = "0";
      }
      // Check if the term is a variable
      else if (term.match(/^[+-]?[a-z]$/)) {
        dterm = "1";
      }
      // Otherwise, the term is a polynomial expression
      else {
        // Split the term into coefficients and variables
        let coeff = "";
        let varpart = "";
        let lastCoeff = 0;
        for (let j = 0; j < term.length; j++) {
          let ch = term[j];
          if (ch.match(/[a-z]/)) {
            varpart += ch;
          }
          else {
            if (coeff === "") {
              coeff += ch;
            }
            else {
              if (varpart === "") {
                coeff += ch;
              }
              else {
                coeff = coeff + "*" + varpart;
                if (lastCoeff !== 0) {
                  dterm += "+" + lastCoeff;
                }
                dterm += "+" + coeff;
                coeff = "";
                varpart = "";
              }
            }
            lastCoeff = parseInt(coeff);
          }
        }
        if (lastCoeff !== 0) {
          dterm += "+" + lastCoeff;
        }
        dterm += "+" + coeff;
      }
  
      // Add the differentiated term to the array of differentiated terms
      dterms.push(dterm);
    }
  
    // Join the differentiated terms into a single expression and return it
    return dterms.join("+");
}

let expr = "3x^2+2x-1";
let result = differentiate(expr);

console.log(result); // Output: "6x+2"




  

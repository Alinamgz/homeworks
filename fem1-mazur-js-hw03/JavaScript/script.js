function calculator(firstNumber, operation, secondNumber){
      let result = 0;

      while(isNaN(firstNumber) || isNaN(secondNumber)){
            alert("This is not a number");
            firstNumber = prompt("Give me number", firstNumber);
            secondNumber = prompt("Give me one more number", secondNumber);
      }

      while(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/"){
            alert("I don't know this operation");
            operation = prompt("Give me some of this: + - * /. Not a:", operation);
      }


      switch (operation) {
            case "+":
                  result = Number(firstNumber) + Number(secondNumber);
                  break;
            case "-":
                  result = firstNumber - secondNumber;
                  break;
            case "*":
                  result = firstNumber * secondNumber;
                  break;
            case "/":
                  result = firstNumber / secondNumber;
                  break;
      }
      return result;
}

console.log(calculator(prompt("Give me first number"),prompt("I can + - * and /. What should I do?"), prompt ("Now give me second number")));



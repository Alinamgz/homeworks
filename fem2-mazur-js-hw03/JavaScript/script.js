function calculator(firstNumber, operation, secondNumber){
      let result ;

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
            default:
                  result = "Something went wrong. Try again";
                  alert(result)
      }
      console.log(result);
}


calculator(prompt("Give me first number"),prompt("I can + - * and /. What should I do?"), prompt ("Now give me second number") );



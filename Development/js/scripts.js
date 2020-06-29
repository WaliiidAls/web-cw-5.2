let dishNumber = prompt("select your dish number");
switch (dishNumber) {
  case "1":
    console.log("you've selected pizza");
    break;
  case "2":
    console.log("you've selected burger");
    break;
  case "3":
    console.log("you've selected sushi");
    break;
  default:
    console.log(
      `you've selected number ${dishNumber} and its clearly isn't a dish number`
    );
    break;
}

let number1 = prompt("first number");
let number2 = prompt("secount number");
let operation = prompt("operation x/+/-/÷");
number1 = parseInt(number1);
number2 = parseInt(number2);
if (number1 && number2) {
  switch (operation) {
    case "+":
      console.log(`result: ${number1 + number2}`);
      break;
    case "-":
      console.log(`result: ${number1 - number2}`);
      break;
    case "/" || "÷":
      console.log(`result: ${number1 / number2}`);
      break;
    case "*" || "x":
      console.log(`result: ${number1 * number2}`);
      break;
    default:
      console.log("wrong operaton");
      break;
  }
} else {
  console.log("wrong input number");
}

let age = parseInt(prompt("enter your age"));
if (age <= 3) {
  console.log("روضه");
} else if (age < 11) {
  console.log("ابتدائي");
} else if (age < 14) {
  console.log("متوسط");
} else if (age < 18) {
  console.log("ثانوي");
} else if (age > 18) {
  console.log("جامعه");
} else {
  console.log("ماذا تفعل بحياتك؟");
}

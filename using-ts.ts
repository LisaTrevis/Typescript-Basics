const button = document.querySelector("button")
// Adding the ! is ts syntax stating that the value will never be null, and as HTMLInputElement (typecasting) states which type of element it will be
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

// : number states what type of data to expect
function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function(){
    // Note that the value property on any element will ALWAYS return a string type, but adding a "+" in front of the parameters changes it to a number.
    console.log(add(+input1.value, +input2.value));
})
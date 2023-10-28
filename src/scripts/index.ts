const numbers = document.getElementsByClassName("num");
const scr = document.getElementById("screen").querySelector("h1");

let currentValue = 0;
let display = "0";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        if (display.length == 7) return;
        currentValue *= 10
        currentValue += parseInt(numbers[i].innerHTML);
        
        display = display === "0" ? numbers[i].innerHTML : display + numbers[i].innerHTML;
        scr.innerHTML = display;
    })
}

document.getElementsByClassName("ca")[0].addEventListener("click", function() {
    display = "0";
    currentValue = 0;
    scr.innerHTML = display;
})

scr.innerHTML = display;


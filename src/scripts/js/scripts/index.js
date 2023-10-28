var numbers = document.getElementsByClassName("num");
var scr = document.getElementById("screen").querySelector("h1");
var currentValue = 0;
var display = "0";
var _loop_1 = function (i) {
    numbers[i].addEventListener("click", function () {
        if (display.length == 7)
            return;
        currentValue *= 10;
        currentValue += parseInt(numbers[i].innerHTML);
        display = display === "0" ? numbers[i].innerHTML : display + numbers[i].innerHTML;
        scr.innerHTML = display;
    });
};
for (var i = 0; i < numbers.length; i++) {
    _loop_1(i);
}
document.getElementsByClassName("ca")[0].addEventListener("click", function () {
    display = "0";
    currentValue = 0;
    scr.innerHTML = display;
});
scr.innerHTML = display;

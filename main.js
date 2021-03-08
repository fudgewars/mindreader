var state = 0;
//first, the HTML elements by ID

const firText = document.getElementById("header-text");
const secText = document.getElementById("next");
const thiText = document.getElementById("p-text");
const fourthText = document.getElementById("previous");
//the buttons
var mainText = "";
var btntext = "";
var smText = "";
var smBtnText = "";

var main = ["I can read your mind!", "Pick a number from 01-99.", "Add both digits together to get a new number.", "Subtract your new number from the original number."];
var button = ["NEXT", "NEXT", "NEXT", "NEXT", "REVEAL", ""];
var small = ["", "When you have your number click next.", "(Ex: 04 is 0 + 4 = 4) Click next to proceed.", "(Ex: 04 - 4 = 0) Click next to proceed", "Find your new number. Note the symbol by the number.", "Your symbol is: "];
var smallButton = ["0", "BACK", "BACK", "BACK", "BACK", "BACK"];

function build() {
    switch (state) {
        case 0:
            button1.style.display = "block";
            button2.style.display = "none";
            mainText = main[state];
            btntext = button[state];
            smText = small[state];
            smallBtnText = smallButton[state];
            break;
        case 1:
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = main[state];
            btntext = button[state];
            smText = small[state];
            smallBtnText = smallButton[state];
            break;
        case 2:
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = main[state];
            btntext = button[state];
            smText = small[state];
            smallBtnText = smallButton[state];
            break;
        case 3:
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = main[state];
            btntext = button[state];
            smText = small[state];
            smallBtnText = smallButton[state];
            break;
        case 4:
            case4();
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = string;
            btntext = button[state];
            smText = small[state];
            smBtnText = smallButton[state];
            break;
        case 5:
            button1.style.display = "none";
            button2.style.display = "block";
            mainText = randomSymbol, newRandomSymbol;
            btntext = button[state];
            smText = small[state] + random9;
            smBtnText = smallButton[state];
            break;
    }
    firstText.innerHTML = mainText;
    secondText.innerHTML = btntext;
    thirdText.innerHTML = smText;
    fourthText.innerHTML = smBtnText;

}
var button1 = document.querySelector("#next");
var button2 = document.querySelector("#previous");

button1.addEventListener('click', nextPage);
button2.addEventListener('click', previousPage);

function nextPage() {
    state++;
    build();
}

function previousPage() {
    state--;
    build();
}

function reset() {
    state = 0;
    build();
}

function init() {
    build();
}
init();

var string = "";
var arr = ['!', '@', '#', '%', '^', '&', '*'];
var randomSymbol = "";
var newRandomSymbol = "";
var n;
var random9 = "";
function case4() {
    string = "";
    random9 = arr[Math.floor(Math.random() * arr.length)];
    for (let n = 0; n <= 99; n++) {
        if (n % 9 === 0) {
            randomSymbol = random9;
        } else {
            randomSymbol = arr[Math.floor(Math.random() * arr.length)];
        }
        string += `${n} - ${randomSymbol} <br>`;

    }
    firstText.innerHTML = string;
}



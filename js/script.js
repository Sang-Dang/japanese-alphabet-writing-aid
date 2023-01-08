const romanji = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "fu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "yu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wo",
    "n"
];

const hiragana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を",
    "ん"
];

const katakana = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ", "ユ", "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ", "ヲ", "ン"
];

const display = document.getElementById("main-display");
const answerDisplay = document.getElementById("answer-display");
const answerContainer = document.getElementById("floater");

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    contains(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                return true;
            }
        }
        return false;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

var buffer = new Queue();
var firstClickFlag = false;

function getNext() {
    if (!firstClickFlag) {
        firstClickFlag = true;
        document.getElementById("start").innerHTML = "NEXT";
        document.getElementById("show").classList.remove("disabled");
    }
    var randomInt;
    do {
        randomInt = Math.floor(Math.random() * romanji.length);
    } while (buffer.contains(randomInt));
    display.innerHTML = romanji[randomInt];
    buffer.dequeue();
    buffer.enqueue(randomInt);
    answerContainer.classList.remove("active");
}

function show() {
    if (firstClickFlag == true) {
        answerDisplay.innerHTML = hiragana[buffer.peek()] + " ・ " + katakana[buffer.peek()];
        answerContainer.classList.toggle("active");
    }
}

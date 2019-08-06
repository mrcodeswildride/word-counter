var wordsInput = document.getElementById("words");
var countDisplay = document.getElementById("count");

wordsInput.focus();
wordsInput.addEventListener("input", count);

function count() {
    var words = wordsInput.value.split(" ");
    var numWords = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i] != "") {
            numWords++;
        }
    }

    countDisplay.innerHTML = numWords + (numWords == 1 ? " word " : " words");
}

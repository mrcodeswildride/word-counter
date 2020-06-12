let words = document.getElementById(`words`)
let countParagraph = document.getElementById(`countParagraph`)

words.addEventListener(`input`, countWords)
words.focus()

function countWords() {
  if (words.value == ``) {
    countParagraph.innerHTML = `Words: 0`
  }
  else {
    let numSpaces = 0

    for (let char of words.value) {
      if (char == ` `) {
        numSpaces = numSpaces + 1
      }
    }

    countParagraph.innerHTML = `Words: ${numSpaces + 1}`
  }
}
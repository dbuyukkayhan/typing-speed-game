const paragraphs = {
    "1": "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.",
    "2": "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
    "3": "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    "4": "Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.",
    "5": "Yes. We're always interested in improving this generator and one of the best ways to do that is to add new and interesting paragraphs to the generator. If you'd like to contribute some random paragraphs, please contact us.",
    "6": "There are usually about 200 words in a paragraph, but this can vary widely. Most paragraphs focus on a single idea that's expressed with an introductory sentence, then followed by two or more supporting sentences about the idea. A short paragraph may not reach even 50 words while long paragraphs can be over 400 words long, but generally speaking they tend to be approximately 200 words in length.",
    "7": "For writers looking for a way to get their creative writing juices flowing, using a random paragraph can be a great way to do this. One of the great benefits of this tool is that nobody knows what is going to appear in the paragraph. This can be leveraged in a few different ways to force the writer to use creativity. For example, the random paragraph can be used as the beginning paragraph of a story that the writer must finish. I can also be used as a paragraph somewhere inside a short story, or for a more difficult creative challenge, it can be used as the ending paragraph. In every case, the writer is forced to use creativity to incorporate the random paragraph into the story.",
    "8": "When it comes to writers' block, often the most difficult part is simply beginning to put words to paper. One way that can often help is to write about something completely different from what you're having the writers' block about. This is where a random paragraph can be quite helpful. By using this tool you can begin to chip away at the writers' block by simply adding to the random paragraph that appears with the knowledge that it's going to be completely different from any writing you've been doing. Then once you begin to put words on the paper, it should be easier to transition into the writing that needs to get done. For those who are looking for a difficult writing challenge, the random paragraph generator can provide that as well. Instead of writing about the entire paragraph, take each sentence in the paragraph and make each of those individual sentences the first or last sentence of each paragraph of a short story. Trying this difficult writing challenge should stretch your creativity to the limit. The best way to use these random paragraphs is to generate a few and see how they can help with whatever project you're currently pursuing. You should be able to figure out quickly if this tool will be beneficial for your project or needs. Often times the best way to see if it's what you've been looking for is to use it and find out for yourself. We're always seeking constructive ideas on how we can improve our random paragraph generator. If you have used this tool and have an idea on how we could improve it for the benefit of everyone, we'd love to hear from you. Take a moment to email us with your ideas so we can consider them for future updates.",
    "9": "Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received. Sure, it had been well-meaning when he said it, but she didn't understand why anyone would want to suggest something that would literally kill you if you actually managed to achieve it. Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received. Sure, it had been well-meaning when he said it, but she didn't understand why anyone would want to suggest something that would literally kill you if you actually managed to achieve it. Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received. Sure, it had been well-meaning when he said it, but she didn't understand why anyone would want to suggest something that would literally kill you if you actually managed to achieve it. Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received. Sure, it had been well-meaning when he said it, but she didn't understand why anyone would want to suggest something that would literally kill you if you actually managed to achieve it."
}
// hi
let words = document.querySelector(".words")
let typedText = document.querySelector("#typed-text")
let restartButton = document.querySelector("#restart-button")
let button = document.querySelector("#restart-button")
let results = document.querySelectorAll(".results")
let result1 = document.querySelector(".result1")
let result2 = document.querySelector(".result2")
let result3 = document.querySelector(".result3")
let loader1 = document.querySelector(".loader1")
let loader2 = document.querySelector(".loader2")
let loader3 = document.querySelector(".loader3")
let wordsArray = shuffle(paragraphs[randomInteger(1,9)].toLowerCase().replaceAll(/[0-9]/g, '').replaceAll(".", "").replaceAll(",", "").replaceAll("'", "").split(" "))
let spans = document.querySelectorAll(".spans")

generateWords()

let counter = 0
let topPosition = -10
let falseWordCounter = 0
let trueWordCounter = 0
let timer = 60

function generateWords() {
    for (let i = 0; i <= wordsArray.length; i++) {
        let word = document.createElement("span")
        word.setAttribute("class", `span${i}`)
        word.innerHTML = wordsArray[i]
        words.appendChild(word)
    }
}

paintNextWord()

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function controlMatch() {
    if (typedText.value == wordsArray[counter] + " ") {
        typedText.value = ''
        paintTrueWords()
        counter++
        trueWordCounter++
        typedText.value = ''
    } else {
        typedText.value = ''
        paintFalseWords()
        counter++
        falseWordCounter++
        typedText.value = ''
    }
}
document.addEventListener("keyup", e => {
    startTimer()
    if (e.keyCode === 32) {
        controlMatch()
        paintNextWord()
        unPaintPrevWord()
        slideWordsToUp()
    }
})

function paintTrueWords() {
    let word = words.childNodes[counter]
    word.style.color = "green"
}

function paintFalseWords() {
    let word = words.childNodes[counter]
    word.style.color = "red"
}

function paintNextWord() {
    let word = words.childNodes[counter]
    word.style.backgroundColor = "lightgrey"
}

function unPaintPrevWord() {
    let word = words.childNodes[counter - 1]
    word.style.backgroundColor = "transparent"
}

function slideWordsToUp() {
    let word = document.querySelector(`.span${counter - 1}`)
    let navBar = document.querySelector(".nav-bar")
    let distance = Math.abs(navBar.getBoundingClientRect().bottom - word.getBoundingClientRect().top)
    console.log(distance) 
    
    if(distance > 109) {
        topPosition -= 70
        words.style.top = `${topPosition}px`
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
  
    return array;
}

function startTimer() {
    startTimer = function() {}
    onTimer()
}

function onTimer() {
    timer--;

    if(timer > 9) {
        button.innerText = "0:" + timer
    } else {
        button.innerText = "0:0" + timer
    }

    if (timer == 0) {
        finishGame()
    }
    else {
      setTimeout(onTimer, 1000);
    }
}

function finishGame() {
    setTimeout(() => {
        loader1.style.display = "flex"
    }, 1000);
    setTimeout(() => {
        loader2.style.display = "flex"
    }, 1000);
    setTimeout(() => {
        loader3.style.display = "flex"
    }, 1000);

    setTimeout(() => {
        loader1.style.display = "none"
        result1.innerHTML = counter
    }, 1500);
    setTimeout(() => {
        loader2.style.display = "none"
        result2.innerHTML = trueWordCounter
    }, 2000);
    setTimeout(() => {
        loader3.style.display = "none"
        result3.innerHTML = falseWordCounter
    }, 2500);

    typedText.style.backgroundColor = "grey"
    restartButton.innerHTML = "Restart"
}

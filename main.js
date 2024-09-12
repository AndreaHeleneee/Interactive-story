import './style.css'
import {newStory} from "./Story"

const headerEl = document.querySelector("header h1")
const textEl = document.querySelector("#text p")
const optionsEl = document.querySelector("#options")
const imgEl = document.querySelector('main img')

let currentState = 15

function startGame () {
  currentState = 15
  showText(currentState)
  showChoices(currentState)
  showImage(currentState)
}

function showText(stateID) {
  headerEl.innerText = newStory[stateID].header
  textEl.innerHTML = newStory[stateID].description
  // console.log(newStory[stateID])
}

function showImage(stateID) {
  imgEl.src = newStory[stateID].imgUrl
}

function showChoices(stateID) {
  optionsEl.innerHTML = ""
  newStory[stateID].choices.forEach((valg => {
    const myButton = document.createElement("button")
    myButton.innerText = valg.text

    myButton.addEventListener("click", () => {
      currentState = valg.nextState

      showText(currentState)
      showChoices(currentState)
      showImage(currentState)
    })
    optionsEl.append(myButton)

    myButton.addEventListener("mouseover", changeColorOver)
    myButton.addEventListener("mouseout", changeColorOut)

    function changeColorOver (bip) {
      bip.target.style.backgroundColor = "#6495ed";
    }
    function changeColorOut (bop) {
      bop.target.style.backgroundColor = "#f0f8ff";
    }

    console.log(myButton)
  }))
}

startGame ()

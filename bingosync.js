// ==UserScript==
// @name         Minimalist BingoSync interface
// @description  Fit everything in a small screen without scoll
// @version      2.0
// @match        https://bingosync.com/room/Kma2AyeYQFSkuF_A7BAg0g*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    if(document.querySelectorAll('.board-container').length < 1) return;

    document.querySelector('body .container').style = 'display: none'
    document.body.style = 'display: grid; grid-template-rows: 30px 535px calc(100vh - 30px - 535px);'

    const header = document.createElement('div')
    document.body.prepend(header)
    header.style = 'display: flex; justify-content: space-between'
    const flipButton = document.querySelector("#color-chooser-collapse").cloneNode(true)

    const chosenColor = document.querySelector('.chosen-color').getAttribute('squarecolor')


    const colorButton = document.createElement('button')
    colorButton.textContent = 'Color'
    colorButton.style = 'padding: 4px 8px;'
    colorButton.className = `btn btn-default ${chosenColor}square`
    document.styleSheets[1].addRule("#color-chooser .btn", "padding: 8px 4px;", 0)
    colorButton.onclick = () => { colorChooser.style.display == 'none' ? colorChooser.style.display = 'grid' : colorChooser.style.display = 'none' }
    header.append(colorButton)

    const colorChooser = document.createElement('div')
    colorChooser.id = 'color-chooser'
    colorChooser.style = 'position: absolute; width: 100vw; grid-template-columns: repeat(10, 1fr);  grid-gap: 4px;  z-index: 10;  background: #3e444c; padding: 12px; display: none;'
    document.querySelectorAll('.color-chooser').forEach((cc) => colorChooser.append(cc))
    colorChooser.onclick = () => { colorChooser.style.display = 'none' }
    header.append(colorChooser)

    const playersPanel = document.querySelector('#players-panel')
    playersPanel.style = "display: flex; justify-content: space-around;"
    header.append(playersPanel)
    document.styleSheets[1].addRule("#players-panel > *", "display: flex;", 0)
    document.styleSheets[1].addRule("#players-panel > * > *", "align-content: center;", 0)


    const newCardBtn = document.querySelector('#new-card')
    newCardBtn.style = 'padding: 4px 8px;'
    header.append(newCardBtn)



    const boardContainer = document.querySelector('.board-container')
    document.styleSheets[1].addRule(".square", "width: 200px !important;", 0)
    document.body.append(boardContainer)

    const chat = document.querySelector('#bingo-chat')
    document.body.append(chat)
})();
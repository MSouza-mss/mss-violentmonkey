// ==UserScript==
// @name        Minimalist BingoSync interface
// @match       https://bingosync.com/room/Kma2AyeYQFSkuF_A7BAg0g*
// @grant       none
// @version     1.0
// ==/UserScript==

document.querySelector('body .container').style = 'display: none'
document.body.style = 'display: grid; grid-template-rows: 30px 535px calc(100vh - 30px - 535px);'

header = document.createElement('div')
document.body.prepend(header)
header.style = 'display: flex; justify-content: space-between'
flipButton = document.querySelector("#color-chooser-collapse").cloneNode(true)

chosenColor = document.querySelector('.chosen-color').getAttribute('squarecolor')


colorButton = document.createElement('button')
colorButton.textContent = 'Color'
colorButton.style = 'padding: 4px 8px;'
colorButton.className = `btn btn-default ${chosenColor}square`
document.styleSheets[1].addRule("#color-chooser .btn", "padding: 8px 4px;", 0)
colorButton.onclick = () => colorChooser.style.display == 'none' ?  colorChooser.style.display = 'grid' :  colorChooser.style.display = 'none'
header.append(colorButton)

colorChooser = document.createElement('div')
colorChooser.id = 'color-chooser'
colorChooser.style = 'position: absolute; width: 100vw; grid-template-columns: repeat(10, 1fr);  grid-gap: 4px;  z-index: 10;  background: #3e444c; padding: 12px; display: none;'
document.querySelectorAll('.color-chooser').forEach((cc) => colorChooser.append(cc))
colorChooser.onclick = () => colorChooser.style.display = 'none'
header.append(colorChooser)

playersPanel = document.querySelector('#players-panel')
playersPanel.style = "display: flex; justify-content: space-around;"
header.append(playersPanel)
document.styleSheets[1].addRule("#players-panel > *", "display: flex;", 0)
document.styleSheets[1].addRule("#players-panel > * > *", "align-content: center;", 0)


newCardBtn = document.querySelector('#new-card')
newCardBtn.style = 'padding: 4px 8px;'
header.append(newCardBtn)



boardContainer = document.querySelector('.board-container')
document.styleSheets[1].addRule(".square", "width: 200px !important;", 0)
document.body.append(boardContainer)

chat = document.querySelector('#bingo-chat')
document.body.append(chat)


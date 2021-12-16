// changing index - button changing indx value. (how can I indicate to the user which line he is controling? maybe changing the placeholder value?)
// controlling line position on canvas - in the txt render a paramter of index will be checked, giving it the relevant position. 
  

// TODO : check if there is a way to show text cursor on the canvas --------------  
function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImagesArray()
    renderGallery()
}

function renderGallery(){
const images = gImgs;
const elImageGallery = document.querySelector('.images-gallery-container')
strHtmls = images.map((img) => {
    let elImg = new Image();
    elImg = `<img class="gallery-image" name="imgId" value=${img.url} onclick="onValueChange(this)" src=${img.url} />`
    return elImg
})
elImageGallery.innerHTML = strHtmls.join('');
}


 
function onValueChange(elInput) {
    updateMemeModel(elInput)
    renderMemeToCanvas(gMeme)
}

function onAddLine() {
    addLine()
    updateTextBox()
}
// function onNumberValueChange(elInput){
    
//     updateMemeModel(elInput)
// }

function onChangeLine(elInput) {
    changeLine(elInput)
    updateTextBox()
}
function onRemoveLine() {
    removeLine ()
    updateTextBox()
    renderMemeToCanvas(gMeme)
}

function updateTextBox(){
    elTextInput = document.querySelector('.text-input')
    elTextInput.value = gMeme.lines[gLineIdx].txt;
}

function renderMemeToCanvas(gMeme) {
    drawImageToCanvas(gMeme)
    // console.log(gMeme)
    // drawTextToCanvas(gMeme)
} // using function from canvas-service to render changes to canvas











// -------------- OLD MODEL ----------------
// function onChooseImage(elImage) {
    //     updateMemeModel(elImage)
    //     console.log("onChooseMeme:", elImage);
    // }

// function oninputText(txt) {
//     drawTextToCanvas(txt)
// }




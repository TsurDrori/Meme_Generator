// todo : another responsive layer
// todo : hamburger
// todo : 2 more bonus features
// todo : make sure all defintions are good.  
// todo:  erase redundant CSS

function init() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    createImagesArray()
    renderGallery()
}

function renderGallery() {
    const images = gImgs;
    const elImageGallery = document.querySelector('.images-gallery-container')
    strHtmls = images.map((img) => {
        let elImg = new Image();
        elImg = `<img class="gallery-image" name="imgId" value=${img.url} onclick="onValueChange(this); toggleScreens()"  src=${img.url} />`
        return elImg
    })
    elImageGallery.innerHTML = strHtmls.join('');
}

function toggleScreens() {
    document.querySelector('.editor-container').classList.toggle('hidden')
    document.querySelector('.gallery-container').classList.toggle('hidden')
    var a = document.querySelector('.tags-search-container').classList.toggle('hidden')
    // document.querySelector('.gallery-nav').classList.toggle('active')
    // document.querySelector('.memes-nav').classList.toggle('active')
    console.log('toggeling: ')

    // const about = document.querySelector('.editor-container')
}

function onFilterGallery(elInput) {
    console.log('onFilterGallery: ', elInput.value)
    const images = gImgs;
    const elImageGallery = document.querySelector('.images-gallery-container')
    let strHtmls;
    switch (elInput.value) {
        case 'angry':
            strHtmls = images.map((img, idx) => {
                let elImg = new Image();
                if (idx + 1 === 1 || idx + 1 === 5 || idx + 1 === 11 || idx + 14 === 0 || idx + 1 === 15 || idx + 1 === 17) {
                    elImg = `<img class="gallery-image" name="imgId" value=${img.url} onclick="onValueChange(this); toggleScreens()"  src=${img.url} />`
                    return elImg
                }
            })
            break;
        case 'happy':
            strHtmls = images.map((img, idx) => {
                let elImg = new Image();
                if (idx + 1 === 2 || idx + 1 === 3 || idx + 1 === 4 || idx + 14 === 6 || idx + 1 === 7 || idx + 1 === 10|| idx + 1 === 13|| idx + 1 === 16) {
                    elImg = `<img class="gallery-image" name="imgId" value=${img.url} onclick="onValueChange(this); toggleScreens()"  src=${img.url} />`
                    return elImg
                }
            })
            break;
        case 'love':
            strHtmls = images.map((img, idx) => {
                let elImg = new Image();
                if (idx + 1 === 2 || idx + 1 === 3 || idx + 1 === 4 || idx + 14 === 11 || idx + 1 === 7 || idx + 1 === 10|| idx + 1 === 13|| idx + 1 === 16) {
                    elImg = `<img class="gallery-image" name="imgId" value=${img.url} onclick="onValueChange(this); toggleScreens()"  src=${img.url} />`
                    return elImg
                }
            })
            break;
            case 'excited':
                strHtmls = images.map((img, idx) => {
                    let elImg = new Image();
                    if (idx + 1 === 5 || idx + 1 === 6 || idx + 1 === 7 || idx + 14 === 8 || idx + 1 === 9 || idx + 1 === 10) {
                        elImg = `<img class="gallery-image" name="imgId" value=${img.url} onclick="onValueChange(this); toggleScreens()"  src=${img.url} />`
                        return elImg
                    }
                })
                break;
        default:
            return;
    }


    elImageGallery.innerHTML = strHtmls.join('');
    console.log('onFilterGallery: ', elInput)
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
    removeLine()
    updateTextBox()
    renderMemeToCanvas(gMeme)
}

function updateTextBox() {
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




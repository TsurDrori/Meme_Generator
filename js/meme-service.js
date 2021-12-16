let gCanvas;
let gCtx;
let gImgs = [];
let gLineIdx = 0;
let gImagesFolderSize = 18; // I don't think there is a way to check directory size without Js.Node

let gLine = {
    txt: 'add text',
    size: 60,
    align: 'center',
    color: 'white',
    stroke: 'black',
    fontFamily: 'Impact',
}

let gMeme = {
    imgId: '',
    lines: [{
        txt: 'add text',
        size: 60,
        align: 'center',
        color: 'white',
        stroke: 'black',
        fontFamily: 'Impact',
    }],
}


function updateMemeModel(elInput) {
    let value;
    if (elInput.getAttribute('value')) {
        value = elInput.getAttribute('value')
        if (elInput.name === 'imgId') {
            gMeme[elInput.name] = value;
            return
        } else if (value === '5' || value === '-5') {
            gMeme.lines[gLineIdx].size += Number(value);
            return
        }
    } else value = elInput.value;
    gMeme.lines[gLineIdx][elInput.name] = value;
}


function addLine() {
    gMeme.lines.push(JSON.parse(JSON.stringify(gLine)))
    gLineIdx++
}

function changeLine(elInput) {
    gLineIdx += Number(elInput.getAttribute('value'))
}

function removeLine() {
    console.log("before: ", gMeme)
    if (gLineIdx >= 1) {
        gMeme.lines.splice(gLineIdx, 1)
        console.log("gMeme.lines.length > 1: ", gMeme)
        gLineIdx--
        return
    } 
    gMeme.lines.splice(gLineIdx, 1, JSON.parse(JSON.stringify(gLine)))
    console.log("gMeme.lines.length <= 1: ", gMeme)
}

function createImagesArray() {
    for (let i = 0; i < gImagesFolderSize; i++) {
        const currUrl = `.\/images\/memes\/${i + 1}.jpg`
        gImgs.push({ id: i + 1, url: currUrl })
    }
    // console.log('create images array: ', gImgs)
}





// ------------- OLD MEME MODEL (SINGLE LINE) --------
// let gMeme = {
//     imgId: '',
//     text: 'add text',
//     size: 60,
//     align: 'center',
//     color: 'white',
//     stroke: 'black',
//     fontFamily: 'Impact'
// }

// function updateMemeModel(elInput) {
//     // debugger
//     let value;
//     if (elInput.getAttribute('value')) {
//         value = elInput.getAttribute('value')
//         if (value === '5' || value === '-5') {
//             gMeme.size += Number(value);
//             return
//         }
//     } else value = elInput.value
//     gMeme[elInput.name] = value;
// }


// console.log(`updateMemeModel: elinput: ${elInput}, elinput.value : ${elInput.value}, elInput.getAttribute('value'): ${elInput.getAttribute('value')} elInput.name: ${elInput.name}, gMeme.lines: ${gMeme.lines} `)



// suggested model for keyword cloud search model
// var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
// add to image object: { keywords: ['funny', 'cat']}






// function saveAndRestoreExample() {
//     gCtx.font = '50px Arial';
//     gCtx.strokeStyle = 'green';
//     gCtx.strokeText('Saving the context', 10, 50);
//     gCtx.save();
//     gCtx.font = '30px Arial';
//     gCtx.strokeStyle = 'black';
//     gCtx.strokeText('Switching to something else', 10, 100);
//     gCtx.restore();
//     gCtx.strokeText('Back to previous context', 10, 150);
// }
// TODO handle multiple lines
function drawImageToCanvas(gMeme){
    var img = new Image();
    img.src = gMeme.imgId;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        for (var i = 0; i < gMeme.lines.length; i++) {
            drawTextToCanvas(gMeme.lines[i])
        }
        
    }
}
// TODO change font to IMPACT
// TODO handle multiple lines
function drawTextToCanvas(Meme) {
    // console.log("Meme.align: ", Meme.align);
    gCtx.font = `${Meme.size}px ${Meme.fontFamily}`;
    // console.log("Meme.size: ", Meme.size);
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = Meme.align;
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = Meme.stroke;
    // console.log("Meme.stroke ", Meme.stroke);
    gCtx.fillStyle = Meme.color;
    // console.log("Meme.color: ", Meme.color);
    gCtx.fillText(Meme.txt, gCanvas.width/2, gCanvas.height/4);
    // console.log("gCtx.fillText: ", gCtx.fillText);
    gCtx.strokeText(Meme.txt, gCanvas.width/2, gCanvas.height/4);

    // console.log("gCtx ", gCtx);
    
}
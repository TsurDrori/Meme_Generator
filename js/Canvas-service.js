// TODO handle multiple lines
function drawImageToCanvas(gMeme) {

    var img = new Image();
    img.src = gMeme.imgId;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        for (var i = 0; i < gMeme.lines.length; i++) {
            var currPosY;
            if (gMeme.lines.length === 1) {
                currPosY = 100;
            } else if (gMeme.lines.length === 2) {
                currPosY = (i) ? 400 : 100;
            } else if (gMeme.lines.length === 3) {
                switch (i) {
                    case 0:
                        currPosY = 80
                        break;
                    case 1:
                        currPosY = 420
                        break;
                    case 2:
                        currPosY = 250
                        break;
                }
            } else if (gMeme.lines.length > 3 && gMeme.lines.length < 7) currPosY = (i + 1) * 60;
            else  currPosY = (i + 1) * 50;
            
        drawTextToCanvas(gMeme.lines[i], currPosY);
    }

}
}
// TODO change font to IMPACT
// TODO handle multiple lines
function drawTextToCanvas(Meme, currPosY) {
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
    gCtx.fillText(Meme.txt, gCanvas.width / 2, currPosY);
    // console.log("gCtx.fillText: ", gCtx.fillText);
    gCtx.strokeText(Meme.txt, gCanvas.width / 2, currPosY);

}
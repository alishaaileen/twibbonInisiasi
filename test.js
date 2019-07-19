function previewFile() {
    var twibbon = new Image();
    var picture = new Image();
    var twibbon = document.getElementById('img1');
    var picture = document.getElementById('img2');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = twibbon.width;
    canvas.height = twibbon.height;
    context.drawImage(picture, 0, 0, canvas.width, canvas.height);
    context.drawImage(twibbon, 0, 0);

    var hasil = canvas.toDataURL("image/png");
    document.getElementById('hasil').src = hasil;
}
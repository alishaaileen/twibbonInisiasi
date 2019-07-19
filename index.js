function previewFile() {

    // ---- Inputing uploaded file to src
    var pic = document.getElementById('img2');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        pic.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        pic.src = "";
    }
    // --------------------------------
    
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
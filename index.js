function el(id) {
  return document.getElementById(id);
} // Get elem by ID

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

var canvas = el("canvas");
var context = canvas.getContext("2d");

function readImage() {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function(e) {
      var img = new Image();
      img.addEventListener("load", function() {
        context.drawImage(img, 0, 0, 1080, 1080);
      });
      img.src = e.target.result;
      var twibbon = new Image();
      twibbon.addEventListener("load", function() {
        context.drawImage(twibbon, 0, 0, 1080, 1080);
      });
      twibbon.src = "http://127.0.0.1:5500/twibbon.png";
    };
    FR.readAsDataURL(this.files[0]);

    var imageData = context.getImageData(0, 0, 1080, 1080);

    var Pic = canvas.toDataURL("image/png");
    console.log(Pic);
  }
}

el("fileUpload").addEventListener("change", readImage, false);

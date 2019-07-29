//opencv 読み込み確認関数
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}

let imgElement = document.getElementById('imgSrc');
let inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', function(evt){
  imgElement.src = URL.createObjectURL(evt.target.files[0]);
}, false);

function grayscale(){
  let mat = cv.imread(imgElement);
  var dst = new cv.Mat();
  cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);
  cv.imshow('canvasOutput', dst);
  mat.delete();
  dst.delete();
}

function test(){
  let src = cv.imread(imgElement);
  let dst = src.clone();

  for (let y = 0; y < src.rows; y++) {
    for (let x = 0; x < src.cols; x++) {
      dst.ucharPtr(y, x)[0] = 255;
      dst.ucharPtr(y, x)[1] = 0;
      dst.ucharPtr(y, x)[2] = 0;
      dst.ucharPtr(y, x)[3] = 255;
    } 
  }
  cv.imshow('canvasOutput', dst);
  src.delete();
  dst.delete();
}
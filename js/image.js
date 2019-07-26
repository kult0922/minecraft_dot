//グレースケール変換関数
const grayFilter = function(src, dst, width, height) {
  for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
          var idx = (j + i * width) * 4;
          var gray = (src[idx] + src[idx + 1] + src[idx + 2]) / 3;
          dst[idx] = gray;
          dst[idx + 1] = gray;
          dst[idx + 2] = gray;
          dst[idx + 3] = src[idx + 3];
      }
  }
};
let upobj = document.getElementById("sampleImage");
upobj.addEventListener("change", function(evt){
  // 画像
  let img = null;
  // キャンバスを取得
  let canvas = document.getElementById("canvas")
  // データ読み込み
  let file = evt.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(file[0]);

  // 読み込み終了の処理
  reader.onload = function(ev){
    img = new Image();
    img.onload = function () {
      // キャンバスに画像をセット
      let context = canvas.getContext("2d");
      let width = img.width;
      let height = img.height;
      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0);

      //filtter
      let srcData = context.getImageData(0, 0, width, height);
      let dstData = context.createImageData(width, height);
      let src = srcData.data;
      let dst = dstData.data;
      grayFilter(src, dst, width, height);
      context.putImageData(dstData, 0, 0);
    
    }
  img.src = reader.result;
  }
}, false);
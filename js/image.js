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
    }
  img.src = reader.result;
  }
}, false);
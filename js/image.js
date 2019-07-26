let upobj = document.getElementById("sampleImage");
upobj.addEventListener("change", function(evt){
  let img = null;
  let canvas = document.getElementById("canvas")
  let file = evt.target.files;
  // file reader の作成
  let reader = new FileReader();
  // 画像形式で読み込み
  reader.readAsDataURL(file[0]);

  // 読み込み終了の処理
  reader.onload = function(ev){
    img = new Image();
    img.onload = function () {
      //キャンバスに画像をセット
      let context = canvas.getContext("2d");
      let width = img.width;
      let height = img.height;
      context.drawImage(img, 0, 0);
    }
  img.src = reader.result;
  }
}, false);
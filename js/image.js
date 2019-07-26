let upobj = document.getElementById("sampleImage");
upobj.addEventListener("change", function(evt){
  let file = evt.target.files;
  // file reader の作成
  let reader = new FileReader();
  // 画像形式で読み込み
  reader.readAsDataURL(file[0]);
  // blabURL取得
  let blobUrl = window.URL.createObjectURL(file[0]);
  // 読み込み終了の処理
  reader.onload = function(ev){
    // 画像エリアに表示する
    let img = document.getElementById("imagePreview");
    img.src = blobUrl;
  }
}, false);
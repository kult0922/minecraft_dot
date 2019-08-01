// 画像読み込み
let imgElement = document.getElementById('imgSrc');
let inputElement = document.getElementById('fileInput');

//opencv 読み込み確認関数
function onOpenCvReady() {
  cv['onRuntimeInitialized'] = async () => {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    console.log("cv ready");
    const block_data = await get_block_data(); 
    block_data_by_id  = block_data['block_data_by_id'];
    block_data_by_name = block_data['block_data_by_name'];
    
  }
}


// 画像がアップロードされたら更新
inputElement.addEventListener('change', function(evt){
  imgElement.src = URL.createObjectURL(evt.target.files[0]);
}, false);


// リサイズ関数 モザイク画像を作成する
function transfer(width, height) {
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  let dsize = new cv.Size(width, height);
  cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
  let idMat = get_id_mat(dst);
  console.log(idMat)
  //let mosaicImg = cv.Mat.zeros(width * 16, height * 16, cv.CV_8UC3); <- これだと上書きされない
  let src_clone = src.clone();
  let mosaicSize = new cv.Size(width * 16, height * 16);
  let mosaicImg = new cv.Mat();
  cv.resize(src_clone, mosaicImg, mosaicSize, 0, 0, cv.INTER_AREA);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let rect = new cv.Rect(x * 16, y * 16, 16, 16);
      roi_img = mosaicImg.roi(rect);
      console.log(block_data_by_id[idMat.ucharPtr(y,x)[0]].data)
      block_data_by_id[idMat.ucharPtr(y, x)[0]].data.copyTo(roi_img);
    }
  }
  //console.log(mosaicImg)
  cv.imshow('canvasOutput', mosaicImg);
  src.delete();
  dst.delete();
}

function get_id_mat(srcImg) {
  idArray = cv.Mat.zeros(srcImg.cols, srcImg.rows, cv.CV_8U)
  for (let y = 0; y < srcImg.cols; y++) {
    for (let x = 0; x < srcImg.rows; x++) {
      let minId = [765, 0];
      block_data_by_id.forEach((block) => {
        let diff = 0;
        diff += Math.abs(srcImg.ucharPtr(y, x)[0] - block.mean[0]);
        diff += Math.abs(srcImg.ucharPtr(y, x)[1] - block.mean[1]);
        diff += Math.abs(srcImg.ucharPtr(y, x)[2] - block.mean[2]);

        if (diff < minId[0]) {
          minId[0] = diff;
          minId[1] = block.id
        }
      });
      idArray.ucharPtr(y, x)[0] = minId[1]
      //console.log(minId[1])
    }
  }
  return idArray
}

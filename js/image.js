// global
let blockDataById;

// 画像読み込み
const imgElement = document.getElementById('imgSrc');
const inputElement = document.getElementById('fileInput');

// 画像がアップロードされたら更新
inputElement.addEventListener('change', (evt) => {
  imgElement.src = URL.createObjectURL(evt.target.files[0]);
}, false);

function getIdMat(srcImg) {
  const idArray = cv.Mat.zeros(srcImg.rows, srcImg.cols, cv.CV_8U);
  cv.cvtColor(srcImg, srcImg, cv.COLOR_BGR2Lab, 0);
  for (let y = 0; y < srcImg.rows; y += 1) {
    for (let x = 0; x < srcImg.cols; x += 1) {
      const minId = [1000000, 0];
      blockDataById.forEach((block) => {
        let diff = 0;
        diff += ((srcImg.ucharPtr(y, x)[0] - block.mean[0]) * 100 / 255) ** 2;
        diff += (srcImg.ucharPtr(y, x)[1] - block.mean[1]) ** 2;
        diff += (srcImg.ucharPtr(y, x)[2] - block.mean[2]) ** 2;

        if (diff < minId[0]) {
          minId[0] = diff;
          minId[1] = block.id;
        }
      });
      [, idArray.ucharPtr(y, x)[0]] = minId;
      // ブロック数をカウントする
      blockDataById[minId[1]].number += 1;
    }
  }
  return idArray;
}

/**
 * リサイズ関数 モザイク画像を作成する
 * @param {number} hb 横のブロック数
 */
function transfer(hb) { // eslint-disable-line no-unused-vars
  const src = cv.imread(imgElement);
  const dst = new cv.Mat();

  const scale = hb / src.cols;
  const vb = parseInt(src.rows * scale, 10); // 縦のブロック数

  cv.resize(src, dst, new cv.Size(hb, vb), 0, 0, cv.INTER_AREA);
  cv.imshow('canvasMosaic', dst);

  const idMat = getIdMat(dst);
  const srcClone = src.clone();
  const mosaicSize = new cv.Size(hb * 16, vb * 16);
  const mosaicImg = new cv.Mat();
  cv.resize(srcClone, mosaicImg, mosaicSize, 0, 0, cv.INTER_AREA);
  for (let y = 0; y < vb; y += 1) {
    for (let x = 0; x < hb; x += 1) {
      const rect = new cv.Rect(x * 16, y * 16, 16, 16);
      const roi = mosaicImg.roi(rect);
      blockDataById[idMat.ucharPtr(y, x)[0]].data.copyTo(roi);
    }
  }
  cv.imshow('canvasOutput', mosaicImg);
  src.delete();
  dst.delete();

  // result
  createTable(blockDataById, 'table'); // eslint-disable-line no-undef
}

// opencv 読み込み確認関数
function onOpenCvReady() { // eslint-disable-line no-unused-vars
  cv.onRuntimeInitialized = async () => {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    console.log('cv ready');
    const blockData = await getBlockData();
    blockDataById = blockData.blockDataById; // eslint-disable-line prefer-destructuring
  };
}

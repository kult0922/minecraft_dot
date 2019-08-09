// global
let blockDataAll;

// 画像読み込み
const imgElement = document.getElementById('imgSrc');
const inputElement = document.getElementById('fileInput');

// 画像がアップロードされたら更新
inputElement.addEventListener('change', (evt) => {
  imgElement.src = URL.createObjectURL(evt.target.files[0]);
}, false);

// フィルターをかける関数
function filteringBlockData(flag) {
  let blockDataCustom;
  blockDataCustom = blockDataAll.filter(value => value.name.indexOf('glass'));
  if (flag === 'glass') {
    blockDataCustom = blockDataAll.filter(value => !value.name.indexOf('glass'));
  }
  if (flag === 'stone') {
    blockDataCustom = blockDataAll.filter(value => !value.name.indexOf('stone'));
  }
  if (flag === 'wood') {
    blockDataCustom = blockDataAll.filter(value => !value.name.indexOf('log') || !value.name.indexOf('planks'));
  }
  if (flag === 'wool') {
    blockDataCustom = blockDataAll.filter(value => !value.name.indexOf('wool'));
  }
  if (flag === 'survival') {
    blockDataCustom = blockDataAll.filter(value => !value.name.indexOf('block'));
  }

  return blockDataCustom;
}

function getIdMat(srcImg, data) {
  const idArray = cv.Mat.zeros(srcImg.rows, srcImg.cols, cv.CV_8U);
  cv.cvtColor(srcImg, srcImg, cv.COLOR_BGR2Lab, 0);
  for (let y = 0; y < srcImg.rows; y += 1) {
    for (let x = 0; x < srcImg.cols; x += 1) {
      const minId = [1000000, 0];
      data.forEach((block, id) => {
        let diff = 0;
        diff += ((srcImg.ucharPtr(y, x)[0] - block.mean[0]) * 100 / 255) ** 2;
        diff += (srcImg.ucharPtr(y, x)[1] - block.mean[1]) ** 2;
        diff += (srcImg.ucharPtr(y, x)[2] - block.mean[2]) ** 2;

        if (diff < minId[0]) {
          minId[0] = diff;
          minId[1] = id;
        }
      });
      [, idArray.ucharPtr(y, x)[0]] = minId;
      // ブロック数をカウントする
      data[minId[1]].number += 1; // eslint-disable-line no-param-reassign
    }
  }
  return idArray;
}

/**
 * リサイズ関数 モザイク画像を作成する
 * @param {number} hb 横のブロック数
 */
function transfer() { // eslint-disable-line no-unused-vars
  const blockType = document.getElementById('blockType').value;
  const blockDataCustom = filteringBlockData(blockType);
  const src = cv.imread(imgElement);
  const dst = new cv.Mat();
  let hb;
  let vb;
  let scale;
  if (src.cols > src.rows) {
    hb = Number(document.getElementById('sizeType').value);
    scale = hb / src.cols;
    vb = parseInt(src.rows * scale, 10);
  } else {
    vb = Number(document.getElementById('sizeType').value);
    scale = vb / src.rows;
    hb = parseInt(src.cols * scale, 10);
  }
  cv.resize(src, dst, new cv.Size(hb, vb), 0, 0, cv.INTER_AREA);

  const idMat = getIdMat(dst, blockDataCustom);
  const srcClone = src.clone();
  const mosaicSize = new cv.Size(hb * 16, vb * 16);
  const mosaicImg = new cv.Mat();
  cv.resize(srcClone, mosaicImg, mosaicSize, 0, 0, cv.INTER_AREA);
  for (let y = 0; y < vb; y += 1) {
    for (let x = 0; x < hb; x += 1) {
      const rect = new cv.Rect(x * 16, y * 16, 16, 16);
      const roi = mosaicImg.roi(rect);
      blockDataCustom[idMat.ucharPtr(y, x)[0]].data.copyTo(roi);
    }
  }
  cv.imshow('canvasOutput', mosaicImg);
  src.delete();
  dst.delete();

  // result
  // createTable(blockDataCustom, 'table'); // eslint-disable-line no-undef
  tableUpdate(blockDataCustom, 'table'); // eslint-disable-line no-undef
}

// opencv 読み込み確認関数
function onOpenCvReady() { // eslint-disable-line no-unused-vars
  cv.onRuntimeInitialized = async () => {
    // document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    const blockDatabase = await getBlockData();
    blockDataAll = blockDatabase.blockData; // eslint-disable-line prefer-destructuring
  };
}

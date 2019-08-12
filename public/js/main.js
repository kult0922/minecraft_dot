// global
let blockDataAll;

// 画像読み込み
const input = document.getElementById('fileInput');
const inputElement = document.getElementById('inputElement');

function load(file, callback) {
  const options = {
    maxWidth: 500,
    canvas: true,
  };

  loadImage.parseMetaData(file, (data) => { // eslint-disable-line no-undef
    if (data.exif) {
      options.orientation = data.exif.get('Orientation');
      console.log(`Orientation: ${options.orientation}`);
    }
    loadImage(file, callback, options); // eslint-disable-line no-undef
  });
}

// 画像がアップロードされたら更新
input.addEventListener('change', (evt) => {
  // 選択中のファイルの一つ目
  const file = evt.target.files[0];
  // ファイルを選択しなかった場合
  if (!file) return;
  // ファイル形式
  console.log(file.type);
  // 読み込み用の関数で読み込み完了時に、HTMLにcanvas追加
  load(file, (canvas) => {
    canvas.id = 'canvasInput'; // eslint-disable-line no-param-reassign
    // 前に表示されていた画像を全削除
    while (inputElement.firstChild) inputElement.removeChild(inputElement.firstChild);
    inputElement.appendChild(canvas);
  });
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
  // blockDataの個数を初期化
  blockDataCustom.forEach((value) => {
    value.number = 0; // eslint-disable-line no-param-reassign
  });
  // const src = cv.imread(imgElement);
  const src = cv.imread('canvasInput');
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
  tableUpdate(blockDataCustom, 'table'); // eslint-disable-line no-undef
}

// opencv 読み込み確認関数
function onOpenCvReady() { // eslint-disable-line no-unused-vars
  cv.onRuntimeInitialized = async () => {
    const blockDatabase = await getBlockData();
    blockDataAll = blockDatabase.blockData; // eslint-disable-line prefer-destructuring
  };
}

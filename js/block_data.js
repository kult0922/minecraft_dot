/* eslint-disable no-param-reassign */


function imgRead(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(cv.imread(img));
    };
    img.src = path;
  });
}

getBlockData = () => {
  const blockDataByName = {};
  const blockDataById = [
    {
      name: 'black',
      path: '../select_block/wool/wool_colored_black.png',
    },
    {
      name: 'blue',
      path: '../select_block/wool/wool_colored_blue.png',
    },
    {
      name: 'green',
      path: '../select_block/wool/wool_colored_green.png',
    },
    {
      name: 'red',
      path: '../select_block/wool/wool_colored_red.png',
    },
    {
      name: 'brown',
      path: '../select_block/wool/wool_colored_brown.png',
    },
    {
      name: 'cyan',
      path: '../select_block/wool/wool_colored_cyan.png',
    },
    {
      name: 'gray',
      path: '../select_block/wool/wool_colored_gray.png',
    },
    {
      name: 'light_blue',
      path: '../select_block/wool/wool_colored_light_blue.png',
    },
    {
      name: 'lime',
      path: '../select_block/wool/wool_colored_lime.png',
    },
    {
      name: 'magenta',
      path: '../select_block/wool/wool_colored_magenta.png',
    },
    {
      name: 'orange',
      path: '../select_block/wool/wool_colored_orange.png',
    },
    {
      name: 'pink',
      path: '../select_block/wool/wool_colored_pink.png',
    },
    {
      name: 'purple',
      path: '../select_block/wool/wool_colored_purple.png',
    },
    {
      name: 'silver',
      path: '../select_block/wool/wool_colored_silver.png',
    },
    {
      name: 'white',
      path: '../select_block/wool/wool_colored_white.png',
    },
    {
      name: 'yellow',
      path: '../select_block/wool/wool_colored_yellow.png',
    },
    {
      name: 'sand',
      path: '../select_block/sand/sand.png',
    },
    {
      name: 'sand_stone_normal',
      path: '../select_block/sand/sandstone_normal.png',
    },
    {
      name: 'sand_stone_smooth',
      path: '../select_block/sand/sandstone_smooth.png',
    },
  ];

  blockDataById.forEach(async (value, id) => {
    value.id = id;
    value.data = await imgRead(value.path);
    // HSVに変換
    const hsv = new cv.Mat();
    const lab = new cv.Mat();
    cv.cvtColor(value.data, hsv, cv.COLOR_BGR2HSV, 0);
    cv.cvtColor(value.data, lab, cv.COLOR_BGR2Lab, 0);
    value.mean = await cv.mean(lab);
  });

  blockDataById.forEach(async (value) => {
    blockDataByName[value.name] = value;
  });

  return { blockDataById, blockDataByName };
};

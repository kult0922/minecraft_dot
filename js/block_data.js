function img_read(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(cv.imread(img));
    }
    img.src = path;
  });
}

get_block_data = () => {
  const block_data_by_name = {};
  const block_data_by_id = [
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
  ]

  block_data_by_id.forEach(async (value, id) => {
    value.id = id;
    value.data = await img_read(value.path);
    value.mean = await cv.mean(value.data);
  });

  block_data_by_id.forEach(async (value) => {
    block_data_by_name[value.name] = value;
  });

  return { block_data_by_id, block_data_by_name };
}
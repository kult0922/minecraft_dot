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
  const blockData = [
    {
      name: 'wool_black',
      jname: '黒色の羊毛',
      path: '../select_block/wool/wool_colored_black.png',
    },
    {
      name: 'wool_blue',
      jname: '青色の羊毛',
      path: '../select_block/wool/wool_colored_blue.png',
    },
    {
      name: 'wool_green',
      jname: '緑色の羊毛',
      path: '../select_block/wool/wool_colored_green.png',
    },
    {
      name: 'wool_red',
      jname: '赤色の羊毛',
      path: '../select_block/wool/wool_colored_red.png',
    },
    {
      name: 'wool_brown',
      jname: '茶色の羊毛',
      path: '../select_block/wool/wool_colored_brown.png',
    },
    {
      name: 'wool_cyan',
      jname: '青緑色の羊毛',
      path: '../select_block/wool/wool_colored_cyan.png',
    },
    {
      name: 'wool_gray',
      jname: '灰色の羊毛',
      path: '../select_block/wool/wool_colored_gray.png',
    },
    {
      name: 'wool_light_blue',
      jname: '空色の羊毛',
      path: '../select_block/wool/wool_colored_light_blue.png',
    },
    {
      name: 'wool_lime',
      jname: '黄緑色の羊毛',
      path: '../select_block/wool/wool_colored_lime.png',
    },
    {
      name: 'wool_magenta',
      jname: '赤紫色の羊毛',
      path: '../select_block/wool/wool_colored_magenta.png',
    },
    {
      name: 'wool_orange',
      jname: '橙色の羊毛',
      path: '../select_block/wool/wool_colored_orange.png',
    },
    {
      name: 'wool_pink',
      jname: '桃色の羊毛',
      path: '../select_block/wool/wool_colored_pink.png',
    },
    {
      name: 'wool_purple',
      jname: '紫色の羊毛',
      path: '../select_block/wool/wool_colored_purple.png',
    },
    {
      name: 'wool_silver',
      jname: '薄灰色の羊毛',
      path: '../select_block/wool/wool_colored_silver.png',
    },
    {
      name: 'wool_white',
      jname: '白色の羊毛',
      path: '../select_block/wool/wool_colored_white.png',
    },
    {
      name: 'wool_yellow',
      jname: '黄色の羊毛',
      path: '../select_block/wool/wool_colored_yellow.png',
    },
    {
      name: 'hardened_clay_stained_silver',
      jname: '薄灰色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_silver.png',
    },
    {
      name: 'hardened_clay_stained_orange',
      jname: '橙色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_orange.png',
    },
    {
      name: 'clay',
      jname: '粘土',
      path: '../select_block/clay/clay.png',
    },
    {
      name: 'hardened_clay',
      jname: 'テラコッタ',
      path: '../select_block/clay/hardened_clay.png',
    },
    {
      name: 'hardened_clay_stained_green',
      jname: '緑色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_green.png',
    },
    {
      name: 'hardened_clay_stained_white',
      jname: '白色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_white.png',
    },
    {
      name: 'hardened_clay_stained_purple',
      jname: '紫色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_purple.png',
    },
    {
      name: 'hardened_clay_stained_cyan',
      jname: '青緑色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_cyan.png',
    },
    {
      name: 'hardened_clay_stained_brown',
      jname: '茶色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_brown.png',
    },
    {
      name: 'hardened_clay_stained_light_blue',
      jname: '空色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_light_blue.png',
    },
    {
      name: 'hardened_clay_stained_gray',
      jname: '灰色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_gray.png',
    },
    {
      name: 'hardened_clay_stained_lime',
      jname: '黄緑色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_lime.png',
    },
    {
      name: 'hardened_clay_stained_red',
      jname: '赤色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_red.png',
    },
    {
      name: 'hardened_clay_stained_magenta',
      jname: '赤紫色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_magenta.png',
    },
    {
      name: 'hardened_clay_stained_black',
      jname: '黒色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_black.png',
    },
    {
      name: 'hardened_clay_stained_yellow',
      jname: '黄色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_yellow.png',
    },
    {
      name: 'hardened_clay_stained_pink',
      jname: '桃色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_pink.png',
    },
    {
      name: 'hardened_clay_stained_blue',
      jname: '青色のテラコッタ',
      path: '../select_block/clay/hardened_clay_stained_blue.png',
    },
    {
      name: 'glass_blue',
      jname: '青色の色付きガラス',
      path: '../select_block/glass/glass_blue.png',
    },
    {
      name: 'glass_pink',
      jname: '桃色の色付きガラス',
      path: '../select_block/glass/glass_pink.png',
    },
    {
      name: 'glass_orange',
      jname: '橙色の色付きガラス',
      path: '../select_block/glass/glass_orange.png',
    },
    {
      name: 'glass_light_blue',
      jname: '空色の色付きガラス',
      path: '../select_block/glass/glass_light_blue.png',
    },
    {
      name: 'glass_brown',
      jname: '茶色の色付きガラス',
      path: '../select_block/glass/glass_brown.png',
    },
    {
      name: 'glass_silver',
      jname: '薄灰色の色付きガラス',
      path: '../select_block/glass/glass_silver.png',
    },
    {
      name: 'glass_white',
      jname: '白色の色付きガラス',
      path: '../select_block/glass/glass_white.png',
    },
    {
      name: 'glass_red',
      jname: '赤色の色付きガラス',
      path: '../select_block/glass/glass_red.png',
    },
    {
      name: 'glass_green',
      jname: '緑色の色付きガラス',
      path: '../select_block/glass/glass_green.png',
    },
    {
      name: 'glass_gray',
      jname: '灰色の色付きガラス',
      path: '../select_block/glass/glass_gray.png',
    },
    {
      name: 'glass_lime',
      jname: '黄緑色の色付きガラス',
      path: '../select_block/glass/glass_lime.png',
    },
    {
      name: 'glass_purple',
      jname: '紫色の色付きガラス',
      path: '../select_block/glass/glass_purple.png',
    },
    {
      name: 'glass_cyan',
      jname: '青緑色の色付きガラス',
      path: '../select_block/glass/glass_cyan.png',
    },
    {
      name: 'glass_magenta',
      jname: '赤紫色の色付きガラス',
      path: '../select_block/glass/glass_magenta.png',
    },
    {
      name: 'glass_black',
      jname: '黒色の色付きガラス',
      path: '../select_block/glass/glass_black.png',
    },
    {
      name: 'glass_yellow',
      jname: '黄色の色付きガラス',
      path: '../select_block/glass/glass_yellow.png',
    },
    {
      name: 'glass',
      jname: 'ガラス',
      path: '../select_block/glass/glass.png',
    },
    {
      name: 'quartz_block_top',
      jname: 'クォーツブロック',
      path: '../select_block/nether/quartz_block_top.png',
    },
    {
      name: 'quartz_ore',
      jname: 'ネザークォーツ鉱石',
      path: '../select_block/nether/quartz_ore.png',
    },
    {
      name: 'glowstone',
      jname: 'グロウストーン',
      path: '../select_block/nether/glowstone.png',
    },
    {
      name: 'netherrack',
      jname: 'ネザーラック',
      path: '../select_block/nether/netherrack.png',
    },
    {
      name: 'nether_brick',
      jname: 'ネザーレンガ',
      path: '../select_block/nether/nether_brick.png',
    },
    {
      name: 'emerald_block',
      jname: 'エメラルドブロック',
      path: '../select_block/ore/emerald_block.png',
    },
    {
      name: 'obsidian',
      jname: '黒曜石',
      path: '../select_block/ore/obsidian.png',
    },
    {
      name: 'redstone_ore',
      jname: 'レッドストーン鉱石',
      path: '../select_block/ore/redstone_ore.png',
    },
    {
      name: 'lapis_ore',
      jname: 'ラピスラズリ鉱石',
      path: '../select_block/ore/lapis_ore.png',
    },
    {
      name: 'coal_ore',
      jname: '石炭鉱石',
      path: '../select_block/ore/coal_ore.png',
    },
    {
      name: 'gold_block',
      jname: '金ブロック',
      path: '../select_block/ore/gold_block.png',
    },
    {
      name: 'iron_ore',
      jname: '鉄鉱石',
      path: '../select_block/ore/iron_ore.png',
    },
    {
      name: 'gold_ore',
      jname: '金鉱石',
      path: '../select_block/ore/gold_ore.png',
    },
    {
      name: 'emerald_ore',
      jname: 'エメラルド鉱石',
      path: '../select_block/ore/emerald_ore.png',
    },
    {
      name: 'diamond_block',
      jname: 'ダイヤモンドブロック',
      path: '../select_block/ore/diamond_block.png',
    },
    {
      name: 'redstone_block',
      jname: 'レッドストーンブロック',
      path: '../select_block/ore/redstone_block.png',
    },
    {
      name: 'lapis_block',
      jname: 'ラピスラズリブロック',
      path: '../select_block/ore/lapis_block.png',
    },
    {
      name: 'diamond_ore',
      jname: 'ダイヤモンド鉱石',
      path: '../select_block/ore/diamond_ore.png',
    },
    {
      name: 'melon_side',
      jname: 'スイカ',
      path: '../select_block/produce/melon_side.png',
    },
    {
      name: 'hay_block_side',
      jname: '干草の俵',
      path: '../select_block/produce/hay_block_side.png',
    },
    {
      name: 'pumpkin_face_off',
      jname: 'くり抜かれたカボチャ',
      path: '../select_block/produce/pumpkin_face_off.png',
    },
    {
      name: 'sandstone_smooth',
      jname: '磨かれた砂岩',
      path: '../select_block/sand/sandstone_smooth.png',
    },
    {
      name: 'sandstone_normal',
      jname: '砂岩',
      path: '../select_block/sand/sandstone_normal.png',
    },
    {
      name: 'sand',
      jname: '砂',
      path: '../select_block/sand/sand.png',
    },
    {
      name: 'stone_diorite',
      jname: '閃緑岩',
      path: '../select_block/stone/stone_diorite.png',
    },
    {
      name: 'cobblestone_mossy',
      jname: '苔むした丸石',
      path: '../select_block/stone/cobblestone_mossy.png',
    },
    {
      name: 'stone_andesite',
      jname: '安山岩',
      path: '../select_block/stone/stone_andesite.png',
    },
    {
      name: 'stonebrick_carved',
      jname: '模様入り石レンガ',
      path: '../select_block/stone/stonebrick_carved.png',
    },
    {
      name: 'stone_granite_smooth',
      jname: '磨かれた花崗岩',
      path: '../select_block/stone/stone_granite_smooth.png',
    },
    {
      name: 'cobblestone',
      jname: '丸石',
      path: '../select_block/stone/cobblestone.png',
    },
    {
      name: 'stone',
      jname: '石',
      path: '../select_block/stone/stone.png',
    },
    {
      name: 'stone_diorite_smooth',
      jname: '磨かれた閃緑岩',
      path: '../select_block/stone/stone_diorite_smooth.png',
    },
    {
      name: 'stonebrick_mossy',
      jname: '苔むした石レンガ',
      path: '../select_block/stone/stonebrick_mossy.png',
    },
    {
      name: 'stonebrick',
      jname: '石レンガ',
      path: '../select_block/stone/stonebrick.png',
    },
    {
      name: 'stone_granite',
      jname: '花崗岩',
      path: '../select_block/stone/stone_granite.png',
    },
    {
      name: 'stone_andesite_smooth',
      jname: '磨かれた安山岩',
      path: '../select_block/stone/stone_andesite_smooth.png',
    },
    {
      name: 'log_jungle',
      jname: 'ジャングルの原木',
      path: '../select_block/wood/log_jungle.png',
    },
    {
      name: 'planks_birch',
      jname: '白樺の木材',
      path: '../select_block/wood/planks_birch.png',
    },
    {
      name: 'planks_oak',
      jname: 'オークの木材',
      path: '../select_block/wood/planks_oak.png',
    },
    {
      name: 'log_birch',
      jname: '白樺の原木',
      path: '../select_block/wood/log_birch.png',
    },
    {
      name: 'planks_spruce',
      jname: '松の木材',
      path: '../select_block/wood/planks_spruce.png',
    },
    {
      name: 'log_acacia',
      jname: 'アカシアの原木',
      path: '../select_block/wood/log_acacia.png',
    },
    {
      name: 'log_big_oak',
      jname: 'ダークオークの原木',
      path: '../select_block/wood/log_big_oak.png',
    },
    {
      name: 'log_oak',
      jname: 'オークの原木',
      path: '../select_block/wood/log_oak.png',
    },
    {
      name: 'planks_acacia',
      jname: 'アカシアの木材',
      path: '../select_block/wood/planks_acacia.png',
    },
    {
      name: 'log_spruce',
      jname: '松の原木',
      path: '../select_block/wood/log_spruce.png',
    },
    {
      name: 'planks_big_oak',
      jname: 'ダークオークの木材',
      path: '../select_block/wood/planks_big_oak.png',
    },
    {
      name: 'planks_jungle',
      jname: 'ジャングルの木材',
      path: '../select_block/wood/planks_jungle.png',
    },
  ];

  blockData.forEach(async (value) => {
    value.number = 0;
    value.data = await imgRead(value.path);
    const lab = new cv.Mat();
    cv.cvtColor(value.data, lab, cv.COLOR_BGR2Lab, 0);
    value.mean = await cv.mean(lab);
  });

  // const blockDataDefault = blockData.filter(value => value.name !== 'log_acacia_top');
  const blockDataDefault = blockData.filter(value => value.name.indexOf('glass'));

  blockData.forEach(async (value) => {
    blockDataByName[value.name] = value;
  });

  return { blockData, blockDataDefault };
};

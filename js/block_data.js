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
      name: 'wool_black',
      path: '../select_block/wool/wool_colored_black.png',
    },
    {
      name: 'wool_blue',
      path: '../select_block/wool/wool_colored_blue.png',
    },
    {
      name: 'wool_green',
      path: '../select_block/wool/wool_colored_green.png',
    },
    {
      name: 'wool_red',
      path: '../select_block/wool/wool_colored_red.png',
    },
    {
      name: 'wool_brown',
      path: '../select_block/wool/wool_colored_brown.png',
    },
    {
      name: 'wool_cyan',
      path: '../select_block/wool/wool_colored_cyan.png',
    },
    {
      name: 'wool_gray',
      path: '../select_block/wool/wool_colored_gray.png',
    },
    {
      name: 'light_blue',
      path: '../select_block/wool/wool_colored_light_blue.png',
    },
    {
      name: 'wool_lime',
      path: '../select_block/wool/wool_colored_lime.png',
    },
    {
      name: 'wool_magenta',
      path: '../select_block/wool/wool_colored_magenta.png',
    },
    {
      name: 'wool_orange',
      path: '../select_block/wool/wool_colored_orange.png',
    },
    {
      name: 'wool_pink',
      path: '../select_block/wool/wool_colored_pink.png',
    },
    {
      name: 'wool_purple',
      path: '../select_block/wool/wool_colored_purple.png',
    },
    {
      name: 'wool_silver',
      path: '../select_block/wool/wool_colored_silver.png',
    },
    {
      name: 'wool_white',
      path: '../select_block/wool/wool_colored_white.png',
    },
    {
      name: 'wool_yellow',
      path: '../select_block/wool/wool_colored_yellow.png',
    },
    {
      name: 'wool_sand',
      path: '../select_block/sand/sand.png',
    },
    {
      name: 'sandstone_normal',
      path: '../select_block/sand/sandstone_normal.png',
    },
    {
      name: 'sandstone_smooth',
      path: '../select_block/sand/sandstone_smooth.png',
    },
    {
      name: 'hardened_clay_stained_silver.png',
      path: '../select_block/clay/hardened_clay_stained_silver.png',
    },
    {
      name: 'hardened_clay_stained_orange.png',
      path: '../select_block/clay/hardened_clay_stained_orange.png',
    },
    {
      name: 'clay.png',
      path: '../select_block/clay/clay.png',
    },
    {
      name: 'hardened_clay.png',
      path: '../select_block/clay/hardened_clay.png',
    },
    {
      name: 'hardened_clay_stained_green.png',
      path: '../select_block/clay/hardened_clay_stained_green.png',
    },
    {
      name: 'hardened_clay_stained_white.png',
      path: '../select_block/clay/hardened_clay_stained_white.png',
    },
    {
      name: 'hardened_clay_stained_purple.png',
      path: '../select_block/clay/hardened_clay_stained_purple.png',
    },
    {
      name: 'hardened_clay_stained_cyan.png',
      path: '../select_block/clay/hardened_clay_stained_cyan.png',
    },
    {
      name: 'hardened_clay_stained_brown.png',
      path: '../select_block/clay/hardened_clay_stained_brown.png',
    },
    {
      name: 'hardened_clay_stained_light_blue.png',
      path: '../select_block/clay/hardened_clay_stained_light_blue.png',
    },
    {
      name: 'hardened_clay_stained_gray.png',
      path: '../select_block/clay/hardened_clay_stained_gray.png',
    },
    {
      name: 'hardened_clay_stained_lime.png',
      path: '../select_block/clay/hardened_clay_stained_lime.png',
    },
    {
      name: 'hardened_clay_stained_red.png',
      path: '../select_block/clay/hardened_clay_stained_red.png',
    },
    {
      name: 'hardened_clay_stained_magenta.png',
      path: '../select_block/clay/hardened_clay_stained_magenta.png',
    },
    {
      name: 'hardened_clay_stained_black.png',
      path: '../select_block/clay/hardened_clay_stained_black.png',
    },
    {
      name: 'hardened_clay_stained_yellow.png',
      path: '../select_block/clay/hardened_clay_stained_yellow.png',
    },
    {
      name: 'hardened_clay_stained_pink.png',
      path: '../select_block/clay/hardened_clay_stained_pink.png',
    },
    {
      name: 'hardened_clay_stained_blue.png',
      path: '../select_block/clay/hardened_clay_stained_blue.png',
    },
    {
      name: 'glass_blue.png',
      path: '../select_block/glass/glass_blue.png',
    },
    {
      name: 'glass_pink.png',
      path: '../select_block/glass/glass_pink.png',
    },
    {
      name: 'glass_orange.png',
      path: '../select_block/glass/glass_orange.png',
    },
    {
      name: 'glass_light_blue.png',
      path: '../select_block/glass/glass_light_blue.png',
    },
    {
      name: 'glass_brown.png',
      path: '../select_block/glass/glass_brown.png',
    },
    {
      name: 'glass_silver.png',
      path: '../select_block/glass/glass_silver.png',
    },
    {
      name: 'glass_white.png',
      path: '../select_block/glass/glass_white.png',
    },
    {
      name: 'glass_red.png',
      path: '../select_block/glass/glass_red.png',
    },
    {
      name: 'glass_green.png',
      path: '../select_block/glass/glass_green.png',
    },
    {
      name: 'glass_gray.png',
      path: '../select_block/glass/glass_gray.png',
    },
    {
      name: 'glass_lime.png',
      path: '../select_block/glass/glass_lime.png',
    },
    {
      name: 'glass_purple.png',
      path: '../select_block/glass/glass_purple.png',
    },
    {
      name: 'glass_cyan.png',
      path: '../select_block/glass/glass_cyan.png',
    },
    {
      name: 'glass_magenta.png',
      path: '../select_block/glass/glass_magenta.png',
    },
    {
      name: 'glass_black.png',
      path: '../select_block/glass/glass_black.png',
    },
    {
      name: 'glass_yellow.png',
      path: '../select_block/glass/glass_yellow.png',
    },
    {
      name: 'glass.png',
      path: '../select_block/glass/glass.png',
    },
    {
      name: 'quartz_block_top.png',
      path: '../select_block/nether/quartz_block_top.png',
    },
    {
      name: 'quartz_ore.png',
      path: '../select_block/nether/quartz_ore.png',
    },
    {
      name: 'glowstone.png',
      path: '../select_block/nether/glowstone.png',
    },
    {
      name: 'netherrack.png',
      path: '../select_block/nether/netherrack.png',
    },
    {
      name: 'nether_brick.png',
      path: '../select_block/nether/nether_brick.png',
    },
    {
      name: 'emerald_block.png',
      path: '../select_block/ore/emerald_block.png',
    },
    {
      name: 'obsidian.png',
      path: '../select_block/ore/obsidian.png',
    },
    {
      name: 'redstone_ore.png',
      path: '../select_block/ore/redstone_ore.png',
    },
    {
      name: 'lapis_ore.png',
      path: '../select_block/ore/lapis_ore.png',
    },
    {
      name: 'coal_ore.png',
      path: '../select_block/ore/coal_ore.png',
    },
    {
      name: 'gold_block.png',
      path: '../select_block/ore/gold_block.png',
    },
    {
      name: 'iron_ore.png',
      path: '../select_block/ore/iron_ore.png',
    },
    {
      name: 'gold_ore.png',
      path: '../select_block/ore/gold_ore.png',
    },
    {
      name: 'emerald_ore.png',
      path: '../select_block/ore/emerald_ore.png',
    },
    {
      name: 'diamond_block.png',
      path: '../select_block/ore/diamond_block.png',
    },
    {
      name: 'redstone_block.png',
      path: '../select_block/ore/redstone_block.png',
    },
    {
      name: 'lapis_block.png',
      path: '../select_block/ore/lapis_block.png',
    },
    {
      name: 'diamond_ore.png',
      path: '../select_block/ore/diamond_ore.png',
    },
    {
      name: 'pumpkin_face_on.png',
      path: '../select_block/produce/pumpkin_face_on.png',
    },
    {
      name: 'melon_side.png',
      path: '../select_block/produce/melon_side.png',
    },
    {
      name: 'hay_block_side.png',
      path: '../select_block/produce/hay_block_side.png',
    },
    {
      name: 'pumpkin_face_off.png',
      path: '../select_block/produce/pumpkin_face_off.png',
    },
    {
      name: 'hay_block_top.png',
      path: '../select_block/produce/hay_block_top.png',
    },
    {
      name: 'sandstone_smooth.png',
      path: '../select_block/sand/sandstone_smooth.png',
    },
    {
      name: 'sandstone_normal.png',
      path: '../select_block/sand/sandstone_normal.png',
    },
    {
      name: 'sandstone_bottom.png',
      path: '../select_block/sand/sandstone_bottom.png',
    },
    {
      name: 'sandstone_carved.png',
      path: '../select_block/sand/sandstone_carved.png',
    },
    {
      name: 'sand.png',
      path: '../select_block/sand/sand.png',
    },
    {
      name: 'sandstone_top.png',
      path: '../select_block/sand/sandstone_top.png',
    },
    {
      name: 'stone_diorite.png',
      path: '../select_block/stone/stone_diorite.png',
    },
    {
      name: 'cobblestone_mossy.png',
      path: '../select_block/stone/cobblestone_mossy.png',
    },
    {
      name: 'stonebrick_cracked.png',
      path: '../select_block/stone/stonebrick_cracked.png',
    },
    {
      name: 'stone_andesite.png',
      path: '../select_block/stone/stone_andesite.png',
    },
    {
      name: 'stonebrick_carved.png',
      path: '../select_block/stone/stonebrick_carved.png',
    },
    {
      name: 'stone_granite_smooth.png',
      path: '../select_block/stone/stone_granite_smooth.png',
    },
    {
      name: 'cobblestone.png',
      path: '../select_block/stone/cobblestone.png',
    },
    {
      name: 'stone.png',
      path: '../select_block/stone/stone.png',
    },
    {
      name: 'stone_slab_side.png',
      path: '../select_block/stone/stone_slab_side.png',
    },
    {
      name: 'stone_diorite_smooth.png',
      path: '../select_block/stone/stone_diorite_smooth.png',
    },
    {
      name: 'stonebrick_mossy.png',
      path: '../select_block/stone/stonebrick_mossy.png',
    },
    {
      name: 'stone_slab_top.png',
      path: '../select_block/stone/stone_slab_top.png',
    },
    {
      name: 'stonebrick.png',
      path: '../select_block/stone/stonebrick.png',
    },
    {
      name: 'stone_granite.png',
      path: '../select_block/stone/stone_granite.png',
    },
    {
      name: 'stone_andesite_smooth.png',
      path: '../select_block/stone/stone_andesite_smooth.png',
    },
    {
      name: 'log_jungle.png',
      path: '../select_block/wood/log_jungle.png',
    },
    {
      name: 'planks_birch.png',
      path: '../select_block/wood/planks_birch.png',
    },
    {
      name: 'planks_oak.png',
      path: '../select_block/wood/planks_oak.png',
    },
    {
      name: 'log_birch.png',
      path: '../select_block/wood/log_birch.png',
    },
    {
      name: 'log_oak_top.png',
      path: '../select_block/wood/log_oak_top.png',
    },
    {
      name: 'planks_spruce.png',
      path: '../select_block/wood/planks_spruce.png',
    },
    {
      name: 'log_acacia.png',
      path: '../select_block/wood/log_acacia.png',
    },
    {
      name: 'log_big_oak.png',
      path: '../select_block/wood/log_big_oak.png',
    },
    {
      name: 'log_birch_top.png',
      path: '../select_block/wood/log_birch_top.png',
    },
    {
      name: 'log_jungle_top.png',
      path: '../select_block/wood/log_jungle_top.png',
    },
    {
      name: 'log_big_oak_top.png',
      path: '../select_block/wood/log_big_oak_top.png',
    },
    {
      name: 'log_oak.png',
      path: '../select_block/wood/log_oak.png',
    },
    {
      name: 'log_spruce_top.png',
      path: '../select_block/wood/log_spruce_top.png',
    },
    {
      name: 'planks_acacia.png',
      path: '../select_block/wood/planks_acacia.png',
    },
    {
      name: 'log_spruce.png',
      path: '../select_block/wood/log_spruce.png',
    },
    {
      name: 'planks_big_oak.png',
      path: '../select_block/wood/planks_big_oak.png',
    },
    {
      name: 'planks_jungle.png',
      path: '../select_block/wood/planks_jungle.png',
    },
    {
      name: 'log_acacia_top.png',
      path: '../select_block/wood/log_acacia_top.png',
    },
  ];

  blockDataById.forEach(async (value, id) => {
    value.id = id;
    value.number = 0;
    value.data = await imgRead(value.path);
    const lab = new cv.Mat();
    cv.cvtColor(value.data, lab, cv.COLOR_BGR2Lab, 0);
    value.mean = await cv.mean(lab);
  });

  blockDataById.forEach(async (value) => {
    blockDataByName[value.name] = value;
  });

  return { blockDataById, blockDataByName };
};

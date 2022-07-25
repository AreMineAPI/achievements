# [@mineapi/achievements](https://npmjs.com/package/@mineapi/achievements)
[Do you need my help? Visit our Discord server.](https://mineapi.me/discord)

![NPM Downloads](https://img.shields.io/npm/dm/@mineapi/achievements?style=for-the-badge)
![License](https://img.shields.io/npm/l/@mineapi/achievements?style=for-the-badge)
```bash
Node Version: 16.16.0
```

### Installation
```bash
npm i @mineapi/achievements --save
# or
yarn add @mineapi/achievements
```

## Example in Express.js

```js
// CJS
// const { Achievement  } = require("@mineapi/achievements");

// ESM
import { Achievement } from "../src";
import Express from "express";
const app = Express();

app.get('/generate', async (req, res) => {
    if (!req.query.title) return res.status(400).send('Missing title');
    if (!req.query.description) return res.status(400).send('Missing description');
    if (!req.query.icon) return res.status(400).send('Missing icon');

    const achievement = new Achievement({ title: req.query.title, description: req.query.description, icon: req.query.icon });

    const image = await achievement.create();
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'filename="achievement.png"');

    res.end(image);
});

app.get("/icons", (req, res) => {
    res.end(Achievement.getIcons());
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

```

### Icons List
```json
[
    "apple",
    "arrow",
    "bed",
    "bedrock",
    "blazePowder",
    "blazeRod",
    "blockOfDiamond",
    "blockOfGold",
    "blockOfIron",
    "boat",
    "bone",
    "bonemeal",
    "book",
    "bottleOfEnchanting",
    "bottle",
    "bow",
    "bowl",
    "bread",
    "brewingStand",
    "bucket",
    "cake",
    "chainmailBoots",
    "chainmailChestplate",
    "chainmailHelmet",
    "chainmailLeggings",
    "charcoal",
    "chest",
    "coalOre",
    "coal",
    "cobblestone",
    "compass",
    "cookedChicken",
    "cookedFish",
    "cookedPorkchop",
    "cookie",
    "diamondAxe",
    "diamondBoots",
    "diamondChestplate",
    "diamondHelmet",
    "diamondHoe",
    "diamondLeggings",
    "diamondOre",
    "diamondPickaxe",
    "diamondShovel",
    "diamondSword",
    "diamond",
    "dirt",
    "dragonEgg",
    "egg",
    "enchantmentTable",
    "enderPearl",
    "eyeOfEnder",
    "feather",
    "fenceGate",
    "fence",
    "flintAndSteel",
    "flint",
    "furnance",
    "glowstoneDust",
    "goldApple",
    "goldAxe",
    "goldBoots",
    "goldChestplate",
    "goldHelmet",
    "goldHoe",
    "goldIngot",
    "goldLeggings",
    "goldNugget",
    "goldOre",
    "goldPickaxe",
    "goldShovel",
    "goldSword",
    "grass",
    "ironAxe",
    "ironBoots",
    "ironChestplate",
    "ironHelmet",
    "iron_hoe",
    "ironIngot",
    "ironLeggings",
    "ironOre",
    "ironPickaxe",
    "ironShovel",
    "ironSword",
    "ladder",
    "lapisLazuli",
    "lavaBucket",
    "leather",
    "leatherBoots",
    "leatherChestplate",
    "leatherHelmet",
    "leatherLeggings",
    "melonSlice",
    "milkBucket",
    "minecart",
    "musicDisk",
    "obdisian",
    "paper",
    "piston",
    "potion",
    "pumpkin",
    "rails",
    "rawBeef",
    "rawChicken",
    "rawFish",
    "rawPorkchop",
    "redstoneDust",
    "redstoneOre",
    "redstoneRepeater",
    "redstoneTorch",
    "redstoneWire",
    "rottenBeef",
    "saddle",
    "shears",
    "sign",
    "slimeball",
    "snowball",
    "splashPotion",
    "steak",
    "stick",
    "stickyPiston",
    "stone",
    "stoneAxe",
    "stoneButton",
    "stoneHoe",
    "stonePickaxe",
    "stonePressurePlate",
    "stoneShovel",
    "stoneSword",
    "string",
    "waterBottle",
    "waterBucket",
    "map"
]
```

---
<h6 align="center">Developed with ❤️ by MineAPI</h6>

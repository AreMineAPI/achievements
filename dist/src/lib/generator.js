"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const icons_json_1 = __importDefault(require("./icons.json"));
const canvas_1 = require("canvas");
class Generator {
    title;
    description;
    icon;
    icons = icons_json_1.default;
    constructor({ title, description, icon }) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.icons = icons_json_1.default;
        if (!this.icons[icon]) {
            throw new Error(`Icon ${icon} does not exist`);
        }
        ;
        return this;
    }
    async create() {
        const canvas = (0, canvas_1.createCanvas)(320, 64);
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return new Error("Could not create canvas context");
        ctx.patternQuality = "fast";
        const background = await (0, canvas_1.loadImage)("./src/assets/background.png");
        if (!background)
            return new Error("Could not load background image");
        ctx.drawImage(background, 0, 0, 320, 64);
        const icon = await (0, canvas_1.loadImage)("./src/assets/icons/" + this.icons[this.icon] + ".png");
        if (!icon)
            return new Error("Could not load icon image");
        ctx.drawImage(icon, 16, 16, 32, 32);
        const font = await (0, canvas_1.registerFont)("./src/assets/Minecraftia.ttf", { family: "Minecraftia" });
        ctx.font = "16px Minecraftia";
        ctx.fillStyle = "#ffff00";
        ctx.fillText(this.title, 58, 28);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(this.description, 58, 48);
        return canvas.toBuffer();
    }
    static getIcons() {
        return icons_json_1.default;
    }
}
exports.Generator = Generator;
;

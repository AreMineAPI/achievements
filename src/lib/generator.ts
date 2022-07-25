import axios from "axios";
import iconsConfig from "./icons.json";
import { createCanvas, loadImage, registerFont } from "canvas";

export class Generator {
    title: string;
    description: string;
    icon: string;
    icons: { [key: string]: string } = iconsConfig;

    constructor({ title, description, icon }: { title: string, description: string, icon: string }) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.icons = iconsConfig;

        if (!this.icons[icon]) {
            throw new Error(`Icon ${icon} does not exist`);
        };

        return this;
    }

    async create(): Promise<any> {
        const canvas = createCanvas(320, 64);
        const ctx = canvas.getContext("2d");
        if (!ctx) return new Error("Could not create canvas context");

        ctx.patternQuality = "fast";

        const background = await loadImage("./src/assets/background.png");
        if (!background) return new Error("Could not load background image");
        ctx.drawImage(background, 0, 0, 320, 64);

        const icon = await loadImage("./src/assets/icons/" + this.icons[this.icon] + ".png");
        if (!icon) return new Error("Could not load icon image");
        ctx.drawImage(icon, 16, 16, 32, 32);

        const font = await registerFont("./src/assets/Minecraftia.ttf", { family: "Minecraftia" });

        ctx.font = "16px Minecraftia";

        ctx.fillStyle = "#ffff00";
        ctx.fillText(this.title, 58, 28);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(this.description, 58, 48);
        

        return canvas.toBuffer();
    }

    static getIcons(): Object {
        return iconsConfig;
    }
};
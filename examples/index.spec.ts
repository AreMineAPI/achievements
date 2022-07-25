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
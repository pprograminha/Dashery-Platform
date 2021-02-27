import express from "express";
const app = express();
app.get("/", (req, res) => {
    return res.send("Helloe World!");
});
app.listen(3333, () => {
    console.log("Listening to port 3333");
});

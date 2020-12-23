const express = require('express');
const app = express();

const port = process.env.PORT || 3700;

app.get("/usage", (req, res) => {
    res.json({
        example: `${req.hostname}/favicon?url=HERE`,
    });
});

app.get("/favicon", (req, res) => {
    let url = `http://s2.googleusercontent.com/s2/favicons?domain_url=${req.query.url}`;
    if(req.query.url) {
        res.json({
            favicon: url,
        });
    } else {
        res.json({
            error: "No url found!",
            check: `${req.hostname}/usage`,
        });
    }
});

app.listen(port, () => {
    console.log("Server started!");
});
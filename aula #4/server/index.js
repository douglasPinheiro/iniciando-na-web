const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ ok: "ok"})
});

app.listen(port, () => console.log(`server running on port ${port}`))
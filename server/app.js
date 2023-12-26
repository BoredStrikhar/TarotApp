const express = require("express");
const app = express();
app.use(express.json());

app.get("/status", (request, response) => {
    const status = {
        "Status ": "Running",
    };

    response.send(status);
});

app.put("/status", (request, response) => {
    const status = {
        ...request.body
    };

    response.send(status);
});

app.listen(3000);
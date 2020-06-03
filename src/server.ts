import express from 'express';

const app = express();

app.get("/users",(request, response) => {
    console.log("USUARIOS")

    response.send("HELLO WORLD");
});

app.listen(3333);
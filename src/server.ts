import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    console.log("USUARIOS")

    response.json([
        'Pedro',
        'Henrique',
        'Souza'
    ]);
});

app.listen(3333);
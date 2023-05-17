// import  express  from "express"
// import {createRequire}from 'module';

// const require = createRequire(import.meta.url);
const express = require('express');

const app = express();

const sdk = require('api')('@render-api/v1.0#5yi85d37lhqedd36');

app.get('/applications', (req, res) => {
    // TODO: Retrieve the list of applications from your Render account
    //
    sdk.auth('rnd_e6qvfs7ShTAtf4xNEoyDkY4Vquz2');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => res.send(data))
        .catch(err => console.error(err));

    //
    // const applications = ['my-app-1', 'my-app-2', 'my-app-3'];

    // res.json(applications);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
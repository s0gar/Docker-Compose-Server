'use strict';

const cors = require('cors');
const { request } = require('express');
const express = require('express');
const {flaschenpost} = require('flaschenpost');
const http = require('http'); 

const logger = flaschenpost.getLogger(); 

const api = express(); 

api.use(cors());

api.get('/', (req,res) => {
    res.json(
        {
            now: Date.now()
        });
});

const server = http.createServer(api);
const port = 3_000;

server.listen(port, ()=> {
    logger.info('Server started.', {port});
});




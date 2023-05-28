const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = 4000;
const app = express();

const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redis_client = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

redis_client.connect();
redis_client.on('error', err => console.log('Redis Server Error', err));
redis_client.on('connect', () => console.log('Redis Server connected'));




const DB_USER= 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URI= `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(() => console.log('connected to DB')).catch((err) => console.log('connection failed',err));

app.get('/',(req , res) => res.send('<h1> Hello node with Docker !!!!</h1>'));
app.listen(PORT ,() => console.log(`app is up and running on port : ${PORT}`));

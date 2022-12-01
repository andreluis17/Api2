// const express = require('express');
import express from 'express';
import route from './routes.js';

const api = express();

api.use(express.json()); // informando o tipo de comunicação entre front e back

api.use('/',route)

api.listen(3333, () => {
  console.log('Tamo on...');
}); //como as aquisições vão chegar
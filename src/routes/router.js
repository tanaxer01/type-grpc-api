import express from 'express';
import client from '../controllers/index.controller.js';
import { postMonedasHandler } from '../handlers/postMonedasHandler.js';
import { getCrucigramaHandler } from '../handlers/getCrucigramaHandler.js';
import { postClimaHandler } from '../handlers/postClimaHandler.js';
const router = express.Router();

router.post('/monedas', (req, res) => {

    return postMonedasHandler(client, req, res);
});
router.get('/crucigrama', (req, res) => {

    return getCrucigramaHandler(req, res);
});
router.get('/clima', (req, res) => {

    return postClimaHandler(req, res);
});

export default router;
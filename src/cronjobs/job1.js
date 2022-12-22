import cron from 'node-cron';
import client from '../controllers/index.controller.js';
import axios from 'axios';


export const croncitoDolar = cron.schedule('*/10 * * * * *', async () => {
    console.log("aaaa")
    const url = 'https://mindicador.cl/api/dolar';
    const dolar = await axios.get(url)
    const dolarFinal = dolar.data.serie[0].valor
    console.log("-->", dolarFinal);
    await client.Update({
        moneda: 'USD',
        fechaInicio: new Date(Date.now()).toISOString().slice(0, 10),
        valores: [{
            fecha: new Date(Date.now()).toISOString().slice(0, 10),
            valor: dolarFinal
        }]
    }, (err, response) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(response);
        }
    });
}, {
    scheduled: false,
    timezone: 'America/Sao_Paulo'
});

export const croncitoUF = cron.schedule('*/10 * * * * *', async () => {

    const url = 'https://mindicador.cl/api/uf';
    const uf = await axios.get(url)
    const ufFinal = dolar.data.serie[0].valor


    await client.Update({
        moneda: 'UF',
        fecha_inicio: new Date(Date.now()).toISOString().slice(0, 10),
        ValorDia: {
            fecha: new Date(Date.now()).toISOString().slice(0, 10),
            valor: ufFinal
        }
    }, (err, response) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(response);
        }
    });
}, {
    scheduled: false,
    timezone: 'America/Sao_Paulo'
});
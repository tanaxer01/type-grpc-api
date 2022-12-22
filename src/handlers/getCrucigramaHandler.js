
import fetch from 'node-fetch';

export const getCrucigramaHandler = async (req, res) => {

    try {
        const url = 'https://server3.tanaxer.workers.dev/crossword'
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                const sendData = { link: data.urls[Math.floor(Math.random() * 301)] }
                return res.status(200).send(sendData);
            })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
import fetch from 'node-fetch';

export const postClimaHandler = async (req, res) => {
    try {
        const url = 'https://server3.tanaxer.workers.dev/temp'
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                const { day } = data
                const day1 = day[1]
                const actualTemp = day1.hour.filter((hour) => {
                    if ([...hour.interval][0] === [...day1.local_time][0] && [...hour.interval][1] === [...day1.local_time][1]) {
                        return hour.temp
                    }
                })
                return res.status(200).send(
                    {
                        hour: new Date(Date.now()),
                        temp: actualTemp[0].temp + '°C',
                    }
                );
            })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};
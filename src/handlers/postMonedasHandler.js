export const postMonedasHandler = (client, req, res) => {
    client.Query(req.body, (err, response) => {
        if (err) {
            res.status(500).send({
                status: 'error',
                message: err.message
            })
        }
        else {
            res.status(200).json({
                status: 'success',
                data: response
            });
        }
    });
}

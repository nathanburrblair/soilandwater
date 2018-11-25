module.exports = {
    getPlants: (req, res) => {
        const db = req.app.get('db');
        db.get_plants()
        .then(plants => {
            res.status(200).send(plants)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    }
}
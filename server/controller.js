module.exports = {
  getPlants: (req, res) => {
    const db = req.app.get("db");
    db.get_plants()
      .then(plants => {
        res.status(200).send(plants);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getPlantsByCat: (req, res) => {
    const db = req.app.get("db");
    let { product_category } = req.params;
    db.get_plants_by_cat([product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getPlantById: (req, res) => {
    const db = req.app.get("db");
    let { id, product_category } = req.params;
    db.get_plant_by_id([id, product_category])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  addPlant: (req, res) => {
    const db = req.app.get("db");
    let {
      name,
      price,
      product_description
    } = req.body;
    db.add_plant({
        name,
        price,
        product_description
    })
    .then(response => {
        res.status(200).send(response)
    })
  }
};

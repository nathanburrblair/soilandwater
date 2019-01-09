var AWS = require('aws-sdk')

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
      product_description,
      product_category
    } = req.body;
    db.add_plant({
        name,
        price,
        product_description,
        product_category
    })
    .then(response => {
        res.status(200).send(response)
    })
  },

  sign: function (filename, filetype) {
    var s3 = new AWS.S3();

    var params = {
        Bucket: process.env.SOME_BUCKET,
        Key: filename,
        Expires: 60,
        ContentType: filetype
    }

    s3.getSignedUrl('putObject', params, function (err, data) {
        if (err) {
            console.log (err);
            return err;
        } else {
            return data;
        }
    })
}
};

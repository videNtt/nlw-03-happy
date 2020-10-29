const Database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js');

module.exports = {
  index(req, res) {
    return res.render('index'); 
  },

  async orphanage(req, res) {
    try {
      const id = req.query.id;
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages where id = ${id}`);
      const orphanage = results[0];
      
      orphanage.images = orphanage.images.split(',');
      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends = orphanage.open_on_weekends == "0" ? true : false;

      return res.render('orphanage', {orphanage});
    } catch (error) {
      console.log(error);
      return res.send(`Erro consultando o orphanage: ${id}`)
    }
    return res.render('orphanage'); 
  },

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all(`SELECT * FROM orphanages`);
      return res.render('orphanages', { orphanages }); 
    } catch (error) {
      console.log(error);
      return res.send('Erro consultando todos os orphanages');
    }
  },

  createOrphanage(req, res) {
    return res.render('create-orphanage'); 
  },

async saveOrphanage(req, res) {
     const fields = req.body;
    
    // validar se todos os campos estão prenchidos
    if (Object.values(fields).includes('')) {
      return res.send('Todos os campos devem ser preenchidos!');
    }

    try {
      const db = await Database;
      await saveOrphanage(db, {
        name: fields.name,
        lat: fields.lat,
        lng: fields.lng,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends
      });
      return res.redirect('/orphanages');
    } catch (error) {
      console.log(error);
      return res.send('Erro ao inserir um novo orfanato');
    }

  }
}
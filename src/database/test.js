const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
  // inserir dados na tabela
  /* 
  await saveOrphanage(db, {
    name: "Lar de crianças",
    lat: "-21.1966118",
    lng: "-50.533232",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "18999992222",
    images: [
      "https://images.unsplash.com/photo-1598454444299-62f9d5d5dc48?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 9h até 19h",
    open_on_weekends: "1"
  })

  await db.run(`
  INSERT INTO orphanages (
    name,
    lat,
    lng,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
  ) VALUES (
    "Lar das meninos",
    "-21.5312328",
    "-50.198611",
    "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    "18999991111",
    "https://images.unsplash.com/photo-1603138461811-12e7b38580e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    "Horário de visitas Das 8h até 18h",
    "0"
  );
  `) 
  
  // consultar dados na tabela
  const selectedOrphanages = await db.all(`SELECT * FROM orphanages`)
  console.log(selectedOrphanages);

  // consultar apenas um orfanato pelo id
  const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "1"`)
  console.log(orphanage);  

  // deletar dado da tabela
  await db.run(`DELETE FROM orphanages WHERE id = "4"`)
  */
})
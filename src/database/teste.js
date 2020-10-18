const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    // inserir dados na tabela
      await saveOrphanage(db, {
        id: 1,
        lat: "-27.2192937",
        lng: "-49.6484283",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 15 anos que se encontre em situação de risco e/ou vulnerabiliade social.",
        whatsapp: "98959668",
        images: [
            "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir à vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    }) 

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orphanage, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})

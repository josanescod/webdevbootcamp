const { MongoClient } = require("mongodb");


async function main(){
    //url
    const url = "mongodb://127.0.0.1:27017/fruitsDB";

    const client = new MongoClient(url);

    try {
        await client.connect();
        await console.log("connection successfully");
        //await listDatabases(client);
        await createListing(client, {
            _id:2,
            name: "Lemon",
            units: 10
        })

    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

async function createListing(client,newListing) {
   const result = await client.db("sample_fruit").collection("acidFruits").insertOne(
        (newListing)  );

    console.log(`New listing created with following id: ${result.insertedId}`);
}




async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases");
    databasesList.databases.forEach(db => { console.log(`- ${db.name}`);
        
    });
}
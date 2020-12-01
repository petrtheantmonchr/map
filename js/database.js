const MongoClient = require('mongodb').MongoClient;
const objectId = require("mongodb").ObjectId;
const uri = "mongodb+srv://samuelandrewbondoc:2muchf00d%24tufF@petrmap.mxjwj.mongodb.net/players?retryWrites=true&w=majority";
const masterClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});


var masterDatabase;
var masterCollection;
var localId;

function initData() {
	masterDatabase = client.db("petr");
	masterCollection = masterDatabase.collection("players");
}

// async function main(){
    // *
     // * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     // * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    
 
    // try {
		
		// const database = client.db("petr");
		// const collection = database.collection("players");
		
		// await collection.insertOne(newItem);
		// console.log(newItem._id);
 
    // } catch (e) {
        // console.error(e);
    // } finally {
		// break;
        //await client.close();
    // }
// }


async function createPlayerData(data) {
	await masterCollection.insertOne(data);
	localId = data._id;
}

async function getPlayerData(id) {
	await masterCollection.find({_id: id});
	return "";
}

async function setPlayerData(id, vals) {
	await masterCollection.update(vals);
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
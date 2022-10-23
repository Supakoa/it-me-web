import { MongoClient, ServerApiVersion, Db } from 'mongodb';
import { ConnectionType } from 'types/libs/connection.model';

if (!process.env.DB_URL) {
  throw new Error('Please add your Mongo URI to environment at next.config.js');
}

const URL: string = process.env.DB_URL;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  serverApi: ServerApiVersion.v1,
};

let client: MongoClient | null = null;
let database: Db | null = null;

export async function connectToDatabase(databaseName?: string): Promise<ConnectionType> {
  const dbName: string | undefined = databaseName ?? process.env.DB_DATABASE;
  try {
    if (client && database) {
      return { client, database };
    }
    client = await new MongoClient(URL, options).connect();
    database = client.db(dbName);
    console.log(`Successfully connected to database: ${database.databaseName}`);
  } catch (e) {
    console.error(e);
  }
  return { client, database };
}

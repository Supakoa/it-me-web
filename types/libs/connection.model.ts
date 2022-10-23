import { MongoClient, Db } from 'mongodb';

interface IConnection {
  client: MongoClient | null;
  database: Db | null;
}

export declare type ConnectionType = IConnection;

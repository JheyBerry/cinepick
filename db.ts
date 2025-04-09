import { DataAPIClient } from '@datastax/astra-db-ts';

const { ASTRA_DB_APP_TOKEN, ASTRA_DB_API_ENDPOINT } = process.env;

if (!ASTRA_DB_APP_TOKEN || !ASTRA_DB_API_ENDPOINT) {
  throw new Error("Missing ASTRA environment variables");
}

const client = new DataAPIClient(ASTRA_DB_APP_TOKEN, {
  httpOptions: {
    client: "fetch",
  },
});

const db = client.db(ASTRA_DB_API_ENDPOINT);

export default db;

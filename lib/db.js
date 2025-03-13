import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

export async function executeQuery(query, params = []) {
  try {
    const result = await client.execute({
      sql: query,
      args: params,
    });
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
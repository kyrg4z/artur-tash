import { createClient } from '@libsql/client';
import 'server-only';

// Resolve database URL and auth token from common env var names used by Turso/libsql
// Supported:
// - TURSO_DB_URL / TURSO_DB_AUTH_TOKEN (current code)
// - TURSO_DATABASE_URL / TURSO_AUTH_TOKEN (Turso CLI default)
// - LIBSQL_DB_URL / LIBSQL_DB_AUTH_TOKEN (libsql client default)
const dbUrl =
  process.env.TURSO_DB_URL ||
  process.env.TURSO_DATABASE_URL ||
  process.env.LIBSQL_DB_URL;

const dbToken =
  process.env.TURSO_DB_AUTH_TOKEN ||
  process.env.TURSO_AUTH_TOKEN ||
  process.env.LIBSQL_DB_AUTH_TOKEN;

if (!dbUrl) {
  // Surface a clear error early so authentication issues are obvious
  throw new Error(
    'Database URL is not configured. Please set one of: TURSO_DB_URL, TURSO_DATABASE_URL, or LIBSQL_DB_URL.'
  );
}

// Note: For local file-based SQLite (file: or http(s) without auth), token may be optional.
const client = createClient({
  url: dbUrl,
  authToken: dbToken,
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

export { client };

import { run, all } from "./db.js";
async function main() {
  await run(
    `
    CREATE TABLE books(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE
     )
    `,
  );

  const statement = await run(
    `
    INSERT INTO books(title) 
    values('bookA')
`,
  );
  console.log(`追加されたレコードのID${statement.lastID}`);
  const rows = await all(
    `
          SELECT * FROM books
          `,
  );
  console.log(rows);
  await run(`
               DROP TABLE books
              `);
}
main();

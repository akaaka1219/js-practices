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

  try {
    const statement = await run(
      `
    INSERT INTO books(title) 
    values(bookA)
`,
    );
    console.log(`追加されたレコードのID${statement.lastID}`);
  } catch (err) {
    console.error(err.message);
  }

  try {
    const rows = await all(
      `
          SELECT * FROM bookss
          `,
    );
    console.log(rows);
  } catch (err) {
    console.error(err.message);
  }

  await run(`
               DROP TABLE books
              `);
}
main();

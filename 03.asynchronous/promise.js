import { run, all } from "./db.js";

run(
  `
    CREATE TABLE books(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE
     )
    `,
)
  .then(() => {
    return run(
      `
    INSERT INTO books(title) 
    values('bookA')
`,
    );
  })
  .then((statement) => {
    console.log(`追加されたレコードのID${statement.lastID}`);
    return all(
      `
          SELECT * FROM books
          `,
    );
  })
  .then((rows) => {
    console.log(rows);
    return run(`
               DROP TABLE books
              `);
  });

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
    values(bookA)
`,
    );
  })
  .catch((err) => {
    console.error(err.message);
  })
  .then((statement) => {
    if (statement) {
      console.log(`追加されたレコードのID${statement.lastID}`);
    }
    return all(
      `
          SELECT * FROM bookss
          `,
    );
  })
  .then((rows) => {
    console.log(rows);
  })
  .catch((err) => {
    console.error(err.message);
  })
  .then(() => {
    return run(`
               DROP TABLE books
              `);
  });

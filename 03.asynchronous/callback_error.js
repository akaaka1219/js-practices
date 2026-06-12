import sqlite3 from "sqlite3";

const db = new sqlite3.Database(":memory:");

db.run(
  `
    CREATE TABLE books(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE
     )
    `,
  function () {
    db.run(
      `
    INSERT INTO books(title) 
    values(bookA);
`,
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`追加されたレコードのID${this.lastID}`);
        }
        db.all(
          `
          SELECT * FROM bookss
          `,
          function (err, rows) {
            if (err) {
              console.error(err.message);
            } else {
              console.log(rows);
            }
            db.run(`
               DROP TABLE books
              `);
          },
        );
      },
    );
  },
);

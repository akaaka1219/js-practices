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
    values('bookA');
`,
      function () {
        console.log(`追加されたレコードのID${this.lastID}`);
        db.all(
          `
          SELECT * FROM books
          `,
          function (err, rows) {
            console.log(rows);
            db.run(`
               DROP TABLE books
              `);
          },
        );
      },
    );
  },
);

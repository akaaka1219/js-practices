import minimist from "minimist";

const today = new Date();
const args = minimist(process.argv.slice(2), {
  default: {
    y: today.getFullYear(),
    m: today.getMonth() + 1,
  },
});

const year = args.y;
const month = args.m;

const firstDay = new Date(year, month - 1, 1).getDay();
const lastDate = new Date(year, month, 0).getDate();
const cells = [];
for (let i = 0; i < firstDay; i++) {
  cells.push(null);
}
for (let d = 1; d <= lastDate; d++) {
  cells.push(d);
}
console.log(`       ${month}月 ${year} `);
console.log("日 月 火 水 木 金 土");
for (let w = 0; w < cells.length; w += 7) {
  const oneWeek = cells.slice(w, w + 7);

  for (const day of oneWeek) {
    if (day === null) {
      process.stdout.write("   ");
    } else {
      process.stdout.write(String(day).padStart(2, " ") + " ");
    }
  }
  console.log();
}

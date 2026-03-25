#!/usr/bin/env node
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

const firstDate = new Date(year, month - 1, 1);
const lastDate = new Date(year, month, 0);

const cells = [];
for (let i = 0; i < firstDate.getDay(); i++) {
  cells.push(null);
}

for (let d = 1; d <= lastDate.getDate(); d++) {
  cells.push(d);
}

console.log(`${month}月 ${year}`.padStart(13));
console.log("日 月 火 水 木 金 土");

for (let startIndex = 0; startIndex < cells.length; startIndex += 7) {
  const week = cells.slice(startIndex, startIndex + 7);

  for (let dayIndex = 0; dayIndex < week.length; dayIndex++) {
    const day = week[dayIndex];

    if (day === null) {
      process.stdout.write(`   `);
    } else {
      process.stdout.write(
        dayIndex === week.length - 1
          ? `${String(day).padStart(2)}`
          : `${String(day).padStart(2)} `,
      );
    }
  }

  console.log();
}

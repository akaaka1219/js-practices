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

for (let i = 1; i <= lastDate.getDate(); i++) {
  cells.push(i);
}

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

for (let startIndex = 0; startIndex < cells.length; startIndex += 7) {
  const weekDays = cells.slice(startIndex, startIndex + 7);

  weekDays.forEach((day, dayIndex) => {
    if (day !== null) {
      const isLastColumn = dayIndex === weekDays.length - 1;
      const dayStr = String(day).padStart(2);
      const space = isLastColumn ? "" : " ";

      process.stdout.write(`${dayStr}${space}`);
    } else {
      process.stdout.write("   ");
    }
  });

  console.log();
}

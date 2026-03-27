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

function printCentered(text) {
  const calendarWidth = 20;
  const padding = Math.floor((calendarWidth - text.length) / 2);

  if (padding > 0) {
    console.log(" ".repeat(padding) + text);
  } else {
    console.log(text);
  }
}

printCentered(`${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

for (let startIndex = 0; startIndex < cells.length; startIndex += 7) {
  const weekDays = cells.slice(startIndex, startIndex + 7);

  for (let dayIndex = 0; dayIndex < weekDays.length; dayIndex++) {
    const day = weekDays[dayIndex];

    if (day === null) {
      process.stdout.write(`   `);
    } else {
      process.stdout.write(
        dayIndex === weekDays.length - 1
          ? `${String(day).padStart(2)}`
          : `${String(day).padStart(2)} `,
      );
    }
  }

  console.log();
}

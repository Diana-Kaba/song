"use strict";
let drink = prompt("Введите название напитка:");
for (let count = prompt("Введите количество напитка:"); count > 0; count--) {
  document.write(
    count +
      " bottles of" +
      " " +
      drink +
      " " +
      "on the wall,<br>" +
      count +
      " bottles of" +
      " " +
      drink +
      " " +
      ",<br> If one of those bottles should happen to fall<br>"
  );
}

document.write(
  "No more bottles of" +
    " " +
    drink +
    " " +
    "on the wall, no more bottles of" +
    " " +
    drink +
    ".<br>There's nothing else to fall, because there's no more bottles of" +
    " " +
    drink +
    " " +
    "on the wall."
);

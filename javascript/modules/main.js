import { getDom, onClick, getValue, setText } from "./calculator.js";
const firstNum = getDom("#input-number-1");
const secondNum = getDom("#input-number-2");

const addButton = getDom(".sum");
const subButton = getDom(".sub");
const mulButton = getDom(".mul");
const divButton = getDom(".div");
const resultDOM = getDom(".result");
onClick(addButton, function () {
  const result = getValue(firstNum) + getValue(secondNum);
  setText(resultDOM, result);
});
onClick(subButton, function () {
  const result = getValue(firstNum) - getValue(secondNum);
  setText(resultDOM, result);
});
onClick(mulButton, function () {
  const result = getValue(firstNum) * getValue(secondNum);
  setText(resultDOM, result);
});
onClick(divButton, function () {
  const result = getValue(firstNum) / getValue(secondNum);
  setText(resultDOM, result);
});

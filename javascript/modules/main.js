const firstNum = getDom(".input-number-1");
const secondNum = getDom(".input-number-2");

const addButton = getDom(".sum");
const resultDOM = getDom(".result");
onClick(addButton, function () {
  const result = getValue(firstNum) + getValue(secondNum);
  setText(resultDOM, result);
});

export function getDom(selector) {
  return document.querySelector(selector);
}

export function onClick(dom, callback) {
  dom.onclick = callback;
}

export function getValue(dom) {
  return parseInt(dom.value);
}

export function setText(dom, text) {
  dom.innerText = text;
}

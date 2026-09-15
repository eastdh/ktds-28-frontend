onload = function () {
  const image = document.querySelector("img");
  image.onmouseenter = function () {
    const ticket = document.querySelector(".ticket");
    ticket.style.setProperty("display", "block");
    css(ticket, {
      display: "block",
      ["font-size"]: "2rem",
      color: "red",
      ["background-color"]: "white",
    });
  };
  image.onmouseleave = function () {
    const ticket = document.querySelector(".ticket");
    removeCss(ticket, ["display", "font-size", "color", "background-color"]);
  };
};

function css(dom, styles) {
  if (dom) {
    for (let key in styles) {
      dom.style.setProperty(key, styles[key]);
    }
  }
}

function removeCss(dom, properties) {
  if (dom != null && dom != undefined) {
    properties.forEach(function (eachProp) {
      dom.style.removeProperty(eachProp);
    });
  }
}

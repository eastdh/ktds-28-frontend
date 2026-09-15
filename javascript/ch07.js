// onload = function () {
//   // 아이디가 "package-ticket-count"인 DOM에 대해
//   // oninput 이벤트가 발생하면
//   // 콘솔에 "Input!"이 출력되도록 한다.
//   // 동시에 input의 부모중 package에 있는
//   // data-price 값을 가져와 출력한다.

//   const ticketCount = document.querySelector("#package-ticket-count");
//   ticketCount.oninput = function (event) {
//     const package = this.closest(".package");
//     const price = package.dataset.price;

//     // 만약 input에 입력한 값이 비어있다면, 0으로 초기화해라.
//     if (!this.value) {
//       this.value = "0";
//     }

//     // let inputValue = parseInt(this.value);
//     // if (isNaN(inputValue)) {
//     //   inputValue = 0;
//     // }

//     const totalPrice = parseFloat(price) * parseInt(this.value);
//     // document.querySelector("#amount").textContent = totalPrice; // 문서의 크기가 커지면 느림!
//     const amount = package.nextElementSibling.querySelector("#amount");
//     amount.innerText = totalPrice;
//   };
// };

// window의 타입 Window
Window.prototype.afterRender = function (callbackFunction) {
  this.onload = callbackFunction;
};

// document의 타입 Document
Document.prototype.find = function (selector) {
  return this.querySelector(selector);
};

// DOM의 타입 Element
Element.prototype.next = function () {
  return this.nextElementSibling;
};

Element.prototype.find = function (selector) {
  return this.querySelector(selector);
};

window.afterRender(function () {
  const ticketCount = document.find("#package-ticket-count");
  ticketCount.oninput = function () {
    const package = this.closest(".package");
    const price = package.dataset.price;

    if (!this.value) {
      this.value = "0";
    }

    const amount = package.next().find("#amount");
    const totalPrice = parseFloat(price) * parseInt(this.value);
    amount.innerText = totalPrice;
  };
});

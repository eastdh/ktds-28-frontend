onload = function () {
  // priceDom.onclick = function () {
  //   alert("Click!");
  // };
  const greenBtns = document.querySelectorAll(".package-green-button");

  greenBtns.forEach(function (btn) {
    btn.onclick = function (event) {
      const price = this.closest(".package").dataset.price;
      const newP = document.createElement("p");
      newP.classList.add("package-ticket-price");
      newP.onclick = function () {
        alert("Click!");
      };
      newP.innerText = `From ${price}`;
      this.closest("div").after(newP);
      this.remove();
    };
  });
};

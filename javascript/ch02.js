window.onload = function () {
  const promotion = document.querySelector(".promo");
  console.log("promotion: ", promotion);
  console.dir(promotion);
  promotion.onclick = function (event) {
    // alert("클릭되었습니다.");
    console.log("event.target", event.target);
    console.log("this", this);
    // event.target.innerText += "클릭되었습니다.";
    this.innerText += "클릭!!";
  };
};

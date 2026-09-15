onload = function () {
  const greenBtns = document.querySelectorAll(".package-green-button");
  for (const greenBtn of greenBtns) {
    greenBtn.onclick = function (event) {
      // p 태그를 동적으로 생성
      const newParagraph = window.document.createElement("p");

      // p 태그의 Content 영역에 "From $399.99" 작성
      newParagraph.innerText = "From $399.99";

      // p 태그에게 "package-ticket-price" 클래스 할당
      newParagraph.classList.add("package-ticket-price");
      // 1. "package-button-area"의 내부 아래쪽에 p 태그를 추가
      //   * "package-button-area" DOM(Element)를 가져온다.
      const buttonArea = document.querySelector(".package-button-area");
      //   * "package-button-area" DOM 내부 아래에 p 태그를 추가한다.
      // buttonArea.append(newParagraph);
      // 2. "package-green-button"의 아래에 p 태그 추가
      event.target.after(newParagraph);
      // "package-green-button" 태그 제거
      event.target.remove();
    };
  }
};

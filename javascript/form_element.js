onload = function () {
  // 아이디가 email인 input에 oninput 이벤트가 발생하면
  // 해당 엘리먼트의 부모인 .page-123을 찾고
  // 부모의 자식 중 클래스가 email-value인 엘리먼트에
  // email의 value를 작성한다.
  const emailInput = document.querySelector("#email");
  emailInput.oninput = function () {
    const parent = this.closest(".page-123");
    const emailValue = parent.querySelector(".email-value");
    emailValue.textContent = this.value;
  };

  // 아이디가 jobs인 select에 onchange 이벤트가 발생하면
  // 해당 엘리먼트의 부모인 .page-124를 찾고
  // 부모의 자식 중 클래스가 job-value인 엘리먼트에
  // jobs의 value를 작성한다.
  const jobsSelect = document.querySelector("#jobs");
  jobsSelect.onchange = function () {
    const parent = this.closest(".page-124");
    const jobValue = parent.querySelector(".job-value");
    jobValue.textContent = this.selectedOptions[0].innerText;
  };

  // input태그 중 type이 radio 이면서 name이 age인 엘리먼트에
  // input[type=radio][name=age]
  // onchange 이벤트가 발생하면 해당 엘리먼트의 부모인 .page-125를 찾고
  // 부모의 자식 중 클래스가 age-value인 엘리먼트에
  // input의 value를 작성한다.
  const radioInput = document.querySelectorAll("input[type=radio][name=age]");
  radioInput.forEach(function (ri) {
    ri.onchange = function () {
      const parent = this.closest(".page-125");
      const ageValue = parent.querySelector(".age-value");
      const label = this.nextElementSibling;
      ageValue.textContent = label.innerText;
    };
  });

  //  체크박스 입력 다루기
  // 단, "전체 선택"이 포함되어있다.
  const checkboxes = document.querySelectorAll(
    "input[type=checkbox][name=favorate-genre]",
  );

  const checkAll = document.querySelector("#checked-all");
  checkAll.onchange = function (event) {
    checkboxes.forEach(function (cb) {
      if (cb.checked !== event.target.checked) {
        cb.checked = event.target.checked;
        cb.onchange();
      }
    });
  };

  const genres = document.querySelector(".checked-genres");
  let checkedGenres = [];
  checkboxes.forEach(function (cb) {
    cb.onchange = function () {
      const label = this.labels[0];
      const labelText = label.innerText;
      if (this.checked) {
        checkedGenres.push(labelText);
        if (checkedGenres.length === checkboxes.length) {
          checkAll.checked = true;
        }
      } else {
        checkedGenres = checkedGenres.filter((item) => item !== labelText);
        if (checkAll.checked) {
          checkAll.checked = false;
        }
      }
      genres.innerText = checkedGenres;
    };
  });

  // 최초 선택 상태 초기화
  checkboxes.forEach(function (cb) {
    cb.onchange();
  });
};

function calcNum(a = 0, b = 0, operator = "+") {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
}

function addAll() {
  let sum = 0;
  for (let value of arguments) {
    sum += value;
  }
  return sum;
}

function add(a, b) {
  let result = a + b;
  console.log("result", result);
  // undefined 반환
}

function getAddResult(a, b) {
  let result = a + b;
  // a + b 결과 반환
  return result;
}

// add, getAddResult 함수가 어디에 만들어져 있을까??
/*
  브라우저는 여러개의 tab을 동시에 실행시키는 애플리케이션.
  하나의 탭마다 별도의 웹페이지가 표시되는 역할.
  각 탭은 하나의 웹 페이지를 표시하기 위해서 "전역(Global)"범위의 상수를 사용한다.
  ==> window 상수 객체 (페이지의 정보, 함수, 객체, 배열, 등등...)

 */

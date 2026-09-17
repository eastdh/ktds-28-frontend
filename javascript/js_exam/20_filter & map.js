clear();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 배열의 모든 값들을 출력한다. 
// java의 consumer
 array.forEach(function (eachNumber) {
    console.log(eachNumber)
})


// 배열의 모든 값에 2를 곱한다. 
// => 배열의 데이터를 변경한다.
// java의 function
const doubled = array.map(function(eachNumber) {
    return eachNumber * 2;
})
doubled.forEach(function (eachNumber) {
    console.log(eachNumber)
})
// 배열의 값 중 3의 배수만 가져온다.
// java의 predicate
const filtered = array.filter(function(eachNumber) {
    return eachNumber % 3 === 0;
})
filtered.forEach(function (eachNumber) {
    console.log(eachNumber)
})

// 화살표 함수를 이용한 코드.
// Java Lambda와 동일! java: -> , JS: =>
// 단, 화살표 함수에는 this가 없다!
console.log("화살표 함수")

array.forEach((num) => console.log(num))

const doubled2 = array.map((num) => num * 2)
doubled2.forEach((num) => console.log(num))

const filtered2 = array.filter((num) => num%3 === 0)
filtered2.forEach((num) => console.log(num))


// array에서 모든 값에 2를 곱한 결과 중 3의 배수만 출력한다
// 화살표 함수로만 작성
array
    .map((num) => num * 2)
    .filter((num) => num%3 === 0)
    .forEach((num) => console.log(num))
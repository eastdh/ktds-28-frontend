// 구조 분해 할당
// 배열  생성
const arr = ["a", "b", "c"];

// 인덱스 별로 값을 가져오려면?
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);

const obj = {
  name: "abc",
  age: 40,
  address: "korea",
  sex: "male",
};

// 각 필드의 값을 가져오려면?
// const name = obj.name;
// const age = obj.age;
// const address = obj.address

const { name = "무명", age, job = "학생" } = obj; // key 값을 적어줘야 함!
console.log("name: ", name);
console.log("age: ", age);
console.log("job: ", job);

function print({ a, b, d = "ddd" }) {
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("d: ", d);
}

print({ a: "AA", b: "BB", c: "CC" });

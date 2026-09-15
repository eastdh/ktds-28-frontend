clear();

function Person(name) {
    this.name = name;
}
Person.prototype.birthYear = 1998;
Person.prototype.introduce = function() {
  // console.log("Prototype에서 출력한 this", this)  
    console.log("이름: ", this.name)
    console.log("출생년도: ", this.birthYear)
};

console.log(Person)
console.dir(Person)

const me = new Person("유동혁");
console.log(me)
console.log(me.name)
console.log(me.birthYear)
me.introduce();

clear() 
console.log ("String prototype 확인");
console.dir(typeof "abc");
console.dir("abc".__proto__)

let name = "유동혁"
String.prototype.appendPrefix = function (prefix) {
    return prefix + this;
}

name = name.appendPrefix("내 이름은 ")
console.log(name)


// fundcion과 this의 관계에 대해 설명

// function을 클래스처럼 사용할 때의 this
function Certificate(date, name, org) {
    this.date = date;
    this.name = name;
    this.org = org;
}
// 이는 함수이자 클래스이자 생성자이다.
// 옛날 문법!

// function 자체의 this
function callFunction() {
    console.log(arguments);
    console.log(this);
    console.dir(this);
}
// window가 출력됨!
// function의 this는 '호출한 '
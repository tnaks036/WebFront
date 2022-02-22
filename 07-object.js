// 방법 1. Object를 생성하는 것
let person = new Object(); // 새 객체 생성
// 속성 동적추가 -> 자바와 다르게 속성을 필요할 때 집어넣어주면 됨
// 속성 : property(데이터) + method(내장함수)
person.name = "홍길동";
person.age = 28;
person.showInfo = function(){
    let mesaage = `Name: ${this.name}, Age: ${this.age}`;
    console.log(mesaage);

};
// 객체 출력
console.log(person);

// 메서드 호출
person.showInfo();


// 객체 생성 방법 2 : Json 이용
person = {
    name: "홍길동",
    age : 28,
    showInfo: function() {
        let mesaage = `Name: ${this.name}, Age: ${this.age}`;
        console.log(mesaage);
    }
};

console.log(person);
person.showInfo();

// java 객체 -> 생성자(class)
// 객체 생성 : 방법 3. Prototype 가반 상속
const Member = function(name, position){
    this.name = name;
    this.position = position;
}
// -> 안쪽에 name과 age가 있는 함수가 됨

let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log(m1);
console.log(m2);

// JavaScript는 동적으로 속성을 추가할 수 있다.
// -> 필요한 속성을 마음대로 집어 넣을 수 있다. 

m1.sayHi = function(){
    console.log(`${this.name}님이 당신을 부릅니다.`);
}
console.log(m1);
m1.sayHi(); // 강백호님이 당신을 부릅니다.
// 동적으로 추가한 속성들은 해당 객체에서만 사용 가능
// m2.sayHi();
console.log("-------------------------------------")
console.log(m1.name)
console.log("-------------------------------------")
// member 함수를 상속받은 모든 인스턴스에 공통적인 속성을 공유하고자 한다면
// -> Prototype

Member.prototype.introduce = function(){
    console.log(`${this.name}님이 당신을 부릅니다.`);

}; // Member의 공유 영역에 메서드 추가

console.log(m1.constructor); // m1의 기반이 되는 객체
console.log(Member.prototype); // member의 공유 영역


// introduce는 m1과 m2의 constructor인 
// Member의 prototype 영역에 존재 -> 모든 객체 공유 가능
m1.introduce();
m2.introduce();
// 함수 
// 함수 선언식(Declaration)
function sum(a, b){ // function 함수명(매개변수 목록)
    return a + b; // 함수가 값을 반환할 때는 return
}

// 함수 사용
console.log(sum(10, 20));  // 30이 return될 것임 

// 함수 표현식(Expression) : 이름이 없는 함수 -> 익명 함수
const asum = function(a, b){  // 함수 이름이 없다. -> 이 함수를 할당받은 변수가 asum이니 asum이라 표현하면 됨
    return a + b ;
}
console.log(typeof asum, asum(10, 20));  // 30


// 매개 변수의 이해
// 함수의 선언과 상관없이 모든 JavaScript는 모든 인자값이 arguments라는 이름의 배열로 넘어온다.
function getNumberTotal() {// 인자 선언이 없다.
    // console.log("arguments", arguments);
    // 전달받은 모든 매개변수(숫자)를 합산 
    let result = 0 ;
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(getNumberTotal(1, 2, 3, 4, 5)); // -> 통째로 배열화해서 넘어올 수 있음  -> 넘어간 값(1, 2, 3, 4, 5)
console.log(getNumberTotal(1, 2, "3", 4, 5)); // -> "3" 이 문자열이 되어서 3345 (1+2) =3 문자열 4 5 



function getNumberTotal() {

    let result = 0 ;
    for (let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] == "number") { // number 이면
        result += arguments[i];
        }   
    }
    return result;
}

console.log(getNumberTotal(1, 2, 3, 4, 5)); 
console.log(getNumberTotal(1, 2, "3", 4, 5)); 
    



// JavaScript 함수는 1급 시민 
// function(함수)도  number, string 등의 객체와 동등한 권리
// 다른 함수의 인수로 전달도리 수 있다.

// 다른 함수의 인수로 전달되어서 함수의 내부에서 거꾸로 호출되는 것
// -> callback이라고 함

function calcUsingCallback(val1, val2, func) {
    // 전달된 func가 함수인가?
    if (typeof func == "function") { // 실행 가능한 함수이다.
        func(val1, val2); // -> callback
    }

}

calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1 + v2);

});

calcUsingCallback(3, 4, function(v1, v2) {
    console.log(v1*v2);
});

// ES6 화살표 표기법 =>
// 인수가 없는 함수
const f1 = function() {return "Hello"}
// const f1Arrow = () => {}  // 인수가 없고, 이렇게 표현하겠다
const f1Arrow = () => "Hello"; //() 생략 불가

console.log(f1(), f1Arrow());
// 인수가 1개 이상 
const f2 = function(name){return "Hello," + name};
const f2Arrow = name => "Hello," + name;

console.log(f2("Bit"), f2Arrow("Bit"));
// 함수의 스코프(범위)가 다르다 -> 내부적 작동 방식이 다르므로 유의해줘야한다.

// 인수가 2개 이상
const f3 = function(a, b){ return a + b};
const f3Arrow = (a, b) => {return a + b};

console.log(f3(3, 7), f3Arrow(3, 7));
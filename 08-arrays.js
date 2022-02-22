const v1 = new Array(10);  // 10개 짜리 빈배열
const v2 = new Array(); // 빈 배열
const v3 = new Array(1, "ABC", true); // 어떤 객체든 들어갈 수 있다. 
                // number, 문자열, 불린값
console.log(v1, v2, v3);
// legth 속성 : 요소의 수
console.log(v1.length, v2.length, v3.length);

// 리터럴로 생성(추천)
const v4 = []; // 빈배열 생성
const v5 = ["red", "green", "blue", "yellow"];
console.log(v4, v5);


// 객체도 배열처럼 접근할 수 있다.
const person = {
    name : "홍길동",
    age : 28
};

console.log(person['name']+ ":"+person['age']);

// 자바 스크립트 배열은 인덱스 엄격히 체크하지 않음
const arr =[];
console.log(arr.length);
// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2022;
console.log(arr);
console.log(arr.length);

// -------------------------------------------------------------------

// 배열 합치기 : concat
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루","새우젓"];

console.log(veges, sources);

const ingr = veges.concat(sources);
console.log(ingr);

// join: 특정 문자열을 기준으로 합친다 ->string
console.log("김장재료:", ingr.join(","));  // ","를 기준으로 문자열을 만든다

// push, pop : 뒤쪽에서 요소 삽입, 추출

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("Kiwi");  // 배열의 뒤에 요소를 추갛
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

// shift, push 
fruits.push("Pear");  // 맨 뒤에 요소 추가
console.log(fruits);
console.log(fruits.shift());    // 맨 앞으로부터 요소 추출
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);


// splice : delete + insert
fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인자의 갯수 1개 : 해당 인덱스 ~ 끝까지 추출한 후 제거
console.log(fruits);
console.log(fruits.splice(2)); // 2번 인덱스 ~ 끝까지 추출 후 제거
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인자의 갯수 2개 : 시작 인덱스, 갯수 추출 후 제거
console.log(fruits);
console.log(fruits.splice(2, 1)); // 2번 인덱스 ~ 1개 추출 후 제거
console.log(fruits);


fruits = ["Banana", "Orange", "Apple", "Mango"];
// 인자의 갯수가 3개 이상 : 시작 인덱스, 갯수, 추가할 아이템들
console.log(fruits);
console.log(fruits.splice(2, 1, "kiwi", "Pineapple"));
console.log(fruits);
// -> 가장 중요한 것이 splice임


// reverse(순서뒤집기), slice(일부 추출)
console.log(fruits.reverse()); // 반전
console.log(fruits);  //원본이 바뀜
// slice 일부 추출 -> 요소 삭제(x)
let slices = fruits.slice(1, 2); // start, end
console.log(slices)


// sort : 정렬 - 기본 오름차순 정렬
console.log(fruits);
fruits.sort(); // 오름차순 정렬  -> sort callback  확인하기
console.log("SORT ASC", fruits);
fruits.sort(function(v1, v2) {
    if(v1<v2) return 1; // 양수 -> v1이 순서가 뒤다
    if (v1>v2) return -1; // 음수 -> v1이 순서가 앞
    if(v1 == v2) return 0; // 0-> tnstjrk rkxek
});
console.log("SORT DESC:", fruits);

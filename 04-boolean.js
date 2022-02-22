//논리형(Boolean)
// 비교/논리 연산의 결과 -> true or false 
// 논리의 조합은 AND($$), OR(||), NOT(!)으로 조합
let v1; // 선언만 했고, 초기화 되지 않음 -> undefined
let v2 = null
console.log(typeof v1, typeof v2);
console.log(v2, typeof v2, v2 == null);


// undefined : 자바스크립트 인터프리터에게 허용된 타입
// null : 프로그래머가 임의로 설정하는 값

// undefined도 개발자가 설정해 줄 수 있는 값이다.
v2 = undefined;
console.log(v2, typeof v2, v2 == undefined);  // undefined인지 확인


// == vs ===
// == : 타입과 관계 없이 값만 비교
// === : 타입과 함께 값도 비교(Strict)
console.log(2022 == "2022"); // 단순 값의 비교
        // (number, String)
console.log(2022 ==="2022") ;  // 값과 함께 타입도 비교 -> 이런 방식을 추천함

// Boolean 객체를 이용한 논리값
// number, string이 비어 있으면 false, 내용이 있으면 true
console.log(Boolean("Java"), Boolean(""));
                 /// True           False   반환함
console.log(Boolean(2022), Boolean(0)); // number 
                /// True         False  -> 여기서 0은 비어있다고 판단함 


// Reackt, Vue.js

console.log(true && "JavaScript");  // JavaScript   ->  T&T :(true 둘다 비어있지 않았기에 값을 표시?) -> 앞에 참 -> 뒤에 값이 있으니 뒤에값 표시
console.log(false && "JavaScript");  // flase    -> T&&F : false 하나의 값이 비어있기에 flase

console.log(true || "JavaScript"); // true  -> 둘다 참을 표시
console.log(false || "JavaScript"); // JavaScript -> false와 javascript가 있으니 ㅓ
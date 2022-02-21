// String에 대한 이해
const s1 = "Modern JavaScript and Java";
const s2 = String("Modern JavaScript and Java");

console.log(typeof s1, typeof s2);
// 길이 확인: .lenght
console.log(s1, "Length:", s1.length);

// 문자열 추출 메서드
console.log(s1.charAt(7)); // 7번 인덱스의 문자
//s1[7] 이렇게해도 접근 가능
console.log(s1[7]);  // 배열처럼 사용 가능 -> 변경은 불가
console.log(s1.substring(7, 17));  // 7번 인덱스~17번 인덱스 이전까지
console.log(s1.substring(7))  // 7번 인덱스 ~ 끝까지

// 검색 메서드(중요)
// s1에서 문자열 Java 검색
let position = s1.indexOf("Java"); // s1에서 Java의 위치 검색
console.log(s1);
console.log("1번째 Java:", position);
position = s1.indexOf("Java", position + 4); // s1의 특정 위치부터 검색  / 원문에서 4만큼 이동시 뒤에 있는 java 검색이 가능
console.log("2번째 Java:", position);
position = s1.indexOf("Nothing"); // 없는 검색어의 검색 : -1
console.log("없는 검색어:", position);

// 뒤에서부터 검색
position = s1.lastIndexOf("Script"); // 뒤로부터 검색 11 -> 뒤로부터 검색한다고 음수가 나오는 것은 아님
console.log("뒤로부터 검색:", position); 


// 문자열 치환
console.log(s1);
console.log(s1.replace("JavaScript", "JS"));
s3 = s1.replace("JavaScript", "JS");  // const 변경불가 let 변경가능
console.log(s3);

// 좌우 화이트 스페이스 제거
console.log("                   Hello                       ".trim()); // 좌우 공백문자 제거

// ES6의 Template String(중요)
// 이스케이프 -> 주의
// \n : 개행
// \t : 탭
// \' : 작은 따옴표
// \" : 큰 따옴표
// \` : 백틱(ES6) -> 여러줄 문자열(탬플릿 스트릿)
// \& : 달러기호 (ES6에서 추가된 이스케이프)

// 예) 현재 기온은 00도 입니다 -> 문자열로 만들어야 함
let temp = 12; 
let message = "현재 기온은 " + temp + "도 입니다.";
console.log(message);

// 탬플릿 문자열 활용
message = `현재 기온은 ${temp}도 입니다.`
console.log(message);

// 여러줄 문자열도 탬플릿 문자열로 쉽게 만들 수 있다,
message = "예전에는 여러줄 문자열을 만드는 것이 \n쉽지 않았습니다.";
console.log(message);
message = `하지만 ES6에서는
아주 손 쉽게 
여러 줄 문자열을 만들 수 있습니다.`;
console.log(message);
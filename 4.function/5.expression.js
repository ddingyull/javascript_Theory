// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { } (이름없는 무명함수를 사용)
let add = function (a, b) { //함수도 객체이기 때문에 할당하는 것이 가능
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions) 
// : 함수자체를 값으로 바꿔서 호출할 수 있음 (홈페이지 불러오기 할 때 아주 가끔 사용할 수는 있으나 자주 사용되는 함수는 아님)
(function run() {
  console.log('😍');
})();

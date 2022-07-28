// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// undefined일 때만) 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}
add();

// Rest 매개변수 Rest Parameters 
// : 얼마나 많은 인자일지 몰라서 일단 배열로 받고 싶을 때 ...사용
function sum(a, b, ...numbers) {
  console.log(a); //1
  console.log(b); //2 
  console.log(numbers); //[3,4,5,6,7,8]
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

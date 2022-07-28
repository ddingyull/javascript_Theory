//BASIC
//함수와 매개변수의 이름을 직관적으로 만들 것
//적게라도 반복적이라면 함수화 시킬 것 


//함수 또한 object이기 때문에 가르키고있는 메모리가 있고 그 메모리는 또다른 hex를 참조하고 있음
function add(a, b) {
  console.log('function');
  return a + b;
}
const sum = add; //이 함수에서 sum의 메모리에 add의 메모리를 참조하고있음


// 사용예제 1
function sum(a, b) {
  console.log('function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} ✋`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));

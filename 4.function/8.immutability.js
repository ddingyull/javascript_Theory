//Immutability불변성!!을 유지하며 코딩을 해나가는 것이 중요

// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(=오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 : 값에 의한 복사
// 객체값 : 참조에 의한 복사 (메모리주소)
function display(num) {
  num = 5; // ❌ object인 경우 문제가 커질 수 있음
  console.log(num);
}
const value = 4;
display(value);
console.log(value);


//심각할 수 있는 예제
function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);


//변경할 것이라면 이렇게 함수를 만들어줘야한다
function changeName(obj) {   //- 이름부터 변경할 것 같은 이름으로 바꾼다 
  return { ...obj, name: 'Bob' };   //- 반환할 때는 새로운 오브젝트를 만든다
}

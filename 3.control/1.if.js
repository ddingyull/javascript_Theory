// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else {}
// if(조건1) { } else if(조건2) {} else {}
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😍');
}


// 조건이 true일 때 출력된다 (앞서 false, null 등은 false가 나옴)
if (2 < 1) {
  console.log('출력되면 안됨!');
}

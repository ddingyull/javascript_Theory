// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

//조건이 맞을 때까지 실행 
let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}


//무조건적으로 do의 조건문이 실행 된 후 조건이 맞을 때까지 실행 
do {
  console.log('do-while 아직살아있다!');
} while (isActive);

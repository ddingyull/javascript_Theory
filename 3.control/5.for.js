// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면  { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 💩
// for (;;) {
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    //맞다면 이 반복문을 출력하지만 아니라면 그냥 넘어가기, 
    //continue가 없다면 1.2.3...8.9.i가 드디어 10이되었다.10.11~ 
    //continue이 있다면 1.2.3...8.9.i가 드디어 10이되었다.11~ 
    continue;  
    console.log('i가 드디어 10이 되었다!');
    break;    //이 반복문을 실행하고 for문 자체를 멈추기
  }
  console.log(i);
}

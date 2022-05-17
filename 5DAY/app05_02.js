// var hoisting test
// 어디에 선언하던지 최상위로 끌어올려서 실행
// 변수는 선언이 되었지만 값이 할당된 상태는 아님
// {} 안에서만 사용이 된다.


// 값을 주고 선언을 해주어도 실행이 가능
// var로 선언되어 있지 않아도 변수명 = 값 할당이 되면 var testVar = 2;로 할당된 것처럼 동작

// console.log(testVar);
// testVar = 2;
// var testVar;
// console.log(testVar);


// 오류발생
// 아래서 선언이 되어있지 않은데 위에서 호출하는 경우
// console.log(testVar3);
// testVar3 = 10;

// undefined
// console.log(testVar4);
// testVar4 = 10;
// var testVar4;


// {} 안에서만 사용이 가능하다
// {
//     let age = 28;
//     console.log("inner: "+age);
// }
// console.log("outer: " +age);


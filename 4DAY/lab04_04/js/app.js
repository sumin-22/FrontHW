/** JavaScript
 * - 웹에서 동적으로 데이터나 DOM을 조작하기 위한 언어
 * - 웹에서 사용하는 클라이언트(WebBrowser) 및 서버(Node.js)용 언어
 * 
 * JavaScript
 * -현재는 JavaScript library나 framework가 함께 사용된다
 * JavaScript(VanillaJS)
 * Angula(Google) -> React.js(Meta, facebook) -> Vue.js(EvanYou) -> Typescript -> ? Svelte
 * JQuery : Java - SpringFramework와 역할상 비슷하다고 생각하면 된다
 *          Javascript가 해야할 많은 내용을 간단하게 사용할 수 있도록 구현된 library
 * 
**/

// Javascript에서 일반적으로 말하는 객체
// Javascript에서 중요한 것은 객체를 구성하는 모양
// 아래와 같은 형태의 객제는 가장 일반적이기도 하지만 이를 literal(값) 형태의 객체

// let coffee ={
//     type: "라떼",
//     price: 5500
// }
// console.log(coffee);

// 값을 변수에 대입해서 출력해보는 방법
// let coffeeType = "라떼";
// let coffeePrice = 5500;
// console.log(coffeeType);
// console.log(coffeePrice);

let coffee = {
    type: "Americano",
    price: 4000,
}
// 리터럴 객체에서 값을 가져오는 방법
console.log(coffee.type);
console.log(coffee.price);
console.log(coffee["type"]);
console.log(coffee["price"]);

// 리터럴 객체에서 없는 속성을 가져오는 경우
console.log(coffee.name); //undefined 값을 가져온다

// 빈 객체를 선언하는 경우
let obj = {};
console.log(obj);

// 변수나 객체를 선언할 때 사용하는 선언자
// let : 값을 다시 할당할 수 있으며 {} 안에서만 값이 유효하다
//       local variable
// const : 변하지 않는 상수 값을 정의할 때 사용
//         const로 선언한 변수에 값을 다시 할당하게 되면 오류가 발생
//         const PI = 3.14, const LOCAL_URL = "https://www.daum.net";

const coffee1 = {
    type: "Capuccino",
    print: 6000
}

console.log(coffee1.type);

// 맨 마지막 문장에서는 ';'을 붙여준다
// Javascript에서 ';'를 사용하지 않는 경우도 있는데 이럴때는 맨 마지막 문장에서 enter를 사용하면 된다
// 그렇게되면 다음 문장으로 인식을 함

// 성능 때문에 Javascript의 용량을 최소로 줄이는 경우가 발생할 수 있기 때문에 맨 마지막에는 ';'을 붙이는 것이 좋다
// 대소문자구분 꼬옥~!


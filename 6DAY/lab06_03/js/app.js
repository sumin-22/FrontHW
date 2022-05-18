/**
 * arrow function
 * 브라우저에서 테스트 할 수 있는 API
 * setTimeout
 * 
 setTimeout(function(){
     console.log("화살표 함수입니다");
    },1000);

이렇게 작성을 하면 function을 만들어야한다.
조금더 간단하게 작성해보기

setTimeout(()=>{
    console.log("화살표");
},1000);

일반적인 함수
const simpleFunc = function(){
    console.log(`simple function`);
}
simpleFunc();

화살표 함수는 annonymous 함수이다. 
아규먼트가 없는 화살표 함수
const simpleFunc2 = () => console.log("simple2")
simpleFunc2();

아큐먼트가 있는 화살표 함수
const add = (a,b) => a+b;
console.log(add(1,2));
const add1 = function(a,b){
    return a+b;
}
*/

/**
 * default parameter (디폴트 파라미터)
 * es6 추가
 function showMessage (message, from="V"){
     console.log(`${message} by ${from}`);
    }
    console.log(showMessage('Hi!', 'JK'));
 */

/**
 * if문 
 * 
 * if(조건식){
 *  조건식이 참일경우 실행되는 부분
 * }
 * 조건식이 거짓일 경우 실행되는 부분
 * 
 * if(조건식){
 *  조건식이 참일경우 실행되는 부분
 * }else{
 * 조건식이 거짓일 경우 실행되는 부분
 * }
 * 
 *
 */

/**
 * 반복문 while()
 * 
 * while(조건식){
 *      조건식이 참일경우에만 이 문장을 반복한다
 * }
 */

/**
 * Rest Parameter
 * 표현 : ...args
 * Rest 파라미터는 배열형태로 값을 전달한다
 function printArr(...args){
    for(let i =0; i <args.length; i++){
        console.log(args[i]);
    }
};
printArr('javascript','java','spring');
*/

/** 
 * for ... of 값이 있으면 출력
*/
function printArr(...args){
    for(const arg of args){
        console.log(arg);
    }
};
printArr('javascript','java','spring');




/** 
document.querySelector("div").addEventListener("click", function({type}){
    // console.log(target.tagName)
    // console.log(target.innerText);
    console.log(type);
});
*/

/**
 * type을 확인하기 위해서는 type이라는 이름을 주고 출력 (event type)
 * targer,type은 지정된 예약어이기때문에 다른 이름으로 받아올 수 없다
 * 
    event -> e 
    target - elemetn(<div>)
 */

document.querySelector("div").addEventListener("click", function({type,target}){
    console.log(type,target.tagName);

    console.log("eval=",eval(1+2));
    console.log(`<${target.tagName}> div 테스트 </${target.tagName}>`);
});
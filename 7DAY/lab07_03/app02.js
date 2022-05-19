/**
const element = document.querySelector("p");
const myObj = {
    register(){
        element.addEventListener("click",function(evt){
            this.printData();
        })
    },
    printData(){
        console.log("click!!");
    }
}
myObj.register();
 */

/**
 * 아까전에 사용했던 arrow function 사용
 * 클릭 이벤트가 발생했을 때 context가 유지되면서 함수호출이 가능해진다.
 * 따라서 결과값이 click이 출력
 */
const element = document.querySelector("p");
const myObj = {
    register(){
        element.addEventListener("click",(evt)=>{
            this.printData();
        })
    },
    printData(){
        console.log("click!!");
    }
}
myObj.register();

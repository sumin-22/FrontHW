/**
 * arrow function을 확인해 본다.
 * arrow function으로 사용한 API가 setTimeout이다.
 * web brower 띄우고 javascript를 실행한다.
 */

/** 
setTimeout(function(){
    console.log("HI~!");
},1000)

//arrow function
setTimeout(() =>{
    console.log("bye~!");
},2000);
*/

//this context of arrow function
/** 
const myObj = {
    runTimeout(){
        setTimeout(function(){
            // 이 영역에서 this는 window
            console.log(this === window);
        },2000);
    }
}
myObj.runTimeout();
*/
/** 
const myObj = {
    runTimeout(){
        setTimeout(function(){
            // 현재의 영역에서 this는 window를 가리키고 있어서 window.printData()라는 function은 존재 X
            this.printData();
        },1000);
    },
    printData(){
        console.log("print data 출력");
    }
}
myObj.runTimeout();

const myObj = {
    runTimeout(){
        setTimeout(function(){
            // 현재의 영역에서 this는 window를 가리키고 있어서 window.printData()라는 function은 존재 X
            this.printData();
        }.bind(this),1000);
    },
    printData(){
        console.log("print data 출력");
    }
}
myObj.runTimeout();
*/

//bind() 함수 말고 arrow function을 적용
//bind()를 생략한 상태에서도 this가 context를 유지하고 있다고 보면 된다.
//arrow function은 context를 유지해 주기 때문.
// const myObj = {
//     runTimeout(){
//         setTimeout(()=>{
//             console.log(this===window);
//             this.printData();
//         },1000);
//     },
//     printData(){
//         console.log("print data 출력");
//     }
// }
// myObj.runTimeout();
/** 
function My(coffee) {
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`내가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  function Your(coffee) {
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`너가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  // 출력 해보기
  const my = new My('아메리카노');
  const your = new Your('라떼');
  my.printCoffee();
  your.printCoffee();
  
  your.printCoffee = my.printCoffee;
  your.printCoffee();
  my.printCoffee();
  */

//Arrow
function My(coffee) {
    this.coffee = coffee;
    this.printCoffee = () => {
      console.log(`내가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  function Your(coffee){
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`너가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  // 출력 해보기
  const my = new My('아메리카노');
  const your = new Your('라떼');
  my.printCoffee();
  your.printCoffee();
  
  your.printCoffee = my.printCoffee;
  your.printCoffee();
  my.printCoffee();

  
  

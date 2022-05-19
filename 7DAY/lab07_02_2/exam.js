/**
 * People
 * this.name 프로퍼티를 가짐
 * this.age 프로퍼티를 가짐
 * this는 상황에 따라 가리키는 범위가 다르다. 지금 현재 실행되는 영역의 바로 바깥을 가리킴.
 * 
 */
/** 
class People{
    //생성자는 값을 초기화 할 때 사용
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`${this.name}은 ${this.age}살 입니다`);
    }
}
                   //생성자 호출
const people = new People("김태형",28);
people.show();
*/

/**
 * 간단한 객체 생성

const name = "정국";
const age = 26;

// 간단하게 객체를 생성하면 이런식으로 값을 설정할 수 있다.
const obj ={
    name: name,
    age: age
}
*/

// function getObj(){
//     const name2 = "V"
//     const getName2 = function(){
//         return name2;
//     }
//     const setName = function(newName){
//         name2 = newName;
//     }
//     const printName = function(){
//         console.log(name2);
//     }
//     return {
//         getName2:getName2,
//         setName:setName
//         /** 
//          * getName2(파라미터) : getName2 위에 있는 함수 자체
//          * setName(파라미터) : setName 위에 있는 함수 자체
//          */
//     }
// }

/** 
let obj2 = getObj();
console.log(obj2);

console.log(obj2.getName2());

const obj3 = getObj();
console.log(obj3);
*/
/**
 * Java 클래스기반 객체지향 언어
 * Javascript 프로토 타입 기반 객체지향 언어
 * - 위에 선언하지 않아도 값을 넣을 수 있다.
 */

class Coffee {
    constructor(type,price){
        this.type = type;
        this.price = price; 
    }

    //obj.propName을 사용해 프로퍼티를 읽으려고 할 때
    get type(){
        return this._type;
    }

    //obj.propNAme = value으로 프로퍼티에 값을 할당하려 할 때
    set type(value){
        this._type = value;
    }
}

const coffee = new Coffee("라떼", 5000);
console.log(coffee.type);
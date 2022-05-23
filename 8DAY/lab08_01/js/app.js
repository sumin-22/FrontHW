/**
 * closure(클로저)
 * - 함수가 정의될 때의 렉시걸 환경을 기억하는 함수를 말한다 (etc)
 * - 함수가 호출된 이후에도 메모리에 값이 존재해 외부에서 접근할 수 있는 방법
 */
/**
 * 
 * 함수가 시행한 이후에도 값이 남아있어 외부에서 접근이 가능하다
function createCounterClosure(){
    let count = 0;
    return {
        increase: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    }
}

const count1 = createCounterClosure();
const count2 = createCounterClosure();

count1.increase();
count2.increase();
console.log("counter1의 값: " + count1.getCount());
console.log("counter2의 값: " + count2.getCount());

function genelralFunc(){
    let count = 0;
    return count++;
}
console.log(genelralFunc());
*/

/**
 * Promise
 * - ES2015(es6)
 * 
 * Promise 객체는 다음과 같은 세가지 상태를 가진다
 * 1) 대기중(pendding): 아직 결과가 없는 상태, 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
 * 2) 이행됨(Fullfilled): 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. 이 때 결과로서 하나의 값이 전달됨
 * 3) 거부됨(rejected): 비동기 처리가 실패한 상태. 약속이 거부되고 그 결과로 거절된 이유를 전달
 * 
 * Promise 객체는 두가지의 메소드를 가진다.
 * 1) then(onFullFilled, onReject)
 *    - 약속이 완료됐을 때 호출될 함수를 정리
 *    - 이때 첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행되었을 때 호출
 *    - 두번째 인자로 전달된 함수는 거부됐을 때 호출
 *    - 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달
 * 2) catch(onReject)
 *    -  약속이 거부됐을 때 호출될 함수(onReject)를 등록
 */

function promiseForHomework(mustDo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Doing Homework");
            if(mustDo){
                resolve({
                    result: 'homework - result'
                });
            } else{
                reject(new Error("lazy"));
            }
        },3000);
    });
}
const promiseA = promiseForHomework(true);
console.log("promiseA 출력완료");

promiseA.then(v => console.log(v));


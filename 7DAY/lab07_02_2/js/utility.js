/**
 * log 함수를 다른 곳에서도 사용하기 위해서 export 사용
 * const와 export default를 같이 사용하면 오류 발생
 * cosnt util = {}; 만들어주고
 * 맨 마지막에 export default 사용
 */
const util = {
    log(data){
        console.log(data);
    }
}

export default util;
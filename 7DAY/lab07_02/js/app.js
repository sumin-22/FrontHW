import {log,getTime,getCurrentHour,MyLogger2} from './myLogger.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Home</p>`;
log("!!!");
log(getTime());
log(getCurrentHour());
log(`getTime is ${getTime()}`);

// 객체를 생성해야 사용할 수 있다
const logger = new MyLogger2();
log(`lectures of Poly are ${logger.getLectures()}`);
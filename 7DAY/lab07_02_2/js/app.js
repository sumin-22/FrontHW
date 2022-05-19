import PolytechLec from './PolytechLec.js';
import util from './utility.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Home</p>`;
util.log("!!!");
// util.log(getTime());
// util.log(getCurrentHour());
// util.log(`getTime is ${getTime()}`);

// 객체를 생성해야 사용할 수 있다
// const logger = new MyLogger2();
// log(`lectures of Poly are ${logger.getLectures()}`);

const pt = new PolytechLec();
util.log(`current hour is ${pt.getCurrentHour()}`);
util.log(`lectures of Polytech are ${pt.getLectures()}`);
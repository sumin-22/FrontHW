var i = 1, j = 1;
while (i > 3) { // 변수 i의 초깃값은 1이기 때문에 이 while 문은 한 번도 실행되지 않음.
document.write("i : " + (i++) + "<br>");
}
do { // 변수 j의 초깃값은 1이기 때문에 이 do / while 문은 단 한 번만 실행됨.
document.write("j : " + (j++) + "<br>");
} while (j > 3);

var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
document.write(i + " ");
}
for (var i in arr) { // 위와 같은 동작을 하는 for / in 문
document.write(i + " ");
}


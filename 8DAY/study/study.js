var Dog = function(color, name, age) { //생성자 constructor
    this.color = color;
    this.name = name;
    this.age = age;
    }
    
var myDog = new Dog("흰색", "마루", 1);
myDog.family = "시베리안 허스키"; // 품종에 관한 프로퍼티를 추가함.
myDog.breed = function() { // 털색을 포함한 품종을 반환해 주는 메소드를 추가함.
    return this.color + " " + this.family;
}

/* 결론적으로 MyDog객체에 추가적인 변수가 위치하게됨
var MyDog = {
family: "시베리안 허스키";
breed:function() {return this.color + " " + this.family;}
}
*/
// document.write("우리 집 강아지는 " + myDog.breed() + "입니다.");

Dog.prototype.family = "시베리안 허스키";
Dog.prototype.breed = function(){
    return this.color + " " + this.family; 
}
var hisDog = new Dog("갈색","콩이",3);
document.write("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 "
+ hisDog.family + "입니다");


var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
    }

var lee = {
    name:'lee',
    first:100, second:200,
    }

lee.__proto__ = kim;
document.write("lee.__proto__ = kim ->", lee.sum());

/**
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("흰색", "마루", 100);

for (key in myDog) {
    document.write(myDog[key])
}
 */
    


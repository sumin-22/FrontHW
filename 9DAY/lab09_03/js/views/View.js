//console에 출력할 때 어느 위치인지 확인할 수 있도록 설정
const tag = "[View]";

export default{
    // element가 들어오면 그대로 세팅하는 메소드
    init(element){
        if(!element) new element;
        this.element = element;
        return this;
    },
    // 이벤트와 이벤트가 처리될 핸들러를 묶어준다.
    on(event, handler){
        this.element.addEventListener(event,handler);
        return this;
    },
    //숨기는 기능
    hide(){
        this.element.style.display = 'none';
    },
    //보이는 역할
    show(){
        this.element.style.display='';
    }
}
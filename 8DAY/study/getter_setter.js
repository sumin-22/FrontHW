let user = {
    get name() {
        return this._name;
    },
    set name(value) {
     if (value.length < 4) {
        alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
        return;
        }
    this._name = value;
    }
};
    user.name = "pete";
    alert(user.name); // Pete
    user.name = " "; // 너무 짧은 이름을 할당하려 함
let inputBox = document.getElementById('inputtodo');
let addTodo = document.getElementById('btn');
let toDoList = document.getElementById('toDoList');
let clear = document.getElementById('last_btn');

btn.addEventListener('click', function(){
    var list = document.createElement('li');
    if(!inputBox.value)
        alert('내용을 입력해주세요');
    else
    {
        list.innerText = inputBox.value;  
        toDoList.appendChild(list);      
        inputBox.value= "";     
    }
    list.addEventListener('click', function(){
        toDoList.removeChild(list);
    })
    last_btn.addEventListener('click', function(){
        toDoList.removeChild(list);
    })
})


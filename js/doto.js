const toDoForm = document.getElementById("todo_form");
const toDoList = document.getElementById("todo_list");
const toDoInput=document.getElementById("todo_input");
const deleteBtn=document.getElementById("delete_btn");
let list;
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    checkBox.type="checkbox";
    span.innerText=newTodo;
    li.appendChild(checkBox);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}

function deleteToDo(){
    let removeList=[];
    list=toDoList.getElementsByTagName("li");
    for(let item of list){
        if(item.childNodes[0].checked) removeList.push(item);
    }
    for(let item of removeList){
        item.remove();
    }
}

toDoForm.addEventListener('submit',handleToDoSubmit);
deleteBtn.addEventListener('click',deleteToDo);
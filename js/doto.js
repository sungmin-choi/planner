const toDoForm = document.getElementById("todo_form");
const toDoList = document.getElementById("todo_list");
const toDoInput=document.getElementById("todo_input");
const deleteBtn=document.getElementById("delete_btn");

let toDos=[];
if(localStorage.getItem("todos")){
    let loadToDo=JSON.parse(localStorage.getItem("todos"));
    for(let todo of loadToDo){
        paintToDo(todo);
    }
}
function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    checkBox.type="checkbox";
    span.innerText=newTodo;
    checkBox.classList.add("todo_chcbox");
    li.appendChild(checkBox);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    toDos=JSON.parse(localStorage.getItem("todos"));
    const newToDo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

function deleteToDo(){
    let removeList=[];
    list=toDoList.getElementsByTagName("li");
    for(let item of list){
        if(item.childNodes[0].checked) removeList.push(item);
    }
    for(let item of removeList){
        let deleteitem=item.childNodes[1].innerText;
        let index=toDos.indexOf(deleteitem);
        toDos.splice(index,1);
        item.remove();
    }
    saveToDos();
}


toDoForm.addEventListener('submit',handleToDoSubmit);
deleteBtn.addEventListener('click',deleteToDo);
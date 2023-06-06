const inputBox =document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const   todoList=document.getElementById('todoList')

let editTodo=null;

const addTodo=()=>{
    const inputText=inputBox.value.trim();
    if(inputText.length<= 0)
    {
      alert('you must write something in your ToDo')  
        return false
    }
    if(addBtn.value==="Edit"){
        editTodo.target.previousElementSibling.innerHTML=inputText
        addBtn.value="Add"
        inputBox.value=""
    }
    else{
    // adding li in p tag and both in ul tag with its input
    const   li =document.createElement('li');
    const   p =document.createElement('p');
    p.innerHTML=inputText;
    li.appendChild(p);
    //edit button
    const editBtn=document.createElement('button')
    editBtn.innerHTML="Edit"
    li.appendChild(editBtn)
    editBtn.classList.add('btn')
    editBtn.classList.add('editbtn')
    
    
    //   making delete button in list
        const deleteBtn=document.createElement('button')
        deleteBtn.innerHTML="Remove"
        li.appendChild(deleteBtn)
        deleteBtn.classList.add('btn')
        deleteBtn.classList.add('deletebtn')

    todoList.appendChild(li)
    inputBox.value=""
    
    saveLocalTodo(inputText);
}
}
//delete edit function
const updatetodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement)
    }
    if (e.target.innerHTML==="Edit"){
        inputBox.value=e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit"
        editTodo=e;
}
}
 //localy storing the data
 const saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }
    else{
    todos=JSON.parse(localStorage.getItem('todos'))

    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
 }
addBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', updatetodo)
const title= document.getElementById("title")
const description=document.getElementById("description")

submit.addEventListener("click",(e)=> {
    e.preventDefault();
    let todos=JSON.parse(localStorage.getItem("todo")) || [];
    let titleValue=title.value;
    let descValue=description.value
    todos.push({title:titleValue,desc:descValue})
    localStorage.setItem("todo",JSON.stringify(todos));
    renderTodos();
})
function renderTodos() {
    title.value="";
    description.value="";
    let todos= JSON.parse(localStorage.getItem("todo")) || [];
    todo.innerHTML="";
    todos.forEach((item,index) => {
        todo.innerHTML+=`
        <div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
        <button onlick="deleteTodo(${index})">Delete</button>
        </div>`
    });

}
function deleteTodo(index) {
    let todos=JSON.parse(localStorage.getItem("todo")) || [];
    todos.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(todos));
    renderTodos();
}
renderTodos();

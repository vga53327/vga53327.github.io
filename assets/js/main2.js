var containerDiv = document.getElementById("my_hw1");
var charArray = containerDiv.innerHTML.split("");

function divWrapper(x, index) {
  return `<div class="my_text" style="animation-delay: ${index}s">${x}</div>`
}

var javascript_result = charArray.map(divWrapper).join("")

containerDiv.innerHTML = javascript_result

//---------------------------------------
var todolistDiv = document.getElementById("todolist")
var input = document.getElementById("input")
var todolist = getTodoListFromLocalStorage()


render()

function addTodo() {
    // console.log(todolistDiv)
    // console.log(input)
    todolist.push(input.value)
    render();
    save();
}

function removeTodo(index) {
  var newArray = []
  for(var i=0; i < todolist.length; i++) {
    if (i !== index) {
      newArray.push(todolist[i])
    }
  }
  todolist = newArray;
  render();
  save();
}

function render() {
    var result = ""
    for (var i = 0; i < todolist.length; i++) {
      result += `<div class='todo'><button onclick='removeTodo(${i})'>刪除</button><div>${todolist[i]}</div></div>`
    }
    todolistDiv.innerHTML = result
}

function save() {
  localStorage.setItem("todolist", todolist.toString())
}

function getTodoListFromLocalStorage() {
  var todolistStr = localStorage.getItem("todolist")
  if(todolistStr == null){
    return []
  };
  return todolistStr.split(",")
}


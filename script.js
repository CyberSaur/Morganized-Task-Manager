/***********************************************************************
Programmer: Suneth Hewage
Description: This is the javascript file of the Morganized Task Manager.
***********************************************************************/

// Variable declaration.
var add_btn = document.getElementById("btn_add");
var erase_btn = document.getElementById("btn_erase");
var delete_btn = document.getElementById("btn_delete");
var save_btn = document.getElementById("btn_save");
var task_txt = document.getElementById("txt_task");
var task_lst = document.getElementById("lst_task");

// Listening to user's actions.
add_btn.addEventListener("click", addTaskToList);
erase_btn.addEventListener("click", eraseCompletedTasks);
delete_btn.addEventListener("click", deleteList);
save_btn.addEventListener("click", saveList);

// Functions to do the job.
function addTaskToList() {
    alert("Hi, you just clicked the add a task button!");
    var task_name = task_txt.value;
    newTask(task_name, false);
}
function eraseCompletedTasks() {
    alert("Hi, you just clicked the erase completed tasks button!")
}
function deleteList() {
    alert("Hi, you just clicked the delete your list button!");
}
function saveList() {
    alert("Hi, you just clicked the save your list button!");
}
function newTask(task_param, completed_param) {
    var task_unit = document.createElement("li");
    var task_name = document.createTextNode(task_param);
    task_unit.appendChild(task_name);
    
    if (completed_param) {
        task_unit.classList.add("completed");
    }
    
    task_lst.appendChild(task_unit);
    task_unit.addEventListener("dblclick", toggleTaskStatus);
}
function toggleTaskStatus() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
function eraseCompletedTasks() {
    var completed_tasks = task_lst.getElementsByClassName("completed");
    
    while (completed_tasks.length > 0) {
        completed_tasks.item(0).remove();
    }
}
function deleteList() {
    var tasks = task_lst.children;
    while (tasks.length > 0) {
        tasks.item(0).remove();
    }
}
















/***********************************************************************
Programmer: Suneth Hewage
Description: This is the javascript file of the Morganized Task Manager.
***********************************************************************/

// Variable declaration.
var add_btn = document.getElementById("btn_add");
var erase_btn = document.getElementById("btn_erase");
var delete_btn = document.getElementById("btn_delete");
var save_btn = document.getElementById("btn_save");

// Listening to user's actions.
add_btn.addEventListener("click", addTaskToList);
erase_btn.addEventListener("click", eraseCompletedTasks);
delete_btn.addEventListener("click", deleteList);
save_btn.addEventListener("click", saveList);

// Functions to do the job.
function addTaskToList() {
    alert("Hi, you just clicked the add a task button!");
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





















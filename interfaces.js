"use strict";
exports.__esModule = true;
function showTodo(todo) {
    console.log(todo.title + ": " + todo.text);
}
// If we put i.e 1 in the place of title then error
var myTodo = { title: "Trash", text: "Take out trash" };
showTodo(myTodo);

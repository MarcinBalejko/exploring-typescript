export {};

// function showTodo(todo: { title: string; text: string }) {
//   console.log(todo.title + ": " + todo.text);
// }

// let myTodo = { title: "Trash", text: "Take out trash" };

// showTodo(myTodo);

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ": " + todo.text);
}

// If we put i.e 1 in the place of title then error
let myTodo = { title: "Trash", text: "Take out trash" };

showTodo(myTodo);

// export {};

// // function showTodo(todo: { title: string; text: string }) {
// //   console.log(todo.title + ": " + todo.text);
// // }

// // let myTodo = { title: "Trash", text: "Take out trash" };

// // showTodo(myTodo);

// interface Todo {
//   title: string;
//   text: string;
// }

// function showTodo(todo: Todo) {
//   console.log(todo.title + ": " + todo.text);
// }

// // If we put i.e 1 in the place of title then error
// let myTodo = { title: "Trash", text: "Take out trash" };

// showTodo(myTodo);

// function displayUser(user: { firstName: string; lastName: string }) {
//   console.log(user.firstName + " " + user.lastName);
// }

// let myUser = { firstName: "John", lastName: "Doe" };
// displayUser(myUser);

// interface User extends Membership {
//   // we can include as many interfaces as we want (after comma)
//   firstName: string;
//   lastName: string;
//   email?: string; // email not required
// }

// interface Membership {
//   type?: string;
// }

// function displayUser(user: User) {
//   if (user.email) {
//     console.log(user.firstName + " " + user.lastName + " - " + user.email);
//   } else {
//     console.log(user.firstName + " " + user.lastName);
//   }

//   if (user.type) {
//     console.log(user.firstName + " has a " + user.type + " membership");
//   }
// }

// let myUser = {
//   firstName: "John",
//   lastName: "Doe",
//   email: "john@gmail.com",
//   type: "Gold",
// };
// displayUser(myUser);

interface userFunc {
  (name: string, age: number): string;
}

let getUser: userFunc;
getUser = (myname, myage) => {
  return myname + " is " + myage + " years old";
};

console.log(getUser("John", 30));

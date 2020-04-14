function showVar() {
  var a = 33;
  if (true) {
    var a = 44;
    console.log(a);
    // affects a
  }
  console.log(a);
}

// showVar();

function showLet() {
  let a = 33;
  if (true) {
    let a = 44;
    console.log(a);
    // doesn't affect a
  }
  console.log(a);
}

// showLet();

// for var
// for (var i = 0; i < 5; i++) {
//   console.log("Number " + i);
// }

// console.log(i);

// for let
// for (let i = 0; i < 5; i++) {
//   console.log("Number " + i);
// }

// console.log(i);

// const

// const colors = [];

// colors.push("red");
// colors.push("blue");

// const colors = [];

// console.log(colors); // will throw an error

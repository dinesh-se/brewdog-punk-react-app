"use strict";

console.log('App loaded!');

var appInfo = {
  name: "BrewDog's Beer Application",
  subtitle: "Your beer helper",
  options: ['one', 'two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    appInfo.name
  ),
  appInfo.subtitle && React.createElement(
    "p",
    null,
    appInfo.subtitle
  ),
  React.createElement(
    "p",
    null,
    appInfo.options.length > 0 ? "Here are your options: " + appInfo.options : 'No options available'
  )
);
var appRoot = document.getElementById('app');

// var template = React.createElement(
//   'h2',
//   { id: 'app'},
//   "New content!"
// );

// ES6 playground
// const es6Obj = {
//   numbers: [1,2,4,7,7,2,8],
//   multiplyBy: 4,
//   result() {
//     return this.numbers.map((number) => {
//       return number*this.multiplyBy;
//     });
//   }
// }

// ES6 Playgorund results:
// console.log("Multiplication result:", es6Obj.result());

ReactDOM.render(template, appRoot);

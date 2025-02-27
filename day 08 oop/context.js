console.log(this);

function foo() {
  console.log(this);
  //   function bar() {
  //     console.log(this);
  //   }
  //   bar();
}
foo();

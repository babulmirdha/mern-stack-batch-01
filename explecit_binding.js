function ageVerify() {
  if (this.age > 18) {
    console.log("Yes you can drive");
  } else {
    console.log("No you cannot drive");
  }
}

const per1 = { age: 21 };

const per2 = { age: 16 };

ageVerify.call(per1);

ageVerify.call(per2);

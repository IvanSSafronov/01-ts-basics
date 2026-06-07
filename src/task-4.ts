interface User{
    name: string,
    age:number,
    email?: string
}


function printUserInfo(user:User) {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
  if (user.email) {
    console.log("Email:", user.email);
  }
}

printUserInfo({ name: "Alice", age: 30 });
printUserInfo({ name: "Bob", age: 25, email: "bob@mail.com" });

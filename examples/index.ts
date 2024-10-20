import { createUser } from "../src";

const user = createUser({
  name: "pietrodev07",
  password: "pietrodev07",
  email: "pietro.dev.07@gmail.com",
});

console.log(user);

/* INFO: if you push the dist folder to github you use the dist folder */

// import { createUser } from "../dist";

// const user = createUser({
//   name: "pietrodev07",
//   password: "pietrodev07",
//   email: "pietro.dev.07@gmail.com",
// });

// console.log(user);

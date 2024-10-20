import { createUser } from "../dist";

const user = createUser({
  name: "pietrodev07",
  password: "pietrodev07",
  email: "pietro.dev.07@gmail.com",
});

console.log(user);

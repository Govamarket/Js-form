// console.log("Hello World");

// const name = "oscar";

// const age = 30;

// const isCool = true;

// const rating = 4.5;

// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// const hello = `My name is ${name} and I am ${age} years old.`;

// console.log(hello);

// const person = {
//   name: "oscar",
//   age: 30,
//   isCool: true,

//   hobbies: ["music", "movies", "sports"],

//   address: {
//     street: "main st",
//     city: "boston",
//     state: "MA",
//   },
// };

// console.log(person);

// // Arrays of an object
// const todos = [
//   { username: "oscar", text: "take out trash", isCompleted: true },
//   { username: "james", text: "meeting with boss", isCompleted: true },
//   { username: "oslp", text: "dentist appt", isCompleted: false },
// ];
// console.log(todos[1].username + " " + todos[1].text);

// console.log(window);

const form = document.querySelector("#userForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const userList = document.querySelector("#users");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // addUserToList({ name: name.value, email: email.value });

  if (
    name.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    msg.classList.add("error");
    msg.textContent = "Please enter all fields";

    setTimeout(() => {
      msg.classList.remove("error");
      msg.innerHTML = "";
    }, 3000);
  } else if (!passwordMatch()) {
    return;
  } else {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    // Clear form fields
    name.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    msg.classList.add("success");
    msg.textContent = "User added successfully!";
    setTimeout(() => {
      msg.classList.remove("success");
      msg.innerHTML = "";
    }, 3000);

    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
  }
});

function loadUsers() {
  userList.innerHTML = "";
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.forEach((userObj) => addUserToList(userObj));
}

function passwordMatch() {
  if (password.value !== confirmPassword.value) {
    msg.classList.add("error");
    msg.textContent = "Passwords do not match";
    setTimeout(() => {
      msg.classList.remove("error");
      msg.innerHTML = "";
    }, 3000);
  } else {
    return true;
  }
}

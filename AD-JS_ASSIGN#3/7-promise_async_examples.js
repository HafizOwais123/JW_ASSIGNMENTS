// promise_async_examples.js

// 1. Simple Promise with Delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("1. Hello, world! (after 2 sec)"));

// 2. Promise Chain
function fetchData() {
  return new Promise(resolve => {
    resolve({ id: 1, name: "Owais" });
  });
}
fetchData().then(data => console.log("2. Fetched Data:", data));

// 3. Error Handling in Promise
function fetchUserData() {
  return new Promise((resolve, reject) => {
    const user = { name: "Ali" }; // missing age
    if (!user.age) {
      reject("3. Error: Age is missing!");
    } else {
      resolve(user);
    }
  });
}
fetchUserData()
  .then(user => console.log("3. User Data:", user))
  .catch(err => console.log(err));

// 4. Simulate Network Request with Success and Error
function getWeather(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ temperature: 30, condition: "Sunny" });
      } else {
        reject("4. Error: Failed to fetch weather data.");
      }
    }, 1000);
  });
}
getWeather(true)
  .then(data => console.log("4. Weather Data:", data))
  .catch(err => console.log(err));

// 5. Simple async Function using delay
async function sayHello() {
  await delay(2000);
  console.log("5. Hello, world! (from async)");
}
sayHello();

// 6. Fetch Data with async/await + try/catch
async function getUserData() {
  try {
    const data = await fetchUserData();
    console.log("6. Async User:", data);
  } catch (error) {
    console.log("6. Error:", error);
  }
}
getUserData();

// 7. Fetch and Process Data (user + posts)
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Fatima", age: 25 });
}
function fetchPosts(userId) {
  return Promise.resolve([
    { id: 101, title: "Post 1" },
    { id: 102, title: "Post 2" }
  ]);
}
async function getUserAndPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  console.log("7. User:", user);
  console.log("7. Posts:", posts);
}
getUserAndPosts();

// 8. Error Handling in async/await
function fetchUserWithError(shouldFail = true) {
  return new Promise((resolve, reject) => {
    if (shouldFail) reject("8. Error: User not found!");
    else resolve({ name: "Sara", age: 28 });
  });
}
async function getUserInfo() {
  try {
    const user = await fetchUserWithError();
    console.log("8. Found User:", user);
  } catch (err) {
    console.log("8. Error:", err);
  }
}
getUserInfo();

// 9. Simulate API Calls (sequential async/await)
function apiCall(name) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000);
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(`9. API ${name} response after ${delay}ms`);
      } else {
        reject(`9. API ${name} failed`);
      }
    }, delay);
  });
}

async function getData() {
  try {
    const data1 = await apiCall("Call 1");
    console.log(data1);
    const data2 = await apiCall("Call 2");
    console.log(data2);
    const data3 = await apiCall("Call 3");
    console.log(data3);
  } catch (err) {
    console.log("9. Error:", err);
  }
}
getData();

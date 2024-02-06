//**** When try to execute only js file in terminal without html ****//
//***** USE COMMAND: node promises.js ****//
//***** USE COMMAND: node <file path> ****//

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  setTimeout(function () {
    console.log("Async task is done");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Madhav Patel", email: "madhavpatel1810@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log({ user });
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Madhav Patel", password: "123456" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log({ user });
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log("error: ", error);
  })
  .finally(() => console.log("The Promise is either resolved or rejected."));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Javascript", password: "132" });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

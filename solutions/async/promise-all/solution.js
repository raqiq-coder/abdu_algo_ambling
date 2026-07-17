// Promise All
// Тема: async

/**
 * @param {Promise[]} promises
 * @returns {Promise}
 */

export function promiseAll(promises) {
  if (promises.length === 0) return [];

  const result = [];
  let counter = 0;

  return new Promise((res, rej) => {
    promises.forEach((promise, i) => {
      promise
        .then((val) => {
          result[i] = val;
          counter++;

          if (counter === promises.length) {
            res(result);
          }
        })
        .catch(rej);
    });
  });
}

const promise1 = Promise.resolve(1);
const promise2 = new Promise((res, rej) => setTimeout(() => res(23), 2000));

promiseAll([promise1, promise2]).then(console.log);

// p1
const target = "component_will_update";

var re = /(_)(\w)/g;

function convert(match, p1, p2) {
  return p2.toUpperCase();
}

const result = target.replace(re, convert);
console.log(result);

// p2
const yourFunction = function (func, threshold) {
  // your code.
  let timeout;
  return (val) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(val), threshold);
  }
}

const triggerSearch = yourFunction((val) => {
  console.log("Problem 2:", val);
}, 300)

const searchText = "hello";
triggerSearch(searchText);

// p3
/*
delay construct that maintains map(id -> timeout descriptor)
*/
const delayScheduler = () => {
  const idToTimeOutDescriptor = {};

  return (id, wait) => { // return a promise
    if (!idToTimeOutDescriptor[id]) {
      return new Promise(resolve => {
        idToTimeOutDescriptor[id] = setTimeout(() => {
          idToTimeOutDescriptor[id] = null; // reset
          resolve();
        }, wait)
      });
    }
    return Promise.reject();
  }
}

// top level: instance of the delay scheduler
const delayFunc = delayScheduler();

/**
 * 具有延时功能的fetch
 * @param url {string} ajax 地址
 * @param options {object} 选项
 * @param options.id {string} 唯一标识,当前标识重复时会析构前面的实例
 * @param options.delay {number} 延时时间(ms)
 */
const superFetch = (url, options) => {
  // your code.
  if (!options || !options.id || !options.delay) {
    throw Error("specify options");
  }
  const { id, delay } = options;

  return delayFunc(id, delay)
    .then(() => Promise.resolve(mockFetch(url)))
    .catch(() => Promise.resolve('destroy'));
};

const mockFetch = (url) => `{ "prop": "cool ${url}" }`;


// mock json
// String.prototype.json = JSON.parse;

const fetchwithSameId = () => superFetch('ajax url', {
  id: 1688,
  delay: 100
}).then(res => {
  console.log(res);
  if (res === 'destroy') {
    return {
      destroy: true
    }
  } else {
    return JSON.parse(res) // res.json();
  }
}).then(json => {
  if (!json.destroy) {
    console.log('Problem 3:', json) // 这边只执行一次
  }
})

// testing debounce
for (let i = 0; i < 5; i++) {
  fetchwithSameId()
}

// testing avaiability after debouncing
setTimeout(fetchwithSameId, 200);


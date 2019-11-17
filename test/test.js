/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// let obj = {
//   name: 'xx',
//   age: 123,
// };

// const obj1 = Object.keys(obj).reduce((total, key) => ( {...total, [key] : { value: obj[key] }}), {});

// console.log('obj1', obj1);

/** 数组去重 */
// const arr = [1, 22, 12, 11, 2, 4, 22, 11, 2];
//
// console.log('', module);
// console.log(require.extensions);

/** 发布订阅模式 */
// let corp = {};
// // 设置一个列表来缓存回调函数
// corp.list = [];
// // 订阅事件
// corp.on = function (fn) {
//   // 直接将fn先存到列表中
//   this.list.push(fn);
// };
// corp.emit = function () {
//   // 当发布的时候再把列表村的函数依次执行
//   this.list.forEach(cb => {
//     cb.apply(this, arguments);
//   })
// };
//
// function fruits () {}
// fruits.prototype = {
//   color: 'blue',
//   say: function () {
//     console.log('hello' + this.color);
//   }
// }
// let apple  = new fruits;
// apple.say();
//
// apple.hello = 'fhahd';
//
// console.log('11111', apple.hello );
//
// apple.say.chunkCallbackName()
//
// apple.say.apply('world');

// function ass() {
//   this.name = 'hello';
//   console.log('1111', 1111);
// }
//
// let newName = new ass();
//
// console.log('newName', newName);

// 对象的深拷贝问题
// function clone(target, map = new Map()) {
//   if (typeof target === 'object') {
//     let cloneTarget = Array.isArray(target) ? [] : {};
//     if (map.get(target)) {
//       return map.get(target);
//     }
//     map.set(target, cloneTarget);
//     for (const key in target) {
//       cloneTarget[key] = clone(target[key], map);
//     }
//     return cloneTarget;
//   } else {
//     return target;
//   }
// }

// const map = new Map();
// let val = 1;
// map.set(val, 'aaaa');
// console.log('map', map.val);
//
// let set = new Set();
// set.add({ a : 1, b : 2 });
// console.log('set', set);

// const obj = {
//   name: 'hahaha',
// };
//
// function change(obj) {
//   obj = 1;
// }
// change(obj);
// console.log('obj', obj);

// const obj = {
//   person: {
//     name: 'hahaha',
//     age: 10,
//   }
// }
//
// function change(obj) {
//   const { person: test } = obj;
//   test.name = 'hehehe';
//   test.age = 18;
// }
//
// change(obj);
// console.log('obj', obj);

// 可修改
// let PersonType2 = (function() {
//   'use strict';
//
//   // 不可修改
//   const PersonType2 = function(name) {
//     // 确保使用 new 调用
//     if (typeof new.target === 'undefined') {
//       throw new Error('必须通过关键字 new 调用构造函数');
//     }
//     this.name = name;
//   };
//
//   Object.defineProperty(PersonType2.prototype, 'sayName', {
//     value: function() {
//       // 确保不会通过关键字 new 调用
//       if (typeof new.target !== 'undefined') {
//         throw new Error('不可使用关键字 new 调用');
//       }
//
//       console.log(this.name);
//     },
//     enumerable: false,
//     writable: true,
//     configurable: true
//   });
//
//   return PersonType2;
// })();
//
// const person = new PersonType2('jing');
// person.sayName();

/** 实现一个 new 方法 */
// function _new () {
//   let target = {};
//   // 第一个参数是构造函数
//   console.log('arguments', arguments);
//   let [constructor, ...args] = [...arguments];
//   // 执行原型链接，target是constructor的实例
//   target.__proto__ = constructor.prototype;
//   // 执行构造函数，将属性和方法添加到创建的空对象上
//   let result = constructor.apply(target, args);
//   if (result && (typeof result === 'function' || typeof result === 'object')) {
//     return result;
//   }
//   return target;
// }
//
// function aa() {
//   this.name = 'hahaha';
//   this.xxxx = 'hehehe';
//   return function sayName(){
//     console.log('my name is', this.name);
//   };
// }
//
// let b = new(aa);
//
// console.log('b', b.constructor);

/** 深拷贝 */
// const targetObj = {
//   name: 11,
//   func: function() {
//     console.log('this is deepClone');
//   },
//   like: {
//     eat: 'agg',
//     drink: 'warter',
//   }
// };
// const targetArray = [
//   'name',
//   { age: 11 },
//   function() {
//     console.log('this is deepClone');
//   },
// ];
// // 乞丐版 一些类型会被直接丢掉
// const obj1 = JSON.parse(JSON.stringify(targetObj));
// // 豪华版
// function forEach(array, opearate) {
//   let index = -1;
//   const length = array.length;
//   while(++index < length) {
//     opearate(array[index], index);
//   }
// }
function deepClone(target, map = new WeakMap()) {
  console.log('typeof target', typeof target);
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) return target;
    map.set(target, cloneTarget); // 将现有的对象存起来，为后面的校验作准备
    const keys = Array.isArray(target) ? undefined : Object.keys(target);
    forEach(keys || target, (val, index) => {
      if (keys) {
        index = val;
      }
      cloneTarget[index] = deepClone(target[index], map);
    });
    return cloneTarget;
  } else {
    return target;
  }
}

// const query = new Promise ((resolved) => {
//   setTimeout(() => {
//     resolved({
//       status: 'error',
//       code: '0',
//     });
//   }, 0);
// });

/** 一个 sleep 函数 */
// function sleep(time) {
//   return new Promise((resolved) => {
//     setTimeout(() => {
//       resolved();
//     }, time);
//   });
// }
// // 请求成功resolved，请求失败隔一秒再请求，请求三次都没成功，直接退出
// function fetch(query) {
//   return new Promise((resolved, rejected) => {
//     (async () => {
//       try {
//         let index = -1;
//         await Promise.reject('error');
//         while(++index < 3) {
//           let res = await query;
//           if (res.status === 'success') {
//             resolved('请求成功');
//           } else {
//             await sleep(1000);
//           }
//         }
//         rejected('请求失败');
//       } catch (e) {
//         console.log('e', e);
//       }
//     })();
//   });
// }
//
// fetch(query)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => {
//     console.log('请求结果', e);
//   });

// function action() {
//   return new Promise(((resolve, reject) => {
//     setTimeout(() => {
//       reject('hahaha');
//     }, 1000);
//   }));
// }

// async function asyncAction() {
//   let a = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('aa');
//     }, 1000);
//   });
//   return a;
// }

// console.log('我是不是先执行');

// asyncAction().then(res => {
//   console.log('res22', res);
// });

// action().then(res => {
//   console.log('333', res);
// }).catch(res => {
//   console.log('444', res);
// });

// console.log('我也不会先执行吗');

/** 在循环中使用闭包，或局部作用域 */
// const arr = [1, 2, 3, 4, 5];
// for (const iterator of arr) {
//   console.log('itefrator', iterator);
// }
// for(var a = 0; a < arr.length; a += 1) {
//   ((i) => {
//     setTimeout(() => {
//       console.log('a', i);
//     }, 1000);
//   })(a);
// }

/** 截流 throttle 防抖 debounce */

/** try catch 只能捕获同步中的错误，promise 捕获异步中的错误 */
// function catchFunc() {
//   try {
//     setTimeout(() => {
//       throw new Error('这是一个错误');
//     }, 1000);
//   } catch (e) {
//     console.log('err', e);
//   }
// }
// function promiseFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         throw new Error('这是一个错误');
//       } catch (e) {
//         reject(e);
//       }
//     }, 1000);
//   });
// }
//
// promiseFunc().catch(err => {
//   console.log('err', err);
// });

/** 类型转换 字符串拼接 ==操作 */

/** 原型链 和 继承 */
// function apple() {
// //   this.name = 'apple';
// //   this.price = '20';
// //   let other = 'blank';
// // }
// // apple.prototype.time = '2019';
// // apple.number = 10;
// //
// // const fruit = new apple();
// // fruit.say = function () {
// //   console.log('--->', this.name);
// // };
// // console.log('fruit', fruit.name, fruit.time, fruit.number, fruit.other,
// //   fruit.say()
// // );
// // console.log('proto', fruit.__proto__.name);

/** 作用域，执行上下文 */
// fn();
//
// function fn() {
//   console.log('111', 111);
// }
//
// console.log('aa', aa);
// var aa = 1;

// function fn(name) {
//   //函数
//   console.log(this)
//   console.log(arguments)
//
//   age = 20
//   console.log(name,age)
//   var age
//
//   bar(100)
//   function bar(num){
//     console.log(num);
//   }
// }
//
// fn('hello');

/** 作用域 */
// if(true){
//   let aa = 200;
// }
// console.log('aa', aa);
// var aa = 200;
// function fn() {
//   var aa = 300;
//   console.log('aa', aa);
// }
//
// console.log('aa', aa);
//
// fn();
// console.log('a', a);
// let a = 200;
// console.log('a', a);

/** 闭包 */
// let a = 200;
// const hello = function() {
//   let b = 300;
//   return function () {
//     console.log('a, b', a, b);
//   };
// };
//
// module.exports = hello;

// console.log('a', a);
// var a = 200;

/** 创建10个 a 标签，并在点击时打印出序号 */
// for(let a = 0; a < 10; a += 1) {
//   let a = document.createElement('a');
//   a.innerHTML = i + <br />;
//   a.addEventListener('click', function (e) {
//     e.preventDefault();
//     alert(i);
//   });
//   document.body.appendChild(a);
// }
// for (let i=0; i<10; i+=1){
//   let a = document.createElement('a');
//   a.innerHTML = i + <br />;
//   a.addEventListener('click', function (e) {
//     e.preventDefault();
//     alert(i);
//   });
//   document.body.appendChild(a);
// }

/** 给定Date类型的数据，改写成2019-07-09的格式 */
// function format() {
//   let date = new Date();
//   const year = date.getFullYear(); // number 类型 和 string 类型的区别
//   let month = date.getMonth();
//   let day = date.getDate();
//   console.log('month', month);
//   if (month < 10) month = '0' + month;
//   if (day < 10) day = '0' + day;
//
//   return year + '-' + month + '-' + day;
// }
//
// console.log('format', format());

/** 给定随机数，要求是长度一样的字符串 */
// console.log('random', Math.random());

// const arr = [1, 2, 3, 4, 5, 6];
// // console.log('', arr.splice(1,2));
// // console.log('', arr);
// if (arr instanceof Array) {
//   console.log('this is a array');
// }

/** 事件绑定 */
// let btn = document.getElementById('btn1');
// btn.addEventListener('click', function (event) {
//   event.preventDefault(); // 阻止默认行为
//   event.stopPropagation(); // 阻止冒泡
//   console.log('event', event);
// });

/** 图片懒加载 */

/** 原型链与继承 */

/** 事件循环 */
// new Promise((resolve, reject) => {
//   console.log('Promise1 s');
//   resolve();
// }).then(res => {
//   return new Promise((resolve) => {
//     console.log('Promise2 s');
//     setTimeout(() => {
//       console.log('promise setTimeout1');
//       resolve();
//     }, 5000);
//   }).then(res => {
//     return new Promise((resolve) => {
//       console.log('Promise3 s');
//       resolve();
//     });
//   });
// });
//
// setTimeout(() => {
//   console.log('setTimeout1');
// }, 0);

// function fetchData () {
//   return (
//     async () => {
//       for (let n = 0; n <= 2; n += 1) {
//         let result = await query();
//         if (result === 'fetch error') {
//           await sleep();
//         } else {
//           return result;
//         }
//       }
//       return 'missions fail';
//     }
//   )();
// }
//
// function sleep() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }
//
// function query() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('fetch error');
//     }, 1000);
//   });
// }
//
// fetchData().then(res => {
//   console.log('result', res);
// });

/** 两数之和 */
// map的key value可以接受任何类型的key和任何值的value
// const arr = [11, 23, 43, 23, 12, 3, 3, 1, 545, 5, 32, 12, 44, 1, 0, 111];
// function getSum(arr, targetNum) {
//   let map = new Map();
//   let temp;
//   for (let n = 0; n < arr.length;n +=1) {
//     temp = targetNum - arr[n];
//     if (map.get(temp) === undefined) {
//       map.set(arr[n], arr[n]);
//     } else {
//       return [map.get(temp), n];nbv！
//     }
//   }
//   return [];
// }
//
// console.log('res', getSum(arr, 4));

// let set = new Set([6, 1, 2, 3, 4, 4, 10, 40]);
// const str = 'adfadf2';
// set.add(str);
// console.log('set', set.values());
//
// set.forEach(item => {
//   console.log('item', item);
// });

// let weakset = new WeakSet();
// let arr = [1, 2];
// weakset.add(arr);
//
// console.log('weakset', weakset.get(arr));
// weakset.has([1, 2]);

// const subsets = function(nums) {
//   let result = [];
//   function dfs(index,ans){
//     let ans2 = ans.concat();
//     ans2.push(nums[index]);
//     if(index === 0){
//       result.push(ans);
//       result.push(ans2);
//       return;
//     }else{
//       dfs(index-1,ans);
//       dfs(index-1,ans2);
//     }
//   }
//   dfs(nums.length-1,[]);
//   return result;
// };
//
// const arr = [1, 2, 3, 4];
// console.log('subsets', subsets(arr));





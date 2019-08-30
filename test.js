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

function ass() {
  this.name = 'hello';
  console.log('1111', 1111);
}

let newName = new ass();

console.log('newName', newName);


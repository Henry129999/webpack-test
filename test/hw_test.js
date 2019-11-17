// let string = readline();
// function lastWordLength(string) {
//   const arr = string.split(' ');
//   if (arr.length) {
//     if(arr.length === 1) return console.log(arr[0].length);
//     return console.log(arr[arr.length - 1].length);
//   }
// }

// let first = 'nhrwlbcc8m7c5hih9mhalw98k0322wf2jjm47kk3ntm9snfrflzzundn7d608usy049asxalzjk7izj6amcqhr8uubc04g52mcjboj2fmge2l6iarizfu4yve5o4i3srf5zgqbg82ckcotdeqp760mc9gzei5dzk5gj9x9yj05o3hle0ii64krkkp5i7blh7nbu3gu5vgi2scyn4yqx3z4vcjbyzhnqkh887izotjkg2l0mit0k14vyn39'; // readline()
// let second = 't';
// let reg = /[A-Za-z]/;
// let result = 0;
// let secondIsNumber = !reg.test(second);
// let firstIsNumber = true;
// for(let n = 0; n <= first.length - 1;n += 1) {
//   firstIsNumber = !reg.test(first[n]);
//   check(first[n], second, firstIsNumber, secondIsNumber);
// }
//
// function check (str1, str2, firstIsNumber, secondIsNumber) {
//   if(secondIsNumber && firstIsNumber) {
//     if (str1 === str2) result += 1;
//   } else if (!secondIsNumber && !firstIsNumber) {
//     console.log(str1, str2);
//     if (str1.charCodeAt() === str2.charCodeAt()
//     || (str1.charCodeAt() === str2.charCodeAt() + 32)
//     || (str1.charCodeAt() === str2.charCodeAt() - 32)) {
//       result += 1;
//     }
//   }
// }
//
// console.log(result);
/** 冒泡排序 */
// const arr = [11,10,20,40,32,67,40,20,89,300,400,1511,10,20,40,32,67,40,20,89,300,400,15];
function popSort(arr) {
  let isOver = false;
  for(let i = arr.length - 1; i > 0; i = i -1) {
    if (!isOver) {
      isOver = true;
      for(let n = 0; n <= i - 1; n +=1) {
        let temp;
        if (arr[n] > arr[n + 1]) {
          temp = arr[n];
          arr[n] = arr[n + 1];
          arr[n + 1] = temp;
          isOver = false;
        } else if (arr[n] === arr[n + 1]) {
          arr.splice(n, 1);
        }
      }
    } else {
      return arr;
    }
  }
  return arr;
}

//
// console.log(popSort(arr));

// let reg = /[A-F]/;
// let str1 = 'abc';
// let str2 = 'guwldvzrsfurobidegiyazkggfpgmyhlrbfjrjerrbnjdenrdxjfmrhtumfdsedkcmthphgavzxlmpcpwbkwsvplhmkbkgkw';
//
// let sub1 = str1.split('');
// let sub2 = str2.split('');
//
// console.log('', sub1);
// console.log('', sub2);
//
// function result(sub) {
//   let number = Math.floor(sub.length / 8) + 1;
//   console.log('-----', number);
//   if (sub.length === 0) return null;
//   for(let n = 0; n <= number - 1; n+=1) {
//     let string = '';
//     for(let i = 0; i <= 7; i+=1) {
//       if(sub[n*8 + i]) string = string + sub[n*8 + i];
//       else string = string + '0';
//     }
//     console.log(string + '\n');
//   }
// }
//
// result(sub1, str1);
// result(sub2, str2);

const arr = ['ad', 'dd', 'da'];
arr.sort();
console.log(arr);



let string = 'ksjadhfkahd';
let res = string.slice(0, string.length -1);
console.log('res', res);








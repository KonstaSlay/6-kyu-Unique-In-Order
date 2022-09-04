/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

function uniqueInOrder(iterable){
  let arrStr = [];
  if (Array.isArray(iterable)) {        // if in ia an array []
    arrStr = iterable;
  } else {                              // if in ia an string ""
    arrStr = iterable.split('');    // ['A', 'B', 'C', 'c', 'A', 'D']
  }      
    let newArr = [];                  
    let count = 0;
    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] !== arrStr[i + 1]) {
          newArr[count] = arrStr[i];
          count++;
      }
    }
  return newArr
}

console.log(uniqueInOrder('ABBCcAD'));

/* Код в одну строку Codewars

var uniqueInOrder=function(iterable){
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
  }
  return res;
}*/

/* var uniqueInOrder=function(iterable){
  if (typeof iterable === 'string') return iterable.split('').filter((v,i,arr)=>arr[i]!=arr[i+1]);
  return iterable.filter((v,i,arr)=>arr[i]!=arr[i+1]);
 }*/

console.log('Домашнее задание №2, задача №2');

function isSomeTrue(source, filterFn) {

  try {
    if (source.length === 0) {
      throw new Error('Ошибка! Пустой массив!');
    }
  } catch (e) {
      return e;
  }

  var result = false;

  for (var key in source) {
    result = result || filterFn(source[key]);
  }

  return result;
}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8,],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
  return typeof val === 'number';
}

console.log(isSomeTrue([], isNumber)); // error
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
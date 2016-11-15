console.log('Домашнее задание №2, задача №1');

function isAllTrue(source, filterFn) {

    try {
      if (source.length === 0) {
        throw new Error('Ошибка! Пустой массив!');
      }
    } catch (e) {
        return e;
    }

    var result = true;

    for (var i = 0; i < source.length; i++) {
      result = result && (filterFn(source[i]));
    }

    return result;
}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
  return typeof val === 'number';
}

console.log(isAllTrue([], isNumber)); // Ошибка!
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
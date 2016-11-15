console.log('Домашнее задание №1');

function consoleOut(elements) {
    var index = 0;

    function consoleRec() {
        console.log(elements[index++]);
        if (index < elements.length) {
            consoleRec();
        }
    }
    consoleRec();
}

consoleOut(['я', 'умею', 'писать', 'рекурсивные', 'функции']);
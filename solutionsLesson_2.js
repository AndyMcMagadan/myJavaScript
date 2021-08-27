'use strict'

function myScript_2_1() {
    document.write('Префиксная "++var" и постфиксная форма "var++" одинаково увеличивают "var" на 1, но постфиксная форма в текущем выражении возвращает старое значение (которое было до увеличения).<br \/>');
    let a = 1, b = 1, c, d;
    document.write('a = 1, b = 1<br \/>');
    c = ++a;
    document.write('c = ++a; c = ' + c + '   // В данном случае 2, потому что префиксная форма сразу поменяла значение "а".<br \/>');
    d = b++;
    document.write('d = b++; d = ' + d + '   // В данном случае 1, потому что постфиксная форма вернула старое значение "b".<br \/>');
    c = (2 + ++a);
    document.write('c = (2  +  ++a) = ' + c + ' // В данном случае 5, потому что значение "а" уже было 2 и префиксная форма сразу поменяла значение "а".<br \/>');
    d = (2 + b++);
    document.write('d = (2  +  b++) = ' + d + '// В данном случае 4, старое значение "b" было 2 и постфиксная форма вернула старое значение.<br \/>');
    document.write('a =  ' + a + '           // В данном случае 3, потому "а" дважды меняло значение.<br \/>');
    document.write('b =  ' + b + '           // В данном случае 3, потому "b" дважды меняло значение. до этого выражения.<br \/>');
}

function myScript_2_2() {
    let a = 2;
    let x = 1 + (a *= 2);
    document.write('    x = 1 + (a *= 2) = ' + x + ' //  Будет 5 потому что это оператор присваивания (низкий приоритет 3) с умножением (высокий приоритет 15) "*=".')
}

function myScript_2_3() {
    let total, a = +prompt('Введите целочисленную переменную "a", отличную от нуля:');
    let b = +prompt('Введите целочисленную переменную "b", отличную от нуля:');
    if ((a > 0) && (b > 0)) {
        total = a - b;
        document.write('Вариант ### 1 "a - b"<br \/>' + 'total = ' + total);
    } else if ((a < 0) && (b < 0)) {
        total = a * b;
        document.write('Вариант ### 2 "a * b"<br \/>' + 'total = ' + total);
    } else if (((a >= 0) && (b < 0)) || ((a < 0) && (b >= 0))) {
        total = a + b;
        document.write('Вариант ### 3 "a + b"<br \/>' + 'total = ' + total);
    }
}

function myScript_2_4() {
    function getNumber(x) {
        document.write(x + '<br \/>');
    }
    let a = parseInt(Math.random() * 15);
    switch (a) {
        case 1:
            getNumber(a);
            ++a;
        case 2:
            getNumber(a);
            ++a;
        case 3:
            getNumber(a);
            ++a;
        case 4:
            getNumber(a);
            ++a;
        case 5:
            getNumber(a);
            ++a;
        case 6:
            getNumber(a);
            ++a;
        case 7:
            getNumber(a);
            ++a;
        case 8:
            getNumber(a);
            ++a;
        case 9:
            getNumber(a);
            ++a;
        case 10:
            getNumber(a);
            ++a;
        case 11:
            getNumber(a);
            ++a;
        case 12:
            getNumber(a);
            ++a;
        case 13:
            getNumber(a);
            ++a;
        case 14:
            getNumber(a);
            ++a;
        case 15:
            getNumber(a);
            ++a;
            break;
    }
}

function myScript_2_5() {
    function sum(a, b) {
        return a + b;
    }

    function diff(a, b) {
        return a - b;
    }

    function multy(a, b) {
        return a * b;
    }

    function division(a, b) {
        return (a / b).toFixed(5);
    }

    let x = 8, y = 3;
    document.write('Сумма: ' + x + ' + ' + y + ' = ' + sum(x, y) + '<br \/>');
    document.write('Разность: ' + x + ' - ' + y + ' = ' + diff(x, y) + '<br \/>');
    document.write('Произведение: ' + x + ' * ' + y + ' = ' + multy(x, y) + '<br \/>');
    document.write('Частное: ' + x + ' / ' + y + ' = ' + division(x, y));
}

function myScript_2_6() {
    function sum(a, b) {
        return a + b;
    }

    function diff(a, b) {
        return a - b;
    }

    function multy(a, b) {
        return a * b;
    }

    function division(a, b) {
        return (a / b).toFixed(3);
    }

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 1:
                document.write('Сумма: ' + arg1 + ' + ' + arg2 + ' = ' + sum(arg1, arg2));
                break;
            case 2:
                document.write('Разность: ' + arg1 + ' - ' + arg2 + ' = ' + diff(arg1, arg2));
                break;
            case 3:
                document.write('Произведение: ' + arg1 + ' * ' + arg2 + ' = ' + multy(arg1, arg2));
                break;
            case 4:
                document.write('Частное: ' + arg1 + ' / ' + arg2 + ' = ' + division(arg1, arg2));
        }
    }

    let arg1 = +prompt('Введите первый аргумент:');
    let arg2 = +prompt('Введите второй аргумент:');
    let operation = +prompt('Выберите номер операции, где: 1 - Сложение, 2 - Вычитание, 3 - Произведение, 4 - Деление');

    mathOperation(arg1, arg2, operation);
}

function myScript_2_7() {
    document.write('Результат даже нестрогого сравнения null == 0 будет ' + (null == 0) + ' , потому что тип данных "null" ' + typeof (null) + ' , а тип данных "0" ' + typeof (0) + ' , и object не приводится к типу данных number и наоборот?<br \/>');
    document.write('Результат сравнения null > 0 будет ' + (null > 0) + ' , затрудняюсь ответить.<br \/>');
    document.write('Результат сравнения null < 0 будет ' + (null < 0) + ' , затрудняюсь ответить.<br \/>');
    document.write('Результат сравнения null >= 0 будет ' + (null >= 0) + ' , затрудняюсь ответить.<br \/>');
    document.write('Результат сравнения null <= 0 будет ' + (null <= 0) + ' , затрудняюсь ответить.<br \/>');
}

function myScript_2_8() {
    let val = +prompt('Введите исходное число:');
    let pow = +prompt('Введите искомую спепень:');

    function power(val, pow) {
        if (pow == 1) {
            return val;
        } else {
            return val * power(val, pow - 1);
        }
    }

    document.write('Результат операции ' + val + ' в степени ' + pow + ' = ' + power(val, pow));
}

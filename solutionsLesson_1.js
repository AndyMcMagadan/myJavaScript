//NodeJs на рабочем компьетере, где я сейчас делаю домашнее задание, установить не удалось (прав администратора нет), поэтому вывод идет на страницу сайта через document.write(), используя стрницу indexLesson.html, а не в консоль при помощи console.log().

'use strict'

function myScript_1_1() {
    let tempFahrenheit, tempСelsius = +prompt("Введите температуру в градусах по Цельсию");
    tempFahrenheit = (9 / 5) * tempСelsius + 32;
    document.write("Температура по Фаренгейту будет: " + tempFahrenheit + " F.")
}

function myScript_1_2() {
    let admin, name = "Василий";
    admin = name;
    document.write(admin)
}

function myScript_1_3() {
    let answer_4 = "Поскольку знак '+' используется также для конкатенации строк - число слева будет переведено в строчный формат и в результате получится строка: <br \/>";
    document.write(answer_4);
    let total = 1000 + "108";
    document.write('1000 + "108" = ' + total);
}

function myScript_1_4() {
    let answer_5 = "Разница между async и defer: атрибут defer сохраняет относительную последовательность скриптов, а async – нет.<br \/>Кроме того, defer всегда ждёт, пока весь HTML-документ будет готов, а async – загружает все скрипты сразу,<br \/>поэтому выполняться первым будет скорее всего (при малом объеме страницы) самый короткий скрипт.";
    document.write(answer_5)
}
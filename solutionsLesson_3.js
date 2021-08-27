'use strict'

function myScript_3_1() { //Есть возможность оптимизации: проверить можно было только нечетные числа и делением на предыдущие простые числа значением до 1/2. Времени не хватило.
    let limit = 100;
    var easyNumbers = [1];
    for (let i = 2; i <= limit; i++) { // здесь идет перебор всех чисел от 2, поскольку 1 и так простое число, до указанного предела с шагом 1. 
        let demon = 1; // индикатор простого числа
        for (let j = 2; (j <= i / 2) && (demon == 1); j = j + 1) { // проверка деления на предыдущие числа значением до 1/2 самого числа
            if (i % j == 0) { // если остаток от деления на модуль отстуствует - индикатор обнуляется и число в список простых не попадает
                demon = 0
            }
        }
        if (demon == 1) {
            easyNumbers.push(i)
        }
    }
    document.write(easyNumbers)
}

/*сущность корзины - многомерный массив, который содержит по минимуму название товара, стоимоть единицы и количество.
Можно добавить марку, производителя, год выпуска, акции и распродажи, группировать по категориям и многое другое.
Не совсем понимаю разницу между вторым и третьим заданием, предлагаю свой вариант понимания и реализации*/
function myScript_3_2() {
    function randomName() {
        let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let newName = '';
        for (let i = 0; i <= 7; i++) {
            let ind = ((list.length - 1) * Math.random()).toFixed(0);
            newName += list[ind];
        }
        return newName;
    }

    function priceGoods() {
        let price = (Math.random() * 500 + 300).toFixed(2);
        return price;
    }

    function numGoods() {
        let total = parseInt(Math.random() * 25);
        return total;
    }

    let amount = +prompt('Введите количество товарных позиций:');
    var arrGoods = [];
    for (let n = 0; n < amount; n++) {
        var newArray = []
        newArray.push(' ' + randomName());
        newArray.push(' ' + priceGoods());
        newArray.push(' ' + numGoods());
        arrGoods.push(' ' + newArray);
    }
    document.write(arrGoods + '<br \/>');
}

function myScript_3_3() {
    function countBasketPrice(arrayProducts) {
        let total = 0
        for (let i = 0; i <= (arrayProducts.length - 1); i++) {
            total += arrGoods[i][1] * arrGoods[i][2];
        }
        return total;
    }

    var arrGoods = [
        ['computer', ' 1000.00', ' 3'],
        ['mobile', ' 200.00', ' 15'],
        ['phone', ' 120.00', ' 10'],
        ['fax', ' 275.00', ' 6'],
        ['TV', ' 850.00', ' 12'],
        ['washMashine', ' 620.00', ' 8'],
        ['microwave', ' 350.00', ' 10'],
        ['stove', ' 550.00', ' 4'],
        ['roaster', ' 70.00', ' 23'],
        ['reciver', ' 320.00', ' 7']
    ];
    for (let j = 0; j <= arrGoods.length - 1; j++) {
        document.write(arrGoods[j] + '<br \/>');
    }
    document.write('Total costs: ' + countBasketPrice(arrGoods).toFixed(2) + '$');
}

function myScript_3_4() {
    var count = 0;
    for (; count < 10;)
        document.write(count++ + '<br \/>');
}

//NodeJs на рабочем компьетере, где я сейчас делаю домашнее задание, установить не удалось (прав администратора нет), поэтому вывод идет на страницу сайта через document.write(), используя страницу indexLesson.html, а не в консоль при помощи console.log().
function myScript_3_5() {
    let result = ''
    for (var count = 1; count <= 20; count++) {
        document.write(result + '<br \/>');
        result += 'x';
    }
}


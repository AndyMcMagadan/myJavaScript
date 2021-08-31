'use strict'

function myScript_4_1() {
  const newObject = {};
  'единицы' = 0, 'десятки' = 0, 'сотни' = 0, getObject() {
    let units = 0, dozens = 0, hundreds = 0, total =
      '{ единицы: ' + units + ' , десятки: ' + dozens + ' сотни: ' + hundreds + ', }'
  }
  document.write(getObject());
}

function myScript_4_2() {
  function randomName() {
    let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newName = '';
    for (let i = 0; i <= 7; i++) {
      let ind = ((list.length - 1) * Math.random()).toFixed(0);
      newName += list[ind];
    }
    return newName.length;
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

function myScript_4_3() {
  document.write(count++ + '<br \/>');
}

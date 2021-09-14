'use strict'

function myScript_4_1() {
    let userNumber = +prompt('Введите целое неотрицательное число от 0 до 999 для преобразования в объект:');
    let newObject = {'единицы': 0, 'десятки': 0, 'сотни': 0, getFullObject() {
        return '{единицы: ' + newObject['единицы'] + ', десятки: ' + newObject['десятки'] + ', сотни: ' + newObject['сотни'] + ', }<br \/>'
    }};
    if (userNumber >= 1000) {
        document.write('Введенное число больше 1000.<br \/>' + newObject.getFullObject());
    } else {
        let hundreds = parseInt(userNumber / 100);
        let dozens = parseInt((userNumber - hundreds * 100) / 10);
        let units = userNumber % 10;
        newObject['единицы'] = units;
        newObject['десятки'] = dozens;
        newObject['сотни'] = hundreds;
        /* Поскольку метод document.write() не поддерживает прямой вывод объекта Object в область HTML-страницы (доступа к console.log() нет), я сделал 
        1. эмулятор вывода объекта через конкатенацию ключей объекта и соотвествующих этим ключам значениям */
        document.write('{единицы: ' + newObject['единицы'] + ', десятки: ' + newObject['десятки'] + ', сотни: ' + newObject['сотни'] + ', }<br \/>');
        //2. метод похожего вывода содержимого getFullObject().
        document.write(newObject.getFullObject());
    }
}

function myScript_4_2() {
    //Object.prototype. ООП что-то очень туго дается, никак не могу посчитать корзину, причем получаю 

    class Basket {
        constructor(v, w, x, y, z, goodsBasket = [], summBasket = 0) {
            this.v = v;
            this.w = w;            
            this.x = x;
            this.y = y;
            this.z = z;
            this.goodsBasket = goodsBasket;
            this.summBasket = summBasket;
        }
        
        addGoogdsBasket() {
            this.goodsBasket.push(this.v);
            this.goodsBasket.push(this.w);
            this.goodsBasket.push(this.x);
            this.goodsBasket.push(this.y);
            this.goodsBasket.push(this.z);
        }

        countGoodsBasket() {
            this.summBasket += this.v[total];
            this.summBasket += this.w[total];
            this.summBasket += this.x[total];
            this.summBasket += this.y[total];
            this.summBasket += this.z[total];
        }

    }
    
    class Good {
        constructor(type, price) {
            this.type = type;
            this.price = price;
            this.quantity = parseInt(Math.random() * 5) + 1;
            this.total = this.price * this.quantity;
        }
    }

    
    const good_1 = new Good('computer', ' 1000.00' );
    const good_2 = new Good('mobile', ' 200.00' );
    const good_3 = new Good('phone', ' 120.00' );
    const good_4 = new Good('fax', ' 275.00' );
    const good_5 = new Good('TV', ' 850.00' );
    
    document.write('Содержимое корзины:<br \/>');
    const miniBasket = new Basket(good_1, good_2, good_3, good_4, good_5);
    let j = 1;
    for (let i in miniBasket) {
        if (j < 6) {
            document.write('Товар # ' + j++ +  ' : <br \/>');
            for (let key in miniBasket[i]) {
                document.write(key + ': ');
                document.write(miniBasket[i][key] + ',  ');
            }
            document.write('<br \/>');
        }
    }
    //Посчет стоимости товаров в корзине
    document.write('<br \/>');
    document.write('Посчет стоимости товаров в корзине: <br \/>');
    document.write(miniBasket.countGoodsBasket);
    
}

// function myScript_4_3() {
//     document.write('3. Сущность товара для каталога, корзины, склада может содержать: <br \/>- товар собственно с изображением; <br \/>' + 
//     '- категорию товара (пригодится для расчета скидок);<br \/>- производителя;<br \/>- цену товара.<br \/>' +
//     'Дополнительно: для корзины - количество отложенного товара с расчетом общей стоимости, для склада - общее количество товара<br \/>' +
//     'с расчетом стоимости по категориям, для каталога - размер скидок/надбавок по категориям. Все это можно хранить в виде объектов <br \/>' +
//     'ключ - товар : массив - категория, производитель, цена, <br \/>пересчет стимости товара в каталоге производить на основе встроенного метода,<br \/>' +
//     'добавлять товар в корзину из каталога с проверкой наличия на складе по стоимости пересчитанной встроенным методом.).')
// }

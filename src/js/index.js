"use strict";

// strings.1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// strings.2
function checkSpam(str) {
    return !!(~str.indexOf('XXX') || ~str.indexOf('viagra'));
}

// strings.3
function truncate(str, maxlength) {
    var sub = '...';
    return (str.length > maxlength) ? str.slice(0, maxlength - sub.length) + sub : str;
}

// strings.4
function extractCurrencyValue(str) {
    return +str.substring(1);
}

// obj1.1
var user = {
    name: 'Вася',
    surname: 'Петров'
}
user.name = 'Сергей';
delete user.name;

// obj2.1
function isEmpty(obj) {
    return !Object.keys(obj).length;
}

var user = {};
var stas = {};
user.s = 1;

// obj2.2
function salariesSumm(obj) {
    var summ = 0;
    for (var keys in obj) {
        summ += obj[keys];
    }
    return summ;
}

var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
}

// obj2.3
function maxSalary(obj) {
    var maxValue = 0;
    var maxName = 'нет сотрудников';
    for (var keys in obj) {
        if (obj[keys] > maxValue) {
            maxValue = obj[keys];
            maxName = keys;
        }
    }
    return maxName;
}

// obj2.4
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var keys in obj) {
        if (isNumeric(obj[keys])) {
            obj[keys] *= 2;
        }
    }
}

var menu = {
    width: 200,
    heigth: 300,
    title: 'My menu'
}

multiplyNumeric(menu);
console.log(menu.width);

// arrays1.1
function lastElement(arr) {
    return goods[goods.lenght - 1];
}
var goods = [5465, 'iho'];
console.log(lastElement(goods));

// arrays1.2
function addingSmthToTheEnd(arr, smth) {
    arr.push(smth);
}
var element = 'Компьютер';
addingSmthToTheEnd(arr, element);

// arrays1.3
// в функцию это оборачивать нет смысла
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

// arrays1.4
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
var fruits = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
console.log(getRandom(fruits));

// arrays1.5
/*
var summPrompt = [];
var temp;
temp = prompt('Enter a number');
while (isNumeric(temp)) {
    summPrompt[summPrompt.length] = temp;
    temp = prompt('Enter a number');
}
temp = 0;
for (var i = 0; i < summPrompt.length; i++) {
    temp += +summPrompt[i];
}
alert(temp);
*/

// arrays1.6 - устно
// arrays1.7
function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) return i;
    }
    return -1;
}

var arrFor7 = ['test', 2, 1.5, false];

//arrays1.8
function filterRange(arr, a, b) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var arrFor8 = [5, 4, 3, 8, 0];
var filtered = filterRange(arrFor8, 3, 5);
console.log(filtered);

// arrays1.9
function Eratosphen(n) {
    var j = 0;
    var p = 2;
    var arrFor9 = [];
    var summ = 0;
    for (var i = p; i <= n; i++) {
        arrFor9.push(i);
    }

    while (Math.pow(p, 2) <= n) {
        for (var i = j; i <= n; i++) {
            if (arrFor9[i + 1] % p == 0) {
                arrFor9[i + 1] = 0;
            }
        }

        j += 1
        while (arrFor9[j] == 0) {
            j += 1;
        }
        p = arrFor9[j];
    }
    for (var i = 0; i < arrFor9.length; i++) {
        summ += arrFor9[i];
    }
    return summ;
}

// arrays1.10
function getMaxSubSum(arr) {
    var summ = {
        currSumm: 0,
        resultSumm: 0,
        lowElement: 0,
        highElement: arr.length - 1
    }
    var temp1 = 0, temp2 = 0, temp3 = arr.length;

    while (temp3 !== 0) {
        for (var i = summ.lowElement; i <= summ.highElement; i++) {
            summ.currSumm += arr[i];
            if (summ.currSumm > summ.resultSumm) {
                summ.resultSumm = summ.currSumm;
                temp2 = i;
            }
        }

        for (var i = summ.lowElement; i <= summ.highElement; i++) {
            summ.currSumm -= arr[i];
            if (summ.currSumm > summ.resultSumm) {
                summ.resultSumm = summ.currSumm;
                temp1 = i;
            }
        }

        summ.lowElement = temp1;
        summ.highElement = temp2;
        temp3 -= 1;
    }

    return summ.resultSumm;
}
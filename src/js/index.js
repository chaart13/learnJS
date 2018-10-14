"use strict";

// strings.1
function ucFirst(str) {
    return str[0].toUpperCase() + str.substring(1);
}

// strings.2
function checkSpam(str) {
    if (~str.indexOf('XXX') || ~str.indexOf('viagra')) {
        return true;
    }
    return false;
}

// strings.3
function truncate(str, maxlength) {
    var sub = '...';
    if (str.length > maxlength) {
        return str.substring(0, maxlength - sub.length) + sub;
    }
    return str;
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
    if (Object.keys(obj).length > 0) {
        return false;
    }
    return true;
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
    if (Object.keys(obj).length > 0) {
        var maxValue = 0;
        var maxName;
        for (var keys in obj) {
            if (obj[keys] > maxValue) {
                maxValue = obj[keys];
                maxName = keys;
            }
        }
        return maxName;
    }
    return 'нет сотрудников';
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

// arrays.1
var goods = [];
var lastElement = goods[goods.lenght - 1];

// arrays.2
goods[goods.length] = 'Компьютер';

// arrays.3
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

// arrays.4
var arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
console.log(arr[Math.floor(Math.random() * arr.length)])

// arrays.5
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

// arrays.6 - устно
// arrays.7
function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) return i;
    }
    return -1;
}

var arrFor7 = ['test', 2, 1.5, false];

//arrays.8
function filterRange(arr, a, b) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
var arrFor8 = [5, 4, 3, 8, 0];
var filtered = filterRange(arrFor8, 3, 5);
console.log(filtered);

// arrays.9
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
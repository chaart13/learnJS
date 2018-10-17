"use strict";

// strings1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// strings2
function checkSpam(str) {
    return !!(~str.indexOf('XXX') || ~str.indexOf('viagra'));
}

// strings3
function truncate(str, maxlength) {
    var sub = '...';
    return (str.length > maxlength) ? str.slice(0, maxlength - sub.length) + sub : str;
}

// strings4
function extractCurrencyValue(str) {
    return +str.substring(1);
}

// obj1_1
var user = {
    name: 'Вася',
    surname: 'Петров'
}
user.name = 'Сергей';
delete user.name;

// obj2_1
function isEmpty(obj) {
    return !Object.keys(obj).length;
}

var user = {};
var stas = {};
user.s = 1;

// obj2_2
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

// obj2_3
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

// obj2_4
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

// arrays1_1
function lastElement(arr) {
    return goods[goods.lenght - 1];
}
var goods = [5465, 'iho'];
console.log(lastElement(goods));

// arrays1_2
function addingSmthToTheEnd(arr, smth) {
    arr.push(smth);
}
var element = 'Компьютер';
addingSmthToTheEnd(goods, element);

// arrays1_3
// в функцию это оборачивать нет смысла
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

// arrays1_4
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
var fruits = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];
console.log(getRandom(fruits));

// arrays1_5
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

// arrays1_6 - устно
// arrays1_7
function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) return i;
    }
    return -1;
}

var arrFor1_7 = ['test', 2, 1.5, false];

//arrays1_8
function filterRange(arr, a, b) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var arrFor1_8 = [5, 4, 3, 8, 0];
var filtered = filterRange(arrFor1_8, 3, 5);
console.log(filtered);

// arrays1_9
function Eratosphen(n) {
    var j = 0;
    var p = 2;
    var arrFor1_9 = [];
    var summ = 0;
    for (var i = p; i <= n; i++) {
        arrFor1_9.push(i);
    }

    while (Math.pow(p, 2) <= n) {
        for (var i = j; i <= n; i++) {
            if (arrFor1_9[i + 1] % p == 0) {
                arrFor1_9[i + 1] = 0;
            }
        }

        j += 1
        while (arrFor1_9[j] == 0) {
            j += 1;
        }
        p = arrFor1_9[j];
    }
    for (var i = 0; i < arrFor1_9.length; i++) {
        summ += arrFor1_9[i];
    }
    return summ;
}

// arrays1_10
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

// arrays2_1
function addClass(obj, cls) {
    var arr = obj.className.split(' ');
    if (arr.indexOf(cls) === -1) arr.push(cls);
    obj.className = arr.join(' ');
}

var objFor2_1 = {
    className: 'open menu'
}

addClass(objFor2_1, 'new');
addClass(objFor2_1, 'open');
addClass(objFor2_1, 'me');
console.log(objFor2_1.className);

// arrays2_2
function camelize(str) {
    var arr = str.split('-');
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return str = arr.join('');
}

console.log(camelize('background-color'));

//arrays2_3
function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    var pos = 0;

    while (arr.indexOf(cls, pos) != -1) {
        arr.splice(arr.indexOf(cls, pos), 1);
        pos = arr.indexOf(cls, pos);
    }
    obj.className = arr.join(' ');
}

var objFor2_3 = {
    className: 'open menu menu'
}

removeClass(objFor2_3, 'menu');
console.log(objFor2_3.className);

//arrays2_4
function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= a || arr[i] >= b) arr.splice(i, 1);
    }
}

var arrFor2_4 = [5, 3, 8, 1];
filterRangeInPlace(arrFor2_4, 1, 4);
console.log(arrFor2_4);

//arrays2_5
function reverseSort(a, b) {
    return b - a;
}
var arrFor2_5 = [5, 2, 1, -10, 8];
arrFor2_5.sort(reverseSort);
console.log(arrFor2_5);

//arrays2_6
var arrFor2_6 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arrFor2_6.slice().sort()

console.log(arrFor2_6);
console.log(arrSorted);

//arrays2_7
function rndSort() {
    return -1 + Math.random() * 2;
}

var arrFor2_7 = [1, 2, 3, 4, 5];
arrFor2_7.sort(rndSort);
console.log(arrFor2_7);

//arrays 2_8
function ageSort(a, b) {
    return a.age - b.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [vasya, masha, vovochka];
people.sort(ageSort);
console.log(people);

/*
не доделано

//arrays2_9
function printList(list) {
    var arr = [];
    for(var keys in list){
        if (keys == 'value') arr.push(list[keys]);
    }
    return arr;
}

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

console.log(printList(list));
*/
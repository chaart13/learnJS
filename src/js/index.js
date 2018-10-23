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
    return goods[goods.length - 1];
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
        if (arr[i] === value) return i;
    }
    return -1;
}

var arrFor1_7 = ['test', 2, 1.5, false];

//arrays1_8
function filterRange(arr, a, b) {
    var newArr = [];
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
    if (arr.indexOf(cls) === -1) {
        obj.className = obj.className + ' ' + cls;
    }
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
    var pos = arr.indexOf(cls);

    while (pos != -1) {
        arr.splice(pos, 1);
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
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

var arrFor2_4 = [3, 1, 7, 4, 5];
filterRangeInPlace(arrFor2_4, 2, 4);
console.log(arrFor2_4);

//arrays2_5
function reverseSort(firstValue, secondValue) {
    return secondValue - firstValue;
}
var arrFor2_5 = [5, 2, 1, -10, 8];
arrFor2_5.sort(reverseSort);
console.log(arrFor2_5);

//arrays2_6
var arrFor2_6 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arrFor2_6.slice().sort();

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
function ageSort(firstObj, secondObj) {
    return firstObj.age - secondObj.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [vasya, masha, vovochka];
people.sort(ageSort);
console.log(people);

//arrays2_9
function printList(list) {
    var temp = list;
    var arr = [];

    while (temp.next !== undefined && temp.next !== null) {
        arr.push(temp.value);
        temp = temp.next;
    }
    arr.push(temp.value);
    return arr;
}

var listFor2_9 = { value: 1 };
listFor2_9.next = { value: 2 };
listFor2_9.next.next = { value: 3 };
listFor2_9.next.next.next = { value: 4 };

console.log(printList(listFor2_9));
// остальные фукнции, как написать не особо догоняю, особенно рекурсию

//arrays2_10 - забили
//arrays2_11
function unique(arr) {
    var uniqueObj = {};
    for (var i = 0; i < arr.length; i++) {
        var keys = arr[i];
        uniqueObj[keys] = true;
    }
    return Object.keys(uniqueObj);
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"];
console.log(unique(strings));

//arrays3_1
var arrFor3_1 = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arrFor3_1.map(function (item) {
    return item.length;
});
console.log(arrLength);

//arrays3_2
function getSums(arr) {
    var result = [];
    result[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result[i] = arr.slice(0, i + 1).reduce(function (summ, current) {
            return summ + current;
        });
    }
    return result;
}
console.log(getSums([1, 2, 3, 4, 5]));
console.log(getSums([-2, -1, 0, 1]));

//args1
function checkUndf(x) {
    return !!arguments.length;
}

//args2
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += typeof (arguments[i]) == 'number' ? arguments[i] : 0;
    }
    return result;
}

//date1
var d = new Date(2012, 1, 26, 3, 12);
console.log(d);

//date2
function getWeekDay(date) {
    var weekDaysRu = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return weekDaysRu[date.getDay()];
}

console.log(getWeekDay(d));

//date3
function getLocalDay(date) {
    return date.getDay() !== 0 ? date.getDay() : 7;
}

console.log(getLocalDay(d));

//date4
function getDateago(date, days) {
    var resultDate = new Date();
    resultDate.setTime(date - days * 1000 * 3600 * 24);
    return resultDate.getDate();
}

console.log(getDateago(d, 3));

//date5
function getLastDayOfMonth(year, month) {
    var resultDate = new Date(year + 1, month - 11);
    resultDate.setDate(0);
    return resultDate.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//date6
function getSecondsToday() {
    var date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());

//date7
function getSecondsToTomorrow() {
    return 3600 * 24 - getSecondsToday();
}

console.log(getSecondsToTomorrow());

//date8
function formatDate(date) {
    var arrDate = [date.getDate(), (date.getMonth() + 1), date.getFullYear() - Math.floor(date.getFullYear() / 100) * 100];
    for (var i = 0; i < arrDate.length; i++) {
        arrDate[i] = arrDate[i] < 10 ? '0' + arrDate[i] : arrDate[i];
    }
    return arrDate.join('.');
}

var d = new Date(2006, 0, 6);
console.log(formatDate(d));

//date9
//какое-то дурацкое

//closure1
function sum(a) {
    return function (b) {
        return a + b;
    }
}

//closure2
function makeBuffer() {
    var str = '';
    return function (value) {
        return !!arguments.length ? str += value : str;
    }
}

var buffer = makeBuffer();
var bufferNum = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

bufferNum(0);
bufferNum(1);
bufferNum(0);

console.log(buffer());
console.log(bufferNum());

//closure3
function makeBufferWithClearing() {
    var str = '';
    function buffer(value) {
        return !!arguments.length ? str += value : str;
    }
    buffer.clear = function () {
        str = '';
    }
    return buffer;
}

var buffer = makeBufferWithClearing();
buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer());
buffer.clear();
console.log(buffer());

//closure4
function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

users.sort(byField('name'));
users.forEach(function (user) {
    console.log(user.name);
});

users.sort(byField('age'));
users.forEach(function (user) {
    console.log(user.name);
});

/*

не очень понимаю, как сделать

//closure5
function filter(arr, func) {
    function inBetween(a, b) {
        return arr.filter(function (number) {
            return number >= a && number <= b;
        })
    }

    function inArray(arr2) {
        return arr.filter(function (number) {
            return arr2.indexOf(number) !== -1;
        })
    }

    return func;
}

// console.log(filter([1, 2, 3, 4, 5, 6, 7], inBetween(3, 6)));

//closure6
function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();
army[0]();
army[5]();
*/

//this7
var calculator = {
    read: function () {
        this.firstValue = +prompt('Enter first number', 1);
        this.secondValue = +prompt('Enter second number', 1);
    },
    sum: function () {
        return this.firstValue + this.secondValue;
    },
    mul: function () {
        return this.firstValue * this.secondValue;
    }
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//this8 хз

//conversion
function summBrackets(a) {
    var summ = a;
    function temp(b) {
        summ += b;
        return temp;
    }
    temp.toString = function () {
        return summ;
    };
    return temp;
}

console.log((summBrackets(0)(1)(2)(3)(4)(5)));

//constr2
function Calculator() {
    this.read = function () {
        this.firstValue = +prompt('Enter first number', 1);
        this.secondValue = +prompt('Enter second number', 1);
    };
    this.sum = function () {
        return this.firstValue + this.secondValue;
    };
    this.mul = function () {
        return this.firstValue * this.secondValue;
    };
}

var calculator = new Calculator();
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//consrt3
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Enter number', 1);
    };
}

var accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

//constr4
//тут не работает, не знаю, как дожать
function Calculator() {
    this.methods = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        }
    };

    this.calculate = function (str) {
        var a = +str.slice(0, str.indexOf(' '));
        var b = +str.slice(str.lastIndexOf(' '));
        var c = str.substr(str.indexOf(' ') + 1, 1);
        return this.methods[c];
    }
    this.addMethod = function (char, func) {
        return function () {
            methods[char] = func;
        }
    }
}

var powerCalc = new Calculator;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

console.log(powerCalc.calculate("2 + 3"));
"use strict";

// 1

const numbOne = prompt("Введите первое число");
const numbTwo = prompt("Введите второе число");

if (numbOne > numbTwo) {
    console.log(`Число ${numbOne} больше!`);
}
else {
    console.log(`Число ${numbTwo} больше!`);
}

//2 

const numConsole = prompt("Введите число");

if (numConsole > 0) {
    console.log("Число положительное");
}
else if (numConsole < 0) {
    console.log("Число отрицательное");
}
else {
    console.log("Число равно нулю");
}

// 3

let name;
let admin;
name = "Kirill";
admin = name;
console.log(admin);

// 4

console.log("ананас" > "оливье"); // А - первая буква, так что по сути самый маленькая, поэтому она сразу же меньше О
console.log("кодировка" > "котировка"); // коД < коТ, из-за того что т ниже в алфавите, а значит больше
console.log("222" > "22"); // первые две 2 равны, но так как первая страка длиннее, то она и приобретает больший вес

// 5

const ageUser = prompt("Сколько вам лет?")
if (ageUser >= 18) {
    console.log("Добро пожаловать на сайт!");
}
else {
    alert("Доступ запрещён!");
}

// 6

const numbers = [5, 62, 8, 17, 3, 9, 88, 52, 70];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }
}

// 7

const rocks = ["Louna", "Порнофильмы", "Наив", "Тараканы", "Noize MC", "Oxxxymiron", "Monatik", "Кино"];

for (let n = rocks.length - 1; n >= 0; n = n - 2) {
    console.log(rocks[n]);
}

// 8

let sumEven = 0;
let sumOdd = 0;

const differnce = [15, 85, 62, 36, 78, 105, 98, 12, 23];
for (let k = 0; k < differnce.length; k++) {
    if (differnce[k] % 2 === 0){
        sumEven = sumEven + differnce[k];
    }
    else {
        sumOdd = sumOdd + differnce[k];
    }
}

if (sumOdd > sumEven) {
    console.log(sumOdd - sumEven);
}
else if (sumOdd < sumEven) {
    console.log(sumEven - sumOdd);
}
else {
    console.log("разница значений равна нулю");
}

// Добавил третье значение при разнице, которая даст 0

// 9

let user = {
    name: "Kirill",
    age: 31,
    profession: "Бухгалтер",
    town: "Новороссийск",
    id: 111111,
}

console.log(user);

// 10

const newArray = [15, -40, 888, 1526, 66, 8888, 8887];
let maxArr;
let minArr = newArray[0];
for (let m = 0; m < newArray.length; m++) {
    if (newArray[m] > minArr) {
        maxArr = newArray[m];
        minArr = maxArr;
    }    
}

console.log(maxArr);

// Не знаю как надо было правильно решить. Через Math.max или как я. Решил попробовать написать сам. Вроде работает.
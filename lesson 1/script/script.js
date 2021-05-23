//1
var y1 = 6;
var y2 = 2;

var x1 = 5;
var x2 = 3;

var k = (y1 - y2) / (x1 - x2);
console.log(k);

var b = (y2 - k * x2);
console.log(b);

var x = 10

var y = k * x + b;
console.log(y);


//2
var a = "Имя ";
var b = "Фамилия ";
console.log(a + b);

var c = a;

var a = b;
var b = c;
console.log(a + b);


//3
var admin = "Джон";
var name = admin;
alert(admin);


//4 
var name = prompt("Введите имя ");
var surname = prompt("Введите фамилию ");
var age = prompt("Ваш возраст ");
document.write("Имя: " + name + "<br>" + "Фамилия: " + surname + "<br>" + "Возраст: " + age);


//5
var age = prompt("Ваш возраст");
document.write("Ваш возраст: " + age);

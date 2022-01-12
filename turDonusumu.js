let sayi = String(10); // number to string

console.log(sayi);
console.log(typeof sayi);


let age = Number("36");

console.log(age);
console.log(typeof age);


//bool to string

let isActive=String(true);

console.log(isActive);
console.log(typeof isActive);
console.log(isActive.length); //.length Karekter sayısını verir. Sadece stringlerde çalışır numberda çalışmaz



let tarih=String (new Date().getFullYear());

console.log(tarih);
console.log(typeof tarih);

//toString Kullanımı

let ceviri=(10).toString();


console.log(ceviri);


//array to string

let diziler =(["Erol","Ali","Ahmet"]).toString();
console.log(diziler);
console.log(typeof diziler);


let num1 =10.4
console.log(num1.toFixed(3)); //toFixed ondalıklı sayıların basamak sayısını belirler

let val=Number(true);
console.log( val);
console.log(typeof val);


let demoSon=parseInt(10.5);

console.log(demoSon);
console.log(typeof demoSon);


let demoSon2=parseFloat(10.99);
console.log(demoSon2);
console.log(typeof demoSon2);
/*
* NOTLAR
*
*
console.log("Hello World");
console.log(1234);
console.log(true);
console.error("Hata Mesajı");
console.warn("Uyarı Mesajı");
*
*
*
*
*
*
* *******************DEĞİŞKENLER***********
*
* değişeknler var anahtar sözcüğüyle tanımlanır
* ***********değiken tanımlama kuralları
* sayı ile başlayamaz
* komut isimleri ile tanımlaa yapılamaz örn for veya if
* büyük küçük harf duyarlılğı vardır
*
* değişkenler ES6 ile gelen let ve const ile de tanımlanır
* Farkları
* var ile tanımladığımız tüm işlemleri let ile tanımlayabliriz
* const ile sabit değişkenler tanımlanr
*
*
*
*
*
*
* */
/*
var age = 35;
console.log(age);
var adSoyad=("Erol Karabulut");
console.log(adSoyad);


let AdSoyad=("Erol Karablut");
console.log(AdSoyad);

const sabitDegisken=("Değiştirilemez");
console.log(sabitDegisken);

let sabitDegisken=("Değiştir");
console.log(sabitDegisken);
*/


/*
* **********Değişken tipleri
* Primitive tipler
*
*
*string
*
*
*
*
*
*
* */


//string
/*
let nameSurname=("Erol Karablut");
console.log(nameSurname);
console.log(typeof nameSurname);
//number

let age = 36;

console.log(age);
console.log(typeof age);

//boolen

let isActive=true;

console.log( isActive)
console.log(typeof isActive)
*/
//Reference Types - Objects
//***********Arrays

let isimler=['Erol','Ahmet','Mehmet'];

console.log(isimler);
console.log(typeof isimler);

let bilgilerim= {
    adim:"Erol",
    Soyadim:"Karabulut"
};

console.log(bilgilerim);
console.log(typeof bilgilerim);



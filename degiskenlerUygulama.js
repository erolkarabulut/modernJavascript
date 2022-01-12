
let musteriAdi=("Erol");
let musteriSoyadi=("Karabulut");
let tcKimlikNo=("12345678902");
let siparisToplam=100;
let cinsiyet=true;
let adres={
    sehir:"İzmir",
    ilce:"Çiğli",
    mahalle:"Ataşehir"
};
let hobiler=["spor","gezmek","eğlenmek"];

let order1 = Number("100");
let order2=Number("150");
let total=order1+order2;
console.log(total);



let order3=Number('100.2');
let order4=Number('150.5');

let total2=order3+order4;
console.log(total2);

let dogumYili= 1986;
let simdikiTarih=new Date().getFullYear();
let yasHesapla=simdikiTarih-dogumYili;
console.log( dogumYili);
console.log( simdikiTarih);
console.log( yasHesapla);

let course='Modern Javascript Kursu';

console.log(course.length);
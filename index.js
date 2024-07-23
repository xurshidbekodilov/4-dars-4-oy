//For ga oid masalalar

//for1  Berilgan 10 dan 100 gacha bo'lgan sonlar orasidagi barcha toq sonlarning yig'indisini hisoblang
/*
let sum=0;
for(let i=11; i<=100; i+=2){
    sum=sum+i;
}
console.log(sum);
*/

//for2 Berilgan ixtiyoriy sonning faktorialini hisoblang
/*
let n =+prompt('son kiriting')
let res=1;
for(let i=1; i<=n; i++){
    res=res*i;
}
console.log(res);
*/

//for3 Berilgan 1 dan 50 gacha bo'lgan murakkab sonlarni aniqlang va ularni konsolga chiqaring
/*
for (let i = 2; i <= 50; i++) {
    let n = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        n++;
      }
    }
    if (n >= 1) {
      console.log(i);
    }
}
*/

//for4 1 dan 20 gacha bo'lgan sonlarning kvadratlarini hisoblang va ularning yig'indisini aniqlang
/*
let sum = 0;
for(let i=1; i<=20; i++){
    sum+=i**2;
}
console.log(sum);
*/

//for5 Foydalanuvchi tomonidan kiritilgan 5 ta ixtiyoriy sonlar ichida eng kattasi va eng kichigini toping
/*
let num1 = +prompt('1-sonni kiriting');
let min,max;
min=max=num1;
for( let i=2; i<=5; i++){
    let num = +prompt(`${i}-sonni kiriting`);
    if(num>max){
        max=num;
    }
    if(num<min){
        min=num;
    }
}
console.log('Eng kichkina son '+min);
console.log('Eng katta son '+max);
*/

//for6 2 dan 30 gacha bo'lgan barcha murakkab sonlarni aniqlab, konsolga chiqaring
/*
for (let i = 2; i <= 30; i++) {
    let n = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        n++;
      }
    }
    if (n >= 1) {
      console.log(i);
    }
}
*/

//for7 Foydalanuvchi tomonidan kiritilgan raqamni orqaga o'giring. Masalan, 12345 -> 54321
/*
let number = prompt("Raqam kiriting:");
let reversedNumber = number.split('').reverse().join('');
console.log(reversedNumber);
*/

//for8 1 dan 10 gacha bo'lgan barcha juft sonlarning kvadratlari va toq sonlarning kubiklari orasidagi farqni hisoblang
/*
let sum1 = 0;
let sum2 = 0;
for (let i = 2; i <= 10; i += 2) {
    sum1 += i ** 2;
}
for (let j = 1; j <= 10; j += 2) {
    sum2 += j ** 3;
}
console.log("Juft sonlarning kvadratlari yig'indisi:", sum1);
console.log("Toq sonlarning kubiklari yig'indisi:", sum2);
console.log("Farq:", sum1 - sum2);
*/

//for9 1 dan 50 gacha bo'lgan sonlar ichida 3 va 5 ga bo'linadigan sonlarni toping va ularni konsolga chiqaring
/*
for(let i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}
*/

//for10   1 dan 100 gacha bo'lgan sonlarning o'rtacha qiymatini aniqlang
/*
let sum=0;
for(i=1;i<=100;i++){
    sum+=i;
}
console.log(sum/100);
*/

//for11 Foydalanuvchi tomonidan kiritilgan raqamning necha raqamdan iborat ekanligini aniqlang
/*
let num = prompt('sonni kiriting');
let length = num.length;
console.log(length);
*/

//for12 Foydalanuvchi tomonidan kiritilgan musbat sonning barcha manfiy sonlarining qatorini chiqaring.
/*
let num = +prompt("sonni kiriting");
let m = 0;
m = m - num;
console.log(m);
*/

//for14 1 dan 200 gacha bo'lgan barcha juft sonlarning yig'indisini aniqlang
/*
for (let i = -1; i <=200; i++){
if(i % 2 == 0 )
console.log(i);
}
*/

//for15 1 dan 20 gacha bo'lgan barcha sonlar juftliklarining yig'indisini aniqlang va ularni konsolga chiqaring. Masalan, (1+2), (2+3), (3+4), ..., (19+20).
/*
let sum=0
for(let i = 2; i<=20; i++){
    sum=i+i-1;
    console.log(sum);
}
*/

//Break/continue ga oid masalalar.

//1. 1 dan 10 gacha bo'lgan sonlarni chiqaring, lekin son 5 ga yetganda siklni to'xtating
/*
for(let i=1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}
*/
//2. 1 dan 10 gacha bo'lgan sonlarni chiqaring, lekin 3 va 7 sonlarini o'tkazib yuboring
/*
for(let i=1; i<=10; i++){
    if(i==3 || i==7){
        continue;
    }
    console.log(i);
}

*/
//3. Foydalanuvchi tomonidan kiritilgan son 7 ga teng bo'lsa, qidirishni to'xtating va "Topildi!" deb chiqaring
/*
while (true) {
    let userInput = prompt("Son kiriting:");
    let number = parseInt(userInput);
    if (number == 7) {
        console.log("Topildi!");
        break;
    }
}


//4. 1 dan 10 gacha bo'lgan sonlarni chiqaring, lekin faqat toq sonlarni chiqaring (juft sonlarni o'tkazib yuboring
/*
for(let i=1; i<=10; i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}
*/

//5. 1 dan 100 gacha bo'lgan sonlarni chiqaring, lekin son 50 dan katta bo'lsa siklni to'xtating
/*
for(let i=1; i<=100; i++){
    if(i>50){
        break;
    }
    console.log(i);
}
*/
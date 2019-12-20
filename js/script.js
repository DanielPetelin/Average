var num = [3, 4, 5, 5, 5];
summa = 0;
sredne = 0;
for (var i = 0; i < num.length; i++) {
    summa += num[i];
    sredne = summa / num.length;
}
console.log(summa);
console.log(sredne);
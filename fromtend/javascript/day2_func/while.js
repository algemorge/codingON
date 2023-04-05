//while
console.log('===========');
let n2 = 1;
while (n2 < 5) {
   console.log(n2);
   n2++;
}


n3 = 10
while (n3 < 5) {
   console.log(n3);
   n3--;
}

console.log('===========');
n4 = 10;
while (n4 >= 1) {
   if (n4 % 2 === 0) {
      console.log(n4);
   }
   n4--;
}

while (true) {
   console.log('안녕');
   if (n2 == 10) {
      break;
   }
   n2++;
}


// confirm 창
// n2 = 0;
// while (confirm('계속 진행?')) {
//    n2++;
//    alert(`${n2} 번째 alert 창`)
// }


// continue
let sum3 = 0;
for (let i = 0; i < 10; i++) {
   if (i % 2 === 0) {
      continue;
   }
   sum3 += i;
}
console.log(sum3);
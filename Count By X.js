// function getMultiples(x, n) {
//     // Inisialisasi array kosong untuk menyimpan kelipatan
//     let multiples = [];
    
//     // Loop untuk menghitung kelipatan
//     for (let i = 1; i <= n; i++) {
//         multiples.push(x * i);
//     }
    
//     // Kembalikan array yang berisi kelipatan
//     return multiples;
// }

// let x = 1; // Bilangan yang ingin dicari kelipatannya
// let n = 10; // Jumlah kelipatan yang ingin dihitung
// let result = getMultiples(x, n);
// console.log(result); // Output: [3, 6, 9, 12, 15]

// function countBy(x, n) {
//     let z = [];
  
//      for (let i = 1; i <= n; i++) {
//           z.push(x * i);
//      }
//     return z;
//   }
  
//   let x = 2; // Bilangan yang ingin dicari kelipatannya
//   let n = 5; // Jumlah kelipatan yang ingin dihitung
//   let result = countBy(x, n);
//   console.log(result); // 

console.log(Array.from({length: 5}, (_, i) => 3 * (i + 1))); // Output: [3, 6, 9, 12, 15]

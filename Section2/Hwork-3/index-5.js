// let n = prompt("Enter n");
// let c = prompt("Enter c");
// console.log("A sequence of numbers, starting from " + c + ", ending before " + n + ", stepping by 3,");
// for (let index = c; index < n;  index+=3) {
//     console.log(index + "\n");
// }
let n = prompt("Enter n");
let c = prompt("Enter c");
console.log("A sequence of numbers, starting from " + c + ", ending before " + n);

for (let index = parseInt(c); index < parseInt(n); index+=3) {  
    console.log(index+"\n");
}
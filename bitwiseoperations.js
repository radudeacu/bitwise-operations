// 8 digits 8 bits which represent 1 byte of information
// 1 = 00000001 
// 2 = 00000010
// 3 = 00000011
// 4 = 00000100
// 5 = 00000101
// 6 = 00000110
// 7 = 00000111
// 8 = 00001000
// 9 = 00001001
//10 = 00001010
//11 = 00001011
//12 = 00001100
//13 = 00001101
//14 = 00001110
//15 = 00001111

// similar to logical operators but thy work on the individual bits of the nr

console.log(1 | 2); // Bitwise OR | . Logical OR is || R: 3
console.log(1 & 2); // Bitwise AND  R: 0

// Read, Write, Execute
// 00000100 
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 7;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); 

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

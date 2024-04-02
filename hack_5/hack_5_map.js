/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let arrInit = [1,3,5,7];

arrInit.map(el=> result.push(el));

result.reverse();



//export result
module.exports = result;
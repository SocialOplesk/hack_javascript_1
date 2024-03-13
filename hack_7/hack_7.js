/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let letra = arr[i];
    let mayúscula = letra.charAt(0).toUpperCase() + letra.slice(1);
    result.push(mayúscula);
  }

//export result
module.exports = result;
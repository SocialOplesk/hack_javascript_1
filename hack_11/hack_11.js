/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let result1 = [];
let i = 0;
let x = 0;
for (i; i<=numberArray.length ;i++) {
    if(i%2===0){
        switch (numberArray[i]) {
            case 1:

                numberArray[i] = 'one';
                break;
            case 3:
                numberArray[i] = "three"
                break;
            case 5:
                numberArray[i] = "five"
                break;
                
            default:
                break;
        }
 }
}
for (x; x<stringArray.length ;x++) {

        switch (stringArray[x]) {
            case 'foo':
                stringArray[x] = 'f00';
                break;
            case 'bar':
                stringArray[x] = "Bar"
                break;
            case 'baz':
                stringArray[x] = "b@z"
                break;
            case 'qux':
                stringArray[x] = "quX"
                break;
            case 'echo':
                stringArray[x] = "3ch0"
                break;
                 
            default:
                break;
        }
 
}

result1 = numberArray
result1.push("h@ck")

result  = result1.concat(stringArray)
result.unshift("h@ck")
result.push("h@ck")

//export result
module.exports = result;
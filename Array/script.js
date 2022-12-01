//O que são vetores ou arrays

//Como declarar um array
//let array = ['string',1,true];
//console.log(array);//

// Pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'],['array2'],['array3'],['array4']];
console.log(array2[0]);

//forEach

array2.forEach(function(item,index){console.log(item,index)});

//push

array2.push([]);
console.log(array2)

//pop
array2.pop();
console.log(array2)

//shift
array2.shift()
console.log(array2)

//unshift
array2.unshift('novo item no início');
console.log(array2);

//indexOf
console.log(array2.indexOf(true));

//splice

array2.splice(0, 3);
console.log(array2);

//slice
let novoArray = array2.slice(0,3);
console.log(novoArray);

//Objetos 
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno'}};
console.log(object.objectInterno)
// desestruturação
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)

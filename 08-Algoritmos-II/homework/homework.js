'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // if (array.length === 1 || array.length === 0) return array

  // let pivot = array[0]; /// array[Math.floor(Math.random() * (array.length - 1))]
  // let arrayPivot =[];
  // arrayPivot.push(array[0]);
  // array.shift()
  // let arrayMenor = [];
  // let arrayMayor = [];

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] < pivot) {
  //     arrayMenor.push(array[i])
  //   } else {arrayMayor.push(array[i])
  //   }
  // }

  // return quickSort(arrayMenor).concat(arrayPivot).concat(quickSort(arrayMayor));

  if (array.length <= 1) return array;

  let pivote = array[Math.floor(Math.random() * (array.length -1))];

  let izq = [];
  let der = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) {
      izq.push(array[i]);
    } else if (array[i] > pivote) {
      der.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  return quickSort(izq).concat(equal).concat(quickSort(der));

 // let resultado = quickSort(arrayMenor) + arrayPivot + quickSort(arrayMayor)
 // return Array.from(String(resultado), Number); // resultado: un NAN entre 1 y 2, y 5 NaN entre 4, 5 y 8

 // return quickSort(arrayMenor) + arrayPivot + quickSort(arrayMayor) // Resultado: "12458"
  
  // let pivote = Math.random() - chequear que el valor del índice esté dentro del array
  // recorrer el array i < pivote lo mando a la izq[] si i > que el pivote lo mando a la derecha[]
  // quickSort(izq) quickSort(der)
  // return el array ordenado

}

function merge(left, right){
  let leftIndex = 0;
  let rightIndex = 0;
  let mergedArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  // let unidos = []

  // while(izq.length && der.length){
  //   if(izq[0] < der[0]){
  //     unidos.push(izq.shift())
  //   } else {
  //     unidos.push(der.shift())
  //   }
  // }

  // while (izq.length) {
  //   unidos.push(izq.shift());
  // }

  // while (der.length) {
  //   unidos.push(der.shift());
  // }

  // return unidos

  // compara ambos
  // izq[] < o > der[]

  // las concatena pero en orden
  // [ ordenado ]


}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

  

  // if( [1]) => return array
  // dividir([])
  // izq[] | der[]
  /// merge( ,ergeSort(izq[]), mergeSort(der[]))

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

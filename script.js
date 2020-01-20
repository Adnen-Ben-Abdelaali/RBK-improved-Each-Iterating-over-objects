
function each(collection, funct) {
  if( Array.isArray(collection) ) {
    for(var i = 0; i < collection.length; i++) {
      funct(collection[i], i);
    }
  }else {
    for(var key in collection) {
      funct(collection[key], key);
    }
  }
}

/*************************************************/
/*
1.Using our updated version of each, write the following functions: values: accepts an object as a parameter, and outputs
 an array of the object's values. keys: accepts an object as a parameter, and outputs an array of the object's keys.
*/

function values(collection) {
  var outputArray = new Array();

  each(collection, function(element, index) {
    outputArray.push(element);
  });
  return outputArray;
}

function values(collection) {
  var outputArray = new Array();

  each(collection, function(element, index) {
    outputArray.push(index);
  });
  return outputArray;
}
 /*************************************************/
/*
2.Write a function called keysLongerThan that accepts two parameters -- an object and a number
 -- and returns a new object with only the key/value pairs in the input object whose keys are
  longer than the numeric argument, e.g.:

 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 3);
 // => {name: 'Annyeong', favoriteColor: 'blue'}
 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 4);
 // => {favoriteColor: 'blue'}

Make sure to use the new version of each for this.
*/

 function keysLongerThan(collection, nimLength) {
   var object = {};

   each(collection, function(element, index) {
     if(index.length > nimLength) {
       object[index] = element;
     }
   });
   return object;
 }
/* ----------------------------------------------------- */
/*
5.Write a function called oddEvenArray that accepts an object as parameter and return
 array of numbers of the key values of the object ( you need to arrange the new array, odd
  numbers will be at the beginning of the array, then the even numbers will be at the end of the array)

 function oddEvenArray(object){
       //your code is here
 }
 oddEvenArray({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32}); // ==> [3,5,1,4,10,12,56,44,32]
*/
function oddEvenArray(object) {
  var outputArray = new Array();
  var permute = false;
  var exchange = 0;
  var j = 0;
  each(object, function(element, index) {
      outputArray.push(element);
  });

  while(permute === false) {
    for(var i = 0; i < outputArray.length - 1; i++) {
      if(outputArray[i] % 2 === 0) {
        permute = false;
        exchange = outputArray[i];
        outputArray[i] = outputArray[i + 1];
        outputArray[i + 1] = exchange;
      }
      permute = true;
    }
  }

  while(outputArray[j] %2 !== 0) {
      j++;
  }

  permute = false;
  while(permute === false) {
    permute = true;
    for(var counter = 0; counter < j - 1; counter++) {
        if(outputArray[counter] > outputArray[counter + 1]) {
          exchange = outputArray[counter];
          outputArray[counter] = outputArray[counter + 1];
          outputArray[counter + 1] = exchange;
          permute = false;
        }
    }
  }
  permute = false;
  while(permute === false) {
    permute = true;
    for(var counter = j; counter < outputArray.length - 1; counter++) {
        if(outputArray[counter] < outputArray[counter + 1]) {
          permute = false;
          exchange = outputArray[counter];
          outputArray[counter] = outputArray[counter + 1];
          outputArray[counter + 1] = exchange;
        }
    }
  }


  return outputArray;
}

/************************************************/
/*6.Write a function called isPrimeArray that accepts an object as parameter and return array of prime numbers in the object

 function isPrime(object){
       //your code is here
}
 isPrime({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32}); // ==> [3,5,1]
 */

function isPrime(object) {
  var array = new Array();
  each(object, function(element, index) {
    prime = true;
    for(var j = 2; j < element; j++) {
      var numb = element / j;
      if(Math.floor(numb) === (numb)) {
        prime = false;
      }
    }
    if(prime === true) {
      array.push(element);
    }
  });
  return array;
}

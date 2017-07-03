var numbers = [1,2,3,4,5,6,7,8,9,10];

var filtered = numbers.filter(function evenNumbers (number) {
  return (number % 2 === 0);
  }
);

console.log(filtered);

// we have an array of numbers, we have a filtered version of that array
//called filtered. Filtered is filled by "numbers.filter", number being
// the original array, and filter being the FILTER METHOD.
// the FILTER METHOD needs rules, those are established in the function
// in brackets at the end of the method.

//I am creating a function called evenNumbers, this function will do a
// modulus of 2 on all "number"


//var filtered = pets.filter(function (pet) {
//       return (pet !== 'elephant');
//     });


//var ages = [32, 33, 16, 40];

//function checkAdult(age) {
//    return age >= 18;
//}
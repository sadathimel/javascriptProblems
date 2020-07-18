function arraySome(n) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var result = arraySome(numbers);
console.log("total of the numbers: ", result);

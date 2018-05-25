function cToF(celsius) {
  var a = celsius * 1.8;
  var b = a + 32;
  console.log(celsius + "\xB0" + 'C is ' + b + '\xB0' +'F')
  // this is celsius to Fahrenheit
}

function fToC(fahrenheit) {
  var a = 5 / 9;
  var b = fahrenheit - 32
  var c = a * b
  console.log(fahrenheit + '\xB0' + 'F is ' + c + "\xB0" + 'C')
  // this is Fahrenheit to Celsius
}

cToF(60);
fToC(45);

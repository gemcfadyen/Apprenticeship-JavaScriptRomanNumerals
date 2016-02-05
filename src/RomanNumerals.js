function convert(arabic) {
  var romans = ["M", "CM", "D", "CD", "C", "XC", "XL", "X", "IX", "V", "IV", "I"];
  var arabics = [1000, 900, 500, 400, 100, 90, 40, 10, 9, 5, 4, 1];
  var roman_conversion = "";

  for (i = 0; i < romans.length; i++) {
    while (arabic >= arabics[i]) {
      roman_conversion += romans[i];
      arabic -= arabics[i];
    }
  }

  return roman_conversion;
}



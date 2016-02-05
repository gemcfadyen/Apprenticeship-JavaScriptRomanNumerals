function convert(arabic) {
  var romans = ["XC", "XL", "X", "IX", "V", "IV", "I"];
  var arabics = [90, 40, 10, 9, 5, 4, 1];
  var roman_conversion = "";

  for (i = 0; i < romans.length; i++) {
    while (arabic >= arabics[i]) {
      roman_conversion += romans[i];
      arabic -= arabics[i];
    }
  }

  return roman_conversion;
}



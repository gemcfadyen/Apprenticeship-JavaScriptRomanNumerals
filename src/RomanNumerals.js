function convert(arabic) {
  var romans = ["X", "V", "I"];
  var arabics = [10, 5, 1];
  var roman_conversion = "";

  for (i = 0; i < romans.length; i++) {
    while (arabic >= arabics[i]) {
      roman_conversion += romans[i];
      arabic -= arabics[i];
    }
  }

  return roman_conversion;
}



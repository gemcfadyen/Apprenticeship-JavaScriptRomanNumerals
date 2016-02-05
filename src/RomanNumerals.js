function convert(arabic) {
  var roman_conversion = "";
  var romans = ["X", "V", "I"];
  var arabics = [10, 5, 1];

  for(i = 0; i < romans.length; i++) {
    if (arabic == arabics[i]) {
      roman_conversion = romans[i];
    }
  }

  return roman_conversion;
}



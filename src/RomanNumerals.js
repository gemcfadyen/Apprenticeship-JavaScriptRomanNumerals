function convert(arabic) {
  var roman_conversion = "";
  if (arabic == 1) {
    roman_conversion = "I";
  } else if (arabic == 5) {
    roman_conversion = "V";
  } else if (arabic == 10) {
    roman_conversion = "X"
  }
  return roman_conversion;

}



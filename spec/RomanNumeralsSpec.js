describe ("Roman numeral convertion", function() {

  it ("converts 0 to emtpy string", function() {
    expect(convert(0)).toEqual("");
  });

  it ("converts 1 to I", function() {
    expect(convert(1)).toEqual("I");
  });

  it ("converts 2 to II", function() {
    expect(convert(2)).toEqual("II");
  });

  it("converts 3 to III", function() {
    expect(convert(3)).toEqual("III");
  });

  it("converts 4 to IV", function() {
    expect(convert(4)).toEqual("IV");
  });

  it ("converts 5 to V", function() {
    expect(convert(5)).toEqual("V");
  });

  it ("converts 9 to IX", function() {
    expect(convert(9)).toEqual("IX");
  });

  it ("converts 10 to X", function() {
    expect(convert(10)).toEqual("X");
  });

  it ("converts 20 to XX", function() {
    expect(convert(20)).toEqual("XX");
  });

  it ("converts 40 to XL", function() {
    expect(convert(40)).toEqual("XL");
  });

  it ("converts 90 to XC", function() {
    expect(convert(90)).toEqual("XC");
  });

  it ("converts 100 to C", function() {
    expect(convert(100)).toEqual("C");
  });

  it ("converts 400 to CD", function() {
    expect(convert(400)).toEqual("CD");
  });

  it ("converts 500 to D", function() {
    expect(convert(500)).toEqual("D");
  });

  it ("converts 900 to CM", function() {
    expect(convert(900)).toEqual("CM");
  });

  it ("convets 1000 to M", function() {
    expect(convert(1000)).toEqual("M");
  });

  it ("converts 3999 to MMMCMXCIX", function() {
    expect(convert(3999)).toEqual("MMMCMXCIX");
  });
});

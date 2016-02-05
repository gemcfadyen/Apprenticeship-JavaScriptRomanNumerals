describe ("Roman numeral convertion", function() {

  it ("converts 0 to emtpy string", function() {
    expect(convert(0)).toEqual("");
  });

  it ("converts 1 to I", function() {
    expect(convert(1)).toEqual("I");
  });

  it ("converts 5 to V", function() {
    expect(convert(5)).toEqual("V");
  });

  it ("converts 10 to X", function() {
    expect(convert(10)).toEqual("X");
  });

  it ("converts 2 to II", function() {
    expect(convert(2)).toEqual("II");
  });
});




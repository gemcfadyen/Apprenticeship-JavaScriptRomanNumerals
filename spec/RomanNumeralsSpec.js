describe( "Roman Numerals Kata", function() {

  describe ("Roman numeral convertion", function() {
    it ("converts 1 to I", function() {
      expect(convert(1)).toEqual("I");
    });


    it ("converts 5 to V", function() {
      expect(convert(5)).toEqual("V");
    });
  });
});

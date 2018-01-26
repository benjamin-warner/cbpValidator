describe("validator", function(){

  	it("should validate", function(){
  		expect(validateCBPList("[{(())}]")).toEqual("YES");

  		expect(validateCBPList("[[](]]")).toEqual("NO");

  		expect(validateCBPList("[[(()))[")).toEqual("NO");
  	})
})
describe("validator should", function(){


  	it("pass", function(){
  		expect(validateCBPList("[{(())}]")).toEqual("YES");

		expect(validateCBPList("((()()()))")).toEqual("YES");

		expect(validateCBPList("{{}[]()}")).toEqual("YES");

  		expect(validateCBPList("{[]()[]}")).toEqual("YES");

  		expect(validateCBPList("[][][][][]")).toEqual("YES");

  		//Whether these three scenerios should be allowed to pass feels ambiguous, but I allowed it.
  		expect(validateCBPList("()()()")).toEqual("YES");

  		expect(validateCBPList("{}{}{}")).toEqual("YES");

  		expect(validateCBPList("{}[]()")).toEqual("YES")
  	})

  	it("fail because", function(){

  		expect(validateCBPList("((()")).toEqual("NO");

  		expect(validateCBPList("[[[]")).toEqual("NO");

  		expect(validateCBPList("{{{}")).toEqual("NO");

  		expect(validateCBPList("[[](]]")).toEqual("NO");

  		expect(validateCBPList("[[(()))[")).toEqual("NO");

  	})

})
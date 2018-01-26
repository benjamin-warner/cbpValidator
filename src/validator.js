function validateCBPList(cbpList){
	console.log(cbpList)
	var stack = []
	var firstSymbol = cbpList.charAt(0)
	var lastSymbol = cbpList.charAt(cbpList.length-1)
	if(isCloser(firstSymbol) || !isCloser(lastSymbol)){
		return "NO"
	}

	console.log("pushing", firstSymbol)
	stack.push(firstSymbol)
	
	for(var i = 1; i < cbpList.length; i++){
		var nextSymbol = cbpList.charAt(i)
		var stackTop = stack[stack.length - 1]
		if(doesNextSymbolClosePair(stackTop, nextSymbol)){
			console.log("pop", stackTop, nextSymbol)
			stack.pop()
		}
		else if(!isNextInvalid(stackTop, nextSymbol)){
			console.log("valid", stackTop, nextSymbol)
			stack.push(cbpList.charAt(i));

		}
		else{
			console.log("NO", stackTop, nextSymbol)
			return "NO"
		}

	}
	return "YES"
}

function isCloser(symbol){
	return symbol == '}' || symbol == ']' || symbol == ')'
}

function doesNextSymbolClosePair(stackTop, nextSymbol){
	switch(stackTop){
		case '{':
			if(nextSymbol == '}'){
				return true
			}
		case '[':
			if(nextSymbol == ']'){
				return true
			}
		case '(':
			if(nextSymbol == ')'){
				return true
			}
	}
}

function isNextInvalid(stackTop, nextSymbol){
	switch(stackTop){
		case '{':
			if(nextSymbol == ')' || nextSymbol == ']'){
				return true
			}
		case '[':
			if(nextSymbol == '}' || nextSymbol == ')'){
				return true
			}
		case '(':
			if(nextSymbol == '}' || nextSymbol == ']'){
				return true
			}
	}
}

function validateCBPList(cbpList){
	var stack = []

	var firstSymbol = cbpList.charAt(0)
	var lastSymbol = cbpList.charAt(cbpList.length-1)
	if(isCloser(firstSymbol) || !isCloser(lastSymbol)){
		return "NO"
	}
	stack.push(firstSymbol)
	
	for(var i = 1; i < cbpList.length; i++){
		if(stack.length == 0){
			return "NO"
		}
		var nextSymbol = cbpList.charAt(i)
		var stackTop = stack[stack.length - 1]
		if(doesNextSymbolClosePair(stackTop, nextSymbol)){
			stack.pop()
		}
		else if(!isNextInvalid(stackTop, nextSymbol)){
			stack.push(cbpList.charAt(i));

		}
		else{
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

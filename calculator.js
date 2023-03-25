let result = document.getElementById("result");

function appendToResult(value) {
	result.value += value;
}

function clearResult() {
	result.value = "";
}

function calculate(operation) {
	switch (operation) {
		case "+":
			result.value += "+";
			break;
		case "-":
			result.value += "-";
			break;
		case "*":
			result.value += "*";
			break;
		case "/":
			result.value += "/";
			break;
		case "**":
			result.value += "**";
			break;
		case "%":
			result.value += "%";
			break;
		case "sqrt":
			result.value = Math.sqrt(parseFloat(result.value));
			break;
		case "pi":
			result.value += Math.PI;
			break;
		case "e":
			result.value += Math.E;
			break;
		default:
			break;
	}
}

function calculateResult() {
	result.value = eval(result.value);
}

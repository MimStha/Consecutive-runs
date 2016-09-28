var integerArray = [], 
indices = [], 
i = 1;  // i is cached counter, loop doesnt have to start from first if not reset or page refreshed

//DOM Elements
var intArrayField = document.getElementById('integerArray'),
indicesArray = document.getElementById("indicesArray"),
integerValue = document.getElementById('numberInput'),
addBtn = document.getElementById("addBtn"),
searchBtn = document.getElementById("searchBtn"),
resetBtn = document.getElementById('resetBtn');

// Pre load
function init () {
	integerArray = [],
	indices = [],
	i = 1;

	searchBtn.disabled = true;
	resetBtn.disabled = true;
}

function addInteger(e) {
	// integerValue = document.getElementById('numberInput');
	if(integerValue.value != "") {
		integerArray.push(integerValue.value);
		intArrayField.innerHTML += (integerArray.length == 1 ? "" : "," ) + integerValue.value;
		integerValue.value = "";
		searchBtn.disabled = false;
		resetBtn.disabled = false;
	}
	
};

var reset = function () {
	indicesArray.innerHTML = "<p>List Of Indices :  [Array]</p>";
	intArrayField.innerHTML = "<p>Entered Numbers :  [Array]</p>";
	integerValue.value = "";
	init();
};

/*Can not take right or left two consecutive elements to check the element
it will count twice, see below
Example:  [0, 1, 2, 4, 5, 6] 
Indices:  [0, 2, 3, 5]
In indices you see 2 and 5 counting the same consecutive elements twice
Thus, always look for one element to the right and left*/

function searchConsecutiveNumbers() {
	document.getElementById('indicesArray').innerHTML = "<p>List Of Indices:  [Array]</p>";
	let lengthOfArray = integerArray.length;

 // only go through an Array if length is > 2
 if(lengthOfArray > 2) {
 	for (i; i < lengthOfArray - 1; i++) {
 		let prevElem = parseInt(integerArray[i-1]), currElem = parseInt(integerArray[i]),
 		nextElem = parseInt(integerArray[i+1]);

 		if(currElem < nextElem) {
 			if(currElem == (prevElem + 1) && (currElem == nextElem - 1)) 
 				indices.push(i-1);
 		} else if(currElem > nextElem) {
 			if(currElem == (prevElem - 1) && currElem == (nextElem + 1))
 				indices.push(i-1);
 		}
 	}
 } 
 document.getElementById('indicesArray').innerHTML += indices;
};
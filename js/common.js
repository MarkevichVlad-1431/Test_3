function buildGraph(x, y) {
	var div = document.createElement("div");
	div.style.position = 'absolute';
	div.style.bottom = '32px';
	div.style.left = 65 + (x * 20) + "px";
	div.style.height = y * 20 + "px";
	div.style.width = "20px";
	if (y < 6) {
		div.style.backgroundColor = 'green';
	} else if (y > 10 ) {
		div.style.backgroundColor = 'red';
	} else {
		div.style.backgroundColor = 'yellow';
	}
	CoordinateSystem.appendChild(div);
}

function writeNumber(x) {
	var div2 = document.createElement("div");
	div2.innerHTML = x + "";
	div2.style.position = 'absolute';
	div2.style.bottom = '12px';
	div2.style.left = 68 + (x * 20) + "px";
	CoordinateSystem.appendChild(div2);
}

var arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

var CoordinateSystem = document.getElementById("CoordinateSystem");

for (var i = 0; i < arr.length; i++) {
	var y = arr[i];
	var x = i;
	buildGraph(x, y);
	writeNumber(x);
}


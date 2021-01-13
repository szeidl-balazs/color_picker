function pageLoad() {

		let _bodyId = document.querySelector('#bodyId');
		/*Listen the change of rgb values in the sepcific input field for r, g, b values:*/
		const inputR = document.querySelector('#red');			/*store input tag rgb R in inputR variable*/
	 	const inputG = document.querySelector('#green');
		const inputB = document.querySelector('#blue');
		const _transp = document.querySelector('#transp');
	 	const rText = document.querySelector('#rText');			/*store the output tag to display rgb red value, in this case this is a <p> tag */
	 	const gText = document.querySelector('#gText');
	 	const bText = document.querySelector('#bText');

	 	let rgbToHex = function (r, g, b) { 
		let hexR = Number(r).toString(16);
		let hexG = Number(g).toString(16);
		let hexB = Number(b).toString(16);
		
		if (hexR.length < 2) {
			hexR = "0" + hexR;
		}	

		if (hexG.length < 2) {
			hexG = "0" + hexG;
		}	
		 
		if (hexB.length < 2) {
			hexB = "0" + hexB;
		}	
		let hexVal = "#" + hexR + hexG + hexB;								/*store the hex components in hexVal*/
		
		_bodyId.style.backgroundColor = hexVal;								/*changes the background color*/
		
		return "Hex value: #" + hexR + hexG + hexB;						/*displays the hex value*/
	}
	

	 	let r, g, b;
	 	inputR.addEventListener('input', updateRValue);										/*listen the input field of rgb R value and if changes activate updateRValue function*/
	 	function updateRValue(e) {			
			rText.innerHTML = `Red: ${Number(e.target.value).toString(2)}`;	/*r value is taken from the eventlistener, updateRValue function accesses the <p> tag (rText) of rgb red value and updates*/
		
			r = document.getElementById("red").value;
			g = document.getElementById("green").value;
			b = document.getElementById("blue").value;
			rgbToHex(r, g, b);																							/*call rgbToHex function passing a value stored in r variable*/
			/*rText.innerHTML = Number(r).toString(2);*/										/*This alternative takes r value directly from input filed */
		}		
		
		inputG.addEventListener('input', updateGValue);
		function updateGValue(e) {
		gText.innerHTML = `Green: ${Number(e.target.value).toString(2)}`;
		r = document.getElementById("red").value;
		g = document.getElementById("green").value;
		b = document.getElementById("blue").value;
		rgbToHex(r, g, b);			
		}

		
		inputB.addEventListener('input', updateBValue);
		function updateBValue(e) {
			bText.innerHTML = `Blue: ${Number(e.target.value).toString(2)}`;
			r = document.getElementById("red").value;
			g = document.getElementById("green").value;
			b = document.getElementById("blue").value;
			rgbToHex(r, g, b);											
		}	

		let tra;
		_transp.addEventListener('input', updateTransp);
		function updateTransp(e) {
			tra = Number(e.target.value) / 100;
			console.log(tra);
			console.log(typeof tra);
			_bodyId.style.opacity = tra;
		}
		
}

window.addEventListener('load', pageLoad);
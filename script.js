function pageLoad() {

	let _bodyId = document.querySelector('#bodyId');

		/*Listen the change of rgb values in the sepcific input field for r, g, b values:*/
	 const inputR = document.querySelector('#red');			/*store input tag rgb R in inputR variable*/
	 const inputG = document.querySelector('#green');
	 const inputB = document.querySelector('#blue');
	 const rText = document.querySelector('#rText');		/*store the output tag to display rgb red value, in this case this is a <p> tag */
	 const gText = document.querySelector('#gText');
	 const bText = document.querySelector('#bText');
		
	 	let r;
	 	inputR.addEventListener('input', updateRValue);			/*listen the input field of rgb R value and if changes activate updateRValue function*/
	 	function updateRValue(e) {
			rText.innerHTML = `red: ${e.target.value}`;								/*updateRValue function accesses the <p> tag (rText) of rgb red value and updates*/
			r = document.getElementById("red").value;
		 }
		
		let g;
		inputG.addEventListener('input', updateGValue);
		function updateGValue(e) {
		gText.innerHTML = `Green: ${e.target.value.toString(2)}`;
		g = document.getElementById("green").value;
		}

		let b;
		inputB.addEventListener('input', updateBValue);
		function updateBValue(e) {
			bText.innerHTML = `Blue: ${e.target.value}`;
			b = document.getElementById('blue').value;
			let bBin = b.toString(2);
			
			console.log(bBin);			
		}

		var rgbToHex = function (rgb) { 
			var hex = Number(rgb).toString(16);
			if (hex.length < 2) {
					 hex = "0" + hex;
			}
			return hex;
		};
	
	/*_bodyId.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;*/

				
	
	
	
	
	
	
	
	
}

window.addEventListener('load', pageLoad);
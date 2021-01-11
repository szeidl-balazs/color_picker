function pageLoad() {

	let _bodyId = document.querySelector('#bodyId');

		/*Listen the change of rgb values in the sepcific input field for r, g, b values:*/
	 const inputR = document.querySelector('#red');			/*store input tag rgb R in inputR variable*/
	 const inputG = document.querySelector('#green');
	 const inputB = document.querySelector('#blue');
	 const rText = document.querySelector('#rText');		/*store the output tag to display rgb red value, in this case this is a <p> tag */
	 const gText = document.querySelector('#gText');
	 const bText = document.querySelector('#bText');

	 inputR.addEventListener('input', updateRValue);			/*listen the input field of rgb R value and if changes activate updateRValue function*/
	 function updateRValue(e) {
			rText.textContent = e.target.value;								/*updateRValue function accesses the <p> tag (rText) of rgb red value and updates*/
		}

		inputG.addEventListener('input', updateGValue);
		function updateGValue(e) {
			gText.textContent = e.target.value;
		}

		inputB.addEventListener('input', updateBValue);
		function updateBValue(e) {
			bText.textContent = e.target.value;
		}

		/*_bodyId.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;*/
	/*const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16);
	return hex.length === 1 ? '0' + hex : hex}).join('');*/
	
}

window.addEventListener('load', pageLoad);
function initSlider(){
	const elements = document.querySelectorAll(".portfolio-info-div");
	for (let i = 0; i < elements.length; i++) {
		let element = elements[i];
		element.parentNode.onmouseover = function(){
			element.classList.remove("noslide");
			element.classList.remove("slidedown");
			element.classList.add("slideup");
		};
		element.parentNode.onmouseout = function(){
			element.classList.remove("slideup");
			element.classList.add("slidedown");
			element.classList.add("noslide");
		}
	}
}

function initLinks(){
	let divEls = document.querySelectorAll("[data-href]");
	divEls.forEach(div => {
		div.style.cursor = "pointer";
		div.onclick = () => {
			let win = window.open(div.getAttribute("data-href"), '_blank');
		}
	});
}
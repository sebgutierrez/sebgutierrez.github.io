var esc = document.getElementById("escape");

esc.addEventListener('mouseover', displace)

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function displace () {

	const rect = esc.getBoundingClientRect();
	const x = rect.left + window.scrollX;
	const y = rect.top + window.scrollY;

	let new_x = getRndInteger(0, 1024)
	let new_y = getRndInteger(0, 900)

	esc.style.position = "absolute";
	esc.style.left = new_x+'px';
	esc.style.top = new_y+'px';

}

const menuBtn = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

menuBtn.addEventListener('click', () => {
	sidebar.classList.toggle('active');
	content.classList.toggle('active');
});

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();
	const colorString = `rgb(${col1}, ${col2}, ${col3})`;
	body.style.background = colorString;
	color.innerText = colorString;
}

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}
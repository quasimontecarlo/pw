// add class navbarDark on navbar scroll

const header = document.querySelector('.navbar');
window.onscroll = function() {
	const top = window.scrollY;
	if (top >=100) {
		header.classList.add('navbarDark');
	}
	else {
		header.classList.remove('navbarDark');
	}
}

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
	l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


// random website link

var rb = document.getElementById("logo_button");
rb.addEventListener("click", randweb);

function randweb() {
	var sites = ["https://www.hackertyper.com/", "https://onefishstudio.net/ucg", "https://neal.fun/password-game/", "https://pointerpointer.com/", "https://mondrianandme.com/", "https://www.agegeek.com/", "https://www.yourmetricbirthday.com/", "https://thezen.zone/", "https://papertoilet.com/", "https://jurassicsystems.com/", "https://tvtropes.org/", "https://www.keybr.com/"]
	var rs = sites[Math.floor(Math.random() * sites.length)];
	console.log(rs);
	window.open(rs, "_blank").focus();
}

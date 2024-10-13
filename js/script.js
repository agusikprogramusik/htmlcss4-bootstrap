document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const links = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const toTopButton = document.querySelector(".to-top");

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	function moveToTheTopButton() {
		if (window.scrollY >= 300) {
			toTopButton.classList.add("show");
		} else {
			toTopButton.classList.remove("show");
		}
	}

	links.forEach((link) =>
		link.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);
	window.addEventListener("scroll", moveToTheTopButton);

	toTopButton.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
		});
	});
});

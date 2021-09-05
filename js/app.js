 // Define Global Variables
let header = document.querySelector("header"),
 	navBar = document.querySelector('nav'),
	ul = document.querySelector("ul"),
	sections = document.querySelectorAll('section');
// End Global Variables

// create main function contains every 
function mainFunction() {
	// loop over sections to get ever single section
	for(let i = 0; i < sections.length; i++) {
		// build Navbar and create the Menu

		// create li item
		let lis = document.createElement('li');
		// add text based on 'data-nav'
		let sectionName = document.createTextNode(sections[i].getAttribute("data-nav"));
		// add text to li
		lis.appendChild(sectionName);
		// add all 'li' items to ul
		ul.appendChild(lis);
		// add class 'menu__link'
		lis.classList.add("menu__link");

		// Scroll to anchor section 
		lis.addEventListener("click", function() {
			if (lis.textContent = sections[i].getAttribute('data-nav')) {
				sections[i].scrollIntoView({ behavior: 'smooth', block: 'start'});
			}
		});

		// add active class while scroll
		window.addEventListener("scroll", function() {
			const sectionFromTop = sections[i].getBoundingClientRect().top;
			// if the section in view
			if (sectionFromTop >= 0 && sectionFromTop <= 250) {
				// add 'your-active-calss' to the section
				sections[i].classList.add("your-active-class")
			} else {
				// if any section is not in the view then reomve the active class
				sections[i].classList.remove("your-active-class")
			}
		})
		
	}
}


mainFunction();
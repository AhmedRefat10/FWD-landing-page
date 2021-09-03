 // Define Global Variables
let header = document.querySelector("header"),
 	navBar = document.querySelector('nav'),
	ul = document.querySelector("ul"),
	sections = document.querySelectorAll('section');
// * End Global Variables

// create main function contains every 
function mainFunction() {
	// loop over sections to get ever single section
	for(let i = 0; i < sections.length; i++) {
		// build Navbar and create the Menu

		// create li item
		let li = document.createElement('li');
		// add text based on 'data-nav'
		let text = document.createTextNode(sections[i].getAttribute("data-nav"));
		// add text to li
		li.appendChild(text);
		// add all 'li' items to ul
		ul.appendChild(li);
		// add class 'menu__link'
		li.classList.add("menu__link");

		// Scroll to anchor section 
		li.addEventListener("click", function() {
			if (li.textContent = sections[i].getAttribute('data-nav')) {
				sections[i].scrollIntoView({ behavior: 'smooth', block: 'start'});
			}
		});

		// determines if section is in viewport
		function inViewPort (element) {
			let sectionPosition = element.getBoundingClientRect();
			return (sectionPosition.top >= 0)
		}

		// toggle function 
		function toggle() {
			// check if section is in the viewport
			if (inViewPort(sections[i])) {
				// check if section doesn't contain the 'your-active-class' class 
				if (!sections[i].classList.contains("your-active-class")) {
					// add the class
					sections[i].classList.add("your-active-class")
				} else { 
					// if section is out of the viewport remove the class
					sections[i].classList.remove('your-active-class');
				}
			}
		}

		// add class 'your-active-class' to section
		document.addEventListener('scroll', toggle)
	}
}


mainFunction();
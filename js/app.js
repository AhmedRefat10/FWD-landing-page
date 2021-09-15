 // Define Global Variables
let ul = document.querySelector("ul"),
	sections = document.querySelectorAll('section');
// End Global Variables

// create main function contains hole project
function mainFunction() {
	// loop over sections to get ever single section
	for(let i = 0; i < sections.length; i++) {
		// build Navbar and create the Menu

		// create li item
		let li = document.createElement('li');
		// add text based on 'data-nav'
		let sectionName = document.createTextNode(sections[i].getAttribute("data-nav"));
		// add text to li
		li.appendChild(sectionName);
		// add all 'li' items to ul
		ul.appendChild(li);
		// add class 'menu__link'
		li.classList.add("menu__link");

		// when click on any li in the navbar scroll to main section
		li.addEventListener("click", function() {
			// if li = data-nav attribute 
			if (li.textContent = sections[i].getAttribute('data-nav')) {
				// scroll to it using scrollIntoView fuction
				sections[i].scrollIntoView({ behavior: 'smooth', block: 'start'});
			}
		});

		// addActibve class function
		function addActiveClass() {
			// get top position from section
			const positionFromTop = sections[i].getBoundingClientRect().top;
			// if the section in view
			if (positionFromTop >= 0 && positionFromTop <= 260) {
				// add 'your-active-calss' to the section
				sections[i].classList.add("your-active-class");
                           
                                if (li.textContent = sections[i].getAttribute('data-nav')) {   
                                  li[i].classList.add('menu-link-on-view');
                                } 
                               
			} else {
				// if any section is not in the view then reomve the active class
				sections[i].classList.remove("your-active-class");
                                li[i].classList.remove('menu-link-on-view');
			}
		}
		// call the addActiveClass function when scroll
		document.addEventListener("scroll", addActiveClass)
	}
}


mainFunction();

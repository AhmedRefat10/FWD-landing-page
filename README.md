# FWD-landing-page
first get main variables which are (ul, sections)

create funcion called "mainFunction" contains hole project 

inside "mainFunction":-
 1- loop over sections variable to get every single section
 inside the loop:-
   1- build navbar:-
     1- create li element
     2- create textNode called sectionName based on "data-nav" attribute
     3- append sectionName to li
     4- append li to ul
     5- add class "menu__link" to li
  
   2- when click on the li check if li.textContent = sections[i].getAttribute("data-nav")
  if true scroll to section using "scrollIntoView" function

 2- create addActiveCalss function :-
  1- creat positionFromTop variable to get top position from section
  2- check if "positionFromTop" >= 0 and <= 250:-
     if true add activeclass to the section in the view
     else remove activeclass
     
  call the addActiveClass function when scroll using document.addEventListener("scroll", addActiveClass)


finally call the mainfunction

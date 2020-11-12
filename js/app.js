// add element list as GV 
const ulList= document.getElementById("navbar__list");
const sectionsList = document.getElementsByTagName("section");

// add dynamic menu sections 
for (const section of sectionsList ) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.setAttribute("class",`menu__link`);
    aElement.appendChild(document.createTextNode(section.id));
    liElement.appendChild(aElement);
    ulList.appendChild(liElement);
     // scroll to the specific element 
    liElement.addEventListener('click', function () {
    const bCRect = section.getBoundingClientRect();
    const activeLink = window.pageYOffset + bCRect.top ;
      window.scrollTo({
        top: activeLink
      });
    });
    }

  // creat new css class for the active link 
    var myStyle = (function() {
      var newStyle = document.createElement("style");
      newStyle.appendChild(document.createTextNode(""));
      document.head.appendChild(newStyle);
      return newStyle;
  })();
  myStyle.sheet.insertRule('.active-link{color:red!important; background: rgb(0, 0, 0);}', 0);

// highlight specific anchor 
const navLink = document.querySelectorAll('.menu__link');
let highlightLink = function() {
let i = sectionsList.length;
while (--i && window.scrollY + 50 < sectionsList[i].offsetTop) {
 }
navLink.forEach((link) => link.classList.remove('active-link'));
navLink[i].classList.add('active-link');
}
  // call listener
  document.addEventListener('scroll', highlightLink, false); 
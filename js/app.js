// add element list as GV 
const ul_list= document.getElementById("navbar__list");
const sections_list = document.getElementsByTagName("section");
const link_tag = document.querySelector('a');
const mainHeading = document.querySelector('h1');

// add dynamic menu sections 
for (const section of sections_list ) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href",`#${section.id} `);
    a.setAttribute("class",`menu__link`);
    // scroll to the specific element 
    a.appendChild(document.createTextNode(section.id));
    li.appendChild(a);
    ul_list.appendChild(li);
}
// highlight specific anchor 
var listener = function() {
    for (let i = 0; i <  sections_list.length; i++) {
      let section = sections_list[i];
      let b_c_r = section.getBoundingClientRect();
      if (b_c_r.top > 0 && b_c_r.top < window.innerHeight) {
          section.classList.add('.active');
          document.querySelector('a').style.backgroundColor = 'red';
          
      }
    }
  };
  // call listener
  document.addEventListener('scroll', listener);
  


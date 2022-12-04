const navLinks = [...document.querySelectorAll("nav a")]
const navLinks = [...document.querySelectorAll("section")]

let sectionsPosition;

function positionCalculation(){
    sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition);

function addScrollSmooth(e){
    const linkIndex = navLinks.indexOf(e.target);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
}

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))
const header = document.querySelector('header');
const logo = document.querySelector('header .logo');
const nav = document.querySelector('header nav');
const defaultColor = getComputedStyle(document.body).color;

const updateHeaderColors = () => {
  const crossPoint = header.clientHeight;
  const juxtaposes = [...document.querySelectorAll('.juxtapose')];
  let match;
  for (let i = 0; i < juxtaposes.length; i ++) {
    const {top, bottom} = juxtaposes[i].getBoundingClientRect();
    if (top < crossPoint && bottom > crossPoint) {
      match = juxtaposes[i]; 
      break;
    }
  }
  if (match) {
    const primaryStyle = getComputedStyle(match.querySelector('.primary'));
    const secondaryStyle = getComputedStyle(match.querySelector('.secondary'));
    logo.setAttribute(
      "style", 
      `
      color: ${primaryStyle.color};
      background-color: ${primaryStyle.backgroundColor};
      `
    );
    nav.setAttribute(
      "style", 
      `
      color: ${secondaryStyle.color};
      background-color: ${secondaryStyle.backgroundColor};
      `
    );
  } else {
    logo.setAttribute("style", `color: ${defaultColor}`);
    nav.setAttribute("style", `color: ${defaultColor}`);
  }
}

window.addEventListener('scroll', (e) => {
  updateHeaderColors();
});

updateHeaderColors();
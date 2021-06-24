function getids(id) {
  let element = document.getElementById(id);
}
function projectsid() {
  getids(projects);
  element.style.textAlign = "left";
  element.style.flexDirection = "column";
  element.style.padding = "10px";
}
function space1() {
  getids(space1);
  element.style.padding = "10px";
}
function space2() {
  getids(space2);
  element.style.padding = "10px";
}
function useallfunctions() {
projectsid();
space1();
space2();
}
useallfunctions();
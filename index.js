// change title
document.title = "Fruits & Vegetables Corp";

// add CSS styling
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "main.css");
head.appendChild(link);

//change text header h1
let h1 = document.querySelector("h1");
h1.innerHTML = "Fruits &amp; Vegetables Corp";

//change last "li" element
let veg = document.querySelector("ul li:last-child a");
veg.textContent = "Vegetables";
veg.setAttribute("href", "#vegetables");

//change order
let main = document.querySelector("#main");
let about = document.querySelector("#about");
main.insertBefore(about, about.previousElementSibling);

//set text in about section into p-tag
let p = document.createElement("p");
p.textContent = about.textContent;
about.textContent = "";
about.appendChild(p);

//fix section header
let sections = document.querySelectorAll("section");
for (let e of sections) {
  let h2 = document.createElement("h2");
  h2.textContent = capitalize(e.getAttribute("id"));
  e.insertBefore(h2, e.firstChild);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//replace all td-tag in thead to th-tag
let toReplace = document.querySelectorAll("thead td");
for (let td of toReplace) {
  let th = document.createElement("th");
  th.textContent = td.textContent;
  td.replaceWith(th);
}
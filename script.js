// Start Header
document.body.style = `margin: 0; `;

let myHeader = document.createElement("header");
let myLogo = document.createElement("div");
let myUnorderList = document.createElement("ul");

let myTextLogo = document.createTextNode("Mojahid BELAMAN");
myLogo.style =
  "font-size: 2rem; color: green; font-weight: bold; height: 5rem; line-height: 5rem;";
myLogo.appendChild(myTextLogo);

console.log(myLogo);

let myTextList = [
  document.createTextNode("Home"),
  document.createTextNode("About"),
  document.createTextNode("Service"),
  document.createTextNode("Contact"),
];

myTextList.forEach((ele) => {
  let myList = document.createElement("li");
  myList.appendChild(ele);
  myUnorderList.appendChild(myList);
});

console.log(myUnorderList);
myUnorderList.style = `list-style: none; display: inline; padding: 0; color: #727272; display: flex; gap: 2rem; font-size: 1.5rem; height: 5rem; line-height: 5rem; margin: 0`;

myHeader.append(myLogo, myUnorderList);
myHeader.style =
  "display: flex; justify-content: space-between; padding: 0 15px";

document.body.appendChild(myHeader);

// End Header

// Start Content

let content = document.createElement("div");
content.style = `background: #e7e7e7; padding: 40px 15px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem`;

for (let index = 0; index < 15; index++) {
  let product = document.createElement("div");
  let mySpan = document.createElement("span");
  let textSpan = document.createTextNode(`${index + 1}`);
  let textProduct = document.createTextNode("Product");
  content.className = "content";
  product.className = "product";
//   content.style = `background: #e7e7e7; padding: 15px`;
  product.style = `width: 30%; text-align: center; background: #FFF; color: gray; padding: 30px 15px;`;
  mySpan.style = `display: block; font-weight: bold; font-size: 2rem; color: #000`;
  mySpan.appendChild(textSpan);
  product.appendChild(mySpan);
  product.appendChild(textProduct);
  content.appendChild(product);
  product.lastChild.style = `font-size: 1.5rem;`;
}


document.body.appendChild(content);

// End Content

// Start Footer

let footer = document.createElement('footer');
let textFooter = document.createTextNode('CopyRight 2023');
footer.appendChild(textFooter);
footer.style = `background: green; text-align: center; padding: 20.5px; font-weight: bold; color: #FFF; font-size: 1.5rem`
document.body.appendChild(footer);

// End Footer
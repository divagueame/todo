const onloadElements = () => {
const container = document.querySelector(".container");

const header = document.createElement("div");
const h1 = document.createElement("h1");
const pText = document.createElement("p");
h1.innerHTML = "Fresh4you";
pText.innerHTML = "Texto Parrafo !";


header.appendChild(h1);
header.appendChild(pText);
container.appendChild(header);

}


export {
    onloadElements
}
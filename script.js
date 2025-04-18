"use strict";
const dForm = document.querySelector("#form");
dForm.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const n = e.target.elements["name"].value;
    const l = e.target.elements["loc"].value;
    const img = e.target.elements["img"].value;
    const d = e.target.elements["des"].value;
    for (let i = 0; i < dForm.elements.length; i++) {
        console.log(dForm.elements[i].value);
        dForm.elements[i].value = "";
    }
    const dC = createCard(n, l, img, d);
    console.log(n, l, img, d, dForm.children);
    const WlC = document.querySelector("#destination-container");
    if (WlC.children.length === 0) {
        document.querySelector("#title").innerHTML = "My Wish List";
    }
    WlC.appendChild(dC);
}
function createCard(n, l, img, d) {
    const card = document.createElement("div");
    card.className = "card";
    const pho = document.createElement("img");
    pho.setAttribute("alt", n);
    const cpho = "./images/signpost.jpg";
    if (img.length === 0)
        pho.setAttribute('src', cpho);
    else
        pho.setAttribute('src', img);
    const cB = document.createElement("div");
    cB.className = "card-body";
    cB.appendChild(pho);
    const cT = document.createElement("h3");
    cT.innerText = n;
    cB.appendChild(cT);
    const cS = document.createElement("h4");
    cS.innerText = l;
    cB.appendChild(cS);
    if (d.length !== 0) {
        const cT = document.createElement("p");
        cT.className = "card-text";
        cT.innerText = d;
        cB.appendChild(cT);
    }
    const cDBtn = document.createElement("button");
    cDBtn.innerText = "Remove";
    cDBtn.className = "btn btn-success"
    cDBtn.addEventListener("click", removeDestinatiion);
    cB.appendChild(cDBtn);
    card.appendChild(cB);
    card.style.background= "rgba(109, 235, 208, 0.7)";
    card.style.borderRadius= "15px";
    return card;
}
function removeDestinatiion(e) {
    const card = e.target.parentElement.parentElement;
    card.remove();
}
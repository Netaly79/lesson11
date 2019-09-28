
"use strict";
const  url="https://trevadim.github.io/vue/data/data.json";
const body = document.querySelector('body');
let container;

let createHeader = (text) => {
    let header = document.createElement("header");
    header.innerHTML=`<h1>${text}</h1>`;
    header.style.textAlign="center";
    body.appendChild(header);
}
let createMarkUp= ({main},{planets}) => {
    createHeader(main.cosmos);
    createMain({head:main.infoCosmos, paragraf:main.infoFly});
    createPlanets({planets});  
}

let createMain=({head,paragraf}) =>{
    let main=document.createElement("main");
    body.appendChild(main);
    container=document.createElement("div");
    container.innerHTML=`<h2>${head}</h2><p>${paragraf}</p>`;
    container.style.textAlign="center";
    container.style.backgroundColor="black";
    container.style.color="white";
    container.style.width="900px";
    container.style.margin="0 auto";
    main.appendChild(container);
}

let createPlanets=({planets}) => {
    let mainList=document.createElement("ul");
    mainList.innerText="Планеты солнечной системы";
    mainList.style.textAlign="center";
    mainList.style.fontSize="26px";
    mainList.style.fontWeight="bold";
    mainList.style.padding="20px";
    container.appendChild(mainList);

    for (let i in planets){
    let planet=createPlanet(planets[i]);
    mainList.appendChild(planet);
    }
}

let createPlanet=(planet) => {
    let newPlanet=document.createElement("li");
    newPlanet.innerHTML=`${planet.title} <br>`;
    newPlanet.style.textAlign="center";
    newPlanet.style.fontSize="24px";
    newPlanet.style.marginTop="24px";

    let imagePlanet=document.createElement("img");
    imagePlanet.setAttribute('src',`${planet.url}`);
    imagePlanet.style.display="block";
    imagePlanet.style.margin="0 auto";
    imagePlanet.style.height="450px";
    imagePlanet.style.objectFit="cover";
    newPlanet.appendChild(imagePlanet);

    for (let i=0; i<planet.info.length; i++){
        let infotext=document.createElement("p");
        infotext.innerText=` ${planet.info[i]}`;
        infotext.style.fontSize="20px";
        infotext.style.fontWeight="normal";
        infotext.style.textAlign="justify";
        newPlanet.appendChild(infotext);
    }
    return newPlanet;
}

fetch (url)
    .then(response =>response.json())
    .then(data => createMarkUp(data,data))
    .catch(error => console.log(error));

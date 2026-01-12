let gridSize;

function createGrid() {
    gridSize = +prompt("Enter Grid Size (1-100)");
    if(gridSize >=1 && gridSize <=100) {
        let container = document.querySelector("#container");
        container.innerHTML = "";
        for(let i=1; i<=gridSize*gridSize; i++) {
            let newGridElement = document.createElement("div");
            newGridElement.style.width = (720/gridSize)+"px";
            newGridElement.style.height = (720/gridSize)+"px";
            newGridElement.style.backgroundColor = "black"; 
            newGridElement.style.opacity = 0;
            newGridElement.addEventListener("mouseover", () => {
                let currentOpacity = parseFloat(newGridElement.style.opacity);
                if(currentOpacity < 1) {
                    currentOpacity += 0.1;
                    newGridElement.style.opacity = currentOpacity;
                } 
            });
            container.appendChild(newGridElement);
        }
    }
}

function createColorGrid() {
    gridSize = +prompt("Enter Grid Size (1-100)");
    if(gridSize >=1 && gridSize <=100) {
        let container = document.querySelector("#container");
        container.innerHTML = "";
        for(let i=1; i<=gridSize*gridSize; i++) {
            let newGridElement = document.createElement("div");
            newGridElement.style.width = (720/gridSize)+"px";
            newGridElement.style.height = (720/gridSize)+"px";
            let redRand = Math.floor(Math.random()*1000)%256;
            let greenRand = Math.floor(Math.random()*1000)%256;
            let blueRand = Math.floor(Math.random()*1000)%256;
            newGridElement.style.opacity = 0;
            newGridElement.style.backgroundColor = `rgb(${redRand}, ${greenRand}, ${blueRand})`;

            newGridElement.addEventListener("mouseover", () => { 
                let currentOpacity = parseFloat(newGridElement.style.opacity);
                if(currentOpacity < 1) {
                    currentOpacity += 0.1;
                    newGridElement.style.opacity = currentOpacity;
                }
            });

            container.appendChild(newGridElement);
        }
    }
}


let newButton = document.querySelector("#newButton");
newButton.addEventListener("click", createGrid);

let randomColorButton = document.querySelector("#randomColorButton");
randomColorButton.addEventListener("click", createColorGrid);

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", ()=> {
    let container = document.querySelector("#container");
    container.innerHTML = "";
});



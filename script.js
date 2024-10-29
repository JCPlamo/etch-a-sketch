const container = document.querySelector("#container");

function createDivs(num) {
    for (let i = 0; i < num; i++) 
    {
        const content = document.createElement("div");
        content.classList.add("square");
        container.appendChild(content);
    }
}

createDivs(16*16); // Create 256 squares for a 16x16 grid
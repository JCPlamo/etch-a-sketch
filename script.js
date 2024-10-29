const container = document.querySelector("#container");

function createDivs(num)
{
    while(num > 0)
    {
        const content = document.createElement("div");
        content.classList.add("square");
        container.appendChild(content);
        num--;
    }
}


createDivs(16);
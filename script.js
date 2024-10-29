const container = document.querySelector("#container");

function createDivs(num) {
    for (let i = 0; i < num; i++) 
    {
        const content = document.createElement("div");
        content.classList.add("square");

        //Hover effect
        content.addEventListener('mouseenter', () => {
            content.style.backgroundColor = "black"; // Change background color on hover
        });

        content.addEventListener('mouseleave', () => {
            //content.style.backgroundColor = ""; // Reset background color on leave
        });

        container.appendChild(content);
        
    }
}

createDivs(16*16); // Create 256 squares for a 16x16 grid


// //Hover effect
// const square = document.querySelector("div");

// square.addEventListener('mouseenter', (event) => {
//     // Code to execute when the mouse enters the element
//     //square.body.style.backgroundColor = black;
//     console.log("hover");
//     square.body.style.backgroundColor = "black";
// });

// square.addEventListener('mouseleave', (event) => {
//     // Code to execute when the mouse leaves the element
//     console.log("leave");
// });
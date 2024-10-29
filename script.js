const container = document.querySelector("#container");

function createDivs(num) {
    container.innerHTML = ""; //Deletes existing grid when called
    const gridSize = Math.sqrt(num); //Calculate the number of squares per side

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

    // Update CSS for dynamic grid size
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.flex = `1 0 calc(100% / ${gridSize})`;
        square.style.height = `calc(100% / ${gridSize})`;
    });
}

createDivs(16*16); // Create 256 squares for a 16x16 grid

//Buttons
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let userInput = prompt("Enter a number between 0 and 100");
  Number(userInput);
  if (userInput <= 100 && userInput >= 0)
  {
    createDivs(userInput*userInput);
  }
  else
  {
    alert("Not a valid number.");
  }
  
});
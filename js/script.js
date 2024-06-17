document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector(".snowflakes");
  
    const numberOfSnowflakes = 50;
    const snowflakeTypes = ["❅", "❆", "❄", "•"]; // Customize your snowflake types
  
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.innerHTML = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random duration between 3s and 8s
      snowflake.style.fontSize = `${Math.random() * 2 + 1}em`; // Random size between 1em and 3em
      snowflakesContainer.appendChild(snowflake);
    }
  });
  
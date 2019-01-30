document.addEventListener(`mousemove`, handleMousepositionDiv);
    function handleMousepositionDiv() {
      console.log("mousemove");
      let x = event.clientX;
      let y = event.clientY;
      document.querySelector("#x-axis").innerText = "x-coordinate = " + x;
      document.querySelector("#y-axis").innerText = "y-coordinate = " + y;
    }

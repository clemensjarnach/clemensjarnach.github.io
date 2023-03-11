// Copyright (c) 2023 by Hyperplexed (https://codepen.io/Hyperplexed/pen/MWXBRBp)
// JavaScript for image tracker

const track = document.getElementById("image-track");

track.dataset = {};

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -30,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.style.transform = `translate(${nextPercentage}%, -50%)`;
  
  for(const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${100 + nextPercentage}% center`;

    // Add click event listener to open link when image is clicked
    image.addEventListener("dblclick", () => {
    window.location.href = image.getAttribute("data-link");
  });

  } 
}


track.addEventListener("mousedown", handleOnDown);
track.addEventListener("mouseup", handleOnUp);
track.addEventListener("mousemove", handleOnMove);

track.style.transition = "transform 0.1s ease-out";
track.style.transform = `translate(${nextPercentage}%, -10%)`;



/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);



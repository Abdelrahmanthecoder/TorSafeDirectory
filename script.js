function trackMousePosition(event) {
    // Get the position of the mouse.
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    // Update the position of the CSS gradient.
    const gradient = document.querySelector('.gradient');
    gradient.style.background = `linear-gradient(to right, red ${mouseX / window.innerWidth}%, green ${mouseY / window.innerHeight}%)`;
}
  
// Add the event listener to the document.
document.addEventListener('mousemove', trackMousePosition);

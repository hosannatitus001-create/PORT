// 1. TEST IF JS IS CONNECTED
console.log("JavaScript is loaded ✅");

// 2. SELECT ELEMENTS
const contactBtn = document.querySelector(".contact-btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");

// 3. CREATE FUNCTIONS
function openPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";   
}

// 4. ADD EVENTS
contactBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

// 5. CLOSE POPUP WHEN CLICK OUTSIDE
window.addEventListener("click", (e) => {
  if(e.target == popup){
    closePopup();
  }
});

// 1. SELECT ELEMENTS
const marquee = document.querySelector(".marquee");
const content = document.getElementById("marqueeContent");

// 2. DUPLICATE CONTENT - this removes the gap
content.innerHTML += content.innerHTML; 

// 3. VARIABLES TO CONTROL MOVEMENT
let position = 0; // starting position
let speed = 1; // pixels per frame. Higher = faster

// 4. THE ANIMATION FUNCTION
function moveMarquee() {
  position -= speed; // minus = move left. plus = move right
  
  // if first half has completely moved out, reset to 0
  if (Math.abs(position) >= content.scrollWidth / 2) {
    position = 0;
  }
  
  content.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(moveMarquee); // loops smoothly 60fps
}

// 5. PAUSE ON HOVER
marquee.addEventListener("mouseenter", () => speed = 0);
marquee.addEventListener("mouseleave", () => speed = 2);

// 6. START THE ANIMATION
moveMarquee();

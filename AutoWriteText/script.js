const text = ["Student.", "Trainee.", "Developer.", "Freelancer."]; //list of text.
const sp = document.getElementById("prof");
const typingDelay = 200; //Delay for typing
const erasingDelay = 100; //Delay for erasing
const nextTextDelay = 2000; //Delay for next Text

let textArrayIndex = 0; //index for array
let charIndex = 0; //index for elements of array

function writeText() {
  //main function
  if (charIndex < text[textArrayIndex].length) {
    //Comparing index for elements of array is less than the length of the array element
    sp.textContent += text[textArrayIndex].charAt(charIndex); //printing characters one by one.
    charIndex++; //increasing the char index
    setTimeout(writeText, typingDelay); //providing delay in function
  } else {
    setTimeout(erase, nextTextDelay); //calling erase function and providing delay in function.
  }
}

function erase() {
  //function for erasing
  if (charIndex > 0) {
    //checking if the index character is greater than 0
    sp.textContent = text[textArrayIndex].substring(0, charIndex - 1); //decreasing characters one by one.
    charIndex--; //decreasing the char index
    setTimeout(erase, erasingDelay); //providing delay in function
  } else {
    textArrayIndex++; //increasing array index.
    if (textArrayIndex >= text.length) textArrayIndex = 0; //recalling the array from 0
    setTimeout(writeText, typingDelay); //calling writeText function and providing delay in function.
  }
}

document.addEventListener("DOMContentLoaded", () => {
  //providing a event listener so when the page opens animation starts after 1s.
  setTimeout(writeText, 1000);
});

// This function is called when the user hovers over or focuses on a thumbnail
function upDate(previewPic) {
    // Log to console to verify the function is being called
    console.log("upDate function triggered!");
    
    // Log information about the image being hovered
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);
    
    // Get the element with id "image"
    const imageDiv = document.getElementById('image');
    
    // Update the text content to show the alt text
    imageDiv.innerHTML = previewPic.alt;
    
    // Update the background image using the src attribute
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// This function is called when the user moves away from or blurs a thumbnail
function undo() {
    // Log to console to verify the function is being called
    console.log("undo function triggered!");
    
    // Get the element with id "image"
    const imageDiv = document.getElementById('image');
    
    // Reset the background image to empty
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Optional: Add console log on page load to confirm script is running
console.log("Image gallery script loaded successfully!");
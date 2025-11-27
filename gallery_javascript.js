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

// This function adds tabindex and event listeners to all preview images
function addEventListeners() {
    // Log to console to verify the function is being called
    console.log("addEventListeners function triggered on page load!");
    
    // Get all elements with the class "preview"
    const images = document.querySelectorAll('.preview');
    
    // Loop through each image
    for (let i = 0; i < images.length; i++) {
        // Add tabindex attribute to make images keyboard accessible
        images[i].setAttribute('tabindex', '0');
        console.log(`Added tabindex to image ${i + 1}`);
        
        // Add onfocus event listener
        images[i].addEventListener('focus', function() {
            upDate(this);
        });
        
        // Add onblur event listener
        images[i].addEventListener('blur', function() {
            undo();
        });
        
        // Add onmouseover event listener
        images[i].addEventListener('mouseover', function() {
            upDate(this);
        });
        
        // Add onmouseleave event listener
        images[i].addEventListener('mouseleave', function() {
            undo();
        });
    }
    
    console.log(`Event listeners added to ${images.length} images!`);
}

// Add onload event listener to run addEventListeners when page loads
window.addEventListener('load', addEventListeners);

// Optional: Add console log to confirm script is loaded
console.log("Image gallery script loaded successfully!");

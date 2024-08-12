document.addEventListener("DOMContentLoaded", function() {
    const availableTags = document.getElementById("available-tags");
    const userTag = document.getElementById("user_tag");
  
    // Event delegation to handle clicks on elements with the class 'tag'
    availableTags.addEventListener("click", function(event) {
      if (event.target.classList.contains("tag")) {
        // Move the button to the user_tag div
        userTag.appendChild(event.target);
        
        // Log the current state of selected tags
        console.log('Tag moved to user_tag:', event.target.outerHTML);
        console.log('Current user_tag content:', userTag.innerHTML);
      }
    });
  
    userTag.addEventListener("click", function(event) {
      if (event.target.classList.contains("tag")) {
        // Move the button back to the available-tags div
        availableTags.appendChild(event.target);
  
        // Log the current state of available tags
        console.log('Tag moved back to available-tags:', event.target.outerHTML);
        console.log('Current available-tags content:', availableTags.innerHTML);
      }
    });
  });
  
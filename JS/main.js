// Enterying page button ---------------------------------------------------------------------------
function goToAnotherPage() {
    // Redirect the user to another page
    window.location.href = 'another_page.html';
  }
  
  // Add click event listener to the button
  document.getElementsByClassName('goToAnotherPage').addEventListener('click', goToAnotherPage);
  
  //  Main Popupp ------------------------------------------------------------------------------------
  function openPopup(popupId) {
    // Close any open popups first
    closeAllPopups();
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    }
  }
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    }
  }
  
  function closeAllPopups() {
    var popups = document.getElementsByClassName('popup');
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
  }
  
  
  // Show Visit Website -----------------------------------------------------
   // Check if the 'counter' key exists in localStorage
  if (localStorage.getItem('counter')) {
    // If exists, retrieve the value and parse it as an integer
    var count = parseInt(localStorage.getItem('counter'));
  } else {
    // If not exists, initialize the counter to 0
    var count = 0;
  }
  
  // Display the initial count
  document.getElementById('counter').textContent = count;
  
  // Increment the count and update the display when the page loads
  window.onload = function () {
    count++;
    document.getElementById('counter').textContent = count;
    // Update the localStorage with the new count value
    localStorage.setItem('counter', count);
  };
  
  // Show Time & Date -------------------------------------------------------
  // Function to update clock
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
  
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  }
  
  // Function to update date
  function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
    const dateElement = document.getElementById('date');
    dateElement.textContent = now.toLocaleDateString('en-US', options);
  }
  
  
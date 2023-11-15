// const greetingsElement = document.querySelector(".greetings");
// const currentTime = new Date().getHours();

// let greetingText = "";

// if (currentTime < 12) {
//     greetingText = "Good Morning, Owais Sayyed";
// } else if (currentTime < 18) {
//     greetingText = "Good Afternoon, Owais Sayyed";
// } else {
//     greetingText = "Good Evening, Owais Sayyed";
// }

// // Adding the shaking emoji using innerHTML
// greetingsElement.innerHTML = `${greetingText} <span class="waving-hand">👋</span>`;


//for side menu

let isSideMenuOpen = false;
    const sideMenu = document.querySelector(".side-menu");

    function toggleSideMenu() {
      if (isSideMenuOpen) {
        sideMenu.style.left = "-250px"; 
      } else {
        sideMenu.style.left = "0"; 
      }
      isSideMenuOpen = !isSideMenuOpen;
    }



    // Function to initialize flatpickr for time and date pickers
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#taskTime", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
  });

  flatpickr("#taskCalendar", {
      enableTime: false,
      dateFormat: "Y-m-d",
  });
});


  // Function to open the popup
function openPopup() {
  document.getElementById('addTaskPopup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('addTaskPopup').style.display = 'none';
}



// Function to add a task (you can customize this function based on your requirements)
function addTask() {
  // Add your logic to handle the task addition here
  alert('Task added!');
  closePopup();
}

// Event listener for the plus button
document.getElementById('addTaskBtn').addEventListener('click', openPopup);

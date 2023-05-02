// Get the modal
const modal = document.getElementById("disclaimerModal");

var btn = document.getElementById("search-btn"); //!need to align

btn.addEventListener("click", function() {
  modal.style.display = "block";
});

// close the modal with a cancel btn
var cancelBtn = document.getElementById("cancel-btn");

cancelBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks the Agree btn, run the search function
//! insert search function here
// var confirmBtn = document.getElementById("confirm-btn");

// confirmBtn.addEventListener("click", function() {

//  modal.style.display = "none";
//});

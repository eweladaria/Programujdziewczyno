'use strict';
document.addEventListener('DOMContentLoaded', function() {
  // tutaj będziemy umieszczać kod ze wszystkich zadań

var elementwithDropdown = document.querySelector('.for-dropdown');
// console.log(elementwithDropdown);

var dropdown = document.querySelector('.dropdown');
// console.log(dropdown);

elementwithDropdown.addEventListener('mouseover', function() {
  // console.log('myszka jest tu');

  dropdown.style.display = "block"
});
elementwithDropdown.addEventListener('mouseout', function() {
  // console.log('myszka jest zablokowana');
  dropdown.style.display = "none"
});

});

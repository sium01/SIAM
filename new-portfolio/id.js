// JavaScript for smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
     e.preventDefault();
     
     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });
});
window.onload = function() {
 // Set skill percentages
 let skills = {
  "html": 95,
  "css": 90,
  "javascript": 80,
  "mongodb": 80,
  "express": 85,
  "react": 85,
  "node": 90
     
     
     
 };

 // Function to animate the progress bar
 function loadSkill(skill, percentage) {
     let progressBar = document.getElementById(skill);
     let percentageSpan = document.getElementById(`${skill}-percentage`);
     
     let width = 0;
     let interval = setInterval(function() {
         if (width >= percentage) {
             clearInterval(interval);
         } else {
             width++;
             progressBar.style.width = width + '%';
             percentageSpan.innerText = width + '%';
         }
     }, 10);
 }

 // Call the function for each skill
 for (let skill in skills) {
     loadSkill(skill, skills[skill]);
 }
};

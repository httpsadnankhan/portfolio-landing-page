// Preloader
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('body').classList.add('loaded');
    }, 2000); 
  });
// Changing Job Title
  document.addEventListener("DOMContentLoaded", function() {
      var jobTitles = ["Web Designer", "Web Developer", "UI/UX Designer"];
      var jobTitleElement = document.querySelector(".hero-job-title");

      function updateJobTitle() {
          var currentJobTitle = jobTitleElement.textContent;
          var currentIndex = jobTitles.indexOf(currentJobTitle);
          var nextIndex = (currentIndex + 1) % jobTitles.length;

          jobTitleElement.classList.add("hidden");

          setTimeout(function() {
              jobTitleElement.textContent = jobTitles[nextIndex];
              jobTitleElement.classList.remove("hidden");
          }, 500);
      }

      setInterval(updateJobTitle, 5000);
  });
// Skills animation
  document.addEventListener('DOMContentLoaded', function () {
    let skillsContent = document.querySelector('.about-skills');
    if (skillsContent) {
      new Waypoint({
        element: skillsContent,
        offset: '80%',
        handler: function (direction) {
          let progressBars = document.querySelectorAll('.progress .progress-bar');
          progressBars.forEach((bar) => {
            let valuenow = parseInt(bar.getAttribute('aria-valuenow'), 10);

            // Set the width of the progress bar
            bar.style.width = valuenow + '%';

            // Set the background color based on the value
            if (valuenow < 50) {
              bar.style.backgroundColor = 'red';
            } else if (valuenow >= 50 && valuenow <= 70) {
              bar.style.backgroundColor = '#ffb84d';
            } else {
              bar.style.backgroundColor = '#149ddd'; // Default color
            }
          });
        }
      });
    }
  });
// Counting
  document.addEventListener("DOMContentLoaded", function () {
    const completedNumbers = document.querySelectorAll('.completed-number');

    completedNumbers.forEach(function (numberElement) {
        const endValue = parseInt(numberElement.textContent, 10);
        let startValue = 0;

        const interval = setInterval(function () {
            numberElement.textContent = ++startValue;

            if (startValue === endValue) {
                clearInterval(interval);
            }
        }, 10);
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
  // if ({{ show_mobile_slider | json }}) {

  // }

  const slider = document.querySelector('.testimonials');
  let startX = 0;
  let endX = 0;

  slider.addEventListener('touchstart', function(e) {
    startX = e.changedTouches[0].clientX;
  });

  slider.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;
    if (startX > endX) {
      // Swipe left
      let checkedInput = document.querySelector('.slider input:checked');
      let nextInput = checkedInput.nextElementSibling || document.querySelector('.slider input:first-child');
      nextInput.checked = true;
    } else if (startX < endX) {
      // Swipe right
      let checkedInput = document.querySelector('.slider input:checked');
      let prevInput = checkedInput.previousElementSibling || document.querySelector('.slider input:last-child');
      prevInput.checked = true;
    }
  });
});
const greetingsElement = document.querySelector(".greetings");
const currentTime = new Date().getHours();

let greetingText = "";

if (currentTime < 12) {
    greetingText = "Good Morning, Owais Sayyed";
} else if (currentTime < 18) {
    greetingText = "Good Afternoon, Owais Sayyed";
} else {
    greetingText = "Good Evening, Owais Sayyed";
}

// Adding the shaking emoji using innerHTML
greetingsElement.innerHTML = `${greetingText} <span class="waving-hand">👋</span>`;


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

    //for logo animation
    $(document).ready(function() {

      let loading = $('.slogo').wrapInner('<div></div>'),
          min = 20,
          max = 70,
          minMove = 10,
          maxMove = 20;
  
      startAnimation(loading);
  
      loading.on('animationend webkitAnimationEnd oAnimationEnd', 'span:last-child', e => {
          startAnimation(loading);
      });
  
      //Set CSS vars & generate spans if needed
      function setCSSVars(elem, min, max, minMove, maxMove) {
          let width = Math.ceil(elem.width()),
              text = elem.text();
          for(let i = 1; i < width; i++) {
              let num = Math.floor(Math.random() * (max - min + 1)) + min,
                  numMove = Math.floor(Math.random() * (maxMove - minMove + 1)) + minMove,
                  dir = (i % 2 == 0) ? 1 : -1,
                  spanCurrent = elem.find('span:eq(' + i + ')'),
                  span = spanCurrent.length ? spanCurrent : $('<span />');
              span.css({
                  '--x': i - 1 + 'px',
                  '--move-y': num * dir + 'px',
                  '--move-y-s': ((i % 2 == 0) ? num * dir - numMove : num * dir + numMove) + 'px',
                  '--delay': i * 10 + 'ms'
              });
              if(!spanCurrent.length) {
                  elem.append(span.text(text));
              }
          }
      }
  
      //Start animation
      function startAnimation(elem) {
          elem.removeClass('start');
          setCSSVars(elem, min, max, minMove, maxMove);
          void elem[0].offsetWidth;
          elem.addClass('start');
      }
      
  });
  


//-------- mobile and tablet nav -----------//


const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});




//-------- waypoint sticky nav --------///


$(document).ready(function () {


  $(".js-advantages").waypoint(function (direction) {

    if (direction == "down") {
      $("nav").addClass("sticky-nav");

    }
    else {
      $("nav").removeClass("sticky-nav");
    }
  }, {
    offset: '140'
  });


});
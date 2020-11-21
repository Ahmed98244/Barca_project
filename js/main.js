
// niceScroll
$("body").niceScroll({
  cursorcolor: "#4b73c8",
  background: "#DDD",
  cursorwidth: "15px",
  cursorborderradius: "20px",
  cursoropacitymin: .4
});

// funnyText

$(function () {
  "use strict";
  $(".welcomee h1").funnyText({
    speed: 300,
    color: "#f00",
    borderColor: "#080",
  });
});

// skitter 
$(function() {

  "use strict";

  $(".skitter-large").skitter({

      auto_play: true,
      controls: true,
      controls_position: "center",
      dots: true, 
      easing_default: "easeQutBack",
      focus: true
  });
});
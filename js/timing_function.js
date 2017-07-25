/**
 * Ease 값 비교
 */

$(function(){

  function repeat(){
    $('.box1').css({top : 0}).stop().animate({top : 450}, 2000, 'linear');
    $('.box2').css({top : 0}).stop().animate({top : 450}, 2000, 'easeInExpo');
    $('.box3').css({top : 0}).stop().animate({top : 450}, 2000, 'easeOutExpo');
    $('.box4').css({top : 0}).stop().animate({top : 450}, 2000, 'easeInOutExpo');
    $('.box5').css({top : 0}).stop().animate({top : 450}, 2000, $.bez([0.685, 0.595, 0.020, 0.720]));
  }

  setInterval(function(){
    repeat();
  }, 2500);

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbWluZ19mdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBFYXNlIOqwkiDruYTqtZBcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIHJlcGVhdCgpe1xyXG4gICAgJCgnLmJveDEnKS5jc3Moe3RvcCA6IDB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wIDogNDUwfSwgMjAwMCwgJ2xpbmVhcicpO1xyXG4gICAgJCgnLmJveDInKS5jc3Moe3RvcCA6IDB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wIDogNDUwfSwgMjAwMCwgJ2Vhc2VJbkV4cG8nKTtcclxuICAgICQoJy5ib3gzJykuY3NzKHt0b3AgOiAwfSkuc3RvcCgpLmFuaW1hdGUoe3RvcCA6IDQ1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDQnKS5jc3Moe3RvcCA6IDB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wIDogNDUwfSwgMjAwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgICQoJy5ib3g1JykuY3NzKHt0b3AgOiAwfSkuc3RvcCgpLmFuaW1hdGUoe3RvcCA6IDQ1MH0sIDIwMDAsICQuYmV6KFswLjY4NSwgMC41OTUsIDAuMDIwLCAwLjcyMF0pKTtcclxuICB9XHJcblxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICByZXBlYXQoKTtcclxuICB9LCAyNTAwKTtcclxuXHJcbn0pO1xyXG4iXX0=

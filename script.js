//let hello = document.getElementById('hellomessage')

hello = 'hi there'
console.log(hello)
hello.value = "hi there"

$('helloMessage').html(
    'hi, Im happy to be here!'
)

$('h1').click(function(){
    $('.square').addClass('animateMe')
})

    window.addEventListener('mousemove', function(e) {
      var arr = [1, 0.9, 0.8, 0.5, 0.2];

      arr.forEach(function(i) {
        var x = (1 - i) * 75;
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function() {
          document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
      });
    }, false);

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});


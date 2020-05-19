/* jshint esversion: 6 */
window.addEventListener('load', function () {


// === GSAP & ScrollMagic Variables ===

const Controller = new ScrollMagic.Controller();
const jumbotronTl = new TimelineMax({});
const splashTl = new TimelineMax({});
const wildlifeTl = new TimelineMax({});
const beachesTl = new TimelineMax({});
const trailsTl = new TimelineMax({});
const footerTl = new TimelineMax({});


// === Smooth Scrolling ===

const body = document.body;
const main = document.querySelector('main');

let sx = 0;
let sy = 0;
let dx = sx;
let dy = sy;

body.style.height = main.clientHeight + 'px';

main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

window.addEventListener('scroll', scroll);

function scroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  // change the last number of dx and dy to change to smoothness of the scrolling
  dx = lerp(dx, sx, 0.1);
  dy = lerp(dy, sy, 0.1);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  main.style.transform = `translate(-${dx}px, -${dy}px)`;
  
  window.requestAnimationFrame(render);
}

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}


// === Jumbotron Animation ===



// === Sand Banks Animation ===

splashTl
.from('.titlytop .line', 2, {
	marginRight: "120px"
})
.from('.titlybott .line', 2, {
	marginLeft: "120px"
}, "-=2")
.from('.splash-left', 2, {
	scaleY: 0.9
}, "-=2");

const splashScene = new ScrollMagic.Scene({
  triggerElement: ".splash"
}).setTween(splashTl).addTo(Controller);


// === Wildlife Animation ===

wildlifeTl
.from('.ptitle .line', 2, {
	marginRight: "120px"
})
.from('.cormorant-img', 2, {
	rotation: "10deg",
	x: 50,
	y: -50
}, "-=2")
.from('.turnstone-img', 2, {
	rotation: "-10deg",
	x: -50,
	y: 50
}, "-=2");

const wildlifeScene = new ScrollMagic.Scene({
  triggerElement: ".split"
}).setTween(wildlifeTl).addTo(Controller);


// === Beaches Animation ===

beachesTl
.from('.background-image', 2, {
	scaleY: 0.9
})
.from('.bridges .line', 2, {
	marginRight: "120px"
}, "-=2");

const beachesScene = new ScrollMagic.Scene({
  triggerElement: ".bridges"
}).setTween(beachesTl).addTo(Controller);


// === Trails Animatiion ===

trailsTl
.from('.line-one, .line-three', 2, {
	marginLeft: "120px"
})
.from('.line-two', 2, {
	marginRight: "120px"
}, "-=2")
.from('.background-image-two', 2, {
	scaleY: 0.9
}, "-=2");

const trailsScene = new ScrollMagic.Scene({
  triggerElement: ".canals"
}).setTween(trailsTl).addTo(Controller);


// === Footer Animation ===
footerTl
.from('.footer button', 2, {
	scale: 0.8
});

const footerScene = new ScrollMagic.Scene({
  triggerElement: ".footer"
}).setTween(footerTl).addTo(Controller);


// === Scroll Up Button ===
document.getElementById('ScrollUp').onclick = function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};


});
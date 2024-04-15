// Lenis smooth scroll

const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Lenis smooth scroll end

// GSAP on scroll text animation

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    markers: true,
    start: "30% 30%",
    end: "100% 50%",
    scrub: 1,
    pin: true,
  },
});

tl.to(".text-hover h2", {
  width: "100%",
});

tl.to(".text-hover h3", {
  width: "100%",
});

// GSAP on scroll text animation End

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

var tl = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: "#main",
    start: "20% 20%",
    end: "100% 50%",
    scrub: 1,
    pin: true,
  },
});

tl.to(
  "#right",
  {
    top: "-230%",
  },
  "a"
);

tl.to(
  "#one",
  {
    opacity: "3",
  },
  "a"
);

tl.to(
  "#two",
  {
    opacity: "3",
  },
  "a"
);

tl.to(
  "#three",
  {
    opacity: "3",
  },
  "a"
);

tl.to(
  "#four",
  {
    opacity: "3",
  },
  "a"
);

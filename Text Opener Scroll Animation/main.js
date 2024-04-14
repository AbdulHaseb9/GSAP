var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: true,
    starts: "50% 50%",
    end: "200% 50%",
    scrub: 2,
    pin: true,
  },
});

tl.to(
  "#center",
  {
    height: "100vh",
  },
  "a"
)
  .to(
    "#top",
    {
      top: "-50%",
    },
    "a"
  )
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    "#top-h",
    {
      bottom: "300%",
    },
    "a"
  )
  .to(
    "#bottom-h",
    {
      top: "-60%",
    },
    "a"
  )
  .to(
    "#center-h1",
    {
      top: "-30%",
    },
    "a"
  )
  .to(".content", {
    delay: -0.2,
    marginTop: "0vh",
  });

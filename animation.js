gsap.from(".btn1", {
  duration: 3,
  x: "-400%",
  opacity: 0,
  ease: "power2",
  delay: 0.15,
});
gsap.from(".newanimation", {
  duration: 3,
  opacity: 0,
  y: "-100%",
  ease: "power2",
  delay: 3.5,
});
gsap.from(".btn2", {
  duration: 3,
  x: "400%",
  opacity: 0,
  ease: "power2",
  delay: 0.15,
});
gsap.from(".arrow", {
    duration: 1,
    opacity: 0,
    delay: 3.5,
  });
gsap.fromTo(".h1", { opacity: 0 }, { duration: 1, delay: 0, opacity: 1 });
gsap.fromTo(".h2", { opacity: 0 }, { duration: 1, delay: 0, opacity: 1 });
gsap.from("li", { duration: 1, opacity: 0});
gsap.to(".arrow", {
  scrollTrigger: {
    trigger: ".arrow",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 0,
  duration: 2,
  delay: 5,
});
gsap.to(".aboutme", {
  scrollTrigger: {
    trigger: ".aboutme",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 1,
  x: 400,
  duration: 3,
});
gsap.to(".projects", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
    scrub: 1,
  },
  x: 500,
  duration: 1,
});
gsap.from(".computer", {
  scrollTrigger: {
    trigger: ".cmpt",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 0.5,
  x: -200,
  duration: 0.5,
});
gsap.from(".info", {
  scrollTrigger: {
    trigger: ".cmpt",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 0.5,
  x: 200,
  duration: 0.5,
});
gsap.from(".computer3", {
  scrollTrigger: {
    trigger: ".cmpt3",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 0.5,
  x: -200,
  duration: 0.5,
});
gsap.from(".info3", {
  scrollTrigger: {
    trigger: ".cmpt3",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 0.5,
  x: 200,
  duration: 0.5,
});
gsap.from(".computer2", {
  scrollTrigger: {
    trigger: ".cmpt2",
    start: "top bottom",
    scrub: 1  ,
  },
  opacity: 0.5,
  x: 200,
  duration: 0.5,
});
gsap.from(".info2", {
  scrollTrigger: {
    trigger: ".cmpt2",
    start: "top bottom",
    scrub: 1,
  },
  opacity: 0.5,
  x: -200,
  duration: 0.5,
});



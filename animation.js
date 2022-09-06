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


const can = document.querySelector(".yuvarlak > .y1");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(can, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(can, 1);
moveY(can, -1);
rotate(can, 1);

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

const cann = document.querySelector(".yuvarlak > .y2");

TweenLite.set(cann, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(cann, 1);
moveY(cann, -1);
rotate(cann, 1);

const cannn = document.querySelector(".yuvarlak > .y3");

TweenLite.set(cannn, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(cannn, 1);
moveY(cannn, -1);
rotate(cannn, 1);



function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// Asynchronous method

gsap.to("#box1", {
  x: 1000,
  duration: 1.5,
  delay: 1,
  rotate: 360,
});
gsap.to("#box2", {
  x: 1000,
  duration: 1.5,
  delay: 2.5,
  rotate: 360,
  backgroundColor: "#ff0000",
});
gsap.to("#box3", {
  x: 1000,
  duration: 2,
  delay: 4,
  rotate: 360,
  scale: 0.5,
  borderRadius: "50%",
  backgroundColor: "red",
});

// Synchronous method

const tl = gsap.timeline();

tl.to("#box4", {
  x: 1200,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});
tl.to("#box5", {
  x: 1200,
  duration: 1.5,
});
tl.to("#box6", {
  x: 1200,
  duration: 1.5,
});

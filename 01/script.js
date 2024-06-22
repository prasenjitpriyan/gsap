gsap.to("#box1", {
  x: 1200,
  duration: 1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  //repeat -1 fpr infinite.
  yoyo: true,
  backgroundColor: "blue",
  borderRadius: "50%",
});
gsap.from("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "red",
  borderRadius: "50%",
});
gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 0.3,
});

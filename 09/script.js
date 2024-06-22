const breakTheText = () => {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;

  let clutter = "";

  const splittedText = h1Text.split("");
  const halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach((letter, index) => {
    if (index < halfValue) {
      clutter += `<span class="a">${letter}</span>`;
    } else {
      clutter += `<span class="b">${letter}</span>`;
    }
  });
  h1.innerHTML = clutter;
};

breakTheText();

gsap.from("h1 .a", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from("h1 .b", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});

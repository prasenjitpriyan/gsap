const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#image");

main.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
  });
});

image.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, { scale: 4, backgroundColor: "#ffffff5c", color: "#000" });
});
image.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, { scale: 1, backgroundColor: "#fff" });
});

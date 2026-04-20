const images = document.querySelectorAll(".lightbox");

images.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.add("active");
  });
});
});
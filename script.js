const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.querySelector(".lightbox");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.backgroundImage = `url(${img.src})`;
  });
});
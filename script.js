//your JS code here. If required.
const galleryImages = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
  });
});
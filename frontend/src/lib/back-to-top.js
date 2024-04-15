export default function backToTop(element) {
  const value = document.querySelector(element);
  if (value) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        value.classList.add("back-to-top-btn-show");
      } else {
        value.classList.remove("back-to-top-btn-show");
      }
    });
    value.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

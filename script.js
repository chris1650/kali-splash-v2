function removeVideoEntry() {
  const videoEntry = document.getElementById("video-entry");

  if (videoEntry) {
    videoEntry.addEventListener("animationend", () => {
      videoEntry.remove();
    });
  }
}

const sections = document.querySelectorAll(
  ".section-1, .section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-7-2, .section-8, .section-9, .dual-col-right",
);

const textElements = document.querySelectorAll(
  ".dual-col-right-header, .section-3-italic, .section-4-right-bottom-text, .section-5-right-header, .dual-col-right-section-6 h1",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

sections.forEach((section) => observer.observe(section));
textElements.forEach((el) => observer.observe(el));

removeVideoEntry();

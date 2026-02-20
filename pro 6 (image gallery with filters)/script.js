const filterButtons = document.querySelectorAll(".filter-buttons button");
const images = document.querySelectorAll(".gallery img");
const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const backBtn = document.getElementById("backBtn");

/* 🔹 FILTER LOGIC */
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    images.forEach(img => {
      if (filter === "all" || img.classList.contains(filter)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

/* 🔹 IMAGE CLICK → SAME TAB VIEWER */
images.forEach(img => {
  img.addEventListener("click", () => {
    viewerImage.src = img.src;     // full clarity
    gallery.style.display = "none";
    viewer.style.display = "block";
  });
});

/* 🔹 BACK BUTTON */
backBtn.addEventListener("click", () => {
  viewer.style.display = "none";
  gallery.style.display = "grid";
});

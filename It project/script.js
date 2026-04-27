document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  toggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
<<<<<<< HEAD
function showAlert() {
    document.getElementById("faqModal").style.display = "block";
}

function closeModal() {
    document.getElementById("faqModal").style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("faqModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
=======

 
>>>>>>> 63357e885a502b2e76d5b68b92cdb864b84d2de1

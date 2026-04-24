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
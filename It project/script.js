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

function toggleAudio(btn) {
    const audio = document.getElementById('podcast-audio');
    const icon = btn.querySelector('svg path');

    if (audio.paused) {
        audio.play();
        // Switch to pause icon
        icon.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
    } else {
        audio.pause();
        // Switch back to play icon
        icon.setAttribute('d', 'M8 5v14l11-7z');
    }
}
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('myVideo');
const videoSource = document.getElementById('videoSource');

function playVideo(videoPath) {
    videoSource.src = videoPath; 
    videoPlayer.load();         
    modal.style.display = 'flex';
    videoPlayer.play();          
}

function closeVideo() {
    modal.style.display = 'none';
    videoPlayer.pause();         
    videoPlayer.currentTime = 0; 
}

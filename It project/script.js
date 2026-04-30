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
function playVideo(videoPath) {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('myVideo'); 
  if (!modal || !videoPlayer) return;

  // 1. Convert the standard link to an embed link
  // This changes 'watch?v=ID' to 'embed/ID'
  let embedUrl = videoPath.replace("watch?v=", "embed/");

  // 2. Set the source with autoplay enabled
  videoPlayer.src = embedUrl + "?autoplay=1"; 
  
  // 3. Show the modal
  modal.style.display = 'flex';
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('myVideo');
  if (!modal) return;

  modal.style.display = 'none';

  // 4. Reset the src to stop the video/audio immediately
  videoPlayer.src = ""; 
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    closeVideo();
  }
}
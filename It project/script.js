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
//home page categories cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".featured-catg .card");

  cards.forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const filterValue = card.getAttribute("data-filter");
      // Redirect with filter query
      window.location.href = `courses.html?filter=${filterValue}`;
    });
  });
});
//js faq
function showAlert() {
    document.getElementById("faqModal").style.visibility = "visible";
}

function closeModal() {
    document.getElementById("faqModal").style.visibility = "hidden";
}

window.onclick = function(event) {
    var modal = document.getElementById("faqModal");
    if (event.target == modal) {
        modal.style.visibility = "hidden";
    }
}

//js page el resources

function toggleAudio(btn) {
    const audio = document.getElementById('podcast-audio');
    const icon = btn.querySelector('svg path');

    if (audio.paused) {
        audio.play();
       
        icon.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
    } else {
        audio.pause();
       
        icon.setAttribute('d', 'M8 5v14l11-7z');
    }
}
function playVideo(videoPath) {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('myVideo'); 
  if (!modal || !videoPlayer) return;

  '
  let embedUrl = videoPath.replace("watch?v=", "embed/");

  
  videoPlayer.src = embedUrl + "?autoplay=1"; 
  
 
  modal.style.display = 'flex';
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('myVideo');
  if (!modal) return;

  modal.style.display = 'none';

  videoPlayer.src = ""; 
}


window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    closeVideo();
  }
} 
//filter el category fl course page
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll('.cat-btn');
  const cards = document.querySelectorAll('.course-card');

  const urlParams = new URLSearchParams(window.location.search);
  const initialFilter = urlParams.get("filter") || "all";

  applyFilter(initialFilter);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      this.classList.add('active-filter');
      const filter = this.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  function applyFilter(filter) {
    
    filterBtns.forEach(b => {
      b.classList.remove('active-filter');
      if (b.getAttribute('data-filter') === filter) {
        b.classList.add('active-filter');
      }
    });

   
    cards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
});

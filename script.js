document.addEventListener("DOMContentLoaded", function () {

  // theme toggle
  const toggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // imagemap
  const areas = document.querySelectorAll(".imagemap area");
  areas.forEach(area => {
    area.addEventListener("click", e => {
      e.preventDefault();
      const filterValue = area.getAttribute("data-filter");
      window.location.href = `courses.html?filter=${filterValue}`;
    });
  });

  // course filter
  const filterBtns = document.querySelectorAll('.cat-btn');
  const courseCards = document.querySelectorAll('.course-card');

  if (filterBtns.length > 0) {
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get("filter") || "all";
    applyFilter(initialFilter);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        applyFilter(this.getAttribute('data-filter'));
      });
    });

    function applyFilter(filter) {
      filterBtns.forEach(b => {
        b.classList.remove('active-filter');
        if (b.getAttribute('data-filter') === filter) {
          b.classList.add('active-filter');
        }
      });
      courseCards.forEach(card => {
        card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter)
          ? 'block' : 'none';
      });
    }
  }

  //contact form validation and storage
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let subject = document.getElementById("subject").value.trim();
      let message = document.getElementById("message").value.trim();

      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("subjectError").textContent = "";
      document.getElementById("messageError").textContent = "";
      document.getElementById("success").textContent = "";

      let valid = true;
      if (!name) { document.getElementById("nameError").textContent = "Name is required."; valid = false; }
      if (!email) { document.getElementById("emailError").textContent = "Email is required."; valid = false; }
      else if (!/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(email)) { document.getElementById("emailError").textContent = "Invalid email format."; valid = false; }
      if (!subject) { document.getElementById("subjectError").textContent = "Subject is required."; valid = false; }
      if (!message) { document.getElementById("messageError").textContent = "Message is required."; valid = false; }
      if (valid) {
        document.getElementById("success").textContent = "Message sent successfully!";
        contactForm.reset();
      }
    });
  }

});

//faq modal
function showAlert() { document.getElementById("faqModal").style.visibility = "visible"; }
function closeModal() { document.getElementById("faqModal").style.visibility = "hidden"; }

//audio
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

//video modal
function playVideo(videoPath) {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('myVideo');
  if (!modal || !videoPlayer) return;
  videoPlayer.src = videoPath.replace("watch?v=", "embed/") + "?autoplay=1";
  modal.style.display = 'flex';
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('myVideo');
  if (!modal) return;
  modal.style.display = 'none';
  videoPlayer.src = "";
}

window.onclick = function (event) {
  const videoModal = document.getElementById('videoModal');
  const faqModal = document.getElementById('faqModal');
  if (videoModal && event.target == videoModal) closeVideo();
  if (faqModal && event.target == faqModal) faqModal.style.visibility = "hidden";
}

//3ashan elimagemap
window.addEventListener('load', () => {
  const img = document.querySelector('img[usemap="#eduhub-map"]');

  const observer = new ResizeObserver(() => {
    imageMapResize();
  });

  observer.observe(img);
});

function toggleTheme() {
  document.body.classList.toggle('light');
}


// js el signup
let signupForm = document.getElementById("Signupform");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("Name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmpassword").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let confirmError = document.getElementById("confirmError");

    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    let namePattern = /^[A-Za-z ]+$/;
    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    } else if (name.length < 3) {
      nameError.textContent = "At least 3 characters";
      isValid = false;
    } else if (!name.match(namePattern)) {
      nameError.textContent = "Only letters allowed";
      isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!email.match(emailPattern)) {
      emailError.textContent = "Invalid email";
      isValid = false;
    }

    if (password === "") {
      passError.textContent = "Password required";
      isValid = false;
    } else if (password.length < 6) {
      passError.textContent = "Min 6 chars";
      isValid = false;
    }

    if (confirmPassword === "") {
      confirmError.textContent = "Confirm password";
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmError.textContent = "Passwords don't match";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      alert("Signup successful!");
      window.location.href = "login.html";
    }
  });
}


// js el login
let loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    emailError.textContent = "";
    passError.textContent = "";

    let isValid = true;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
      emailError.textContent = "Email required";
      isValid = false;
    } else if (!email.match(emailPattern)) {
      emailError.textContent = "Invalid email";
      isValid = false;
    }

    if (password === "") {
      passError.textContent = "Password required";
      isValid = false;
    }

    if (!isValid) return;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
    } else {
      passError.textContent = "Invalid email or password";
    }
  });
}
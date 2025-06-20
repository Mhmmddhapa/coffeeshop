document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const hamburger = document.querySelector("#hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    navbarNav.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });

  // Set tahun berjalan secara otomatis
  document.getElementById("year").textContent = new Date().getFullYear();

  // EmailJS handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("isi", "isi", this).then(
        function () {
          alert("Pesan berhasil dikirim!");
        },
        function (error) {
          alert("Gagal mengirim pesan. Coba lagi.");
          console.error("EmailJS error:", error);
        }
      );

      this.reset();
    });
  }

  // Clean paste in textarea
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.addEventListener("paste", function (e) {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData("text");
      document.execCommand("insertText", false, text);
    });
  }
});

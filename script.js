document.addEventListener("DOMContentLoaded", () => {
  const heroBtn = document.querySelector(".hero-btn");
  const enrollButtons = document.querySelectorAll(".enroll-btn");

  heroBtn.addEventListener("click", () => {
      window.location.href = "#courses";
  });

  enrollButtons.forEach(button => {
      button.addEventListener("click", () => {
          alert("Enrollment Successful! Start Learning Now.");
      });
  });

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", event => {
      event.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon.");
      contactForm.reset();
  });
});

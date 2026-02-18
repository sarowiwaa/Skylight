// ================= SMOOTH SCROLL =================
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// ================= MOBILE MENU TOGGLE =================
const navLinks = document.getElementById("navLinks");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= CONTACT FORM SUBMISSION =================
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Construct mailto link
    const mailtoLink = `mailto:skylight254254@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent("Email: " + email + "\n\nMessage:\n" + message)}`;

    // Open user's default email client
    window.location.href = mailtoLink;

    // Alert message
    alert("Thank you for contacting Sky Light Chess Club! Your email client will open to send the message.");

    // Reset form
    this.reset();
});

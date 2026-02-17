function showMessage() {
    alert("Thank you for contacting Sky Light Chess Club!");
    return false;
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
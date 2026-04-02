function toggleText(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}

function showSection(id) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}
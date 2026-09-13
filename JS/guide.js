document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");
    const guideSections = document.querySelectorAll(".guide-section");

    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");

            // Deactivate all nav buttons
            navButtons.forEach((btn) => btn.classList.remove("active"));

            // Hide all guide sections
            guideSections.forEach((section) => section.classList.remove("active"));

            // Activate clicked button and target guide section
            button.classList.add("active");
            const activeSection = document.getElementById(targetId);
            if (activeSection) {
                activeSection.classList.add("active");
                
                // Smooth scroll to top of guide section
                activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

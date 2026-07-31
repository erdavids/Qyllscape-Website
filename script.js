const themes = [
    {
        className: "theme-minimal",
        image: "new_images/qyllscape-book.png"
    },
    {
        className: "theme-dark",
        image: "new_images/qyllscape-book-dark.png"
    },
    {
        className: "theme-forest",
        image: "new_images/book-forest.png"
    }
];

let currentTheme = 0;

const button = document.getElementById("theme-button");
const preview = document.getElementById("theme-preview");

button.addEventListener("click", () => {

    currentTheme = (currentTheme + 1) % themes.length;

    // Fade image out
    preview.classList.add("fade");

    setTimeout(() => {

        document.body.className = themes[currentTheme].className;

        preview.src = themes[currentTheme].image;

        preview.onload = () => {
            preview.classList.remove("fade");
        };

    }, 350);

});

// Scrolling behavior:
// // Handle header scrolling effect
// window.addEventListener("scroll", function () {
//     var header = document.querySelector("header");
//     var scrollTop = window.scrollY;
//     if (scrollTop === 0) {
//         header.classList.remove("scrolled");
//     } else {
//         header.classList.add("scrolled");
//     }
// });

// Handle mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const optionsColumn = document.querySelector(".options-column");

    hamburgerIcon.addEventListener("click", function () {
        optionsColumn.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        // Hide options column when the screen size is larger
        if (window.innerWidth > 750) {
            optionsColumn.classList.remove("show");
        }
    });
});


function setLoadingText() {
    var b = document.getElementById('header-editor-button')
    // Set button text
    b.textContent = "Loading...";

    var b2 = document.getElementById('body-editor-button')
    // Set button text
    b2.textContent = "Loading...";
}

// Image Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');

    // Get all images with class 'smaller-image-shadow'
    const images = document.querySelectorAll('.smaller-image-shadow, .image-shadow');

    // Add click event to each image
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});
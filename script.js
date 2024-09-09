// Change header background on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu ul');
    const menuLinks = document.querySelectorAll('.nav-menu ul li a');

    // Toggle the menu visibility when clicking the menu button
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// Scroll effect for text
window.addEventListener('scroll', function () {
    const homeSection = document.querySelector('.home-content');
    let scrollPosition = window.scrollY;
    
    // Apply the transform to move the text upwards
    homeSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Initialize EmailJS
(function () {
    emailjs.init("Rrb2NXp6y-e9GxgUI"); // Public key initialization
})();

// Add event listener to the form submit action
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const fromEmail = document.getElementById("fromEmail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log("From Email:", fromEmail);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Check if subject and message are not empty
    if (!fromEmail || !subject || !message) {
        alert("Please fill in both the subject and message fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_ozvf65v", "template_3beo9ar", {
        from_email: fromEmail,
        subject: subject,
        message: message,
    })
    
    .then(function(response) {
        console.log("Email sent successfully!", response.status, response.text);
        document.getElementById("resultMessage").style.display = "block"; // Show "Sent!" message
        document.getElementById("contactForm").reset(); // Reset the form fields
    }, function(error) {
        console.error("Failed to send email. Error status:", error.status, "Error message:", error.text); // Log detailed error
        alert("Failed to send the email. Please try again. Error Status: " + error.status + ", Message: " + error.text);
    });
});

const carouselSlide = document.querySelector('.carousel-slide');
const projects = document.querySelectorAll('.project');

let counter = 0;
const size = projects[0].clientWidth;

document.querySelector('.carousel-nav.left').addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.querySelector('.carousel-nav.right').addEventListener('click', () => {
    if (counter >= projects.length - 1) return;
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("project-slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

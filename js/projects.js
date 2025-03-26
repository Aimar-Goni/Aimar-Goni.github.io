document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects-container");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Sample projects data (replace with your actual fetch)
    const projects = [
        {
            "title": "Medieval Sim",
            "description": "AI-driven medieval life simulation",
            "labels": ["Unreal Engine", "C++"],
            "link": "/projects/medsim/index.html",
            "image": "../resources/medsim.png"          },
          {
            "title": "Low Batt",
            "description": "Bullet hell top-down shooter published on Steam",
            "labels": ["Unreal Engine", "C++", "Steam"],
            "link": "/projects/lowbatt/index.html",
            "image": "../resources/lowbatt.png"
        },
          {
            "title": "Vorpal Engine",
            "description": "Custom game engine with VR support and portals",
            "labels": ["C++", "OpenGL", "VR"],
            "link": "/projects/vorpal-engine/index.html",
            "image": "../resources/vorpal.png"
        },
          {
            "title": "Beat The Beat",
            "description": "VR rhythm game for Meta Quest 2",
            "labels": ["Unity", "VR"],
            "link": "/projects/beat-the-beat/index.html",
            "image": "../resources/btb.png"
        },
          {
            "title": "AI Nature Simulation",
            "description": "A small nature simulation implementing base behavior and evolution of deers.",
            "labels": ["Unreal Engine","C++","VR"],
            "link": "aisim",
            "image": "../resources/aisim.png"
        },
    ];

    // Initial display
    displayProjects(projects);

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");
            
            const filter = button.getAttribute("data-filter");
            filterProjects(filter);
        });
    });

    function filterProjects(filter) {
        if (filter === "all") {
            displayProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => 
                project.labels.includes(filter)
            );
            displayProjects(filteredProjects);
        }
    }

    function displayProjects(projectsToDisplay) {
        projectsContainer.innerHTML = "";
        
        projectsToDisplay.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.className = "project-card fade-in";
            
            projectCard.innerHTML = `
                <div class="project-media">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="image-overlay">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>
                <div class="project-info">
                    <div class="project-tags">
                        ${project.labels.map(label => `
                            <span class="tag">${label}</span>
                        `).join('')}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="project-link">
                        View Details <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.innerHTML = navLinks.classList.contains('active') 
        ? '<ion-icon name="close-outline"></ion-icon>'
        : '<ion-icon name="menu-outline"></ion-icon>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects-container");
    const buttons = document.querySelectorAll(".btn");

    // Fetch projects from JSON
    fetch("../resources/projects.json")
        .then(response => response.json())
        .then(data => {
            displayProjects(data);
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    const filter = button.getAttribute("data-filter");
                    if (filter === "all") {
                        displayProjects(data);
                    } else {
                        const filteredProjects = data.filter(project => project.labels.includes(filter));
                        displayProjects(filteredProjects);
                    }
                });
            });
        });

    function displayProjects(projects) {
        projectsContainer.innerHTML = "";
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("division-with-img-2");
            projectElement.innerHTML = `
                <div class="content-info">
                    <h2>${project.title}</h2>
                    <p>${project.labels.map(label => `<span class="label">${label}</span>`).join(' ')}</p>
                    <p>${project.description}</p>
                    <p class="more-information"><a href="${project.link}">More information <ion-icon name="arrow-forward-outline"></ion-icon></a></p>
                </div>
                <div class="content-picture">
                    <img src="${project.image}" alt="${project.title}">
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }
});
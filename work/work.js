function slug(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

Promise.all([
    fetch("work.json").then(response => response.json()),
    fetch("../resume/resume.json").then(response => response.json())
])
.then(([workData, resumeData]) => {

    const projects = document.getElementById("projects");

    projects.innerHTML = `
        ${workData.work.map((project, index) => {

            const skill = resumeData.skills[index];
            const projectId = skill ? slug(skill.name) : slug(project.title);

            return `
                <div class="content project-section">
                    <div class="project-container" id="${projectId}">
                        <div class="project-about">
                            <h1 class="project-title">
                                ${project.title}
                            </h1>

                            <p class="project-meta">
                                <b>${project.meta}</b>
                            </p>

                            <p class="project-summary">
                                ${project.summary}
                            </p>

                            <div class="project-tools">
                                ${project.tools.map(tool => `
                                    <span class="tool">
                                        ${tool}
                                    </span>
                                `).join("")}
                            </div>
                        </div>

                        <div class="project-media">
                            <div class="project-image">
                                <a href="${project.primaryAsset}" data-lightbox="gallery">
                                    <img src="${project.primaryAsset}" alt="${project.caption}">
                                </a>
                            </div>

                            <p class="project-caption">
                                ${project.caption}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }).join("")}
    `;

    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);

        if (target) {
            target.scrollIntoView();
        }
    }
})

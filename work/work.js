
fetch('work.json')
    .then(response => response.json())
    .then(data => {

        const projects = document.getElementById("projects");

        projects.innerHTML = `

            ${data.work.map(project => `
                   <div class="content">
        <div class="project-about">
                        <h1 class="project-title">
                            ${project.title}
                        </h1>

                        <p class="project-meta"><b>
                            ${project.meta}</b>
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
        <div class="project-image">
                        <a href="${project.primaryAsset}" data-lightbox>
                            <img src="${project.primaryAsset}" style="max-width: 350; border-radius: 10px;">
                        </a>
                        <p class="project-caption">
                            ${project.caption}
                        </p>
        </div>
    
    </div>

            `).join("")}

        `;
    });
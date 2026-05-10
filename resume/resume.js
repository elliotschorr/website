fetch("resume.json")
    .then(response => response.json())
    .then(data => {
        const resume = document.getElementById("resume");

        resume.innerHTML = `
        <h1>${data.basics.name}</h1>
        <section class="basics">
            <p><strong>${data.basics.label}</strong> | ${data.basics.location.city}, ${data.basics.location.region}</p>
            <p><strong>Contact:</strong> <a href="mailto:${data.basics.email}" style="color: #280D0D; text-decoration: underline;">${data.basics.email}</a></p>
            <p>${data.basics.summary}</p>
        </section>

        <h2>Work Experience</h2>        
        <section class="work">
        ${data.work.map(job => `
            <div class="job">
                <h3>${job.position}</h3>
                <p><strong>${job.name}</strong> | ${job.location} | ${job.startDate} - ${job.endDate}</p>
                <p>${job.summary}</p>
            </div>
        `).join("")}
        </section>

        <h2>Education</h2>
        <section class="education">
   
            ${data.education.map(school => `
                <div class="school">
                    <h3>${school.studyType}'s of ${school.area}</h3>
                    <p><strong>${school.institution}</strong> | ${school.location} | ${school.startDate} - ${school.endDate}</p>

                </div>
            `)}
        </section>
        <h2>Skills</h2>
        <section class="skills">
            <div class="skills-table">
                ${data.skills.map(skill => ` 
                    <div class="skills-card">
                        <h3>${skill.name}</h3>
                        <p>${skill.keywords.join(", ")}</p>
                    </div>
                `).join("")}
            </div>
        </section>

        <h2>Certifications</h2>
        <section class ="certifications">
    
        </section>
        `;
    })
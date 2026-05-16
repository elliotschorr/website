fetch("resume.json")
    .then(response => response.json())
    .then(data => {
        const resume = document.getElementById("resume");

        resume.innerHTML = `
        <h1>${data.basics.name}</h1>
        <section class="basics">
        <div class="resume-logos">
                       <div class="github-icon"><a href="https://github.com/elliotschorr"><img src="/images/github-icon.png" style="max-width:25px; max-height: 25px;"></img></a></div>
                       <div class="linkedin-icon"><a href="https://www.linkedin.com/in/elliot-schorr-040139281/"><img src="../images/linkedin-icon.png" style="max-width:25px; max-height: 25px;"></img></a></div>                    
                       <div class="muckrack-icon"><a href="https://muckrack.com/elliot-schorr/articles"><img src="../images/muckrack-icon.png" style="max-width:30px; max-height: 30px;"></img></a></div>
                    </div>
            <p><strong>${data.basics.label}</strong> | ${data.basics.location.city}, ${data.basics.location.region}</p>
            <p><strong>Contact:</strong> <a href="mailto:${data.basics.email}" style="color: #280D0D; text-decoration: underline;">${data.basics.email}</a></p>
            <p>${data.basics.summary}</p>
        </section>

        <h2>Work Experience</h2>        
        <section class="work">
        ${data.work.map(job => `
            <div class="job">
                <h3>${job.position}</h3>
                <p><strong><a href="${job.url}" style="color: #280D0D; text-decoration: underline;">${job.name}</a></strong> | ${job.location} | ${job.startDate} - ${job.endDate}</p>
                <p>${job.summary}</p>
            </div>
        `).join("")}
        </section>

        <h2>Education</h2>
        <section class="education">
   
            ${data.education.map(school => `
                <div class="school">
                    <h3>${school.studyType}'s of ${school.area}</h3>
                    <p><strong><a href="${school.url}" style="color: #280D0D; text-decoration: underline;">${school.institution}</a></strong> | ${school.location} | ${school.startDate} - ${school.endDate}</p>
                     <p>${school.summary}</p>
                    <h3>Certifications</h3>
                    ${data.certificates.map(certificates => `
                      <p>${certificates.name} | <a href="${certificates.url}" style="color: #280D0D; text-decoration: underline;">${certificates.issuer}</a> | Issued ${certificates.date}
                    `).join("")}
                </div>
            `)}
        </section>
        <h2>Skills</h2>
        <section class="skills">
            <div class="skills-table">
                ${data.skills.map(skill => ` 
                    <div class="skills-card">
                        <a href="../work/#${skill.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}" style="color: inherit; text-decoration: none;">
                            <h3>${skill.name}</h3>
                            <p>${skill.keywords.join(", ")}</p>
                        </a>
                    </div>
                `).join("")}
            </div>
        </section>      
        `;
    })
// Get form and resume output elements
const form = document.getElementById("resumeForm") as HTMLFormElement | null;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement | null;

if (!form || !resumeOutput) {
    console.error("Form or resumeOutput element not found");
    throw new Error("Form or resumeOutput element not found");
}

// Event listener for form submission
form.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    // Get input values and cast them to proper types
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobDuration = (document.getElementById("jobDuration") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');

    // Generate resume HTML
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Graduation Year:</strong> ${graduationYear}</p>
        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${jobDuration}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.map((skill: string) => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Set resume output HTML
    resumeOutput.innerHTML = resumeHTML;
});

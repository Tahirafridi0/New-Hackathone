// Get form and resume output elements
var form = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
if (!form || !resumeOutput) {
    console.error("Form or resumeOutput element not found");
    throw new Error("Form or resumeOutput element not found");
}
// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get input values and cast them to proper types
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var graduationYear = document.getElementById("graduationYear").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var jobDuration = document.getElementById("jobDuration").value;
    var skills = document.getElementById("skills").value.split(',');
    // Generate resume HTML
    var resumeHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p><strong>School:</strong> ").concat(school, "</p>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Graduation Year:</strong> ").concat(graduationYear, "</p>\n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Duration:</strong> ").concat(jobDuration, "</p>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Set resume output HTML
    resumeOutput.innerHTML = resumeHTML;
});

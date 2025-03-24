const logobtn=document.querySelector('.logo-container');
logobtn.addEventListener('click',()=>{
    window.location.href='index.html';
})

function showSection(section) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(section).classList.add("active");
}

const hscStudents = [
    { name: "Anisha Singh", year: "2022", marks: "90%", img: "hsc1.png" },
    { name: "Mihika thorat", year: "2023", marks: "86%", img: "hsc2.png" },
    { name: "Krutarth Ashar", year: "2024", marks: "85.50%", img: "hsc3.jpg" }
];

const sscStudents = [
    { name: "Ansh Karvi", year: "2023", marks: "92%", img: "ssc1.jpg" },
    { name: "Minoshika Wankadia", year: "2023", marks: "85.60%", img: "ssc2.jpg" }
];

function renderStudents(students, containerId) {
    const container = document.getElementById(containerId);
    students.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("student");
        studentDiv.innerHTML = `
            <img src="${student.img}" alt="${student.name}">
            <div class="student-info">
                <h4>${student.name}</h4>
                <p>Year: ${student.year}</p>
                <p>Marks: ${student.marks}</p>
            </div>
        `;
        container.appendChild(studentDiv);
    });
}

renderStudents(hscStudents, "hsc-students");
renderStudents(sscStudents, "ssc-students");



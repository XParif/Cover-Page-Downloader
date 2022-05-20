// all object / variable initialization here
const btn = document.querySelector("#btn");
const inputRoll = document.querySelector("#inputRoll");
const inputSubject = document.querySelector("#inputSubject");

// all script code here
btn.addEventListener("click", () => {
  insertDom();
  readyDom();
  let page = document.querySelector("#fullpage");
  html2pdf().from(page).save();
  removeDom();
});

function insertDom() {
  const template = `<div
    style="
    box-sizing: border-box;
    height: 842px;
    margin: 0;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    "
    >
    <h2>Saic Institute Of Management Technology</h2>
    <img src="/img/logo.png" alt="" style="width: 200px" />
    <div class="subject-info" style="display:flex; flex-direction: column; justify-content:center; align-items:center;">
    <h3>Subject Name : <span id="subjectName"></span></h3>
    <h3>Subject Code : <span id="subjectCode"></span></h3>
    </div>
    <div class="teacher-info" style="display:flex; flex-direction: column; justify-content:center; align-items:center;">
    <h2 style="text-decoration: underline">Submitted To</h2>
    <h3>Name: <span id="teacherName"></span></h3>
    <h3>Designation: <span id="teacherDesignation"></span></h3>
    <h3>Depertment: <span id="teacherDepertment"></span></h3>
    </div>
    <div class="student-info" style="display:flex; flex-direction: column; justify-content:center; align-items:center;">
    <h2 style="text-decoration: underline">Submitted By</h2>
    <h3>Name: <span id="userName"></span></h3>
    <h3>Roll: <span id="userRoll"></span></h3>
    </div>
    </div>
    `;

  const fullPage = document.createElement("div");
  fullPage.setAttribute("id", "fullpage");
  fullPage.innerHTML = template;
  document.body.appendChild(fullPage);
}

function readyDom() {
  // Subjectoin info here
  const subjectCode = document.querySelector("#subjectCode");
  const subjectName = document.querySelector("#subjectName");
  subjectCode.innerHTML = inputSubject.value;
  bookData.filter((book) => {
    if (book.subject == inputSubject.value) {
      subjectName.innerHTML = book.name;
    }
  });

  // Teacher info here
  const teacherName = document.querySelector("#teacherName");
  const teacherDesignation = document.querySelector("#teacherDesignation");
  const teacherDepertment = document.querySelector("#teacherDepertment");

  teacherData.filter((teacher) => {
    if (teacher.subject == inputSubject.value) {
      teacherName.innerHTML = teacher.name;
      teacherDesignation.innerHTML = teacher.designation;
      teacherDepertment.innerHTML = teacher.depertment;
    }
  });

  // Student info here
  const userRoll = document.querySelector("#userRoll");
  const userName = document.querySelector("#userName");

  userRoll.innerHTML = inputRoll.value;
  studentData.filter((student) => {
    if (student.roll == inputRoll.value) {
      userName.innerHTML = student.name;
    }
  });
}

function removeDom() {
  const page = document.querySelector("#fullpage");
  page.remove();
}

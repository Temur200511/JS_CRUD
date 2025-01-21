const tbody = document.querySelector('.table tbody')
const addForm = document.getElementById('add-form')
const studentModal = document.getElementById('studentModal')
const modalBtn = document.getElementById("modal-btn")
const modalTitle = document.querySelector(".modal-title")

const students = getFromStorage()
renderStudents()


addForm.addEventListener("submit", (e)=>{
    
    e.preventDefault()
    
    students.push({
       firstName: addForm.firstName.value,
       lastName: addForm.lastName.value,
       class: addForm.studentClass.value,
       hasWork: addForm.hasWork.checked

    })

    Toastify({
        text: "Success",
        close: true,
        duration: 3000,
        className: "danger",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

 addForm.reset()

 bootstrap.Modal.getInstance(studentModal).hide()

    renderStudents()
savetoStorage()
})





renderStudents()
function renderStudents(){

    tbody.innerHTML=""

tbody.students    
students.map((student, i) => {
    const tr = document.createElement('tr')
    tr.innerHTML=`
    <td>${i+1}</td>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.class}</td>

    <td>${student.hasWork ? "ha" : "yo'q"}</td>
    <td> 
    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#studentModal" onclick="editStudent(${i})"><i class="fa-solid fa-pen"></i></button>
        <button class="btn" onclick="deleteStudent(${i})"><i class="fa-solid fa-trash"></i></button>    
     </td>
    `
    tbody.prepend(tr)
})
}


function deleteStudent(index){
const isConfirm = confirm("tasdiqlaysizmi")

if(isConfirm){

    students.splice(index, 1)
    savetoStorage()
    renderStudents()
}
}


function editStudent(index){
    modalBtn.innerHTML="o'zgartirish"
    modalTitle.innerHTML="student uzgartirish"
}




function savetoStorage(){
    localStorage.setItem('student', JSON.stringify(students))
}

function getFromStorage(){
    const storedData=localStorage.getItem("students") || "[]"
    return JSON.parse(storedData)
}
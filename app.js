// const students = getFromStorage()


// const tbody = document.querySelector('.table tbody')
// const addForm = document.getElementById('add-form')
// const studentModal = document.getElementById('studentModal')
// const modalBtn = document.getElementById("modal-btn")
// const addBtn = document.getElementById("add-btn")
// const modalTitle = document.querySelector(".modal-title")
// let group = "all"
// let selectedIndex = null


// renderStudents()


// addForm.addEventListener("submit", (e)=>{
    
//     e.preventDefault()
    
//     if(selectedIndex==null){
//         students.push({
//             firstName: addForm.firstName.value,
//             lastName: addForm.lastName.value,
//             class: addForm.studentClass.value,
//             hasWork: addForm.hasWork.checked
     
//          })
         
//     }else{
//         students[selectedIndex].firstName=addForm.firstName.value
//         students[selectedIndex].lastName=addForm.lastName.value
//         students[selectedIndex].class=addForm.studentClass.value
//         students[selectedIndex].hasWork=addForm.firstName.checked
//     }

   

//     Toastify({
//         text: "Success",
//         close: true,
//         duration: 3000,
//         className: "danger",
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         }
//       }).showToast();

//  addForm.reset()

//  bootstrap.Modal.getInstance(studentModal).hide()

//     renderStudents()
// savetoStorage()
// })





// addBtn.addEventListener('click', () => {
//   modal.innerHTML=" Student qo'shish"
//     modalTitle.innerHTML="o'quchi qushish"

// })



// renderStudents()
// function renderStudents(){

//     tbody.innerHTML=""

// tbody.students    
// students.map((student, i) => {
//     const tr = document.createElement('tr')
//     tr.innerHTML=`
//     <td>${i+1}</td>
//     <td>${student.firstName}</td>
//     <td>${student.lastName}</td>
//     <td>${student.class}</td>

//     <td>${student.hasWork ? "ha" : "yo'q"}</td>
//     <td> 
//     <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#studentModal" onclick="editStudent(${i})"><i class="fa-solid fa-pen"></i></button>
//         <button class="btn" onclick="deleteStudent(${i})"><i class="fa-solid fa-trash"></i></button>    
//      </td>
//     `
//     tbody.prepend(tr)
// })
// }


// function deleteStudent(index){
// const isConfirm = confirm("tasdiqlaysizmi")

// if(isConfirm){

//     students.splice(index, 1)
//     savetoStorage()
//     renderStudents()
// }
// }


// function editStudent(index){
//     selectedIndex=index
//     modalBtn.innerHTML="o'zgartirish"
//     modalTitle.innerHTML="student uzgartirish"
// addForm.firstName.value=students[index].firstName
// addForm.lastNameName.value=students[index].lastName
// addForm.studentClass.value=students[index].class
// addForm.hasWork.checked=students[index].hasWork
// }




// function savetoStorage(){
//     localStorage.setItem('student', JSON.stringify(students))
// }

// function getFromStorage(){
//     const storedData=localStorage.getItem("student") || "[]"
//     return JSON.parse(storedData)
// }





const students = getFromStorage();

const tbody = document.querySelector('.table tbody');
const addForm = document.getElementById('add-form');
const studentModal = document.getElementById('studentModal');
const modalBtn = document.getElementById("modal-btn");
const addStudentBtn = document.querySelector(".btn.btn-primary[data-bs-toggle='modal']");
const modalTitle = document.querySelector(".modal-title");
let selectedIndex = null;

renderStudents();

addStudentBtn.addEventListener("click", () => {
    // "Add Student" tugmasi bosilganda
    selectedIndex = null; // Yangi qo'shish rejimiga o'tish
    modalBtn.innerHTML = "Save changes"; // Tugmani matnini yangilash
    modalTitle.innerHTML = "Studentni qo'shish"; // Modal sarlavhasini o'zgartirish
    addForm.reset(); // Formani tozalash
});

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (selectedIndex === null) {
        // Yangi student qo'shish
        students.push({
            firstName: addForm.firstName.value,
            lastName: addForm.lastName.value,
            class: addForm.studentClass.value,
            hasWork: addForm.hasWork.checked,
        });
    } else {
        // Mavjud studentni o'zgartirish
        students[selectedIndex].firstName = addForm.firstName.value;
        students[selectedIndex].lastName = addForm.lastName.value;
        students[selectedIndex].class = addForm.studentClass.value;
        students[selectedIndex].hasWork = addForm.hasWork.checked;
    }

    Toastify({
        text: "Success",
        close: true,
        duration: 3000,
        className: "danger",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();

    addForm.reset(); // Formani tozalash
    bootstrap.Modal.getInstance(studentModal).hide(); // Modalni yopish
    renderStudents(); // Studentlar ro'yxatini yangilash
    savetoStorage(); // Ma'lumotlarni saqlash
});

function renderStudents() {
    tbody.innerHTML = ""; // Jadvalni tozalash

    students.forEach((student, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${i + 1}</td> <!-- Tartib raqami -->
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.class}</td>
            <td>${student.hasWork ? "Ha" : "Yo'q"}</td>
            <td>
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#studentModal" onclick="editStudent(${i})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn" onclick="deleteStudent(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr); // Jadvalga oxiriga qo'shish
    });
}






function deleteStudent(index) {
    const isConfirm = confirm("Tasdiqlaysizmi?");
    if (isConfirm) {
        students.splice(index, 1);
        savetoStorage();
        renderStudents();
    }
}

function editStudent(index) {
    selectedIndex = index; // O'zgartirish rejimiga o'tish
    modalBtn.innerHTML = "O'zgartirish"; // Tugmani matnini o'zgartirish
    modalTitle.innerHTML = "Studentni o'zgartirish"; // Modal sarlavhasini o'zgartirish
    addForm.firstName.value = students[index].firstName;
    addForm.lastName.value = students[index].lastName;
    addForm.studentClass.value = students[index].class;
    addForm.hasWork.checked = students[index].hasWork;
}

function savetoStorage() {
    localStorage.setItem('student', JSON.stringify(students));
}

function getFromStorage() {
    const storedData = localStorage.getItem("student") || "[]";
    return JSON.parse(storedData);
}

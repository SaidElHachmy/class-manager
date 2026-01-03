// ===============================
// ====== Data & State Setup ======
// ===============================
let data = JSON.parse(localStorage.getItem("school-data")) || { sections: [] };
let activeSectionIndex = null;
let currentLang = localStorage.getItem("school-lang") || "en";

const translations = {
    en: {
        title: "Class Manager",
        contact: "Contact",
        instructions: `
⚠️ <strong>Important Notice</strong><br><br>

Your data is saved <span style="color:red;font-weight:bold">only on this device</span> (local storage).<br>
It is <span style="color:red;font-weight:bold">not online</span> and <span style="color:red;font-weight:bold">cannot be recovered</span> if the device is lost or reset.<br><br>

📝 Please keep <span style="color:red;font-weight:bold">another copy</span> of important student data (paper or safe method).
`,
        addSection: "Add",
        noSection: "No section selected",
        sectionPlaceholder: "New section name",
        studentName: "Student name",
        studentID: "ID (default 00001)",
        section: "Section",
        id: "ID",
        callParents:"Parents' Tel",
       
       
        callParentsPlaceholder: "Parents' Phone Number",
        
        studentNameCard: "Name",
        gender:"Gender",
        
        semes1: "Semester 1",

studentTestCard: "Test 1",
studentTest: "Test 1 (example: 17/20, 26/30, 37/40)",

studentTestCard2: "Test 2",
studentTest2: "Test 2 (example: 17/20, 26/30, 37/40)",

studentTestCard3: "Test 3",
studentTest3: "Test 3 (example: 17/20, 26/30, 37/40)",

studentExamCard: "Exam 1",
studentExam: "Exam 1 (example: 17/20, 26/30, 37/40)",


semes2: "Semester 2",

studentTestCard4: "Test 1",
studentTest4: "Test 1 (example: 17/20, 26/30, 37/40)",

studentTestCard5: "Test 2",
studentTest5: "Test 2 (example: 17/20, 26/30, 37/40)",

studentTestCard6: "Test 3",
studentTest6: "Test 3 (example: 17/20, 26/30, 37/40)",

studentExamCard2: "Exam 2",
studentExam2: "Exam 2 (example: 17/20, 26/30, 37/40)",


semes3: "Semester 3",

studentTestCard7: "Test 1",
studentTest7: "Test 1 (example: 17/20, 26/30, 37/40)",

studentTestCard8: "Test 2",
studentTest8: "Test 2 (example: 17/20, 26/30, 37/40)",

studentTestCard9: "Test 3",
studentTest9: "Test 3 (example: 17/20, 26/30, 37/40)",

studentExamCard3: "Exam 3",
studentExam3: "Exam 3 (example: 17/20, 26/30, 37/40)",
        
        
        
        studentNotes: "Notes",
        addStudent: "Add",
        studentDetails: "Student Details",
        studentOpen: "Open",
        close: "Close",
        save: "Save",
        yes: "Yes",
        cancel: "Cancel",
        selectSectionFirst: "Select a section first!",
        noSectionSelected: "No section selected!",
        confirmDeleteStudent: "Are you sure you want to delete student : ' {name} ' ?",
//  confirmDeleteSection: "Are you sure you want to delete section : '{name}' ?",
     
     
     confirmDeleteSection: `Are you sure you want to delete : ' <span class="confirm-name">{name}</span> ' ?`,
     
     
     
     
        author: "Said ElHachmy",
        allRights: "All rights reserved."
    },
    fr: {
        title: "Gestion Classe",
        contact: "Contact",
        instructions: `
⚠️ <strong>Avis important</strong><br><br>

Vos données sont enregistrées <span style="color:red;font-weight:bold">uniquement sur cet appareil</span> (stockage local).<br>
Elles <span style="color:red;font-weight:bold">ne sont pas en ligne</span> et <span style="color:red;font-weight:bold">ne peuvent pas être récupérées</span> en cas de perte ou de réinitialisation de l’appareil.<br><br>

📝 Veuillez conserver <span style="color:red;font-weight:bold">une autre copie</span> des données importantes des élèves (sur papier ou par une méthode sécurisée).
`,
        
        addSection: "Ajouter",
        noSection: "Aucune section sélectionnée",
        sectionPlaceholder: "Nom de la nouvelle section",
        studentName: "Nom de l'élève",
        studentID: "ID (défaut 00001)",
        section: "Section",
        id: "ID",
        callParents: "Tél. parents",
        
        callParentsPlaceholder: "Numéro de téléphone des parents",
        
        
        studentNameCard: "Nom",
        gender:"Genre",
   
   
   
        semes1: "Semestre 1",

studentTestCard: "Test 1",
studentTest: "Test 1 (exemple : 17/20, 26/30, 37/40)",

studentTestCard2: "Test 2",
studentTest2: "Test 2 (exemple : 17/20, 26/30, 37/40)",

studentTestCard3: "Test 3",
studentTest3: "Test 3 (exemple : 17/20, 26/30, 37/40)",

studentExamCard: "Examen 1",
studentExam: "Examen 1 (exemple : 17/20, 26/30, 37/40)",


semes2: "Semestre 2",

studentTestCard4: "Test 1",
studentTest4: "Test 1 (exemple : 17/20, 26/30, 37/40)",

studentTestCard5: "Test 2",
studentTest5: "Test 2 (exemple : 17/20, 26/30, 37/40)",

studentTestCard6: "Test 3",
studentTest6: "Test 3 (exemple : 17/20, 26/30, 37/40)",

studentExamCard2: "Examen 2",
studentExam2: "Examen 2 (exemple : 17/20, 26/30, 37/40)",


semes3: "Semestre 3",

studentTestCard7: "Test 1",
studentTest7: "Test 1 (exemple : 17/20, 26/30, 37/40)",

studentTestCard8: "Test 2",
studentTest8: "Test 2 (exemple : 17/20, 26/30, 37/40)",

studentTestCard9: "Test 3",
studentTest9: "Test 3 (exemple : 17/20, 26/30, 37/40)",

studentExamCard3: "Examen 3",
studentExam3: "Examen 3 (exemple : 17/20, 26/30, 37/40)",
      
      
      
      
      
      
        studentNotes: "Notes",
        addStudent: "Ajouter",
        studentDetails: "Détails de l'élève",
        studentOpen: "Ouvrir",
        close: "Fermer",
        save: "Enregistrer",
        yes: "Oui",
        cancel: "Annuler",
        selectSectionFirst: "Sélectionnez d'abord une section !",
        noSectionSelected: "Aucune section sélectionnée !",
        confirmDeleteStudent: "Êtes-vous sûr de vouloir supprimer l'élève : ' {name} ' ?",
//   confirmDeleteSection: "Êtes-vous sûr de vouloir supprimer la section : '{name}' ?",
      
      confirmDeleteSection: `Êtes-vous sûr de vouloir supprimer la section : ' <span class="confirm-name">{name}</span> ' ?`,
       
       
        author: "Said ElHachmy",
        allRights: "Tous droits réservés."
    },
    ar: {
        title: "مدير الصف",
        contact: "اتصال",
       instructions: `
⚠️ <strong>تنبيه هام</strong><br><br>

يتم حفظ بياناتك <span style="color:red;font-weight:bold">على هذا الجهاز فقط</span> (التخزين المحلي).<br>
<span style="color:red;font-weight:bold">لا يتم حفظها على الإنترنت</span> و<span style="color:red;font-weight:bold">لا يمكن استعادتها</span> في حال فقدان الجهاز أو إعادة ضبطه.<br><br>

📝 يرجى الاحتفاظ <span style="color:red;font-weight:bold">بنسخة أخرى</span> من بيانات الطلاب المهمة (ورقية أو بطريقة آمنة).
`,

        addSection: "أضف",
        noSection: "لم يتم تحديد أي قسم",
        sectionPlaceholder: "اسم القسم الجديد",
        studentName: "اسم الطالب/الطالبة",
        studentID: "المعرف (الافتراضي 00001)",
        section: "القسم",
        
        callParents: "هاتف الولي",
        

        callParentsPlaceholder: "رقم هاتف ولي الأمر",
        
        
      
        id: "المعرف",
        studentNameCard: "الاسم",
        gender:"الجنس",
        
        
        
        semes1: "الفصل الدراسي1",
        
        
        
        studentTestCard: "الاختبار 1",
        studentTest: "الاختبار 1 (مثال: 17/20، 26/30، 37/40)",
        
 
        
        
        
        
        studentTestCard2: "الاختبار 2",
        studentTest2: "الاختبار 2 (مثال: 17/20، 26/30، 37/40)",

       
        studentTestCard3: "الاختبار 3",
        studentTest3: "الاختبار 3 (مثال: 17/20، 26/30، 37/40)",
        
        


        
        studentExamCard: "الامتحان 1",
        
        
        studentExam: "الامتحان 1 (مثال: 17/20، 26/30، 37/40)",

        
        
        
        
        
        
        

        semes2: "الفصل الدراسي 2",
        
        
        
        studentTestCard4: "الاختبار 1",
        studentTest4: "الاختبار 1 (مثال: 17/20، 26/30، 37/40)",
        
 
        
        
        
        
        studentTestCard5: "الاختبار 2",
        studentTest5: "الاختبار 2 (مثال: 17/20، 26/30، 37/40)",

       
        studentTestCard6: "الاختبار 3",
        studentTest6: "الاختبار 3 (مثال: 17/20، 26/30، 37/40)",
        
        


        
        studentExamCard2: "الامتحان 2",
                
        
        studentExam2:"الامتحان 2 (مثال: 17/20، 26/30، 37/40)",
        

        
        
        semes3: "الفصل الدراسي 3",
        
        
        
        studentTestCard7: "الاختبار 1",
        studentTest7: "الاختبار 1 (مثال: 17/20، 26/30، 37/40)",
        
 
        
    
        
        
        
        studentTestCard8: "الاختبار 2",
        studentTest8: "الاختبار 2 (مثال: 17/20، 26/30، 37/40)",

       
        studentTestCard9: "الاختبار 3",
        studentTest9: "الاختبار 3 (مثال: 17/20، 26/30، 37/40)",
        
        


        
        studentExamCard3: "الامتحان 3",
                
        
        studentExam3:"الامتحان 3 (مثال: 17/20، 26/30، 37/40)",
        
        
        
        
        
        
       
        studentNotes: "الملاحظات",
        addStudent: "أضف",
        studentDetails: "تفاصيل الطالب/الطالبة",
        studentOpen: "فتح",
        close: "إغلاق",
        save: "حفظ",
        yes: "نعم",
        cancel: "إلغاء",
        selectSectionFirst: "حدد قسمًا أولاً!",
        noSectionSelected: "لم يتم تحديد أي قسم!",
        
                
        confirmDeleteStudent: "هل أنت متأكد أنك تريد حذف الطالب/الطالبة : ' {name} ' ؟",
        
        
        
//  confirmDeleteSection: "هل أنت متأكد أنك تريد حذف القسم : '{name}' ؟",
      
      confirmDeleteSection: `هل أنت متأكد من حذف : ' <span class="confirm-name">{name}</span> ' ؟`,
      
      
        author: "سعيد الهاشمي",
        allRights: "جميع الحقوق محفوظة."
    }
};

// ===============================
// ====== DOM Elements ============
// ===============================
const sectionInput = document.getElementById('sectionInput');
const addSectionBtn = document.getElementById('addSectionBtn');

const sectionsList = document.getElementById('sectionsList');
const activeSectionName = document.getElementById('activeSectionName');

const studentNameInput = document.getElementById('studentNameInput');
const studentIDInput = document.getElementById('studentIDInput');
const studentEmoji = document.getElementById('studentEmoji');

const callParents = document.getElementById('callParents');

const semes1 = document.getElementById('semes1');

const studentTest = document.getElementById('studentTest');


const studentTest2 = document.getElementById('studentTest2');

const studentTest3 = document.getElementById('studentTest3');



const studentExam = document.getElementById('studentExam');

const studentExam2 = document.getElementById('studentExam2');

const studentExam3 = document.getElementById('studentExam3');



const semes2 = document.getElementById('semes2');






const studentTest4 = document.getElementById('studentTest4');

const studentTest5 = document.getElementById('studentTest5');


const studentTest6 = document.getElementById('studentTest6');



const semes3 = document.getElementById('semes3');


const studentTest7 = document.getElementById('studentTest7');


const studentTest8 = document.getElementById('studentTest8');

const studentTest9 = document.getElementById('studentTest9');






const studentNotes = document.getElementById('studentNotes');
const addStudentBtn = document.getElementById('addStudentBtn');
const studentsList = document.getElementById('studentsList');

const studentModalOverlay = document.getElementById('studentModalOverlay');
const studentCardContent = document.getElementById('studentCardContent');
const closeStudentModal = document.getElementById('closeStudentModal');
const studentModalTitle = document.getElementById('studentModalTitle');

const confirmOverlay = document.getElementById('confirmRemoveOverlay');
const confirmMessage = document.getElementById('confirmMessage');
const confirmYes = document.getElementById('confirmYes');
const confirmCancel = document.getElementById('confirmCancel');

const siteTitle = document.getElementById('siteTitle');
const contactLink = document.getElementById('contactLink');

const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-menu");

let confirmCallback = null;

// ===============================
// ====== Utility Functions ======
// ===============================
function saveAll() {
    localStorage.setItem("school-data", JSON.stringify(data));
}

function saveLang() {
    localStorage.setItem("school-lang", currentLang);
}

function t(key, vars = {}) {
    let str = translations[currentLang][key] || key;
    Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
    return str;
}

// ===============================
// ====== Create Edit Modal DOM ===
// ===============================
// We'll create a single edit modal used for both section and student edits
const editModalOverlay = document.createElement('div');
editModalOverlay.className = 'modal-overlay';
editModalOverlay.id = 'editModalOverlay';
editModalOverlay.style.display = 'none'; // hidden by default

const editModal = document.createElement('div');
editModal.className = 'modal';

const editModalTitle = document.createElement('h2');
editModalTitle.id = 'editModalTitle';
editModalTitle.style.color = '#0078ff';
editModalTitle.style.textShadow = '1.5px 1px lightblue';

const editModalContent = document.createElement('div');
editModalContent.id = 'editFormContent';

const editModalButtons = document.createElement('div');
editModalButtons.style.marginTop = '12px';
editModalButtons.style.display = 'flex';
editModalButtons.style.flexDirection = 'column';
editModalButtons.style.border = 'none';
editModalButtons.style.gap = '5px';




const saveEditBtn = document.createElement('button');

saveEditBtn.className = 'btn-primary';
saveEditBtn.id = 'saveEditBtn';
saveEditBtn.textContent = t('save');

const cancelEditBtn = document.createElement('button');
cancelEditBtn.className = 'modal-close';
cancelEditBtn.id = 'cancelEditBtn';
cancelEditBtn.textContent = t('cancel');

editModalButtons.appendChild(saveEditBtn);
editModalButtons.appendChild(cancelEditBtn);

editModal.appendChild(editModalTitle);
editModal.appendChild(editModalContent);
editModal.appendChild(editModalButtons);
editModalOverlay.appendChild(editModal);
document.body.appendChild(editModalOverlay);

// Local state for edit modal
let editMode = null; // 'section' or 'student'
let editSectionIndex = null; // for editing a section
let editStudentSectionIndex = null; // section index where the student currently is
let editStudentIndex = null; // index within that section

// Helper to close
function closeEditModal() {
    editModalOverlay.style.display = 'none';
    document.body.style.overflow = '';
    editModalContent.innerHTML = '';
    editMode = null;
    editSectionIndex = null;
    editStudentIndex = null;
    editStudentSectionIndex = null;
}

// Close on overlay click
editModalOverlay.addEventListener('click', (e) => {
    if (e.target === editModalOverlay) closeEditModal();
});

// Close on cancel
cancelEditBtn.addEventListener('click', closeEditModal);

// update save/cancel language when language switches
function refreshEditButtonsText() {
    saveEditBtn.textContent = t('save');
    cancelEditBtn.textContent = t('cancel');
}

// ===============================
// ====== Render Functions ======
// ===============================
function updateTexts() {
    siteTitle.textContent = `👨‍🏫 ${t("title")}`;
    contactLink.textContent = t("contact");
    
    document.getElementById('instructions').innerHTML = t("instructions");
    
    
    
    
    
    addSectionBtn.textContent = t("addSection");
    sectionInput.placeholder = t("sectionPlaceholder");
    studentNameInput.placeholder = t("studentName");
    studentIDInput.placeholder = t("studentID");
    semes1.textContent = t("semes1");
    
    studentTest.placeholder = t("studentTest");
    
    studentTest2.placeholder = t("studentTest2");
    
    studentTest3.placeholder = t("studentTest3");
    
    studentExam.placeholder = t("studentExam");
    
    
    
    
    
    semes2.textContent = t("semes2");
    

    
        studentTest4.placeholder = t("studentTest4");
        
        
    
        studentTest5.placeholder = t("studentTest5");
        
        studentTest6.placeholder = t("studentTest6");
        
        studentExam2.placeholder = t("studentExam2");
        

        
    semes3.textContent = t("semes3");
    
    
        
        studentTest7.placeholder = t("studentTest7");
        
        
        studentTest8.placeholder = t("studentTest8");
        
        
        studentTest9.placeholder = t("studentTest9");
        
        
        studentExam3.placeholder = t("studentExam3");
        
    
    
    
    callParents.callParents = t("callParents");
    callParents.placeholder = t("callParentsPlaceholder");
    
    
    
    
    
    studentNotes.placeholder = t("studentNotes");
    addStudentBtn.textContent = t("addStudent");
    activeSectionName.textContent = activeSectionIndex !== null
        ? data.sections[activeSectionIndex].name
        : t("noSection");
    studentModalTitle.textContent = t("studentDetails");
    closeStudentModal.textContent = t("close");
    confirmYes.textContent = t("yes");
    confirmCancel.textContent = t("cancel");
    
    
    
    
    

    document.getElementById('author').textContent = t("author");
    document.getElementById('allRights').textContent = t("allRights");
    document.getElementById('year').textContent = new Date().getFullYear();

    refreshEditButtonsText();
    renderSections();
    renderStudents();
}

// ===============================
// ====== Confirm Dialog =========
// ===============================
// ===============================
// ====== Confirm Dialog =========
// ===============================
function showConfirm(message, callback) {
    confirmMessage.innerHTML = message; // ✅ allows styled HTML
    confirmOverlay.classList.remove("hidden");
    confirmCallback = callback;
}
// ===============================
// ====== Section Functions ======
// ===============================
function renderSections() {
    sectionsList.innerHTML = "";
    data.sections.forEach((section, index) => {
        
        function updateStudentCount(el, students) {
    const boys = students.filter(s => s.emoji && (s.emoji.includes('👦') || s.emoji.includes('🧑'))).length;
    const girls = students.filter(s => s.emoji && (s.emoji.includes('👧') || s.emoji.includes('👩'))).length;

    if (boys === 0 && girls === 0) {
        el.textContent = "(🧑/👧): 0";
        el.style.backgroundColor="white";
        el.style.minWidth="135px";
        el.style.padding = "4px 8px";
    el.style.borderRadius = "8px";
    el.style.border = "2px solid red";
    el.style.fontSize = "12px";
    
    el.style.color = "red";
        
        
    } else {
        let all=boys+girls;
    
    //console.log(`All ${all}`)
        
        
        
        
        el.textContent = `(🧑:${boys} | 👧:${girls}) : [ ${all} ]`;
        el.style.backgroundColor="white";
        el.style.minWidth="135px";
        el.style.padding = "4px 8px";
    el.style.borderRadius = "8px";
    el.style.border = "2px solid green";
    el.style.fontSize = "12px";
    
    el.style.color = "green";
    }
    
    
        
        
}
        
        
        
        
        
        
        
        
        
        const sectionInsideNameDiv = document.createElement('div');
        sectionInsideNameDiv.style.backgroundColor="none"
        sectionInsideNameDiv.style.display="flex"
        sectionInsideNameDiv.style.justifyContent="center"
        sectionInsideNameDiv.style.alignItems="center"
        sectionInsideNameDiv.style.border="none"
        sectionInsideNameDiv.style.height="auto"
        sectionInsideNameDiv.style.width="auto"
        
        sectionInsideNameDiv.style.minWidth="70px"
        sectionInsideNameDiv.style.padding="3px 5px"
        sectionInsideNameDiv.style.borderRadius="3px"
        sectionInsideNameDiv.style.margin="0px auto"
        
        
        
        
        const sectionInsideDiv = document.createElement('div');
        sectionInsideDiv.style.backgroundColor="none"
        sectionInsideDiv.style.border="none"
        sectionInsideDiv.style.display="flex"
        sectionInsideDiv.style.justifyContent="center"
        sectionInsideDiv.style.alignItems="center"
        sectionInsideDiv.style.height="auto"
        sectionInsideDiv.style.width="auto"
        sectionInsideDiv.style.padding="3px 5px"
        sectionInsideDiv.style.borderRadius="3px"
        sectionInsideDiv.style.margin="0px auto"
        
        
        
        
        
        const div = document.createElement('div');
         div.style.padding="3px 2px";
        div.style.backgroundColor="none"
        div.style.display="flex"
        div.style.justifyContent="space-between"
        div.style.alignItems="center"
        div.style.border="2px solid #0078ff"
        div.style.height="auto"
        div.style.width="auto"

        div.style.margin="2px 3px"
        div.className = 'section-item';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn-edit';
        editBtn.textContent = '✏️';
        

        editBtn.onclick = (e) => {
    e.stopPropagation();
    openEditSectionModal(index);
};
        

        const delBtn = document.createElement('button');
        delBtn.className = 'btn-del';
        delBtn.textContent = t("cancel");
        delBtn.onclick = (e) => {
            e.stopPropagation();
            showConfirm(t("confirmDeleteSection", { name: truncateText(section.name, 58)}), () => {
                data.sections.splice(index, 1);
                activeSectionIndex = null;
                saveAll();
                updateTexts();
            });
        };


        // sectionInsideNameDiv.appendChild(document.createElement('span')).textContent = section.name;
        
        sectionInsideNameDiv.appendChild(document.createElement('span')).textContent = truncateText(section.name, 48);
        
        const timeSpan = document.createElement("small");

if (section.createdAt) {
    timeSpan.textContent =
        "⏰ " + new Date(section.createdAt).toLocaleString(currentLang);
} else {
    timeSpan.textContent = "⏰ —";
}

timeSpan.style.display = "block";
timeSpan.style.fontSize = "10px";
timeSpan.style.color = "#666";


        
// Student Count Box (placed before edit/delete buttons)
const countDiv = document.createElement('button');
countDiv.id = `count-${index}`;




    countDiv.style.padding = "4px 8px";
    countDiv.style.minWidth="135px";
    countDiv.style.borderRadius = "8px";
    
    countDiv.style.fontSize = "12px";
    countDiv.style.fontWeight="bold";
    


// initial render of the count
updateStudentCount(countDiv, section.students || []);

// place count at start of controls
//sectionInsideDiv.prepend(countDiv);


sectionInsideDiv.appendChild(countDiv);
sectionInsideDiv.appendChild(editBtn);

sectionInsideDiv.appendChild(delBtn);
        const downBreak=document.createElement("div")
        downBreak.style.border="none";
        downBreak.style.margin="0px auto"



downBreak.appendChild(timeSpan);
        
        
        
        
        
        
        

        div.appendChild(sectionInsideNameDiv);
        div.appendChild(sectionInsideDiv);
        
        div.appendChild(downBreak);
        

        div.onclick = () => {
            activeSectionIndex = index;
            renderStudents();
            //activeSectionName.textContent = section.name;
            
            activeSectionName.textContent = truncateText(section.name, 100);
        
        };

        
        
        
        
        
        
        const countEl = document.getElementById(`count-${activeSectionIndex}`);
if (countEl) {
    const section = data.sections[activeSectionIndex];
    updateStudentCount(countEl, section.students);
}
        
        
        
        
        
        
        
        
        
        
        sectionsList.prepend(div);
        
    });
}

addSectionBtn.onclick = () => {
    const name = sectionInput.value.trim();
    if (!name) return;
    data.sections.push({
    name: uniqueName,
    students: [],
    createdAt: Date.now() // ✅ هذا هو الحل
});
    sectionInput.value = "";
    saveAll();
    updateTexts();
};



// ===============================
// ====== Helper Functions =======
// ===============================
function generateUniqueSectionName(name) {
    let baseName = name.trim();
    let count = 0;

    data.sections.forEach(section => {
        if (section.name === baseName || section.name.startsWith(baseName + " (")) {
            count++;
        }
    });

    if (count === 0) return baseName;
    return `${baseName} (${count})`;
}
data.sections.forEach(section => {
    if (!section.createdAt) {
        section.createdAt = Date.now();
    }
});
saveAll();

// ===============================
// ====== Section Handling =======
// ===============================
addSectionBtn.onclick = () => {
    let inputName = sectionInput.value.trim();
    if (!inputName) return;

    let uniqueName = generateUniqueSectionName(inputName);

    data.sections.push({
    name: uniqueName,
    students: [],
    createdAt: Date.now() // ✅ هذا هو الحل
});

    saveAll();
    updateTexts();
    sectionInput.value = "";
};





// ===============================
// ====== Student Functions ======
// ===============================
function truncateText(text, maxLength = 10) {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

// ----------------------
// Update Student Count UI
// ----------------------
function updateStudentCount(el, students = []) {
    if (!el) return;
    // count boys and girls by emoji (robust check)
    const boys = students.filter(s => typeof s.emoji === 'string' && /👦|🧑|👨|🧑🏻|🧑|👨🏻/.test(s.emoji)).length;
    const girls = students.filter(s => typeof s.emoji === 'string' && /👧|👩|🧑♀|👧|👩🏻/.test(s.emoji)).length;

    if (boys === 0 && girls === 0) {
        el.textContent = "(🧑/👧): 0";
        el.style.backgroundColor="white";
        el.style.minWidth="135px";
        el.style.padding = "4px 8px";
    el.style.borderRadius = "8px";
    el.style.border = "2px solid red";
    el.style.fontSize = "12px";
    
    el.style.color = "red";
        
    } else {
        
        let all=boys+girls;
    
    //console.log(`All ${all}`)
        
        
        
        el.textContent = `(🧑:${boys} | 👧:${girls}) : [ ${all} ]`;
                el.style.backgroundColor="white";
        el.style.minWidth="135px";
        el.style.padding = "4px 8px";
    el.style.borderRadius = "8px";
    el.style.border = "2px solid green";
    el.style.fontSize = "12px";
    
    el.style.color = "green";
        
    }
    // small styling to keep it tidy
        //el.style.backgroundColor="white";
        el.style.minWidth="135px";
        el.style.padding = "4px 8px";
    el.style.borderRadius = "8px";

    el.style.fontSize = "12px";
    

}



// ===============================
// ====== Student Functions ======
// ===============================
function renderStudents() {
    studentsList.innerHTML = "";
    if (activeSectionIndex === null) return;
    const section = data.sections[activeSectionIndex];
    section.students.forEach((student, index) => {
        
        const studentInsideEmojiDiv = document.createElement('div');
        studentInsideEmojiDiv.style.backgroundColor="none"
        studentInsideEmojiDiv.style.display="flex"
        studentInsideEmojiDiv.style.justifyContent="center"
        studentInsideEmojiDiv.style.alignItems="center"
        studentInsideEmojiDiv.style.border="none"
        studentInsideEmojiDiv.style.height="auto"
        studentInsideEmojiDiv.style.width="auto"
        
        studentInsideEmojiDiv.style.minWidth="40px"
        studentInsideEmojiDiv.style.padding="3px 5px"
        studentInsideEmojiDiv.style.borderRadius="3px"
        studentInsideEmojiDiv.style.margin="2px 3px"
        const studentInsideNameDiv = document.createElement('div');
        studentInsideNameDiv.style.backgroundColor="none"
        studentInsideNameDiv.style.display="flex"
        studentInsideNameDiv.style.justifyContent="center"
        studentInsideNameDiv.style.alignItems="center"
        studentInsideNameDiv.style.border="none"
        studentInsideNameDiv.style.height="auto"
        studentInsideNameDiv.style.overflow="hidden"
        
        
        
  
  
  
        
        studentInsideNameDiv.style.width="auto"
        
        studentInsideNameDiv.style.minWidth="70px"
        studentInsideNameDiv.style.padding="auto 5px"
        studentInsideNameDiv.style.borderRadius="3px"
        studentInsideNameDiv.style.margin="2px 3px"
        
        const studentInsideDiv = document.createElement('div');
        studentInsideDiv.style.backgroundColor="none"
        studentInsideDiv.style.display="flex"
        studentInsideDiv.style.justifyContent="center"
        studentInsideDiv.style.alignItems="center"
        studentInsideDiv.style.border="none"
        studentInsideDiv.style.height="auto"
        studentInsideDiv.style.width="auto"
        studentInsideDiv.style.padding="3px 5px"
        studentInsideDiv.style.borderRadius="3px"
        studentInsideDiv.style.margin="2px 3px"
        
        const div = document.createElement('div');
        div.style.padding="3px 2px";
        div.style.backgroundColor="none"
        div.style.display="flex"
        div.style.justifyContent="space-between"
        div.style.alignItems="center"
        div.style.border="2px solid #0078ff"
        div.style.height="auto"
        div.style.width="auto"

        div.style.margin="2px 3px"
        div.className = 'student-item';
        
        const emojiBox = document.createElement('div');
        emojiBox.id="emojiBox";
        const emojiDiv = document.createElement('div');
        emojiDiv.id = "emojiBorder";
        emojiDiv.style.cssText = "font-size:20px;border:2px solid #0078ff;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:5px;";
        emojiDiv.textContent = student.emoji || '🧑';
        emojiBox.appendChild(emojiDiv);

        const nameDiv = document.createElement('div');
        nameDiv.id="nameDiv";
        nameDiv.textContent = truncateText(student.name, 8); // truncate displayed name
        const btnDiv = document.createElement('div');
        btnDiv.id="btnDiv";

        const openBtn = document.createElement('button');
        openBtn.style.margin="5px 4px";
        openBtn.className = "btn-open";
        openBtn.textContent = t("studentOpen");
        openBtn.onclick = () => openStudentModal(student);

        const editBtn = document.createElement('button');
        editBtn.style.margin="5px 4px";
        editBtn.className = "btn-edit";
        editBtn.textContent = "✏️";
        editBtn.onclick = (e) => {
            e.stopPropagation();
            openEditStudentModal(activeSectionIndex, index);
        };


        const delBtn = document.createElement('button');
        delBtn.style.margin="5px 4px";
        delBtn.className = "btn-del";
        delBtn.textContent = t("cancel");

        /*
        delBtn.onclick = () => showConfirm(t("confirmDeleteStudent", { name: student.name }), () => {
    section.students.splice(index, 1);
    saveAll();
    
    */
    delBtn.onclick = () => showConfirm(
    t("confirmDeleteStudent", {
        name: `<span class="confirm-name">${student.name}</span>`
    }),
    () => {
        section.students.splice(index, 1);
        saveAll();


    // update count for this section
    const cntEl = document.getElementById(`count-${activeSectionIndex}`);
    if (cntEl) updateStudentCount(cntEl, section.students);

    renderStudents();
});
        
        
        
        
        

        


        studentInsideNameDiv.appendChild(nameDiv);

        
        
        studentInsideDiv.appendChild(editBtn);
        
        studentInsideDiv.appendChild(openBtn);
        
        studentInsideDiv.appendChild(delBtn);
        
        

        studentInsideEmojiDiv.appendChild(emojiBox);
        

        div.appendChild(studentInsideEmojiDiv);
        div.appendChild(studentInsideNameDiv);
        div.appendChild(studentInsideDiv);

        studentsList.prepend(div);
    });
}
document.getElementById("customAlertOk").onclick = () => {
    document.getElementById("customAlert").style.display = "none";
};

function showCustomAlert(message) {
    const alertDiv = document.getElementById("customAlert");
    const alertMsg = document.getElementById("customAlertMessage");

    alertMsg.innerHTML = message;
    alertDiv.style.display = "flex";
}

addStudentBtn.onclick = () => {
    if (activeSectionIndex === null) { 
        showCustomAlert(t("selectSectionFirst"));
        return; 
    }

    const student = {
        name: studentNameInput.value.trim(),
        id: studentIDInput.value.trim() || "00001",
        phoneCall: callParents.value.trim() || "–",
        emoji: studentEmoji.value,
        notes: studentNotes.value.trim(),
        test: studentTest.value.trim() || "–",
        
        test2: studentTest2.value.trim() || "–",
        
        test3: studentTest3.value.trim() || "–",
        
        
        
        test4: studentTest4.value.trim() || "–",
        
        
        test5: studentTest5.value.trim() || "–",
        
        test6: studentTest6.value.trim() || "–",
        
        test7: studentTest7.value.trim() || "–",
        
        test8: studentTest8.value.trim() || "–",
        
        test9: studentTest9.value.trim() || "–",
        
        
        exam3: studentExam3.value.trim() || "–",
        
        exam2: studentExam2.value.trim() || "–",
        
        exam: studentExam.value.trim() || "–"
    
        
        
    };

    if (!student.name) return;

    // push the student once
    data.sections[activeSectionIndex].students.push(student);

    // clear the input fields
    studentNameInput.value = studentIDInput.value = callParents.value = studentNotes.value = studentTest.value =studentTest2.value=studentTest3.value=studentTest4.value=studentTest5.value=studentTest6.value=studentTest7.value=studentTest8.value=studentTest9.value=studentExam3.value=studentExam2.value= studentExam.value = "";

    saveAll();

    // update the count for this section immediately
    const cntEl = document.getElementById(`count-${activeSectionIndex}`);
    if (cntEl) updateStudentCount(cntEl, data.sections[activeSectionIndex].students);

    // render the students only once
    renderStudents();
};

const messageTranslations = {
  ar: {
    hello: "السلام عليكم، أرجو أن تكونوا بخير",
    
    
    intro: "يسرّني التواصل معكم بخصوص الطالب/الطالبة:",
    
    name: "الاسم",
    section: "القسم",
    
    semes1: "الفصل الدراسي 1",

test: "الاختبار 1",

test2: "الاختبار 2",

test3: "الاختبار 3",

exam: "الامتحان 1",

semes2: "الفصل الدراسي 2",

test4: "الاختبار 1",

test5: "الاختبار 2",

test6: "الاختبار 3",

exam2: "الامتحان 2",

semes3: "الفصل الدراسي 3",

test7: "الاختبار 1",

test8: "الاختبار 2",

test9: "الاختبار 3",

exam3: "الامتحان 3",
    
    
    
    
    notes: "ملاحظات",
    question: "نتمنى منكم الاطلاع على هذه المعلومات، وفي حال لديكم أي ملاحظات أو استفسارات، يسعدنا تواصلكم دائماً",
    thanks: "شكراً لتعاونكم المستمر وتمنياتنا لأبنائنا بالتوفيق والنجاح الدائم"
  },
  fr: {
    hello: "Bonjour, j’espère que vous allez bien",
    intro: "Je souhaite vous contacter au sujet de votre enfant :",
    name: "Nom",
    section: "Section",
    
    
    
    semes1: "Semestre 1",

test: "Test 1",

test2: "Test 2",

test3: "Test 3",

exam: "Examen 1",

semes2: "Semestre 2",

test4: "Test 1",

test5: "Test 2",

test6: "Test 3",

exam2: "Examen 2",

semes3: "Semestre 3",

test7: "Test 1",

test8: "Test 2",

test9: "Test 2",

exam3: "Examen 3",
    
    
    notes: "Notes",
    question: "Nous vous invitons à prendre connaissance de ces informations et restons à votre disposition pour toute question ou remarque",
    thanks: "Merci pour votre collaboration continue et nos meilleurs vœux de réussite à nos élèves"
  },
  en: {
    hello: "Hello, hope you are doing well",
    intro: "I would like to contact you regarding your student:",
    name: "Name",
    section: "Section",
    semes1: "Semester 1",

test: "Test 1",

test2: "Test 2",

test3: "Test 3",

exam: "Exam 1",

semes2: "Semester 2",

test4: "Test 1",

test5: "Test 2",

test6: "Test 3",

exam2: "Exam 2",

semes3: "Semester 3",

test7: "Test 1",

test8: "Test 2",

test9: "Test 3",

exam3: "Exam 3",
    
    
    notes: "Notes",
    question: "Please review the information, and feel free to reach out if you have any questions or remarks",
    thanks: "Thank you for your continued cooperation and best wishes for our students’ success"
  }
};


function contactParentsWhatsApp(student) {
    if (!student || !student.phoneCall) return;

    const phone = student.phoneCall.trim();
    const lang = currentLang || "en"; // use your language state

    const tr = messageTranslations[lang];

    const sectionName = data.sections[activeSectionIndex]?.name || "—";

    const message = `
${tr.hello}

${tr.intro}


*${tr.name}* : ${student.name || "—"}

*${tr.section}* : ${sectionName || "—"}

━━━━━━━━━━━━━━━━━━━━━━
*${tr.semes1}*
[ *${tr.test}* : ${student.test || "—"} ] [  *${tr.test2}* : ${student.test2 || "—"} ]
[ *${tr.test3}* : ${student.test3 || "—"} ] [  *${tr.exam}* : ${student.exam || "—"} ]
━━━━━━━━━━━━━━━━━━━━━━
*${tr.semes2}*
[ *${tr.test4}* : ${student.test4 || "—"} ] [  *${tr.test5}* : ${student.test5 || "—"} ]
[ *${tr.test6}* : ${student.test6 || "—"} ] [  *${tr.exam2}* : ${student.exam2 || "—"} ]
━━━━━━━━━━━━━━━━━━━━━━
*${tr.semes3}*
[ *${tr.test7}* : ${student.test7 || "—"} ] [  *${tr.test8}* : ${student.test8 || "—"} ]
[ *${tr.test9}* : ${student.test9 || "—"} ] [  *${tr.exam3}* : ${student.exam3 || "—"} ]
━━━━━━━━━━━━━━━━━━━━━━
*${tr.notes}* : ${student.notes || "—"}
━━━━━━━━━━━━━━━━━━━━━━

${tr.question}

${tr.thanks}


`.trim();

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
window.open(url, "_blank");

}

















// ===============================
// ====== Student Modal (view) ====
// ===============================

function openStudentModal(student) {
    if (!studentCardContent || !studentModalOverlay) return;

    const sectionName = data.sections[activeSectionIndex]?.name || '';

// Normalize phone number:
const phone = student.phoneCall && student.phoneCall.trim() !== "–" ? student.phoneCall.trim() : "";

// Build the phone UI
let phoneUI = `
    <span style="color:#0078ff"><strong>${t("callParents")}:</strong></span>
    ${phone || "—"}
`;

if (phone !== "") {
    // 📞 Call Button
    phoneUI += `
        <button
            style="
                margin-left:2px;
                padding:3px 9px;
                font-size:16px;
                border:2px solid #0078ff;
                color:#0078ff;
                border-radius:6px;
                background:white;
                cursor:pointer;
                filter: drop-shadow(0 0 5px #0078ff);
        
            "
            onclick="window.location.href='tel:${phone}'"
        >
            📞
        </button>
    `;

    // 📱 WhatsApp Button
    phoneUI += `
        <button
            style="
                margin-left:2px;
                padding:3px 9px;
                font-size:16px;
                
                border:2px solid #25D366;
                border-radius:6px;
                color:#25D366;
                background:white;
                cursor:pointer;
                filter: drop-shadow(0 0 5px #25D366);
        
            "
            onclick='contactParentsWhatsApp(${JSON.stringify(student)})'
        >
        
        💬
        
        </button>
        
        
        
        



    `;
}

    
    
    

    studentCardContent.innerHTML = `
        <div style="border:3px solid #0078ff;padding:15px;border-radius:12px;background:rgba(255,255,255,0.55);backdrop-filter: blur(3px);">
            <div style="display:flex;gap:15px;">
                <div style="font-size:50px;border:2px solid #0078ff;width:80px;height:80px;display:flex;align-items:center;justify-content:center;border-radius:10px;filter: drop-shadow(0 0 5px #0078ff);">
                    ${student.emoji || '🧑'}
                </div>
                <div style="flex:1;">
<p>
  <span style="color:#0078ff"><strong>${t("studentNameCard")}:</strong></span> 
  ${truncateText(student.name, 28) || "—"}
</p>
                    <p><span style="color:#0078ff"><strong>${t("id")}:</strong></span> ${student.id || "—"}</p>
                </div>
            </div>

            <hr style="margin:15px 0;border:1px dashed #0078ff;">

            <p>${phoneUI}</p>

<p>
  <span style="color:#0078ff"><strong>${t("section")}:</strong></span> 
  ${truncateText(sectionName, 48) || "—"}
</p>
            
            
            
            
<p>
  <span style="color:#0078ff"><strong>${t("studentNotes")}:</strong></span> 
  ${truncateText(student.notes, 350) || "﹏﹏﹏﹏﹏﹏﹏"}
</p>
                    <hr style="margin:15px 0;border:1px dashed #0078ff;">
                                         <br />
            <label style="font-weight:bold" for="First Semester">${t("semes1")}</label>
            
<div id="editDivRow" style="">
            
            <p><span style="color:#0078ff"><strong>${t("studentTestCard")}:</strong></span> ${student.test || "–"}</p>

            <p><span style="color:#0078ff"><strong>${t("studentTestCard2")}:</strong></span> ${student.test2 || "–"}</p>
            
            
            
            
            
            
            
            </div>
            
            
            <div id="editDivRow" style="">
            
            
            <p><span style="color:#0078ff"><strong>${t("studentTestCard3")}:</strong></span> ${student.test3 || "–"}</p>
            
            
            
            
            <p><span style="color:#0078ff"><strong>${t("studentExamCard")}:</strong></span> ${student.exam || "–"}</p>
            
            
            
            
            
            
            
            </div>
            
            
            

            
            

            
            
            
                    <hr style="margin:15px 0;border:1px dashed #0078ff;">
                                         <br />
            <label style="font-weight:bold" for="Second Semester">${t("semes2")}</label>
            
            
<div id="editDivRow" style="">
            
            
            
            <p><span style="color:#0078ff"><strong>${t("studentTestCard4")}:</strong></span> ${student.test4 || "–"}</p>

            <p><span style="color:#0078ff"><strong>${t("studentTestCard5")}:</strong></span> ${student.test5 || "–"}</p>
            
            
            
            
            
            
            
            
            </div>
            
            
            <div id="editDivRow" style="">
            
            
            
            
            <p><span style="color:#0078ff"><strong>${t("studentTestCard6")}:</strong></span> ${student.test6 || "–"}</p>
            
            
            
            
            <p><span style="color:#0078ff"><strong>${t("studentExamCard2")}:</strong></span> ${student.exam2 || "–"}</p>
            
            
            
            
            
            
            </div>
            
            

            
            

                    
            <hr style="margin:15px 0;border:1px dashed #0078ff;">
                                         <br />
            <label style="font-weight:bold" for="Third Semester">${t("semes3")}</label>
            
            
<div id="editDivRow" style="">
            
            
            <p><span style="color:#0078ff"><strong>${t("studentTestCard7")}:</strong></span> ${student.test7 || "–"}</p>

            <p><span style="color:#0078ff"><strong>${t("studentTestCard8")}:</strong></span> ${student.test8 || "–"}</p>
            
            
            
            
            
            
            
            </div>
            
            
            <div id="editDivRow" style="">
            
            
            
            <p><span style="color:#0078ff"><strong>${t("studentTestCard9")}:</strong></span> ${student.test9 || "–"}</p>
            
            
            
            
            <p><span style="color:#0078ff"><strong>${t("studentExamCard3")}:</strong></span> ${student.exam3 || "–"}</p>
            
            
            
            
            
            
            </div>
            
            
            
            


            
            
        </div>



    `;

    studentModalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    
    // ✅ SCROLL AFTER MODAL IS VISIBLE
    setTimeout(() => {
        const studentModalTitle = document.getElementById("studentModalTitle");
        if (studentModalTitle) {
            studentModalTitle.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, 50);


    
    
}

if (closeStudentModal) closeStudentModal.onclick = () => {
    studentModalOverlay.style.display = 'none';
    document.body.style.overflow = '';
};



// ===============================
// ====== Edit Section Modal ======
// ===============================



function openEditSectionModal(sectionIndex) {
    editMode = 'section';
    editSectionIndex = sectionIndex;
    const section = data.sections[sectionIndex] || { name: '' };

    editModalTitle.textContent = t('section'); // label as title
    editModalContent.innerHTML = `
        <div style="border:3px solid #0078ff;padding:12px;border-radius:12px;background:rgba(255,255,255,0.55);backdrop-filter: blur(3px);">
            <label for="editSectionName" style="display:block;margin-bottom:8px;font-weight:600;color:#0078ff;">${t('section')}</label>
            <input id="editSectionName" style="width:90%;padding:10px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(section.name)}" />
        </div>
    `;

    saveEditBtn.onclick = () => {
        const newName = document.getElementById('editSectionName').value.trim();
        if (!newName) {
            // Optionally, highlight input instead of alert
            const input = document.getElementById('editSectionName');
            input.style.border = '2px solid red';
            input.focus();
            return;
        }
        data.sections[editSectionIndex].name = newName;
        saveAll();
        updateTexts();
        closeEditModal();
    };

    editModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        const el = document.getElementById('editSectionName');
        if (el) el.focus();
    }, 50);
}




// ===============================
// ====== Edit Student Modal ======
// ===============================
function openEditStudentModal(sectionIndex, studentIndex) {
    editMode = 'student';
    editStudentSectionIndex = sectionIndex;
    editStudentIndex = studentIndex;
    const student = data.sections[sectionIndex].students[studentIndex];

    const sectionOptions = data.sections.map((s, i) =>
        `<option value="${i}" ${i === sectionIndex ? 'selected' : ''}>${escapeHtml(s.name)}</option>`
    ).join('');

    editModalTitle.textContent = t('studentDetails');
    editModalContent.innerHTML = `
        <div style="border:3px solid #0078ff;padding:12px;border-radius:12px;background:rgba(255,255,255,0.55);backdrop-filter: blur(3px);">
            <div style="display:flex;gap:12px;align-items:center;">
                <div id="editEmojiPreview" style="font-size:40px;border:2px solid #0078ff;width:70px;height:70px;display:flex;align-items:center;justify-content:center;border-radius:10px;filter: drop-shadow(0 0 5px #0078ff);">
                    ${escapeHtml(student.emoji || '🧑')}
                </div>
                <div style="flex:1;">
                    <label for="editStudentName" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentName')}</label>
                    <input id="editStudentName" style="width:90%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;margin:0px 5px" value="${escapeHtml(student.name)}" />
                </div>
            </div>

            <div style="margin-top:12px;">
                <label for="editStudentID" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('id')}</label>
                <input id="editStudentID" style="width:95%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.id)}" />
            </div>

            <div style="margin-top:12px;">
                <label for="editCallParents" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('callParents')}</label>
                <input id="editCallParents" type="tel" style="width:90%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.phoneCall || '')}" />

                <label for="editStudentEmoji" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('gender')}</label>
                <select id="editStudentEmoji" style="width:95%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;">
                    <option value="🧑" ${student.emoji === '🧑' ? 'selected' : ''}>🧑</option>
                    <option value="👧" ${student.emoji === '👧' ? 'selected' : ''}>👧</option>
                </select>
            </div>

            <div style="margin-top:12px;">
                <label for="editStudentSection" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('section')}</label>
                <select id="editStudentSection" style="width:95%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;">
                    ${sectionOptions}
                </select>
            </div>

            <div style="margin-top:12px;">
                <label for="editStudentNotes" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentNotes')}</label>
                <textarea id="editStudentNotes" style="width:95%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;height:80px;">${escapeHtml(student.notes)}</textarea>
            </div>

            <div style="display:flex;gap:12px;margin-top:12px;flex-direction:column;border:none">

            <label style="font-weight:bold" for="First Semester">${t("semes1")}</label>
            
            
            <div id="editDivRow" style="">
                
                
                <div style="flex:1;">
                    <label for="editStudentTest" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard')}</label>
                    <input id="editStudentTest" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test)}" />
                </div>
                
                <div style="flex:1;">
                    <label for="editStudentTest2" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard2')}</label>
                    <input id="editStudentTest2" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test2)}" />
                </div>
                
                
                
                
                
                
                
                
                
                
            </div>
            
            
            
            
            
            
            <div id="editDivRow" style="">
                            
                <div style="flex:1;">
                    <label for="editStudentTest3" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard3')}</label>
                    <input id="editStudentTest3" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test3)}" />
                </div>
                
                
                                
                
                <div style="flex:1;">
                    <label for="editStudentExam" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentExamCard')}</label>
                    <input id="editStudentExam" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.exam)}" />
                </div>
                
                
                
                
                
                
            
            </div>
            

                
                

                
                <label style="font-weight:bold" for="Second Semester">${t("semes2")}</label>
                
                
                
            
            
            <div id="editDivRow" style="">
            
                            
                

                <div style="flex:1;">
                    <label for="editStudentTest4" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard4')}</label>
                    <input id="editStudentTest4" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test4)}" />
                </div>


                <div style="flex:1;">
                    <label for="editStudentTest5" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard5')}</label>
                    <input id="editStudentTest5" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test5)}" />
                </div>
                
            
            
            </div>
            
            
            
            
            
            <div id="editDivRow" style="">
            
                

                
                <div style="flex:1;">
                    <label for="editStudentTest6" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard6')}</label>
                    <input id="editStudentTest6" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test6)}" />
                </div>
                
                
                
                
                
                
                
                
                <div style="flex:1;">
                    <label for="editStudentExam2" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentExamCard2')}</label>
                    <input id="editStudentExam2" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.exam2)}" />
                </div>
                
            
            
            
            </div>
            
            
            

                
                <label style="font-weight:bold" for="Third Semester">${t("semes3")}</label>
                
                
                
            
            <div id="editDivRow" style="">
            
                
                

                <div style="flex:1;">
                    <label for="editStudentTest7" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard7')}</label>
                    <input id="editStudentTest7" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test7)}" />
                </div>


                <div style="flex:1;">
                    <label for="editStudentTest8" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard8')}</label>
                    <input id="editStudentTest8" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test8)}" />
                </div>
                
                
            
            
            </div>
            
            
            
            
            
            
            <div id="editDivRow" style="">
            
            

                <div style="flex:1;">
                    <label for="editStudentTest9" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard9')}</label>
                    <input id="editStudentTest9" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test9)}" />
                </div>
                
                
                
                
                
                
                
                
                <div style="flex:1;">
                    <label for="editStudentExam3" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentExamCard3')}</label>
                    <input id="editStudentExam3" type="text" style="width:80%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.exam3)}" />
                </div>
                
                
                
                
            
            
            
            
            </div>
            

                
                
                
                
                
                
                
            </div>
        </div>
    `;

    // Update emoji preview
    setTimeout(() => {
        const emojiSelect = document.getElementById('editStudentEmoji');
        const emojiPreview = document.getElementById('editEmojiPreview');
        if (emojiSelect && emojiPreview) {
            emojiSelect.addEventListener('change', () => {
                emojiPreview.textContent = emojiSelect.value;
            });
        }
        const nameInput = document.getElementById('editStudentName');
        if (nameInput) nameInput.focus();
    }, 30);

    // Save handler
    saveEditBtn.onclick = () => {
        const newName = (document.getElementById('editStudentName')?.value || '').trim();
        if (!newName) return alert(t('studentName'));

        const newID = (document.getElementById('editStudentID')?.value || '').trim() || '00001';
        const newEmoji = (document.getElementById('editStudentEmoji')?.value || '🧑').trim();
        const newSectionIdx = parseInt(document.getElementById('editStudentSection')?.value, 10);
        const newNotes = (document.getElementById('editStudentNotes')?.value || '').trim();
        const newTest = (document.getElementById('editStudentTest')?.value || '').trim() || '–';
        
        const newTest2 = (document.getElementById('editStudentTest2')?.value || '').trim() || '–';
        
        
        const newTest3 = (document.getElementById('editStudentTest3')?.value || '').trim() || '–';
        
        
        const newTest4 = (document.getElementById('editStudentTest4')?.value || '').trim() || '–';
        
        
        const newTest5 = (document.getElementById('editStudentTest5')?.value || '').trim() || '–';
        
        
        const newTest6 = (document.getElementById('editStudentTest6')?.value || '').trim() || '–';
        
        
        const newTest7 = (document.getElementById('editStudentTest7')?.value || '').trim() || '–';
        
        
        const newTest8 = (document.getElementById('editStudentTest8')?.value || '').trim() || '–';
        
        const newTest9 = (document.getElementById('editStudentTest9')?.value || '').trim() || '–';
        
        
        
        
        
        
        const newExam = (document.getElementById('editStudentExam')?.value || '').trim() || '–';
        
        const newExam2 = (document.getElementById('editStudentExam2')?.value || '').trim() || '–';
        
        const newExam3 = (document.getElementById('editStudentExam3')?.value || '').trim() || '–';
        
        
        
        
        const newPhoneCall = (document.getElementById('editCallParents')?.value || '').trim();

        const studentObj = {
            name: newName,
            id: newID,
            emoji: newEmoji,
            notes: newNotes,
            test: newTest,
            test2: newTest2,
            test3: newTest3,
            test4: newTest4,
            test5: newTest5,
            test6: newTest6,
            test7: newTest7,
            test8: newTest8,
            test9: newTest9,
            
            
            
            
            
            exam: newExam,
            exam2: newExam2,
            exam3: newExam3,
            phoneCall: newPhoneCall // ✅ keep it consistent
        };
        
        

        
        let oldIdx = editStudentSectionIndex;
let newIdx = newSectionIdx;

if (newIdx !== oldIdx) {
    const oldSection = data.sections[oldIdx];
    if (!oldSection) return alert('Invalid section selection');
    oldSection.students.splice(editStudentIndex, 1);
    data.sections[newIdx].students.push(studentObj);
    activeSectionIndex = newIdx;
} else {
    data.sections[oldIdx].students[editStudentIndex] = studentObj;
}

// update counts for both old and new sections
const oldCountEl = document.getElementById(`count-${oldIdx}`);
if (oldCountEl) updateStudentCount(oldCountEl, data.sections[oldIdx].students);

const newCountEl = document.getElementById(`count-${newIdx}`);
if (newCountEl) updateStudentCount(newCountEl, data.sections[newIdx].students);
        
        
        
        
        
        
        

        saveAll();
        updateTexts();
        renderStudents();
        closeEditModal();
    };
    
    
    
    
    

    editModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Escape HTML helper
function escapeHtml(unsafe) {
    if (unsafe === undefined || unsafe === null) return '';
    return String(unsafe)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}












// ===============================
// ====== Confirm Modal =========
// ===============================
confirmYes.onclick = () => { if (confirmCallback) confirmCallback(); confirmOverlay.classList.add("hidden"); };
confirmCancel.onclick = () => { confirmOverlay.classList.add("hidden"); };

// ===============================
// ====== Language Switcher ======
// ===============================
function switchLanguage(lang) {
    currentLang = lang;
    saveLang();
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem("school-dir", document.documentElement.dir);
    updateTexts();
}

const savedDir = localStorage.getItem("school-dir");
if (savedDir) {
    document.documentElement.dir = savedDir;
    if (savedDir === 'rtl') currentLang = 'ar';
}

function positionLangMenu() {
    const rect = langBtn.getBoundingClientRect();
    langMenu.style.top = rect.bottom + "px";
    if (currentLang === 'ar') {
        langMenu.style.left = 'auto';
        langMenu.style.right = (window.innerWidth - rect.right) + "px";
    } else {
        langMenu.style.left = rect.left + "px";
        langMenu.style.right = 'auto';
    }
}

langBtn.onclick = (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("hidden");
    positionLangMenu();
};

window.addEventListener("resize", () => {
    if (!langMenu.classList.contains("hidden")) positionLangMenu();
});

langMenu.querySelectorAll("button").forEach(btn => {
    btn.onclick = (e) => {
        e.stopPropagation();
        switchLanguage(btn.dataset.lang);
        langMenu.classList.add("hidden");
    };
});

document.addEventListener("click", () => langMenu.classList.add("hidden"));

// ===============================
// ====== Initialization =========
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    updateTexts();
    renderSections();
});

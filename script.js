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
        studentTestCard: "Recent Test Result",
        studentExamCard: "Recent Exam Result",
        studentTest: "Test score (e.g., 17/20, 26/30, 37/40)",
        studentExam: "Exam score (e.g., 17/20, 26/30, 37/40)",
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
        confirmDeleteStudent: "Are you sure you want to delete student : '{name}' ?",
        confirmDeleteSection: "Are you sure you want to delete section : '{name}' ?",
        author: "Said ElHachmy",
        allRights: "All rights reserved."
    },
    fr: {
        title: "Gestion Classe",
        contact: "Contact",
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
        studentTestCard: "Résultat de test récent",
        studentExamCard: "Résultat d’examen récent",
        studentTest: "Score du test (par ex., 17/20, 26/30, 37/40)",
        
        studentExam: "Score de l'examen (par ex., 17/20, 26/30, 37/40)",
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
        confirmDeleteStudent: "Êtes-vous sûr de vouloir supprimer l'élève : '{name}' ?",
        confirmDeleteSection: "Êtes-vous sûr de vouloir supprimer la section : '{name}' ?",
        author: "Said ElHachmy",
        allRights: "Tous droits réservés."
    },
    ar: {
        title: "مدير الصف",
        contact: "اتصال",
        addSection: "أضف",
        noSection: "لم يتم تحديد أي قسم",
        sectionPlaceholder: "اسم القسم الجديد",
        studentName: "اسم الطالب",
        studentID: "المعرف (الافتراضي 00001)",
        section: "القسم",
        
        callParents: "هاتف الولي",
        

        callParentsPlaceholder: "رقم هاتف ولي الأمر",
        
        
      
        id: "المعرف",
        studentNameCard: "الاسم",
        gender:"الجنس",
        studentTestCard: "نتيجة اختبار حديث",
        

        
        studentExamCard: "نتيجة امتحان حديث",
        
        
        
        

        studentTest: "درجة الاختبار (مثال: 17/20، 26/30، 37/40)",
        studentExam: "درجة الامتحان (مثال: 17/20، 26/30، 37/40)",
       
        studentNotes: "الملاحظات",
        addStudent: "أضف",
        studentDetails: "تفاصيل الطالب",
        studentOpen: "فتح",
        close: "إغلاق",
        save: "حفظ",
        yes: "نعم",
        cancel: "إلغاء",
        selectSectionFirst: "حدد قسمًا أولاً!",
        noSectionSelected: "لم يتم تحديد أي قسم!",
        confirmDeleteStudent: "هل أنت متأكد أنك تريد حذف الطالب : '{name}' ؟",
        confirmDeleteSection: "هل أنت متأكد أنك تريد حذف القسم : '{name}' ؟",
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



const studentTest = document.getElementById('studentTest');
const studentExam = document.getElementById('studentExam');
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
    siteTitle.textContent = `👨🏻‍🏫 ${t("title")}`;
    contactLink.textContent = t("contact");
    addSectionBtn.textContent = t("addSection");
    sectionInput.placeholder = t("sectionPlaceholder");
    studentNameInput.placeholder = t("studentName");
    studentIDInput.placeholder = t("studentID");
    studentTest.placeholder = t("studentTest");
    
    callParents.callParents = t("callParents");
    callParents.placeholder = t("callParentsPlaceholder");
    
    
    
    
    studentExam.placeholder = t("studentExam");
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
function showConfirm(message, callback) {
    confirmMessage.textContent = message;
    confirmOverlay.classList.remove("hidden");
    confirmCallback = callback;
}

// ===============================
// ====== Section Functions ======
// ===============================
function renderSections() {
    sectionsList.innerHTML = "";
    data.sections.forEach((section, index) => {
        
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
        sectionInsideNameDiv.style.margin="2px 3px"
        
        
        
        
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
        sectionInsideDiv.style.margin="2px 3px"
        
        
        
        
        
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
            showConfirm(t("confirmDeleteSection", { name: section.name }), () => {
                data.sections.splice(index, 1);
                activeSectionIndex = null;
                saveAll();
                updateTexts();
            });
        };


         sectionInsideNameDiv.appendChild(document.createElement('span')).textContent = section.name;
        
        sectionInsideDiv.appendChild(editBtn);
        sectionInsideDiv.appendChild(delBtn);
        
        div.appendChild(sectionInsideNameDiv);
        div.appendChild(sectionInsideDiv);

        div.onclick = () => {
            activeSectionIndex = index;
            renderStudents();
            activeSectionName.textContent = section.name;
        };

        
        sectionsList.prepend(div);
    });
}

addSectionBtn.onclick = () => {
    const name = sectionInput.value.trim();
    if (!name) return;
    data.sections.push({ name, students: [] });
    sectionInput.value = "";
    saveAll();
    updateTexts();
};





// ===============================
// ====== Student Functions ======
// ===============================
function truncateText(text, maxLength = 15) {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
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
        emojiDiv.textContent = student.emoji || '👦🏻';
        emojiBox.appendChild(emojiDiv);

        const nameDiv = document.createElement('div');
        nameDiv.id="nameDiv";
        nameDiv.textContent = truncateText(student.name, 15); // truncate displayed name
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
        delBtn.onclick = () => showConfirm(t("confirmDeleteStudent", { name: student.name }), () => {
            section.students.splice(index, 1);
            saveAll();
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

addStudentBtn.onclick = () => {
    if (activeSectionIndex === null) { alert(t("selectSectionFirst")); return; }
    const student = {
        name: studentNameInput.value.trim(),
        id: studentIDInput.value.trim() || "00001",
        phoneCall:callParents.value.trim() || "–",
        emoji: studentEmoji.value,
        notes: studentNotes.value.trim(),
        test: studentTest.value.trim() || "–",
        exam: studentExam.value.trim() || "–"
    };
    if (!student.name) return;
    data.sections[activeSectionIndex].students.push(student);
    studentNameInput.value = studentIDInput.value = callParents.value = studentNotes.value = studentTest.value = studentExam.value = "";
    saveAll();
    renderStudents();
};


const messageTranslations = {
  ar: {
    hello: "السلام عليكم، أرجو أن تكونوا بخير",
    
    
    intro: "يسرّني التواصل معكم بخصوص الطالب/الطالبة:",
    
    name: "الاسم:",
    section: "القسم:",
    test: "نتيجة اختبار حديث:",
    exam: "نتيجة امتحان حديث:",
    notes: "ملاحظات:",
    question: "نتمنى منكم الاطلاع على هذه المعلومات، وفي حال لديكم أي ملاحظات أو استفسارات، يسعدنا تواصلكم دائماً",
    thanks: "شكراً لتعاونكم المستمر وتمنياتنا لأبنائنا بالتوفيق والنجاح الدائم"
  },
  fr: {
    hello: "Bonjour, j’espère que vous allez bien",
    intro: "Je souhaite vous contacter au sujet de votre enfant :",
    name: "Nom :",
    section: "Section :",
    test: "Résultat de test récent :",
    exam: "Résultat d’examen récent :",
    notes: "Notes :",
    question: "Nous vous invitons à prendre connaissance de ces informations et restons à votre disposition pour toute question ou remarque",
    thanks: "Merci pour votre collaboration continue et nos meilleurs vœux de réussite à nos élèves"
  },
  en: {
    hello: "Hello, hope you are doing well",
    intro: "I would like to contact you regarding your student:",
    name: "Name:",
    section: "Section:",
    test: "Recent Test Result:",
    exam: "Recent Exam Result:",
    notes: "Notes:",
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
${tr.name} ${student.name || "—"}
${tr.section} ${sectionName || "—"}
${tr.test} ${student.test || "—"}
${tr.exam} ${student.exam || "—"}
${tr.notes} ${student.notes || "—"}

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
                    ${student.emoji || '👦🏻'}
                </div>
                <div style="flex:1;">
                    <p><span style="color:#0078ff"><strong>${t("studentNameCard")}:</strong></span> ${student.name || "—"}</p>
                    <p><span style="color:#0078ff"><strong>${t("id")}:</strong></span> ${student.id || "—"}</p>
                </div>
            </div>

            <hr style="margin:15px 0;border:1px dashed #0078ff;">

            <p>${phoneUI}</p>

            <p><span style="color:#0078ff"><strong>${t("section")}:</strong></span> ${sectionName || "—"}</p>
            <p><span style="color:#0078ff"><strong>${t("studentNotes")}:</strong></span> ${student.notes || "﹏﹏﹏﹏﹏﹏﹏"}</p>
            <p><span style="color:#0078ff"><strong>${t("studentTestCard")}:</strong></span> ${student.test || "–"}</p>
            <p><span style="color:#0078ff"><strong>${t("studentExamCard")}:</strong></span> ${student.exam || "–"}</p>
        </div>
    `;

    studentModalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
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
                    ${escapeHtml(student.emoji || '👦🏻')}
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
                    <option value="👦🏻" ${student.emoji === '👦🏻' ? 'selected' : ''}>👦🏻</option>
                    <option value="👧🏻" ${student.emoji === '👧🏻' ? 'selected' : ''}>👧🏻</option>
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

            <div style="display:flex;gap:12px;margin-top:12px;">
                <div style="flex:1;">
                    <label for="editStudentTest" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentTestCard')}</label>
                    <input id="editStudentTest" type="text" style="width:90%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.test)}" />
                </div>
                <div style="flex:1;">
                    <label for="editStudentExam" style="display:block;margin-bottom:6px;font-weight:600;color:#0078ff;">${t('studentExamCard')}</label>
                    <input id="editStudentExam" type="text" style="width:90%;padding:8px;border-radius:8px;border:1px solid #b7c9f3;" value="${escapeHtml(student.exam)}" />
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
        const newEmoji = (document.getElementById('editStudentEmoji')?.value || '👦🏻').trim();
        const newSectionIdx = parseInt(document.getElementById('editStudentSection')?.value, 10);
        const newNotes = (document.getElementById('editStudentNotes')?.value || '').trim();
        const newTest = (document.getElementById('editStudentTest')?.value || '').trim() || '–';
        const newExam = (document.getElementById('editStudentExam')?.value || '').trim() || '–';
        const newPhoneCall = (document.getElementById('editCallParents')?.value || '').trim();

        const studentObj = {
            name: newName,
            id: newID,
            emoji: newEmoji,
            notes: newNotes,
            test: newTest,
            exam: newExam,
            phoneCall: newPhoneCall // ✅ keep it consistent
        };

        if (newSectionIdx !== editStudentSectionIndex) {
            const oldSection = data.sections[editStudentSectionIndex];
            if (!oldSection) return alert('Invalid section selection');
            oldSection.students.splice(editStudentIndex, 1);
            data.sections[newSectionIdx].students.push(studentObj);
            activeSectionIndex = newSectionIdx;
        } else {
            data.sections[editStudentSectionIndex].students[editStudentIndex] = studentObj;
        }

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

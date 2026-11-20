const students = {
    // BCA Students
    "U13WC25S0001": "SINCHANA A S",
    "U13WC25S0002": "USHA R K",
    "U13WC25S0003": "GAGANA M N",
    "U13WC25S0004": "CHIRANJEEVI C",
    "U13WC25S0005": "ANUSHA H S",
    "U13WC25S0006": "M M CHANDANA",
    "U13WC25S0007": "KIRAN N H",
    "U13WC25S0008": "CHANDANA B H",
    "U13WC25S0009": "THARA G N",
    "U13WC25S0010": "TUPPAPLARA NAGARAJA",
    "U13WC25S0011": "INCHARA D M",
    "U13WC25S0012": "AKASH SHIVAYOGI HOSARITTI",
    "U13WC25S0013": "MANASA P",
    "U13WC25S0014": "VEENA",
    "U13WC25S0016": "PRIYANKA H",
    "U13WC25S0017": "TANU B S",
    "U13WC25S0018": "K B PAVITHRA",
    "U13WC25S0019": "HEMANTH K P",
    "U13WC25S0020": "PREM KUMAR M",
    "U13WC25S0021": "TARUN S",
    "U13WC25S0022": "VEERESH BASAVARAJ KURUVATHI",
    "U13WC25S0023": "NAGARAJA NAIKA K",
    "U13WC25S0024": "CHANDANA NANDIHALLI",
    "U13WC25S0025": "C NAVEENA",
    "U13WC25S0026": "PRASHANTHA KAMMARA",
    "U13WC25S0027": "REVANASIDDESHA",
    "U13WC25S0028": "RAKESH KOTI L",
    "U13WC25S0029": "M SHIVRAJ",
    "U13WC25S0030": "RANGASWAMY M",
    "U13WC25S0031": "MADHUPRIYA P",
    "U13WC25S0032": "DHANUSH B D",
    "U13WC25S0033": "VISHWESHWARAIAH H M",
    "U13WC25S0034": "GANESH K M",
    "U13WC25S0035": "KOTRESH UTTANGI",
    "U13WC25S0036": "ANUSHA",

};

const loginScreen = document.getElementById("login-screen");
const mainContent = document.getElementById("main-content");
const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

// Helper to ignore uppercase/lowercase and extra spaces
function normalize(text) {
    return text.replace(/\s+/g, "").toUpperCase();
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUUCMS = normalize(document.getElementById("uucms").value);
    const enteredName = normalize(document.getElementById("student-name").value);

    if (students[enteredUUCMS] && normalize(students[enteredUUCMS]) === enteredName) {
        loginScreen.style.display = "none";
        mainContent.style.display = "block";
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Invalid UUCMS Number or Name. Please try again.";
    }
});
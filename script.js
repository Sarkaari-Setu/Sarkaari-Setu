document.addEventListener("DOMContentLoaded", () => {


console.log("✅ Sarkaari-Setu+ Loaded");
    
// ELEMENTS
const popup = document.getElementById("languagePopup");
const englishBtn = document.getElementById("englishBtn");
const hindiBtn = document.getElementById("hindiBtn");
const langToggle = document.getElementById("langChange");

const boardsBtn = document.querySelector(".tabs button:first-child");
const formatBtn = document.getElementById("Formatbtn");

const boardsSection = document.querySelector(".container");
const boardsCards = document.querySelector(".cards");
const formatsSection = document.querySelector(".ApplicationS");

const boardSearch = document.querySelector(".search input");
const formatSearch = document.querySelector(".search-boxtwo input");

const countText = document.querySelector(".count");

let currentLanguage = "hindi";

// INITIAL STATE
if (formatsSection) {
    formatsSection.style.display = "none";
}

// LANGUAGE FUNCTIONS
function changeToEnglish() {

    currentLanguage = "english";

    document.querySelector(".lang").innerHTML =
        '<i class="fa-solid fa-globe"></i> हिन्दी';

    const tabs = document.querySelectorAll(".tabs button");

    if (tabs[0]) tabs[0].innerHTML =
        '<i class="fa-regular fa-building"></i> Boards';

    if (tabs[1]) tabs[1].innerHTML =
        '<i class="fa-regular fa-file-lines"></i> Application Forms';

    const searchInput = document.querySelector(".search input");

    if (searchInput) {
        searchInput.placeholder = "Search Boards...";
    }

    const filterBtn = document.querySelector(".filters button");

    if (filterBtn) {
        filterBtn.textContent = "All Boards";
    }

    const heading = document.querySelector("h3");

    if (heading) {
        heading.textContent = "Showing Boards";
    }
}


// POPUP BUTTONS
if (englishBtn) {
    englishBtn.addEventListener("click", () => {
        popup.style.display = "none";
        changeToEnglish();
    });
}

if (hindiBtn) {
    hindiBtn.addEventListener("click", () => {
        popup.style.display = "none";
        changeToHindi();
    });
}

// LANGUAGE TOGGLE
if (langToggle) {

    langToggle.addEventListener("click", () => {

        if (currentLanguage === "hindi") {
            changeToEnglish();
        } else {
            changeToHindi();
        }

    });

}

// TABS
function showBoards() {

    if (boardsSection) {
        boardsSection.style.display = "block";
    }

    if (formatsSection) {
        formatsSection.style.display = "none";
    }

    boardsBtn.classList.add("active");
    formatBtn.classList.remove("active");
}

function showFormats() {

    if (boardsSection) {
        boardsSection.style.display = "none";
    }

    if (formatsSection) {
        formatsSection.style.display = "block";
    }

    formatBtn.classList.add("active");
    boardsBtn.classList.remove("active");
}

if (boardsBtn) {
    boardsBtn.addEventListener("click", showBoards);
}

if (formatBtn) {
    formatBtn.addEventListener("click", showFormats);
}

// BOARD SEARCH
if (boardSearch) {

    boardSearch.addEventListener("keyup", () => {

        const value = boardSearch.value.toLowerCase();

        const cards =
            document.querySelectorAll(".cards .card, .cards .card-new");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// FORMAT SEARCH
if (formatSearch) {

    formatSearch.addEventListener("keyup", () => {

        const value = formatSearch.value.toLowerCase();

        const cards =
            document.querySelectorAll(".cards-grid .card");

        let visible = 0;

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";
                visible++;

            } else {

                card.style.display = "none";

            }

        });

        if (countText) {
            countText.textContent =
                `Showing ${visible} formats`;
        }

    });

}

// DEFAULT
showBoards();


});
//for the first search to work
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cardsContainer');
const resultCount = document.getElementById('resultCount');

function filterCards() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const cards = cardsContainer.querySelectorAll('.card, .card-new');
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p') ? 
                            card.querySelector('p').textContent.toLowerCase() : '';

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update result count
    if (searchTerm === '') {
        resultCount.textContent = `${visibleCount} बोर्ड दिखा रहे हैं`;
    } else {
        resultCount.textContent = `${visibleCount} बोर्ड मिले`;
    }
}

// Real-time search as user types
searchInput.addEventListener('input', filterCards);

//data dictionary

const translations = {

    // General
    "Visit Website": "वेबसाइट पर जाएँ",
    "Download Format": "प्रारूप डाउनलोड करें",
    "View Format": "प्रारूप देखें",
    "Download Guide": "गाइड डाउनलोड करें",

    // Boards
    "Central Board of Secondary Education (CBSE)":
        "केंद्रीय माध्यमिक शिक्षा बोर्ड (सीबीएसई)",

    "National Council of Educational Research and Training (NCERT)":
        "राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद (एनसीईआरटी)",

    "National Testing Agency (NTA)":
        "राष्ट्रीय परीक्षण एजेंसी (एनटीए)",

    "Delhi Municipal Corporation(EDMC)":
        "दिल्ली नगर निगम (ईडीएमसी)",

    "Right To Information (RTI)":
        "सूचना का अधिकार (आरटीआई)",

    "University Grant Commision(UGC)":
        "विश्वविद्यालय अनुदान आयोग (यूजीसी)",

    "National Institute of Open Schooling (NIOS)":
        "राष्ट्रीय मुक्त विद्यालयी शिक्षा संस्थान (एनआईओएस)",

    "National Social Welfare Board":
        "राष्ट्रीय समाज कल्याण बोर्ड",

    "Union Public Commision Selection(UPSC)":
        "संघ लोक सेवा आयोग (यूपीएससी)",

    "Staff Selection Commision(SSC)":
        "कर्मचारी चयन आयोग (एसएससी)",

    "All India Council for Technical Education (AICTE)":
        "अखिल भारतीय तकनीकी शिक्षा परिषद (एआईसीटीई)",

    "Economically Weaker Section (EWS) application":
        "आर्थिक रूप से कमजोर वर्ग (ईडब्ल्यूएस) आवेदन",

    // Descriptions
    "National-level education board for public and private schools":
        "सार्वजनिक और निजी विद्यालयों के लिए राष्ट्रीय स्तर का शिक्षा बोर्ड",

    "Develops curriculum and educational materials.":
        "पाठ्यक्रम और शैक्षिक सामग्री विकसित करता है।",

    "Conducts entrance examinations for higher education institutions.":
        "उच्च शिक्षा संस्थानों के लिए प्रवेश परीक्षाएँ आयोजित करता है।",

    "Services for East Delhi":
        "पूर्वी दिल्ली के लिए सेवाएँ",

    "File RTI online":
        "ऑनलाइन आरटीआई दाखिल करें",

    "For Universities":
        "विश्वविद्यालयों के लिए",

    "Free school education system for students":
        "छात्रों के लिए मुक्त विद्यालयी शिक्षा प्रणाली",

    "Social Welfare Schemes and Programmes":
        "सामाजिक कल्याण योजनाएँ और कार्यक्रम",

    "Central recruitment agency for civil services":
        "सिविल सेवाओं के लिए केंद्रीय भर्ती एजेंसी",

    "Recruitment for various Group B and C posts":
        "विभिन्न ग्रुप बी और सी पदों के लिए भर्ती",

    "Technical education regulatory body":
        "तकनीकी शिक्षा नियामक संस्था",

    "EWS Certificate Application Portal":
        "ईडब्ल्यूएस प्रमाणपत्र आवेदन पोर्टल",

    // Government Portals
    "Ministry of Education":
        "शिक्षा मंत्रालय",

    "MyGov":
        "मायगव",

    "myScheme":
        "मायस्कीम",

    "UMANG":
        "उमंग",

    "DigiLocker":
        "डिजिलॉकर",

    "GST Portal":
        "जीएसटी पोर्टल",

    "Passport Seva":
        "पासपोर्ट सेवा",

    "Employees' Provident Fund Organisation (EPFO)":
        "कर्मचारी भविष्य निधि संगठन (ईपीएफओ)",

    // Search
    "Search application formats...":
        "आवेदन प्रारूप खोजें...",

    "Showing 12 formats":
        "12 प्रारूप दिखाए जा रहे हैं"

        // Application Formats

,"Birth Certificate Application":
"जन्म प्रमाण पत्र आवेदन",

"Income Certificate Application":
"आय प्रमाण पत्र आवेदन",

"Domicile Certificate Application":
"निवास प्रमाण पत्र आवेदन",

"RTI Application Form":
"आरटीआई आवेदन प्रपत्र",

"EWS Guide":
"ईडब्ल्यूएस मार्गदर्शिका",

"EDMC Guide":
"ईडीएमसी मार्गदर्शिका",

"UGC Guide":
"यूजीसी मार्गदर्शिका",

"Death Certificate Application":
"मृत्यु प्रमाण पत्र आवेदन",

"Marriage Registration Application":
"विवाह पंजीकरण आवेदन",

"Property Tax Mutation Application":
"संपत्ति कर नामांतरण आवेदन",

"Water Connection Application":
"जल कनेक्शन आवेदन",

"Sewer Connection Application":
"सीवर कनेक्शन आवेदन",

"Trade License Application":
"व्यापार लाइसेंस आवेदन",

"Health Trade License Application":
"स्वास्थ्य व्यापार लाइसेंस आवेदन",

"Building Plan Approval Application":
"भवन योजना स्वीकृति आवेदन",

"Property Transfer Application":
"संपत्ति हस्तांतरण आवेदन",

"House Tax Correction Application":
"गृह कर संशोधन आवेदन",

"Property Tax Rebate Application":
"संपत्ति कर छूट आवेदन",

"Encroachment Complaint":
"अतिक्रमण शिकायत",

"Sanitation Complaint":
"स्वच्छता शिकायत",

"Street Light Complaint":
"स्ट्रीट लाइट शिकायत",

"Garbage Collection Complaint":
"कचरा संग्रहण शिकायत",

"Stray Animal Complaint":
"आवारा पशु शिकायत",

"Park Maintenance Complaint":
"पार्क रखरखाव शिकायत",

"Road Repair Complaint":
"सड़क मरम्मत शिकायत",

"Drain Cleaning Complaint":
"नाली सफाई शिकायत",

"Illegal Construction Complaint":
"अवैध निर्माण शिकायत",

"Shop Registration Application":
"दुकान पंजीकरण आवेदन",

"Hawker/Vendor License Application":
"फेरीवाला/विक्रेता लाइसेंस आवेदन",

"Advertisement Permission Application":
"विज्ञापन अनुमति आवेदन",

"Community Hall Booking":
"सामुदायिक भवन बुकिंग",

"Water Tanker Booking":
"जल टैंकर बुकिंग",

"RTI Application":
"आरटीआई आवेदन",

"Grievance/Complaint Application":
"शिकायत आवेदन",

"Name Correction in Birth Certificate":
"जन्म प्रमाण पत्र में नाम संशोधन",

"Address Correction in Municipal Records":
"नगर निगम अभिलेखों में पता संशोधन",

"Application format for obtaining birth certificate":
"जन्म प्रमाण पत्र प्राप्त करने हेतु आवेदन प्रारूप",

"Application format for income certificate":
"आय प्रमाण पत्र हेतु आवेदन प्रारूप",

"Application format for domicile certificate":
"निवास प्रमाण पत्र हेतु आवेदन प्रारूप",

"Right to Information application format":
"सूचना का अधिकार आवेदन प्रारूप",

"Learn how to apply for an EWS Certificate.":
"ईडब्ल्यूएस प्रमाण पत्र के लिए आवेदन करना सीखें।",

"Step-by-step guide for EDMC-related services.":
"ईडीएमसी सेवाओं के लिए चरण-दर-चरण मार्गदर्शिका।",

"Information and application guide for UGC services.":
"यूजीसी सेवाओं की जानकारी एवं आवेदन मार्गदर्शिका।",

"Application format for obtaining a death certificate.":
"मृत्यु प्रमाण पत्र प्राप्त करने हेतु आवेदन प्रारूप",

"Application format for marriage registration.":
"विवाह पंजीकरण हेतु आवेदन प्रारूप",

"Application format for property tax mutation.":
"संपत्ति कर नामांतरण हेतु आवेदन प्रारूप",

"Application format for a new water connection.":
"नए जल कनेक्शन हेतु आवेदन प्रारूप",

"Application format for a sewer connection.":
"सीवर कनेक्शन हेतु आवेदन प्रारूप",

"Application format for a trade license.":
"व्यापार लाइसेंस हेतु आवेदन प्रारूप",

"Application format for a health trade license.":
"स्वास्थ्य व्यापार लाइसेंस हेतु आवेदन प्रारूप",

"Application format for building plan approval.":
"भवन योजना स्वीकृति हेतु आवेदन प्रारूप",

"Application format for property transfer/mutation.":
"संपत्ति हस्तांतरण/नामांतरण हेतु आवेदन प्रारूप",

"Application format for house tax correction.":
"गृह कर संशोधन हेतु आवेदन प्रारूप",

"Application format for property tax rebate.":
"संपत्ति कर छूट हेतु आवेदन प्रारूप",

"Board":"बोर्ड",

"Formats and Guide":"प्रारूप एवं मार्गदर्शिका",

"Visit our AI↑↑":"हमारे एआई पर जाएँ↑↑",

"Recruitment for Group B & C posts in central government":"केंद्र सरकार में ग्रुप B और C पदों के लिए भर्ती",

"Staff Selection Commission (SSC)":"कर्मचारी चयन आयोग (SSC)",

"Official portal for all education related policies and schemes":"शिक्षा से संबंधित सभी नीतियों और योजनाओं के लिए आधिकारिक पोर्टल",

"Platform for citizen engagement, tasks, and government schemes":"नागरिकों की भागीदारी, कार्यों और सरकारी योजनाओं के लिए प्लेटफ़ॉर्म",

"Find and apply for government welfare schemes easily":"सरकारी कल्याणकारी योजनाओं को आसानी से खोजें और उनके लिए आवेदन करें",

"One app for 1000+ central and state government services":"1000 से ज़्यादा केंद्र और राज्य सरकार की सेवाओं के लिए एक ऐप",

"Secure digital document wallet for certificates and IDs":"सर्टिफ़िकेट और ID के लिए सुरक्षित डिजिटल डॉक्यूमेंट वॉलेट",

"Union Public Service Commission (UPSC)":"संघ लोक सेवा आयोग (UPSC)",

"Civil Services Examination and other central government recruitments":"सिविल सेवा परीक्षा और केंद्र सरकार की अन्य भर्तियां",

"Goods and Services Tax registration and compliance":"वस्तु एवं सेवा कर (GST) पंजीकरण और अनुपालन",

"Apply for new, renewal or re-issue of Indian Passport":"भारतीय पासपोर्ट के लिए नया आवेदन करें, उसे रिन्यू करवाएं या दोबारा जारी करवाएं।",

"PF account, claims, pension and online services":"PF अकाउंट, क्लेम, पेंशन और ऑनलाइन सेवाएँ",

"Application format to report encroachment.":"अतिक्रमण की रिपोर्ट करने के लिए आवेदन का प्रारूप।",

"Application format for sanitation complaints.":"सफ़ाई से जुड़ी शिकायतों के लिए आवेदन का प्रारूप।",

"Application format for street light complaints.":"स्ट्रीट लाइट की शिकायतों के लिए आवेदन का प्रारूप।",

"Application format for garbage collection issues.":"कचरा उठाने से जुड़ी समस्याओं के लिए आवेदन का प्रारूप।",

"Application format for stray animal complaints.":"आवारा जानवरों की शिकायतों के लिए आवेदन का प्रारूप।",

"Application format for park maintenance requests.":"पार्क के रखरखाव के अनुरोधों के लिए आवेदन का प्रारूप।",

"Application format for road repair complaints.":"सड़क मरम्मत की शिकायतों के लिए आवेदन का प्रारूप।",

"Application format for drain cleaning requests.":"सड़क मरम्मत की शिकायतों के लिए आवेदन का प्रारूप।",

"Application format to report illegal construction.":"अवैध निर्माण की रिपोर्ट करने के लिए आवेदन का प्रारूप।",

"Application format for shop registration.":"दुकान पंजीकरण के लिए आवेदन का प्रारूप।",

"Application format for advertisement permission.":"विज्ञापन की अनुमति के लिए आवेदन का प्रारूप।",

"Application format for hawker/vendor license.":"हॉकर/विक्रेता लाइसेंस के लिए आवेदन का प्रारूप।",

"Application format for community hall booking.":"कम्युनिटी हॉल बुकिंग के लिए आवेदन का प्रारूप।",

"Application format for water tanker booking.":"पानी के टैंकर की बुकिंग के लिए आवेदन का प्रारूप।",

"Application format under the Right to Information Act.":"सूचना का अधिकार अधिनियम के तहत आवेदन का प्रारूप।",

"General grievance and complaint application format.":"सामान्य शिकायत और आपत्ति आवेदन का प्रारूप।",

"Application format for name correction in birth certificate.":"जन्म प्रमाण-पत्र में नाम सुधार के लिए आवेदन का प्रारूप।",

"Application format for address correction in municipal records.":"नगरपालिका रिकॉर्ड में पता ठीक कराने के लिए आवेदन का प्रारूप।",
    "Disclaimer":"अस्वीकरण",
"Privacy-Policy":"गोपनीयता नीति",
"Terms and Conditions":"नियम एवं शर्तें",
"Contact":"संपर्क करें",
"Thank You ❤️":"धन्यवाद ❤️",
"Thank you for visiting ❤️Sarkaari Setu. Our mission is to make government information more accessible, transparent, and easy to understand for everyone. We sincerely appreciate your trust in our platform.":"❤️सरकारी सेतु पर आने के लिए आपका धन्यवाद। हमारा उद्देश्य सरकारी जानकारी को सभी के लिए अधिक सुलभ, पारदर्शी और समझने में आसान बनाना है। हमारे प्लेटफ़ॉर्म पर आपके विश्वास के लिए हम हृदय से आभारी हैं।",
"If you find Sarkaari Setu helpful, please consider supporting our mission by sharing the website with your friends, family, classmates, and anyone who may benefit from it. Your support helps us reach more people and continue improving our platform.":"यदि आपको सरकारी सेतु उपयोगी लगे, तो कृपया हमारी वेबसाइट को अपने मित्रों, परिवार, सहपाठियों और उन सभी लोगों के साथ साझा करें जिन्हें इससे लाभ मिल सकता है। आपका सहयोग हमें अधिक लोगों तक पहुँचने और अपने प्लेटफ़ॉर्म को लगातार बेहतर बनाने में मदद करता है।",
"We also encourage all users to verify important information through the respective official government websites before making any decisions.":"हम सभी उपयोगकर्ताओं को सलाह देते हैं कि किसी भी महत्वपूर्ण निर्णय से पहले संबंधित आधिकारिक सरकारी वेबसाइटों पर जाकर जानकारी की पुष्टि अवश्य करें।",

    "mAadhaar":"एमआधार",
"Citizen Service":"नागरिक सेवा",
"Download and manage your Aadhaar digitally through the official app.":"आधिकारिक ऐप के माध्यम से अपने आधार को डिजिटल रूप से डाउनलोड करें और प्रबंधित करें।",

"Voter ID Services":"मतदाता पहचान पत्र सेवाएँ",
"Election":"चुनाव",
"Apply for a new Voter ID, update details and download your voter card.":"नया मतदाता पहचान पत्र बनवाएँ, विवरण अपडेट करें और अपना मतदाता कार्ड डाउनलोड करें।",

"eShram Portal":"ई-श्रम पोर्टल",
"Employment":"रोजगार",
"Register as an unorganized worker and receive government benefits.":"असंगठित श्रमिक के रूप में पंजीकरण करें और सरकारी लाभ प्राप्त करें।",

"Udyam Registration":"उद्यम पंजीकरण",
"Business":"व्यवसाय",
"Register your Micro, Small and Medium Enterprise (MSME).":"अपने सूक्ष्म, लघु एवं मध्यम उद्यम (MSME) का पंजीकरण करें।",

"Startup India":"स्टार्टअप इंडिया",
"Register your startup and access government support programs.":"अपने स्टार्टअप का पंजीकरण करें और सरकारी सहायता योजनाओं का लाभ उठाएँ।",

"GeM Portal":"जेम पोर्टल",
"Government e-Marketplace for procurement of goods and services.":"सरकारी वस्तुओं एवं सेवाओं की खरीद के लिए ई-मार्केटप्लेस।",

"PM Mudra Yojana":"प्रधानमंत्री मुद्रा योजना",
"Finance":"वित्त",
"Apply for business loans under the Pradhan Mantri Mudra Yojana.":"प्रधानमंत्री मुद्रा योजना के अंतर्गत व्यवसाय ऋण के लिए आवेदन करें।",

"Atal Pension Yojana":"अटल पेंशन योजना",
"Pension":"पेंशन",
"Join the government-backed pension scheme for retirement security.":"सेवानिवृत्ति सुरक्षा हेतु सरकार समर्थित पेंशन योजना से जुड़ें।",

"National Pension System (NPS)":"राष्ट्रीय पेंशन प्रणाली (एनपीएस)",
"Open and manage your National Pension System account.":"अपना राष्ट्रीय पेंशन प्रणाली (एनपीएस) खाता खोलें और प्रबंधित करें।",

"Jeevan Pramaan":"जीवन प्रमाण",
"Generate a Digital Life Certificate for pensioners.":"पेंशनभोगियों के लिए डिजिटल जीवन प्रमाण पत्र बनवाएँ।",

"eCourts Services":"ई-कोर्ट्स सेवाएँ",
"Judiciary":"न्यायपालिका",
"Check case status, orders, cause lists and court information.":"मामले की स्थिति, आदेश, कॉज़ लिस्ट और न्यायालय संबंधी जानकारी देखें।",

"Cyber Crime Portal":"साइबर अपराध पोर्टल",
"Safety":"सुरक्षा",
"Report cyber crimes and online fraud incidents.":"साइबर अपराध और ऑनलाइन धोखाधड़ी की शिकायत दर्ज करें।",

"PM Fasal Bima Yojana":"प्रधानमंत्री फसल बीमा योजना",
"Agriculture":"कृषि",
"Crop insurance scheme for Indian farmers.":"भारतीय किसानों के लिए फसल बीमा योजना।",

"eNAM":"ई-नाम",
"National Agriculture Market for online trading of farm produce.":"कृषि उपज के ऑनलाइन व्यापार हेतु राष्ट्रीय कृषि बाज़ार।",

"Jan Aushadhi":"जन औषधि",
"Healthcare":"स्वास्थ्य सेवा",
"Find affordable generic medicines through Jan Aushadhi Kendras.":"जन औषधि केंद्रों के माध्यम से किफायती जेनेरिक दवाइयाँ प्राप्त करें।",

"ABHA Health ID":"आभा हेल्थ आईडी",
"Create your Ayushman Bharat Health Account (ABHA).":"अपना आयुष्मान भारत स्वास्थ्य खाता (ABHA) बनाएँ।",

"eSanjeevani":"ई-संजीवनी",
"Consult doctors online through the Government telemedicine service.":"सरकारी टेलीमेडिसिन सेवा के माध्यम से ऑनलाइन डॉक्टरों से परामर्श लें।",

"CoWIN":"कोविन",
"Access vaccination certificates and related health services.":"टीकाकरण प्रमाणपत्र और संबंधित स्वास्थ्य सेवाओं का उपयोग करें।",

"IRCTC":"आईआरसीटीसी",
"Travel":"यात्रा",
"Book railway tickets and manage train reservations online.":"रेलवे टिकट बुक करें और ऑनलाइन आरक्षण प्रबंधित करें।",

"FASTag":"फास्टैग",
"Transport":"परिवहन",
"Recharge and manage your FASTag account for toll payments.":"टोल भुगतान के लिए अपने फास्टैग खाते को रिचार्ज करें और प्रबंधित करें।",

"Visit Website":"वेबसाइट पर जाएँ"


};

function translateToHindi() {

    document.querySelectorAll("h1,h2,h3,p,button,span").forEach(el => {

        const text = el.textContent.trim();

        if (translations[text]) {
            el.textContent = translations[text];
        }
document.querySelector(".notification-text").textContent="RE-NEET का रिज़ल्ट घोषित होने वाला है! इसके बाद उम्मीदवार आधिकारिक वेबसाइट पर अपना RE-NEET रिज़ल्ट देख सकते हैं।";
document.querySelector(".check-btn").textContent="आधिकारिक वेबसाइट देखें।";
    });
document.getElementById("splusaime").style.display="block";
}
hindiBtn.addEventListener("click",translateToHindi);
englishBtn.addEventListener("click",()=>{
    document.querySelector("#splusaime").style.display="block";
})


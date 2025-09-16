const API_URL = "https://script.google.com/macros/s/AKfycbxWqqHQ81PY5zT7Cy2UxW1vGSQsYIRQGYdL9fLJbgU4nNCVUW0DMoGnZVKtb2je9Tqs_w/exec";

// Language translations
const translations = {
    en: {
        dashboard: "Dashboard",
        routeDetails: "Route Details",
        navigation: "Navigation",
        ticketing: "Ticketing",
        settings: "Settings",
        logout: "Logout",
        busInfo: "Bus Information",
        busId: "Bus ID",
        model: "Model",
        capacity: "Capacity",
        passengers: "passengers",
        passengerCount: "Passenger Count",
        current: "Current",
        maxCapacity: "Max Capacity",
        occupancy: "Occupancy",
        shiftTracking: "Shift Tracking",
        startTime: "Start Time",
        elapsed: "Elapsed",
        endTime: "End Time",
        liveBusLocation: "Live Bus Location",
        upcomingStops: "Upcoming Stops",
        current: "Current",
        next: "Next",
        upcoming: "Upcoming",
        generateTicket: "Generate Ticket",
        passengerName: "Passenger Name",
        enterPassengerName: "Enter passenger name",
        from: "From",
        selectBoarding: "Select boarding point",
        to: "To",
        selectDestination: "Select destination",
        paymentMethod: "Payment Method",
        cash: "Cash",
        card: "Card",
        busTravelTicket: "Bus Travel Ticket",
        ticketId: "Ticket ID",
        date: "Date",
        passenger: "Passenger",
        busNo: "Bus No",
        fare: "Fare",
        payment: "Payment",
        busSettings: "Bus Settings",
        busNumber: "Bus Number",
        enterBusNumber: "Enter bus number",
        selectRoute: "Select Route",
        startTrip: "Start Trip",
        endTrip: "End Trip",
        tripNotStarted: "Trip not started",
        gpsInactive: "GPS: Inactive",
        emergencyAlert: "EMERGENCY ALERT",
        sosMessage1: "You are about to send an emergency alert to authorities. This should only be used in case of accidents, breakdowns, or medical emergencies.",
        sosMessage2: "Are you sure you want to proceed?",
        cancel: "Cancel",
        confirmSOS: "Confirm SOS",
        notifications: "Notifications",
        notification1: "Accident reported on MG Road. Expect delays.",
        notification2: "Weather alert: High temperatures expected today.",
        notification3: "Your shift has started. Have a safe drive!",
        close: "Close",
        driverLogin: "Bus Driver Login",
        username: "Username",
        password: "Password",
        busNumberRequired: "Bus number is required",
        tripAlreadyActive: "Trip is already active",
        tripStarted: "Trip started successfully",
        startTripFailed: "Failed to start trip",
        startTripError: "Error starting trip. Please try again.",
        tripEnded: "Trip ended successfully",
        endTripError: "Error ending trip. Please try again."
    },
    hi: {
        dashboard: "डैशबोर्ड",
        routeDetails: "मार्ग विवरण",
        navigation: "नेविगेशन",
        ticketing: "टिकटिंग",
        settings: "सेटिंग्स",
        logout: "लॉगआउट",
        busInfo: "बस जानकारी",
        busId: "बस आईडी",
        model: "मॉडल",
        capacity: "क्षमता",
        passengers: "यात्री",
        passengerCount: "यात्री गणना",
        current: "वर्तमान",
        maxCapacity: "अधिकतम क्षमता",
        occupancy: "अधिभोग",
        shiftTracking: "शिफ्ट ट्रैकिंग",
        startTime: "प्रारंभ समय",
        elapsed: "बीता हुआ",
        endTime: "समाप्ति समय",
        liveBusLocation: "लाइव बस स्थान",
        upcomingStops: "आगामी स्टॉप",
        current: "वर्तमान",
        next: "अगला",
        upcoming: "आगामी",
        generateTicket: "टिकट जनरेट करें",
        passengerName: "यात्री का नाम",
        enterPassengerName: "यात्री का नाम दर्ज करें",
        from: "से",
        selectBoarding: "बोर्डिंग प्वाइंट चुनें",
        to: "तक",
        selectDestination: "गंतव्य चुनें",
        paymentMethod: "भुगतान विधि",
        cash: "नकद",
        card: "कार्ड",
        busTravelTicket: "बस यात्रा टिकट",
        ticketId: "टिकट आईडी",
        date: "तारीख",
        passenger: "यात्री",
        busNo: "बस नंबर",
        fare: "किराया",
        payment: "भुगतान",
        busSettings: "बस सेटिंग्स",
        busNumber: "बस नंबर",
        enterBusNumber: "बस नंबर दर्ज करें",
        selectRoute: "मार्ग चुनें",
        startTrip: "यात्रा शुरू करें",
        endTrip: "यात्रा समाप्त करें",
        tripNotStarted: "यात्रा शुरू नहीं हुई",
        gpsInactive: "जीपीएस: निष्क्रिय",
        emergencyAlert: "आपातकालीन चेतावनी",
        sosMessage1: "आप अधिकारियों को एक आपातकालीन चेतावनी भेजने वाले हैं। इसका उपयोग केवल दुर्घटनाओं, ब्रेकडाउन या चिकित्सा आपात स्थितियों के मामले में किया जाना चाहिए।",
        sosMessage2: "क्या आप वाकई आगे बढ़ना चाहते हैं?",
        cancel: "रद्द करें",
        confirmSOS: "एसओएस की पुष्टि करें",
        notifications: "सूचनाएं",
        notification1: "एमजी रोड पर दुर्घटना की सूचना मिली है। देरी की उम्मीद करें।",
        notification2: "मौसम चेतावनी: आज उच्च तापमान की उम्मीद है।",
        notification3: "आपकी शिफ्ट शुरू हो गई है। सुरक्षित ड्राइव करें!",
        close: "बंद करें",
        driverLogin: "बस ड्राइवर लॉगिन",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        busNumberRequired: "बस नंबर आवश्यक है",
        tripAlreadyActive: "यात्रा पहले से ही सक्रिय है",
        tripStarted: "यात्रा सफलतापूर्वक शुरू हुई",
        startTripFailed: "यात्रा शुरू करने में विफल",
        startTripError: "यात्रा शुरू करने में त्रुटि। कृपया पुनः प्रयास करें।",
        tripEnded: "यात्रा सफलतापूर्वक समाप्त हुई",
        endTripError: "यात्रा समाप्त करने में त्रुटि। कृपया पुनः प्रयास करें।"
    },
    pa: {
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        routeDetails: "ਰੂਟ ਵੇਰਵੇ",
        navigation: "ਨੇਵੀਗੇਸ਼ਨ",
        ticketing: "ਟਿਕਟਿੰਗ",
        settings: "ਸੈਟਿੰਗਜ਼",
        logout: "ਲਾਗਆਉਟ",
        busInfo: "ਬਸ ਜਾਣਕਾਰੀ",
        busId: "ਬਸ ਆਈਡੀ",
        model: "ਮਾਡਲ",
        capacity: "ਸਮਰੱਥਾ",
        passengers: "ਯਾਤਰੀ",
        passengerCount: "ਯਾਤਰੀ ਗਿਣਤੀ",
        current: "ਮੌਜੂਦਾ",
        maxCapacity: "ਅਧਿਕਤਮ ਸਮਰੱਥਾ",
        occupancy: "ਕਬਜ਼ਾ",
        shiftTracking: "ਸ਼ਿਫਟ ਟ੍ਰੈਕਿੰਗ",
        startTime: "ਸ਼ੁਰੂਆਤੀ ਸਮਾਂ",
        elapsed: "ਬੀਤ ਚੁੱਕਾ",
        endTime: "ਸਮਾਪਤੀ ਸਮਾਂ",
        liveBusLocation: "ਲਾਈਵ ਬਸ ਟਿਕਾਣਾ",
        upcomingStops: "ਆਉਣ ਵਾਲੇ ਸਟਾਪ",
        current: "ਮੌਜੂਦਾ",
        next: "ਅਗਲਾ",
        upcoming: "ਆਉਣ ਵਾਲਾ",
        generateTicket: "ਟਿਕਟ ਜਨਰੇਟ ਕਰੋ",
        passengerName: "ਯਾਤਰੀ ਦਾ ਨਾਮ",
        enterPassengerName: "ਯਾਤਰੀ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ",
        from: "ਤੋਂ",
        selectBoarding: "ਬੋਰਡਿੰਗ ਪੁਆਇੰਟ ਚੁਣੋ",
        to: "ਨੂੰ",
        selectDestination: "ਮੰਜ਼ਿਲ ਚੁਣੋ",
        paymentMethod: "ਭੁਗਤਾਨ ਵਿਧੀ",
        cash: "ਨਕਦ",
        card: "ਕਾਰਡ",
        busTravelTicket: "ਬਸ ਯਾਤਰਾ ਟਿਕਟ",
        ticketId: "ਟਿਕਟ ਆਈਡੀ",
        date: "ਤਾਰੀਖ਼",
        passenger: "ਯਾਤਰੀ",
        busNo: "ਬਸ ਨੰਬਰ",
        fare: "ਕਿਰਾਇਆ",
        payment: "ਭੁਗਤਾਨ",
        busSettings: "ਬਸ ਸੈਟਿੰਗਜ਼",
        busNumber: "ਬਸ ਨੰਬਰ",
        enterBusNumber: "ਬਸ ਨੰਬਰ ਦਰਜ ਕਰੋ",
        selectRoute: "ਰੂਟ ਚੁਣੋ",
        startTrip: "ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ",
        endTrip: "ਯਾਤਰਾ ਖਤਮ ਕਰੋ",
        tripNotStarted: "ਯਾਤਰਾ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਈ",
        gpsInactive: "ਜੀਪੀਐਸ: ਨਿਸ਼ਕਰਿਆ",
        emergencyAlert: "ਐਮਰਜੈਂਸੀ ਚੇਤਾਵਨੀ",
        sosMessage1: "ਤੁਸੀਂ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਇੱਕ ਐਮਰਜੈਂਸੀ ਚੇਤਾਵਨੀ ਭੇਜਣ ਵਾਲੇ ਹੋ। ਇਸ ਦੀ ਵਰਤੋਂ ਸਿਰਫ਼ ਦੁਰਘਟਨਾਵਾਂ, ਬਰੇਕਡਾਊਨ ਜਾਂ ਮੈਡੀਕਲ ਐਮਰਜੈਂਸੀਆਂ ਦੇ ਮਾਮਲੇ ਵਿੱਚ ਕੀਤੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ।",
        sosMessage2: "ਕੀ ਤੁਸੀਂ ਯਕੀਨਨ ਆਗੇ ਵਧਣਾ ਚਾਹੁੰਦੇ ਹੋ?",
        cancel: "ਰੱਦ ਕਰੋ",
        confirmSOS: "SOS ਪੁਸ਼ਟੀ ਕਰੋ",
        notifications: "ਸੂਚਨਾਵਾਂ",
        notification1: "ਐਮਜੀ ਰੋਡ 'ਤੇ ਦੁਰਘਟਨਾ ਦੀ ਰਿਪੋਰਟ। ਦੇਰੀ ਦੀ ਉਮੀਦ ਕਰੋ।",
        notification2: "ਮੌਸਮ ਚੇਤਾਵਨੀ: ਅੱਜ ਉੱਚ ਤਾਪਮਾਨ ਦੀ ਉਮੀਦ ਹੈ।",
        notification3: "ਤੁਹਾਡੀ ਸ਼ਿਫਟ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ। ਸੁਰੱਖਿਅਤ ਡ੍ਰਾਈਵਿੰਗ ਕਰੋ!",
        close: "ਬੰਦ ਕਰੋ",
        driverLogin: "ਬਸ ਡਰਾਈਵਰ ਲੌਗਇਨ",
        username: "ਯੂਜ਼ਰਨੇਮ",
        password: "ਪਾਸਵਰਡ",
        busNumberRequired: "ਬਸ ਨੰਬਰ ਦੀ ਲੋੜ ਹੈ",
        tripAlreadyActive: "ਯਾਤਰਾ ਪਹਿਲਾਂ ਹੀ ਸਰਗਰਮ ਹੈ",
        tripStarted: "ਯਾਤਰਾ ਸਫਲਤਾਪੂਰਵਕ ਸ਼ੁਰੂ ਹੋਈ",
        startTripFailed: "यात्रा शुरू करने में विफल",
        startTripError: "ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        tripEnded: "ਯਾਤਰਾ ਸਫਲਤਾਪੂਰਵਕ ਖਤਮ ਹੋਈ",
        endTripError: "ਯਾਤਰਾ ਖਤਮ ਕਰਨ ਵਿੱਚ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"
    }
};
// Initialize map
 // Initialize map
const map = L.map('map').setView([31.6340, 74.8723], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define routes with stops
const routes = {
    route1: {
        name: "Amritsar to Ludhiana",
        stops: [
            {name: 'Golden Temple, Amritsar', lat: 31.6200, lng: 74.8765},
            {name: 'Jalandhar Bus Stand', lat: 31.3260, lng: 75.5762},
            {name: 'Phagwara', lat: 31.2240, lng: 75.7708},
            {name: 'Ludhiana Bus Terminal', lat: 30.9010, lng: 75.8573}
        ]
    },
    route2: {
        name: "Chandigarh to Patiala",
        stops: [
            {name: 'Chandigarh Bus Stand', lat: 30.7333, lng: 76.7794},
            {name: 'Mohali', lat: 30.7046, lng: 76.7179},
            {name: 'Kharar', lat: 30.7463, lng: 76.6468},
            {name: 'Patiala Bus Stand', lat: 30.3398, lng: 76.3869}
        ]
    },
    route3: {
        name: "Jalandhar to Amritsar",
        stops: [
            {name: 'Jalandhar Bus Stand', lat: 31.3260, lng: 75.5762},
            {name: 'Beas', lat: 31.5176, lng: 75.2942},
            {name: 'Amritsar Railway Station', lat: 31.6336, lng: 74.8656},
            {name: 'Golden Temple, Amritsar', lat: 31.6200, lng: 74.8765}
        ]
    }
};

let currentRoute = routes.route1;
let routingControl = null;


// DOM Elements
const loginPage = document.getElementById('loginPage');
const mainApp = document.getElementById('mainApp');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMsg = document.getElementById('loginMsg');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sosButton = document.getElementById('sosButton');
const sosModal = document.getElementById('sosModal');
const cancelSOS = document.getElementById('cancelSOS');
const confirmSOS = document.getElementById('confirmSOS');
const passengerCountElement = document.getElementById('passengerCount');
const occupancyPercentageElement = document.getElementById('occupancyPercentage');
const alertBanner = document.getElementById('alertBanner');
const alertText = document.getElementById('alertText');
const notificationsButton = document.getElementById('notificationsButton');
const notificationsModal = document.getElementById('notificationsModal');
const closeNotifications = document.getElementById('closeNotifications');
const logoutButton = document.getElementById('logoutButton');
const navItems = document.querySelectorAll('.nav-item');
const mainContent = document.getElementById('mainContent');
const stopList = document.getElementById('stopList');
const startTripBtn = document.getElementById('startTrip');
const endTripBtn = document.getElementById('endTrip');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const generateTicketBtn = document.getElementById('generateTicket');
const ticketElement = document.getElementById('ticket');
const paymentOptions = document.querySelectorAll('.payment-option');
const gpsStatus = document.getElementById('gpsStatus');
const profileName = document.getElementById('profileName');
const busId = document.getElementById('busId');
const busNumberInput = document.getElementById('busNumber');
const ticketBus = document.getElementById('ticketBus');
const routeSelect = document.getElementById('routeSelect');
const routeName = document.getElementById('routeName');
const profileRoute = document.getElementById('profileRoute');
const headerTitle = document.getElementById('headerTitle');
const loginSpinner = document.getElementById('loginSpinner');
const startTripSpinner = document.getElementById('startTripSpinner');
const endTripSpinner = document.getElementById('endTripSpinner');

// Initialize driver data
let driverName = localStorage.getItem('driverName') || 'Unknown Driver';
let busNumber = localStorage.getItem('busNumber') || '';
let watchId = null;
let locationInterval = null;
let isTripActive = false;
let selectedPaymentMethod = '';

document.addEventListener('DOMContentLoaded', function() {
    // Apply translations immediately, even on login page
    updateTranslations(currentLang);
    currentLanguage.textContent = translations[currentLang].languageName || 'English';
    
    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginPage.style.display = 'none';
        mainApp.style.display = 'block';
        setupEventListeners();
        setupRealTimeUpdates();
        loadPage('dashboard');
        gpsStatus.querySelector('.text').textContent = translations[currentLang].gpsInactive;
        gpsStatus.classList.remove('gps-active');
        initializeRoute(currentRoute);
        profileName.textContent = driverName;
        busId.textContent = busNumber || 'Not set';
        busNumberInput.value = busNumber;
        ticketBus.textContent = busNumber || 'Not set';
    } else {
        loginPage.style.display = 'flex';
        mainApp.style.display = 'none';
        // Initialize language dropdown listeners for login page
        setupLanguageEventListeners();
    }
});

// Setup language-specific event listeners (new)
function setupLanguageEventListeners() {
    languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Language button clicked'); // Debug
        languageOptions.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!languageButton.contains(e.target) && !languageOptions.contains(e.target)) {
            console.log('Clicked outside language dropdown'); // Debug
            languageOptions.classList.remove('show');
        }
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', async () => {
            const lang = option.getAttribute('data-lang');
            const languageName = option.textContent;
            console.log(`Language option clicked: ${lang} (${languageName})`); // Debug
            await changeLanguage(lang, languageName);
            languageOptions.classList.remove('show');
        });
    });
}

// Setup all event listeners
function setupEventListeners() {
    setupLanguageEventListeners(); // Include language listeners
    sidebarToggle.addEventListener('click', () => {
        console.log('Sidebar toggle clicked'); // Debug
        sidebar.classList.toggle('open');
    });

    sosButton.addEventListener('click', () => {
        console.log('SOS button clicked'); // Debug
        sosModal.style.display = 'flex';
    });

    cancelSOS.addEventListener('click', () => {
        console.log('Cancel SOS clicked'); // Debug
        sosModal.style.display = 'none';
    });

    confirmSOS.addEventListener('click', async () => {
        console.log('Confirm SOS clicked'); // Debug
        await sendSOSAlert();
        sosModal.style.display = 'none';
    });

    notificationsButton.addEventListener('click', () => {
        console.log('Notifications button clicked'); // Debug
        notificationsModal.style.display = 'flex';
    });

    closeNotifications.addEventListener('click', () => {
        console.log('Close notifications clicked'); // Debug
        notificationsModal.style.display = 'none';
    });

    logoutButton.addEventListener('click', () => {
        console.log('Logout clicked'); // Debug
        localStorage.removeItem('driverName');
        localStorage.removeItem('busNumber');
        localStorage.removeItem('preferredLanguage');
        localStorage.removeItem('isLoggedIn');
        loginPage.style.display = 'flex';
        mainApp.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        loginMsg.textContent = '';
        stopGpsTracking();
        updateTranslations('en'); // Reset to English on logout
        currentLanguage.textContent = 'English';
    });

    navItems.forEach(item => {
        if (item.id !== 'logoutButton') {
            item.addEventListener('click', () => {
                const page = item.getAttribute('data-page');
                console.log(`Nav item clicked: ${page}`); // Debug
                loadPage(page);
                navItems.forEach(navItem => navItem.classList.remove('active'));
                item.classList.add('active');
            });
        }
    });

    // ... (Keep existing listeners for startTripBtn, endTripBtn, paymentOptions, generateTicketBtn, routeSelect, busNumberInput)
}

// Change language
async function changeLanguage(lang, languageName) {
    if (lang === currentLang) {
        console.log(`Language unchanged: ${lang}`); // Debug
        return;
    }
    try {
        console.log(`Changing language to: ${lang} (${languageName})`); // Debug
        currentLanguage.textContent = languageName;
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        updateTranslations(lang);
        showNotification(`Language changed to ${languageName}`, 'success');
    } catch (error) {
        console.error('Error changing language:', error);
        showNotification(translations[currentLang].languageChangeFailed || 'Failed to change language. Please try again.', 'error');
    }
}

// Update translations
function updateTranslations(lang) {
    console.log(`Updating translations for language: ${lang}`); // Debug
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        } else {
            console.warn(`Placeholder translation missing for key: ${key} in language: ${lang}`);
        }
    });

    headerTitle.textContent = translations[lang].headerTitle || "State Transport Department, Government of Punjab, India";
}

// Add language names to translations
translations.en.languageName = "English";
translations.hi.languageName = "Hindi";
translations.pa.languageName = "Punjabi";
translations.en.headerTitle = "State Transport Department, Government of Punjab, India";
translations.hi.headerTitle = "पंजाब सरकार, राज्य परिवहन विभाग, भारत";
translations.pa.headerTitle = "ਪੰਜਾਬ ਸਰਕਾਰ, ਰਾਜ ਟਰਾਂਸਪੋਰਟ ਵਿਭਾਗ, ਭਾਰਤ";
translations.en.languageChangeFailed = "Failed to change language. Please try again.";
translations.hi.languageChangeFailed = "भाषा बदलने में विफल। कृपया पुनः प्रयास करें।";
translations.pa.languageChangeFailed = "ਭਾਸ਼ਾ ਬਦਲਣ ਵਿੱਚ ਅਸਫਲ। ਕਿਰਪਾ ਕਰਕੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।";

// Create a custom bus icon
const busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
});

// Initialize bus marker
const busMarker = L.marker([currentRoute.stops[0].lat, currentRoute.stops[0].lng], {
    icon: busIcon
}).addTo(map).bindPopup('Bus ' + (busNumber || 'Not set'));

// Function to resize map
function resizeMap() {
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

// Initialize route
function initializeRoute(route) {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker && layer !== busMarker) {
            map.removeLayer(layer);
        }
    });
    
    if (routingControl) {
        map.removeControl(routingControl);
    }
    
    route.stops.forEach(stop => {
        L.marker([stop.lat, stop.lng])
            .addTo(map)
            .bindPopup(stop.name);
    });
    
    routingControl = L.Routing.control({
        waypoints: route.stops.map(stop => L.latLng(stop.lat, stop.lng)),
        lineOptions: {
            styles: [{color: '#FF7F00', weight: 4, opacity: 0.7}]
        },
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1'
        }),
        createMarker: () => null,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        show: false
    }).addTo(map);
    
    updateStopsList(route);
    busMarker.setLatLng([route.stops[0].lat, route.stops[0].lng]);
    map.setView([route.stops[0].lat, route.stops[0].lng], 13);
    resizeMap(); // Ensure map is properly sized
}

// Update stops list
function updateStopsList(route) {
    stopList.innerHTML = '';
    route.stops.forEach((stop, index) => {
        const li = document.createElement('li');
        li.className = 'stop-item';
        
        const timeDiv = document.createElement('div');
        timeDiv.className = 'stop-time';
        const hours = 9 + Math.floor(index * 0.5);
        const minutes = index % 2 === 0 ? '00' : '30';
        timeDiv.textContent = `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'stop-name';
        nameDiv.textContent = stop.name;
        
        const statusDiv = document.createElement('div');
        statusDiv.className = 'stop-status';
        if (index === 0) {
            statusDiv.classList.add('status-current');
            statusDiv.textContent = 'Current';
        } else {
            statusDiv.classList.add('status-upcoming');
            statusDiv.textContent = index === 1 ? 'Next' : 'Upcoming';
        }
        
        li.appendChild(timeDiv);
        li.appendChild(nameDiv);
        li.appendChild(statusDiv);
        stopList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    headerTitle.textContent = "State Transport Department, Government of Punjab, India";
    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginPage.style.display = 'none';
        mainApp.style.display = 'block';
        setupEventListeners();
        setupRealTimeUpdates();
        loadPage('dashboard');
        gpsStatus.querySelector('.text').textContent = 'GPS: Inactive';
        gpsStatus.classList.remove('gps-active');
        initializeRoute(currentRoute);
        profileName.textContent = driverName;
        busId.textContent = busNumber || 'Not set';
        busNumberInput.value = busNumber;
        ticketBus.textContent = busNumber || 'Not set';
        resizeMap(); // Ensure map is visible on load
    } else {
        loginPage.style.display = 'flex';
        mainApp.style.display = 'none';
    }
});

async function login() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        loginMsg.textContent = 'Please enter both username and password';
        return;
    }

    loginSpinner.style.display = 'inline-block';
    
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ action: "login", username, password })
        });
        const data = await response.json();

        if (data.status === "success") {
            driverName = data.name;
            busNumber = data.busNumber;
            localStorage.setItem('driverName', driverName);
            localStorage.setItem('busNumber', busNumber);
            localStorage.setItem('isLoggedIn', 'true');
            loginPage.style.display = 'none';
            mainApp.style.display = 'block';
            profileName.textContent = driverName;
            busId.textContent = busNumber;
            busNumberInput.value = busNumber;
            ticketBus.textContent = busNumber;
            busMarker.bindPopup(`Bus ${busNumber}`);
            setupEventListeners();
            setupRealTimeUpdates();
            loadPage('dashboard');
            initializeRoute(currentRoute);
            resizeMap(); // Ensure map is visible after login
        } else {
            loginMsg.textContent = data.message || 'Invalid credentials';
        }
    } catch (error) {
        loginMsg.textContent = 'Error during login. Please try again.';
        console.error('Login error:', error);
    } finally {
        loginSpinner.style.display = 'none';
    }
}

function startGpsTracking() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
        gpsStatus.querySelector('.text').textContent = 'GPS: Not Supported';
        gpsStatus.classList.remove('gps-active');
        return;
    }

    if (!window.isSecureContext) {
        alert('Geolocation is only available in secure contexts (HTTPS). Please host this page on an HTTPS server.');
        gpsStatus.querySelector('.text').textContent = 'GPS: Insecure Context';
        gpsStatus.classList.remove('gps-active');
        return;
    }

    gpsStatus.classList.add('gps-active');
    gpsStatus.querySelector('.text').textContent = 'GPS: Active';

    watchId = navigator.geolocation.watchPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            busMarker.setLatLng([lat, lng]);
            map.panTo([lat, lng]);
            updateBusInfo(lat, lng);
            updateLocation(lat, lng);
            resizeMap(); // Ensure map updates correctly
        },
        function(error) {
            let message = 'Unknown error getting location.';
            if (error.code === 1) {
                message = 'Permission denied. Please allow location access in your browser settings.';
            } else if (error.code === 2) {
                message = 'Position unavailable. Check your GPS signal.';
            } else if (error.code === 3) {
                message = 'Timeout getting location.';
            }
            alert(message);
            gpsStatus.querySelector('.text').textContent = 'GPS: Error';
            gpsStatus.classList.remove('gps-active');
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );

    if (locationInterval) clearInterval(locationInterval);
    locationInterval = setInterval(() => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                updateLocation(pos.coords.latitude, pos.coords.longitude);
            },
            err => {
                console.error('Interval location error:', err);
            },
            {enableHighAccuracy: true, timeout: 5000}
        );
    }, 15000);
}

function stopGpsTracking() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
    if (locationInterval) {
        clearInterval(locationInterval);
        locationInterval = null;
    }
    gpsStatus.classList.remove('gps-active');
    gpsStatus.querySelector('.text').textContent = 'GPS: Inactive';
}

function setupRealTimeUpdates() {
    setInterval(() => {
        if (isTripActive) {
            const elapsedElement = document.getElementById('elapsedTime');
            const parts = elapsedElement.textContent.split(' ');
            let hours = parseInt(parts[0].replace('h', ''));
            let minutes = parseInt(parts[1].replace('m', ''));

            minutes += 1;
            if (minutes >= 60) {
                hours += 1;
                minutes = 0;
            }

            elapsedElement.textContent = `${hours}h ${minutes}m`;
        }
    }, 60000);
}

function setupEventListeners() {
    setupLanguageEventListeners(); // Include language listeners
    sidebarToggle.addEventListener('click', () => {
        console.log('Sidebar toggle clicked'); // Debug
        sidebar.classList.toggle('open');
    });

    sosButton.addEventListener('click', () => {
        console.log('SOS button clicked'); // Debug
        sosModal.style.display = 'flex';
    });

    cancelSOS.addEventListener('click', () => {
        console.log('Cancel SOS clicked'); // Debug
        sosModal.style.display = 'none';
    });

    confirmSOS.addEventListener('click', async () => {
        console.log('Confirm SOS clicked'); // Debug
        await sendSOSAlert();
        sosModal.style.display = 'none';
    });

    notificationsButton.addEventListener('click', () => {
        console.log('Notifications button clicked'); // Debug
        notificationsModal.style.display = 'flex';
    });

    closeNotifications.addEventListener('click', () => {
        console.log('Close notifications clicked'); // Debug
        notificationsModal.style.display = 'none';
    });

    logoutButton.addEventListener('click', () => {
        console.log('Logout clicked'); // Debug
        localStorage.removeItem('driverName');
        localStorage.removeItem('busNumber');
        localStorage.removeItem('isLoggedIn');
        loginPage.style.display = 'flex';
        mainApp.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        loginMsg.textContent = '';
    });

    navItems.forEach(item => {
        if (item.id !== 'logoutButton') {
            item.addEventListener('click', () => {
                const page = item.getAttribute('data-page');
                console.log(`Nav item clicked: ${page}`); // Debug
                loadPage(page);
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });
                item.classList.add('active');
                resizeMap(); // Ensure map is visible when navigating to route/navigation pages
            });
        }
    });

    startTripBtn.addEventListener('click', async function() {
        const busNumber = busNumberInput.value;
        if (!busNumber) {
            alert('Bus number is not set');
            return;
        }

        startTripSpinner.style.display = 'inline-block';
        startTripBtn.disabled = true;
        
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({ action: "startTrip", busNumber, driverName })
            });
            const data = await response.json();
            alert(data.message);

            localStorage.setItem('busNumber', busNumber);
            isTripActive = true;
            startTripBtn.disabled = true;
            endTripBtn.disabled = false;
            statusIndicator.classList.add('active');
            statusText.textContent = 'Trip in progress - Bus ' + busNumber;
            busId.textContent = busNumber;
            ticketBus.textContent = busNumber;
            busMarker.bindPopup(`Bus ${busNumber}`);
            startGpsTracking();
        } catch (error) {
            console.error('Error starting trip:', error);
            alert('Failed to start trip. Please try again.');
        } finally {
            startTripSpinner.style.display = 'none';
        }
    });

    endTripBtn.addEventListener('click', async function() {
        if (!isTripActive) {
            showNotification('No active trip to end', 'error');
            return;
        }

        endTripSpinner.style.display = 'inline-block';
        endTripBtn.disabled = true;
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ action: 'endTrip', busNumber, driverName })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.status === 'success') {
                showNotification(data.message || 'Trip ended successfully', 'success');
                isTripActive = false;
                startTripBtn.disabled = false;
                endTripBtn.disabled = true;
                statusIndicator.classList.remove('active');
                statusText.textContent = 'Trip not started';
                passengerCountElement.textContent = '0';
                occupancyPercentageElement.textContent = '0%';
                stopGpsTracking();
                localStorage.removeItem('busNumber');
                busId.textContent = 'Not set';
                ticketBus.textContent = 'Not set';
                busMarker.bindPopup('Bus Not set');
            } else {
                console.error('End trip failed:', data.message);
                showNotification(data.message || 'Error ending trip. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error ending trip:', error.message);
            showNotification('Error ending trip. Please try again.', 'error');
        } finally {
            endTripSpinner.style.display = 'none';
            endTripBtn.disabled = false;
        }
    });

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            paymentOptions.forEach(op => op.classList.remove('selected'));
            this.classList.add('selected');
            selectedPaymentMethod = this.getAttribute('data-method');
        });
    });

    generateTicketBtn.addEventListener('click', function() {
        const passengerName = document.getElementById('passengerName').value;
        const fromDestination = document.getElementById('fromDestination').value;
        const toDestination = document.getElementById('toDestination').value;
        const busNumber = busNumberInput.value;

        if (!passengerName || !fromDestination || !toDestination || !selectedPaymentMethod) {
            alert('Please fill all passenger details and select a payment method');
            return;
        }

        document.getElementById('ticketPassenger').textContent = passengerName;
        document.getElementById('ticketFrom').textContent = fromDestination;
        document.getElementById('ticketTo').textContent = toDestination;
        document.getElementById('ticketBus').textContent = busNumber;
        document.getElementById('ticketPayment').textContent = selectedPaymentMethod;
        document.getElementById('ticketId').textContent = 'BT-' + Math.floor(Math.random() * 10000);
        document.getElementById('ticketFare').textContent = (Math.random() * 20 + 15).toFixed(2);
        const now = new Date();
        document.getElementById('ticketDate').textContent = now.toLocaleDateString();
        ticketElement.style.display = 'block';
        
        updatePassengerCount(1);
    });

    routeSelect.addEventListener('change', () => {
        const selectedRoute = routeSelect.value;
        currentRoute = routes[selectedRoute];
        routeName.textContent = currentRoute.name;
        profileRoute.textContent = `Route ${selectedRoute.replace('route', '')} - ${currentRoute.name}`;
        initializeRoute(currentRoute);
        resizeMap(); // Ensure map is visible after route change
    });

    busNumberInput.addEventListener('input', () => {
        busNumber = busNumberInput.value;
        localStorage.setItem('busNumber', busNumber);
        busId.textContent = busNumber || 'Not set';
        ticketBus.textContent = busNumber || 'Not set';
        busMarker.bindPopup(`Bus ${busNumber || 'Not set'}`);
    });
}

function loadPage(page) {
    const pages = {
        dashboard: document.getElementById('dashboardCards'),
        route: document.getElementById('liveLocationCard'),
        navigation: document.getElementById('upcomingStopsCard'),
        ticketing: document.getElementById('ticketingSection'),
        settings: document.getElementById('settingsControls')
    };

    Object.values(pages).forEach(p => p.classList.remove('active'));
    if (pages[page]) {
        pages[page].classList.add('active');
    }

    if (page === 'route' || page === 'navigation') {
        resizeMap(); // Ensure map is visible when navigating to map-related pages
    }
}

function updatePassengerCount(change) {
    let count = parseInt(passengerCountElement.textContent) || 0;
    count = Math.max(0, Math.min(40, count + change));
    passengerCountElement.textContent = count;
    const percentage = Math.round((count / 40) * 100);
    occupancyPercentageElement.textContent = `${percentage}%`;
}

function updateLocation(lat, lng) {
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ action: "updateLocation", busNumber, latitude: lat, longitude: lng })
    }).catch(error => {
        console.error('Error updating location:', error);
    });
}

async function sendSOSAlert() {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({ action: "sendSOS", busNumber, driverName, timestamp: new Date().toISOString() })
        });
        const data = await response.json();

        if (data.status === "success") {
            showNotification('SOS alert sent successfully to authorities.', "success");
        } else {
            showNotification(data.message || 'Failed to send SOS alert. Please try again.', "error");
        }
    } catch (error) {
        console.error('Error sending SOS:', error);
        showNotification('Failed to send SOS alert. Please try again.', "error");
    }
}

function updateBusInfo(lat, lng) {
    const stops = currentRoute.stops.map(stop => ({
        ...stop,
        dist: calculateDistance(lat, lng, stop.lat, stop.lng)
    }));

    let nearestStop = stops[0];
    for (let i = 1; i < stops.length; i++) {
        if (stops[i].dist < nearestStop.dist) {
            nearestStop = stops[i];
        }
    }

    document.querySelectorAll('.stop-item').forEach((item, index) => {
        item.classList.remove('status-current');
        const statusElement = item.querySelector('.stop-status');
        
        if (stops[index].name === nearestStop.name) {
            item.classList.add('status-current');
            statusElement.textContent = 'Current';
        } else if (index > stops.findIndex(stop => stop.name === nearestStop.name)) {
            statusElement.textContent = 'Upcoming';
        } else {
            statusElement.textContent = 'Next';
        }
    });
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

function showNotification(message, type = "info") {
    const notification = document.createElement('div');
    notification.className = 'notification-item';
    const time = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    notification.innerHTML = `<div class="notification-time">${time}</div><div class="notification-text">${message}</div>`;
    const notificationsList = document.getElementById('notificationsList');
    notificationsList.prepend(notification);

    // Auto-remove after 10 seconds
    setTimeout(() => {
        notification.remove();
    }, 10000);
}

// Ensure map is resized when window is resized
window.addEventListener('resize', resizeMap);

// Initialize map size on load
resizeMap();

// Event listener for login on Enter key
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        login();
    }
});
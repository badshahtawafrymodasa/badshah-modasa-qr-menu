const translations = {
  en: {
    welcome: "Welcome! Begin your royal flavour journey.",
    subtitle: "A Royal Taste, Every Time.",
    menuLink: "EXPLORE OUR MENU ↓",
    menuTitle: "Our Digital Menu",
    menuSubtitle: "Discover your next favourite dish.",

    cat1: "SPECIALITY",
    dish1: "Badshah Chicken",
    desc1: "Our signature chicken speciality.",

    cat2: "CHICKEN",
    dish2: "Desi Style Chicken",
    desc2: "Traditional chicken curry with rassa.",

    cat3: "TRADITIONAL",
    dish3: "Bajra Rotla",
    desc3: "Traditional Gujarati millet bread.",

    cat4: "TRADITIONAL",
    dish4: "Makke Ka Rotla",
    desc4: "Traditional maize flour rotla.",

    price: "Price coming soon",
    notice: "Please ask our staff for the latest menu and prices.",
    footerText: "Thank you for dining with us!",

    experienceTitle: "Make Your Wait Fun!",
    experienceSubtitle: "Explore, play and enjoy while your order is being prepared.",
    experienceMenuTitle: "Digital Menu",
    experienceMenuText: "Explore our delicious food menu.",
    experienceMenuButton: "View Menu",
    experienceInstagramTitle: "Follow Badshah",
    experienceInstagramText: "Follow us for food updates and offers.",
    experienceInstagramButton: "Visit Instagram",
    experienceGameTitle: "Time Pass Game",
    experienceGameText: "Try your luck while waiting for your order!",
    experienceGameButton: "Play Now",
    gameHeading: "Badshah Lucky Number 👑",
    gameInstruction: "Pick a number from 1 to 5.",
    gameWin: "🎉 Correct! You found the lucky number!",
    gameLose: "Not this time! The lucky number was ",
    playAgain: "Play Again",
    instagramMessage: "Our Instagram link will be added soon."
  },

  gu: {
    welcome: "સ્વાગત છે! તમારા સ્વાદની શાહી સફરમાં.",
    subtitle: "દરેક વખતે શાહી સ્વાદ.",
    menuLink: "અમારું મેનૂ જુઓ ↓",
    menuTitle: "અમારું ડિજિટલ મેનૂ",
    menuSubtitle: "તમારી મનપસંદ વાનગી શોધો.",

    cat1: "ખાસ વાનગી",
    dish1: "બાદશાહ ચિકન",
    desc1: "અમારી ખાસ ચિકન વાનગી.",

    cat2: "ચિકન",
    dish2: "દેશી સ્ટાઇલ ચિકન",
    desc2: "પરંપરાગત દેશી ચિકન રસ્સાવાળું શાક.",

    cat3: "પરંપરાગત",
    dish3: "બાજરીનો રોટલો",
    desc3: "પરંપરાગત ગુજરાતી બાજરીનો રોટલો.",

    cat4: "પરંપરાગત",
    dish4: "મકાઈનો રોટલો",
    desc4: "પરંપરાગત મકાઈના લોટનો રોટલો.",

    price: "કિંમત ટૂંક સમયમાં",
    notice: "મેનૂ અને હાલની કિંમતો માટે અમારા સ્ટાફને પૂછો.",
    footerText: "અમારી સાથે જમવા બદલ આભાર!",

    experienceTitle: "રાહ જોવાનો સમય મજેદાર બનાવો!",
    experienceSubtitle: "તમારો ઓર્ડર તૈયાર થાય ત્યાં સુધી જુઓ, રમો અને આનંદ માણો.",
    experienceMenuTitle: "ડિજિટલ મેનૂ",
    experienceMenuText: "અમારી સ્વાદિષ્ટ વાનગીઓ જુઓ.",
    experienceMenuButton: "મેનૂ જુઓ",
    experienceInstagramTitle: "બાદશાહને ફોલો કરો",
    experienceInstagramText: "નવી વાનગીઓ અને ઑફર્સ માટે અમને ફોલો કરો.",
    experienceInstagramButton: "ઇન્સ્ટાગ્રામ જુઓ",
    experienceGameTitle: "સમય પસાર ગેમ",
    experienceGameText: "ઓર્ડરની રાહ જોતી વખતે તમારું નસીબ અજમાવો!",
    experienceGameButton: "રમો",
    gameHeading: "બાદશાહ લકી નંબર 👑",
    gameInstruction: "1 થી 5 વચ્ચે એક નંબર પસંદ કરો.",
    gameWin: "🎉 શાબાશ! તમે સાચો લકી નંબર શોધી લીધો!",
    gameLose: "આ વખતે નહીં! લકી નંબર હતો ",
    playAgain: "ફરી રમો",
    instagramMessage: "અમારી ઇન્સ્ટાગ્રામ લિંક ટૂંક સમયમાં ઉમેરવામાં આવશે."
  }
};

let luckyNumber = 1;
let currentLanguage = "gu";

function setLanguage(language) {
  const text = translations[language];

  if (!text) return;

  currentLanguage = language;

  const ids = [
    "welcome", "menuTitle", "menuSubtitle", "notice", "footerText",
    "experienceTitle", "experienceSubtitle",
    "experienceMenuTitle", "experienceMenuText",
    "experienceInstagramTitle", "experienceInstagramText",
    "experienceGameTitle", "experienceGameText",
    "gameHeading", "gameInstruction"
  ];

  ids.forEach(function (id) {
    const element = document.getElementById(id);
    if (element) {
      const key = id;
      element.textContent = text[key];
    }
  });

  document.querySelector(".subtitle").textContent = text.subtitle;
  document.getElementById("menuLink").textContent = text.menuLink;

  for (let i = 1; i <= 4; i++) {
    document.getElementById("cat" + i).textContent = text["cat" + i];
    document.getElementById("dish" + i).textContent = text["dish" + i];
    document.getElementById("desc" + i).textContent = text["desc" + i];
    document.getElementById("price" + i).textContent = text.price;
  }

  document.getElementById("experienceMenuButton").textContent =
    text.experienceMenuButton;

  document.getElementById("instagramButton").textContent =
    text.experienceInstagramButton;

  document.getElementById("gameButton").textContent =
    text.experienceGameButton;

  document.getElementById("playAgainButton").textContent = text.playAgain;

  document.getElementById("guBtn").classList.toggle("active", language === "gu");
  document.getElementById("enBtn").classList.toggle("active", language === "en");

  document.documentElement.lang = language === "gu" ? "gu" : "en";
}

function openInstagram() {
  window.open(
    "https://www.instagram.com/badshah_tawa_fry/",
    "_blank",
    "noopener,noreferrer"
  );
}

function playGame() {
  luckyNumber = Math.floor(Math.random() * 5) + 1;

  document.getElementById("gameBox").hidden = false;
  document.getElementById("gameResult").textContent = "";

  document.getElementById("gameBox").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function guessNumber(number) {
  const text = translations[currentLanguage];
  const result = document.getElementById("gameResult");

  if (number === luckyNumber) {
    result.textContent = text.gameWin;
  } else {
    result.textContent = text.gameLose + luckyNumber;
  }
}

function updateTableNumber() {
  const params = new URLSearchParams(window.location.search);
  const tableNumber = params.get("table");
  const badge = document.getElementById("tableBadge");

  if (!badge) return;

  if (!tableNumber || !/^[1-9]\d{0,2}$/.test(tableNumber)) {
    badge.hidden = true;
    return;
  }

  badge.hidden = false;

  if (currentLanguage === "gu") {
    badge.textContent =
      `સ્વાગત છે! તમારો ટેબલ નંબર ${tableNumber} છે.`;
  } else {
    badge.textContent =
      `Welcome! You are at Table ${tableNumber}.`;
  }
}

setLanguage("gu");
updateTableNumber();
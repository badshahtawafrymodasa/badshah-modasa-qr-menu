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
    "https://www.instagram.com/badshahtawafry.modasa/",
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

/* BADSHAH FUN-ONLY SPIN WHEEL */
let badshahWheelRotation = 0;
let badshahWheelSpinning = false;

function spinBadshahWheel() {
  if (badshahWheelSpinning) return;

  const wheel = document.getElementById("spinWheel");
  const button = document.getElementById("spinButton");
  const result = document.getElementById("spinResult");

  if (!wheel || !button || !result) return;

  const funResults = [
    "👑 Badshah Lucky! Royal vibes only!",
    "🍗 Chicken Lover! A true foodie!",
    "🎉 Super Spin! Enjoy your royal time!",
    "😎 Royal Swag! Full Badshah style!",
    "🍽️ Foodie Star! Taste the happiness!",
    "✨ Golden Luck! Have a royal day!"
  ];

  const selectedIndex = Math.floor(Math.random() * funResults.length);
  const segmentAngle = 360 / funResults.length;

  // Pointer is at the top. Select the center of a segment.
  const targetAngle = 360 - (selectedIndex * segmentAngle + segmentAngle / 2);

  const currentAngle = ((badshahWheelRotation % 360) + 360) % 360;
  const extraRotation = (targetAngle - currentAngle + 360) % 360;

  badshahWheelRotation += 360 * 5 + extraRotation;
  badshahWheelSpinning = true;
  button.disabled = true;
  result.textContent = "👑 Spinning...";

  wheel.style.transform = `rotate(${badshahWheelRotation}deg)`;

  wheel.addEventListener("transitionend", function finishSpin() {
    wheel.removeEventListener("transitionend", finishSpin);
    badshahWheelSpinning = false;
    button.disabled = false;
    result.textContent = funResults[selectedIndex];
  });
}

/* BADSHAH MEMORY MATCH GAME */
const memorySymbols = ["🍗", "👑", "🍽️", "🌶️", "🥘", "✨"];

let memoryDeck = [];
let memoryFirstCard = null;
let memorySecondCard = null;
let memoryLock = false;
let memoryMoveCount = 0;
let memoryMatchedPairs = 0;

function startMemoryGame() {
  const grid = document.getElementById("memoryGrid");
  const movesDisplay = document.getElementById("memoryMoves");
  const pairsDisplay = document.getElementById("memoryPairs");
  const message = document.getElementById("memoryMessage");

  if (!grid || !movesDisplay || !pairsDisplay || !message) return;

  memoryDeck = [...memorySymbols, ...memorySymbols]
    .sort(() => Math.random() - 0.5);

  memoryFirstCard = null;
  memorySecondCard = null;
  memoryLock = false;
  memoryMoveCount = 0;
  memoryMatchedPairs = 0;

  movesDisplay.textContent = "0";
  pairsDisplay.textContent = "0";
  message.textContent = "Ready? Find all 6 pairs!";

  const cards = grid.querySelectorAll(".memory-tile");

  cards.forEach((card, index) => {
    card.textContent = "?";
    card.classList.remove("is-flipped", "is-matched");
    card.disabled = false;
    card.setAttribute(
      "aria-label",
      "Hidden memory card " + (index + 1)
    );
  });
}

function flipMemoryCard(index) {
  if (memoryLock) return;

  const grid = document.getElementById("memoryGrid");
  if (!grid) return;

  const cards = grid.querySelectorAll(".memory-tile");
  const card = cards[index];

  if (!card || card.disabled || card.classList.contains("is-flipped")) {
    return;
  }

  if (memoryDeck.length !== 12) {
    startMemoryGame();
  }

  const selectedCard = cards[index];
  selectedCard.textContent = memoryDeck[index];
  selectedCard.classList.add("is-flipped");
  selectedCard.setAttribute("aria-label", memoryDeck[index]);

  if (!memoryFirstCard) {
    memoryFirstCard = {
      index,
      symbol: memoryDeck[index]
    };
    return;
  }

  memorySecondCard = {
    index,
    symbol: memoryDeck[index]
  };

  memoryMoveCount++;
  document.getElementById("memoryMoves").textContent =
    String(memoryMoveCount);

  if (memoryFirstCard.symbol === memorySecondCard.symbol) {
    cards[memoryFirstCard.index].classList.add("is-matched");
    cards[memorySecondCard.index].classList.add("is-matched");

    cards[memoryFirstCard.index].disabled = true;
    cards[memorySecondCard.index].disabled = true;

    memoryMatchedPairs++;
    document.getElementById("memoryPairs").textContent =
      String(memoryMatchedPairs);

    memoryFirstCard = null;
    memorySecondCard = null;

    if (memoryMatchedPairs === 6) {
      document.getElementById("memoryMessage").textContent =
        "🎉 Royal champion! You matched all pairs in " +
        memoryMoveCount + " moves!";
    } else {
      document.getElementById("memoryMessage").textContent =
        "👑 Match found! Keep going!";
    }

    return;
  }

  memoryLock = true;
  document.getElementById("memoryMessage").textContent =
    "Not a match. Try again!";

  const firstIndex = memoryFirstCard.index;
  const secondIndex = memorySecondCard.index;

  setTimeout(() => {
    const currentCards = document.querySelectorAll(
      "#memoryGrid .memory-tile"
    );

    currentCards[firstIndex].textContent = "?";
    currentCards[secondIndex].textContent = "?";

    currentCards[firstIndex].classList.remove("is-flipped");
    currentCards[secondIndex].classList.remove("is-flipped");

    currentCards[firstIndex].setAttribute(
      "aria-label",
      "Hidden memory card " + (firstIndex + 1)
    );
    currentCards[secondIndex].setAttribute(
      "aria-label",
      "Hidden memory card " + (secondIndex + 1)
    );

    memoryFirstCard = null;
    memorySecondCard = null;
    memoryLock = false;

    document.getElementById("memoryMessage").textContent =
      "Try another pair!";
  }, 800);
}

if (document.getElementById("memoryGrid")) {
  startMemoryGame();
}

/* BADSHAH TIMEPASS ARENA - HUB CONTROLS */

function openGameHub() {
  const hub = document.getElementById("gameHub");
  const luckyBox = document.getElementById("gameBox");

  if (!hub) return;

  // Hide the old standalone Lucky Number panel.
  if (luckyBox) luckyBox.hidden = true;

  // Hide the original Time Pass card.
  const gameButton = document.getElementById("gameButton");
  if (gameButton) {
    const gameCard = gameButton.closest(".experience-card");
    if (gameCard) gameCard.hidden = true;
  }

  hub.hidden = false;
  hub.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeGameHub() {
  const hub = document.getElementById("gameHub");
  if (hub) hub.hidden = true;

  const gameButton = document.getElementById("gameButton");
  if (gameButton) {
    const gameCard = gameButton.closest(".experience-card");
    if (gameCard) gameCard.hidden = false;
  }

  const experience = document.getElementById("experience");
  if (experience) {
    experience.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openHubGame(gameName) {
  const hub = document.getElementById("gameHub");
  if (hub) hub.hidden = true;

  const gameBox = document.getElementById("gameBox");
  const memoryGame = document.getElementById("memoryGame");
  const spinGame = document.getElementById("spinWheelSection");

  if (gameName === "challenge") {
    const challengeGame = document.getElementById("challengeGame");

    if (challengeGame) {
      challengeGame.hidden = false;
      startBadshahQuiz();
      challengeGame.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    return;
  }

  if (gameName === "fingers") {
    const fingersGame = document.getElementById("fingersGame");

    if (fingersGame) {
      fingersGame.hidden = false;
      fingersGame.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    return;
  }

  if (gameName === "masti") {
    const mastiGame = document.getElementById("mastiGame");

    if (mastiGame) {
      mastiGame.hidden = false;
      startMastiGame();
      mastiGame.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    return;
  }
  
  if (gameName === "lucky") {
    if (gameBox) {
      gameBox.hidden = false;
      gameBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (gameName === "spin") {
    if (spinGame) {
      spinGame.hidden = false;
      spinGame.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (gameName === "memory") {
    if (memoryGame) {
      memoryGame.hidden = false;
      memoryGame.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  // The three new games will be connected in the next step.
  if (hub) hub.hidden = false;
  alert("Bhai, ye game agle step mein activate karenge! 👑");
}

/* BADSHAH CHALLENGE - QUIZ LOGIC */

const badshahQuizQuestions = [
  {
    question: "Which emoji represents royalty?",
    answers: ["🍕 Pizza", "👑 Crown", "⚽ Football", "🎧 Headphones"],
    correct: 1
  },
  {
    question: "Which one is a popular Indian flatbread?",
    answers: ["Roti", "Ice cream", "Noodles", "Cake"],
    correct: 0
  },
  {
    question: "Which colour is associated with gold?",
    answers: ["Blue", "Green", "Golden yellow", "Pink"],
    correct: 2
  },
  {
    question: "What should you do to find a matching memory pair?",
    answers: [
      "Flip two cards",
      "Close the game",
      "Tap the title",
      "Refresh the page"
    ],
    correct: 0
  },
  {
    question: "What makes a great foodie?",
    answers: [
      "Never trying food",
      "Enjoying good food",
      "Only looking at photos",
      "Skipping every meal"
    ],
    correct: 1
  }
];

let badshahQuizIndex = 0;
let badshahQuizScore = 0;
let badshahQuizAnswered = false;

function startBadshahQuiz() {
  badshahQuizIndex = 0;
  badshahQuizScore = 0;
  badshahQuizAnswered = false;
  renderBadshahQuiz();
}

function renderBadshahQuiz() {
  const questionEl = document.getElementById("quizQuestion");
  const answersEl = document.getElementById("quizAnswers");
  const progressEl = document.getElementById("quizProgress");
  const feedbackEl = document.getElementById("quizFeedback");
  const scoreEl = document.getElementById("quizScore");
  const nextButton = document.getElementById("quizNextButton");

  if (
    !questionEl || !answersEl || !progressEl ||
    !feedbackEl || !scoreEl || !nextButton
  ) return;

  if (badshahQuizIndex >= badshahQuizQuestions.length) {
    showBadshahQuizResult();
    return;
  }

  const current = badshahQuizQuestions[badshahQuizIndex];

  progressEl.textContent =
    "Question " + (badshahQuizIndex + 1) +
    " of " + badshahQuizQuestions.length;

  questionEl.textContent = current.question;
  answersEl.replaceChildren();
  feedbackEl.textContent = "";
  scoreEl.textContent = "Score: " + badshahQuizScore;
  nextButton.hidden = true;
  badshahQuizAnswered = false;

  current.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseBadshahAnswer(index));
    answersEl.appendChild(button);
  });
}

function chooseBadshahAnswer(answerIndex) {
  if (badshahQuizAnswered) return;

  const current = badshahQuizQuestions[badshahQuizIndex];
  const answerButtons = document.querySelectorAll(
    "#quizAnswers .quiz-answer-button"
  );

  badshahQuizAnswered = true;

  answerButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === current.correct) {
      button.classList.add("correct");
    } else if (index === answerIndex) {
      button.classList.add("incorrect");
    }
  });

  const feedbackEl = document.getElementById("quizFeedback");

  if (answerIndex === current.correct) {
    badshahQuizScore++;
    feedbackEl.textContent = "🎉 Correct answer! Shabash!";
  } else {
    feedbackEl.textContent =
      "Not quite! Correct answer: " + current.answers[current.correct];
  }

  document.getElementById("quizScore").textContent =
    "Score: " + badshahQuizScore;

  const nextButton = document.getElementById("quizNextButton");
  nextButton.textContent =
    badshahQuizIndex === badshahQuizQuestions.length - 1
      ? "See My Royal Title"
      : "Next Question";

  nextButton.hidden = false;
}

function nextQuizQuestion() {
  if (!badshahQuizAnswered) return;

  badshahQuizIndex++;
  renderBadshahQuiz();
}

function showBadshahQuizResult() {
  const questionEl = document.getElementById("quizQuestion");
  const answersEl = document.getElementById("quizAnswers");
  const progressEl = document.getElementById("quizProgress");
  const feedbackEl = document.getElementById("quizFeedback");
  const scoreEl = document.getElementById("quizScore");
  const nextButton = document.getElementById("quizNextButton");

  const royalTitle =
    badshahQuizScore === 5 ? "👑 Ultimate Badshah!" :
    badshahQuizScore >= 3 ? "🏆 Royal Foodie!" :
    "🌟 Rising Badshah!";

  progressEl.textContent = "Challenge Complete!";
  questionEl.textContent = royalTitle;
  answersEl.replaceChildren();
  feedbackEl.textContent =
    "You completed the Badshah Challenge. Well played!";
  scoreEl.textContent =
    "Final Score: " + badshahQuizScore + " / " +
    badshahQuizQuestions.length;

  nextButton.textContent = "Play Again";
  nextButton.hidden = false;
  nextButton.onclick = startBadshahQuiz;
}

function backToGameHub() {
  const playAreas = document.querySelectorAll(".hub-play-area");
  playAreas.forEach(area => area.hidden = true);

  const hub = document.getElementById("gameHub");
  if (hub) {
    hub.hidden = false;
    hub.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* BADSHAH FAST FINGERS - GAME LOGIC */

let fingersTimeLeft = 15;
let fingersScore = 0;
let fingersTimer = null;
let fingersRunning = false;
let fingersTargetEmoji = "👑";

const fingersEmojis = ["👑", "🍗", "🌶️", "✨", "🍽️", "🥘"];

function startFastFingers() {
  clearInterval(fingersTimer);

  fingersTimeLeft = 15;
  fingersScore = 0;
  fingersRunning = true;

  const timeEl = document.getElementById("fingersTime");
  const scoreEl = document.getElementById("fingersScore");
  const messageEl = document.getElementById("fingersMessage");
  const startButton = document.getElementById("fingersStartButton");

  if (!timeEl || !scoreEl || !messageEl || !startButton) {
    fingersRunning = false;
    return;
  }

  timeEl.textContent = "15";
  scoreEl.textContent = "0";
  messageEl.textContent = "Go, Badshah! Tap the target emoji!";
  startButton.disabled = true;

  const tiles = document.querySelectorAll("#fingersGrid .fingers-tile");
  tiles.forEach(tile => tile.disabled = false);

  setFingersTarget();

  fingersTimer = setInterval(() => {
    fingersTimeLeft--;
    timeEl.textContent = String(fingersTimeLeft);

    if (fingersTimeLeft <= 0) {
      endFastFingers();
    }
  }, 1000);
}

function setFingersTarget() {
  const targetEl = document.getElementById("fingersTarget");
  const tiles = document.querySelectorAll("#fingersGrid .fingers-tile");

  if (!targetEl || tiles.length === 0) return;

  fingersTargetEmoji =
    fingersEmojis[Math.floor(Math.random() * fingersEmojis.length)];

  targetEl.textContent = fingersTargetEmoji;

  // Shuffle tile symbols and make sure the target appears at least once.
  const symbols = Array.from(
    { length: tiles.length },
    () => fingersEmojis[Math.floor(Math.random() * fingersEmojis.length)]
  );

  const targetIndex = Math.floor(Math.random() * tiles.length);
  symbols[targetIndex] = fingersTargetEmoji;

  tiles.forEach((tile, index) => {
    tile.textContent = symbols[index];
  });
}

function tapFingerTile(index) {
  if (!fingersRunning) return;

  const tiles = document.querySelectorAll("#fingersGrid .fingers-tile");
  const tile = tiles[index];

  if (!tile || tile.disabled) return;

  const messageEl = document.getElementById("fingersMessage");

  if (tile.textContent === fingersTargetEmoji) {
    fingersScore++;
    document.getElementById("fingersScore").textContent =
      String(fingersScore);

    if (messageEl) messageEl.textContent = "🔥 Correct! Keep tapping!";
    setFingersTarget();
  } else {
    if (messageEl) messageEl.textContent = "😄 Wrong symbol! Find the target!";
  }
}

function endFastFingers() {
  clearInterval(fingersTimer);
  fingersTimer = null;
  fingersRunning = false;

  const startButton = document.getElementById("fingersStartButton");
  const messageEl = document.getElementById("fingersMessage");
  const tiles = document.querySelectorAll("#fingersGrid .fingers-tile");

  tiles.forEach(tile => tile.disabled = true);

  if (startButton) startButton.disabled = false;

  let title = "🌟 Rising Badshah!";
  if (fingersScore >= 15) {
    title = "👑 Ultimate Fast Fingers Badshah!";
  } else if (fingersScore >= 8) {
    title = "🏆 Royal Speed Champion!";
  }

  if (messageEl) {
    messageEl.textContent =
      "⏰ Time's up! Score: " + fingersScore + ". " + title;
  }

  if (startButton) {
    startButton.textContent = "PLAY AGAIN";
  }
}

/* BADSHAH TABLE PE MASTI - GAME LOGIC */

const mastiQuestions = [
  {
    emoji: "🧀",
    question: "Your ultimate food team?",
    options: ["🧀 Extra Cheese", "🌶️ Extra Masala"],
    reactions: [
      "Cheese Champion! Creamy royal vibes!",
      "Masala Maharaja! Full desi swag!"
    ]
  },
  {
    emoji: "📸",
    question: "Food arrives at your table. First move?",
    options: ["📸 Take a photo", "😋 Take the first bite"],
    reactions: [
      "Food Influencer! Camera first, foodie!",
      "Real Foodie! No time to waste!"
    ]
  },
  {
    emoji: "🍗",
    question: "Your dream food mood?",
    options: ["🍗 Chicken Feast", "👑 Royal Family Feast"],
    reactions: [
      "Chicken King! You know your cravings!",
      "Royal Host! Food is better together!"
    ]
  },
  {
    emoji: "🌶️",
    question: "How spicy do you like your food?",
    options: ["🔥 Extra Spicy", "😊 Mild & Tasty"],
    reactions: [
      "Fire Badshah! Spice is your superpower!",
      "Taste Expert! Balance is everything!"
    ]
  },
  {
    emoji: "🍽️",
    question: "Who gets the last bite?",
    options: ["😎 It's mine!", "❤️ Share with family"],
    reactions: [
      "Last-Bite Legend! You claimed it!",
      "Dil Se Badshah! Sharing is royal!"
    ]
  },
  {
    emoji: "🥘",
    question: "Choose your perfect food moment!",
    options: ["🌙 Late-night cravings", "🎉 Family dinner"],
    reactions: [
      "Night Foodie! Midnight cravings win!",
      "Family Feast Badshah! Together tastes better!"
    ]
  }
];

let mastiQuestionIndex = 0;
let mastiAnswers = [];

function startMastiGame() {
  mastiQuestionIndex = 0;
  mastiAnswers = [];
  renderMastiQuestion();
}

function renderMastiQuestion() {
  const progress = document.getElementById("mastiProgress");
  const emoji = document.getElementById("mastiEmoji");
  const question = document.getElementById("mastiQuestion");
  const options = document.getElementById("mastiOptions");
  const feedback = document.getElementById("mastiFeedback");
  const nextButton = document.getElementById("mastiNextButton");

  if (!progress || !emoji || !question || !options ||
      !feedback || !nextButton) return;

  if (mastiQuestionIndex >= mastiQuestions.length) {
    showMastiResult();
    return;
  }

  const current = mastiQuestions[mastiQuestionIndex];

  progress.textContent =
    "Question " + (mastiQuestionIndex + 1) +
    " of " + mastiQuestions.length;

  emoji.textContent = current.emoji;
  question.textContent = current.question;
  options.replaceChildren();
  feedback.textContent = "";
  nextButton.hidden = true;

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "masti-option-button";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (mastiAnswers[mastiQuestionIndex] !== undefined) return;

      mastiAnswers[mastiQuestionIndex] = index;

      options.querySelectorAll("button").forEach((otherButton, i) => {
        otherButton.disabled = true;
        if (i === index) otherButton.classList.add("selected");
      });

      feedback.textContent = current.reactions[index];

      nextButton.textContent =
        mastiQuestionIndex === mastiQuestions.length - 1
          ? "Reveal My Foodie Style"
          : "Next Question";

      nextButton.hidden = false;
    });

    options.appendChild(button);
  });
}

function nextMastiQuestion() {
  if (mastiAnswers[mastiQuestionIndex] === undefined) return;

  mastiQuestionIndex++;
  renderMastiQuestion();
}

function showMastiResult() {
  const progress = document.getElementById("mastiProgress");
  const emoji = document.getElementById("mastiEmoji");
  const question = document.getElementById("mastiQuestion");
  const options = document.getElementById("mastiOptions");
  const feedback = document.getElementById("mastiFeedback");
  const nextButton = document.getElementById("mastiNextButton");

  progress.textContent = "Challenge Complete!";
  emoji.textContent = "👑";

  const spicyChoices = mastiAnswers.filter(answer => answer === 0).length;

  let title;
  if (spicyChoices >= 4) {
    title = "🔥 The Bold Foodie Badshah!";
  } else if (spicyChoices <= 2) {
    title = "❤️ The Royal Heart Badshah!";
  } else {
    title = "😎 The All-Rounder Badshah!";
  }

  question.textContent = title;
  options.replaceChildren();
  feedback.textContent =
    "Your food personality is revealed! Play again with your family and friends.";

  nextButton.hidden = false;
  nextButton.textContent = "Play Again";
  nextButton.onclick = startMastiGame;
}

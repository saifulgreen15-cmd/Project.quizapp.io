'use strict';
/* ============================================================
   QuizMaster — Interactive Quiz Application
   JavaScript | DOM Manipulation · Events · Functions
   ============================================================ */

/* ── Question Bank ───────────────────────────────────────────── */
const QUESTIONS = {
  general: [
    { q:"What is the capital city of France?", opts:["Berlin","Madrid","Paris","Rome"], ans:2, exp:"Paris has been the capital of France since the 10th century." },
    { q:"How many continents are there on Earth?", opts:["5","6","7","8"], ans:2, exp:"The 7 continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America." },
    { q:"Which planet is known as the Red Planet?", opts:["Venus","Mars","Jupiter","Saturn"], ans:1, exp:"Mars appears red due to iron oxide (rust) on its surface." },
    { q:"What is the largest ocean on Earth?", opts:["Atlantic","Indian","Arctic","Pacific"], ans:3, exp:"The Pacific Ocean covers more than 30% of Earth's surface." },
    { q:"Who painted the Mona Lisa?", opts:["Michelangelo","Van Gogh","Leonardo da Vinci","Picasso"], ans:2, exp:"Leonardo da Vinci painted the Mona Lisa between 1503 and 1519." },
    { q:"How many sides does a hexagon have?", opts:["5","6","7","8"], ans:1, exp:"A hexagon is a polygon with exactly six sides and six angles." },
    { q:"What is the chemical symbol for gold?", opts:["Go","Gd","Au","Ag"], ans:2, exp:"Au comes from the Latin word 'Aurum', meaning gold." },
    { q:"Which country invented the printing press?", opts:["China","England","Germany","France"], ans:2, exp:"Johannes Gutenberg invented the movable-type printing press in Germany around 1440." },
    { q:"What is the longest river in the world?", opts:["Amazon","Mississippi","Nile","Yangtze"], ans:2, exp:"The Nile River in Africa is approximately 6,650 km long." },
    { q:"Which gas do plants absorb from the air during photosynthesis?", opts:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], ans:2, exp:"Plants absorb CO₂ and release oxygen during photosynthesis." },
    { q:"How many bones are in the adult human body?", opts:["196","206","216","226"], ans:1, exp:"Adults have 206 bones; babies are born with around 270 bones that fuse over time." },
    { q:"Which country is the largest by land area?", opts:["USA","Canada","China","Russia"], ans:3, exp:"Russia is the largest country with about 17.1 million km²." },
    { q:"What is the speed of light?", opts:["300,000 km/s","150,000 km/s","200,000 km/s","250,000 km/s"], ans:0, exp:"Light travels at approximately 299,792 km/s in a vacuum." },
    { q:"Who wrote Romeo and Juliet?", opts:["Charles Dickens","William Shakespeare","Jane Austen","Mark Twain"], ans:1, exp:"William Shakespeare wrote Romeo and Juliet around 1594–1596." },
    { q:"What is the smallest country in the world?", opts:["Monaco","San Marino","Vatican City","Liechtenstein"], ans:2, exp:"Vatican City covers only 0.44 km² within Rome, Italy." },
    { q:"Which element has atomic number 1?", opts:["Helium","Oxygen","Hydrogen","Carbon"], ans:2, exp:"Hydrogen is the lightest element and has atomic number 1." },
    { q:"What is the currency of Japan?", opts:["Yuan","Won","Yen","Ringgit"], ans:2, exp:"The Japanese Yen (¥) has been Japan's currency since 1871." },
    { q:"Which sport uses the term 'checkmate'?", opts:["Chess","Checkers","Go","Backgammon"], ans:0, exp:"Checkmate in chess means the king is in an inescapable attack position." },
    { q:"What is the hardest natural substance on Earth?", opts:["Gold","Iron","Diamond","Quartz"], ans:2, exp:"Diamond scores 10 on the Mohs hardness scale — the maximum." },
    { q:"How many hours are in a week?", opts:["148","160","168","172"], ans:2, exp:"7 days × 24 hours = 168 hours in a week." }
  ],
  science: [
    { q:"What is the powerhouse of the cell?", opts:["Nucleus","Mitochondria","Ribosome","Vacuole"], ans:1, exp:"Mitochondria produce ATP (energy) through cellular respiration." },
    { q:"What planet is closest to the Sun?", opts:["Venus","Earth","Mercury","Mars"], ans:2, exp:"Mercury orbits just 57.9 million km from the Sun on average." },
    { q:"What is H₂O commonly known as?", opts:["Hydrogen Peroxide","Salt Water","Water","Ammonia"], ans:2, exp:"H₂O is the molecular formula for water — two hydrogen and one oxygen atom." },
    { q:"Which blood type is the universal donor?", opts:["A","B","AB","O-"], ans:3, exp:"O-negative blood can be given to patients of any blood type." },
    { q:"What force keeps planets in orbit around the Sun?", opts:["Magnetism","Gravity","Nuclear Force","Friction"], ans:1, exp:"Gravity from the Sun's massive mass keeps planets in stable orbits." },
    { q:"What is DNA an abbreviation for?", opts:["Deoxyribonucleic Acid","Digital Nucleic Acid","Direct Nucleic Acid","Dense Nuclear Atom"], ans:0, exp:"DNA stands for Deoxyribonucleic Acid — the molecule that carries genetic instructions." },
    { q:"How many chambers does the human heart have?", opts:["2","3","4","5"], ans:2, exp:"The heart has 4 chambers: right atrium, right ventricle, left atrium, left ventricle." },
    { q:"What is the most abundant gas in Earth's atmosphere?", opts:["Oxygen","Carbon Dioxide","Argon","Nitrogen"], ans:3, exp:"Nitrogen makes up about 78% of Earth's atmosphere." },
    { q:"What is the unit of electrical resistance?", opts:["Volt","Ampere","Watt","Ohm"], ans:3, exp:"Electrical resistance is measured in Ohms (Ω), named after Georg Ohm." },
    { q:"Which planet has the most moons?", opts:["Jupiter","Saturn","Neptune","Uranus"], ans:1, exp:"Saturn has 146 confirmed moons — more than any other planet." },
    { q:"What type of energy does a stretched rubber band store?", opts:["Kinetic","Thermal","Elastic Potential","Chemical"], ans:2, exp:"A stretched rubber band stores elastic potential energy, released when let go." },
    { q:"What is the study of fossils called?", opts:["Geology","Archeology","Paleontology","Biology"], ans:2, exp:"Paleontology studies fossils to understand the history of life on Earth." },
    { q:"Which organ produces insulin in the human body?", opts:["Liver","Kidney","Pancreas","Stomach"], ans:2, exp:"The pancreas produces insulin to regulate blood sugar levels." },
    { q:"What is the speed of sound in air at room temperature?", opts:["~343 m/s","~150 m/s","~500 m/s","~1000 m/s"], ans:0, exp:"Sound travels at approximately 343 m/s (1,235 km/h) in air at 20°C." },
    { q:"What is the chemical formula for table salt?", opts:["KCl","NaOH","NaCl","CaCl₂"], ans:2, exp:"Table salt is sodium chloride — NaCl." }
  ],
  technology: [
    { q:"What does 'CPU' stand for?", opts:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing Unit"], ans:0, exp:"The CPU is the primary component that executes instructions in a computer." },
    { q:"Which company created the Python programming language?", opts:["Microsoft","Google","Guido van Rossum (PSF)","Apple"], ans:2, exp:"Python was created by Guido van Rossum and first released in 1991." },
    { q:"What does 'HTML' stand for?", opts:["Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Logic","Home Tool Markup Language"], ans:0, exp:"HTML (HyperText Markup Language) is the standard language for creating web pages." },
    { q:"Which data structure operates on a LIFO principle?", opts:["Queue","Tree","Stack","Graph"], ans:2, exp:"A Stack uses Last In, First Out — like a stack of plates." },
    { q:"What does 'URL' stand for?", opts:["Universal Resource Link","Uniform Resource Locator","Unified Record Locator","Universal Routing Link"], ans:1, exp:"URL stands for Uniform Resource Locator — the web address of a resource." },
    { q:"What does 'RAM' stand for?", opts:["Read-Access Memory","Random-Access Memory","Rapid-Access Module","Read All Memory"], ans:1, exp:"RAM (Random-Access Memory) is temporary storage that a computer uses while running." },
    { q:"Which programming language is primarily used for iOS development?", opts:["Java","Kotlin","Swift","C#"], ans:2, exp:"Swift, released by Apple in 2014, is the primary language for iOS development." },
    { q:"What does 'CSS' stand for?", opts:["Computer Style Sheets","Cascading Style Sheets","Creative Style Syntax","Coded Style Sheets"], ans:1, exp:"CSS (Cascading Style Sheets) controls the visual presentation of HTML elements." },
    { q:"Which company developed the Android operating system?", opts:["Apple","Microsoft","Samsung","Google"], ans:3, exp:"Google acquired Android Inc. in 2005 and released Android in 2008." },
    { q:"What is the binary representation of the decimal number 10?", opts:["1001","1010","1100","0110"], ans:1, exp:"10 in binary is 1010 (8+2=10)." },
    { q:"What does 'API' stand for?", opts:["Application Protocol Interface","Application Programming Interface","Automated Program Interaction","Advanced Programming Index"], ans:1, exp:"API stands for Application Programming Interface — a way for programs to communicate." },
    { q:"Which sorting algorithm has the best average time complexity?", opts:["Bubble Sort","Insertion Sort","Quick Sort","Selection Sort"], ans:2, exp:"Quick Sort has an average time complexity of O(n log n)." },
    { q:"What is the default port for HTTPS?", opts:["80","21","8080","443"], ans:3, exp:"HTTPS uses port 443 by default; HTTP uses port 80." },
    { q:"Which of these is a NoSQL database?", opts:["MySQL","PostgreSQL","MongoDB","SQLite"], ans:2, exp:"MongoDB stores data as JSON-like documents, making it a popular NoSQL database." },
    { q:"What does 'GPU' stand for?", opts:["General Processing Unit","Graphics Processing Unit","Global Program Utility","Grid Processing Unit"], ans:1, exp:"A GPU (Graphics Processing Unit) specializes in rendering images and parallel processing." }
  ],
  math: [
    { q:"What is 15% of 200?", opts:["25","30","35","40"], ans:1, exp:"15% × 200 = 0.15 × 200 = 30." },
    { q:"What is the value of π (pi) to 2 decimal places?", opts:["3.12","3.14","3.16","3.18"], ans:1, exp:"Pi (π) ≈ 3.14159... rounded to 2 decimal places is 3.14." },
    { q:"What is the square root of 144?", opts:["11","12","13","14"], ans:1, exp:"12 × 12 = 144, so √144 = 12." },
    { q:"How many degrees are in a triangle's interior angles?", opts:["90°","180°","270°","360°"], ans:1, exp:"The sum of all interior angles of a triangle always equals 180°." },
    { q:"What is 2⁸ (2 to the power of 8)?", opts:["128","256","512","64"], ans:1, exp:"2⁸ = 2×2×2×2×2×2×2×2 = 256." },
    { q:"What is the next prime number after 7?", opts:["8","9","10","11"], ans:3, exp:"11 is prime because its only factors are 1 and 11." },
    { q:"What is the area of a circle with radius 5? (Use π ≈ 3.14)", opts:["78.5","62.8","31.4","15.7"], ans:0, exp:"Area = π × r² = 3.14 × 25 = 78.5 square units." },
    { q:"Simplify: 3/4 + 1/4", opts:["2/4","4/8","1","1/2"], ans:2, exp:"3/4 + 1/4 = 4/4 = 1." },
    { q:"What is 7 × 8?", opts:["54","56","58","64"], ans:1, exp:"7 × 8 = 56." },
    { q:"If x + 5 = 12, what is x?", opts:["5","6","7","8"], ans:2, exp:"x = 12 - 5 = 7." },
    { q:"What is the median of: 3, 7, 2, 9, 5?", opts:["3","5","7","9"], ans:1, exp:"Sorted: 2, 3, 5, 7, 9 — the middle value is 5." },
    { q:"How many faces does a cube have?", opts:["4","5","6","8"], ans:2, exp:"A cube has 6 square faces." },
    { q:"What is 1000 ÷ 25?", opts:["35","40","45","50"], ans:1, exp:"1000 ÷ 25 = 40." },
    { q:"What is the LCM of 4 and 6?", opts:["8","10","12","24"], ans:2, exp:"LCM(4,6) = 12, the smallest number divisible by both 4 and 6." },
    { q:"What is 20% of 500?", opts:["50","100","150","200"], ans:1, exp:"20% × 500 = 0.20 × 500 = 100." }
  ],
  history: [
    { q:"In which year did World War II end?", opts:["1943","1944","1945","1946"], ans:2, exp:"WWII ended in 1945 — May 8 in Europe (V-E Day) and September 2 in the Pacific (V-J Day)." },
    { q:"Who was the first President of the United States?", opts:["John Adams","Thomas Jefferson","Benjamin Franklin","George Washington"], ans:3, exp:"George Washington served as the first U.S. President from 1789 to 1797." },
    { q:"The Great Wall of China was primarily built during which dynasty?", opts:["Tang","Han","Ming","Qing"], ans:2, exp:"Most of the surviving Great Wall was built during the Ming Dynasty (1368–1644)." },
    { q:"In which city was the Declaration of Independence signed?", opts:["Boston","New York","Washington D.C.","Philadelphia"], ans:3, exp:"The Declaration of Independence was signed in Philadelphia, Pennsylvania in 1776." },
    { q:"Who was the first woman to win a Nobel Prize?", opts:["Rosalind Franklin","Marie Curie","Florence Nightingale","Ada Lovelace"], ans:1, exp:"Marie Curie won the Nobel Prize in Physics in 1903 and Chemistry in 1911." },
    { q:"Which ancient wonder was located in Alexandria, Egypt?", opts:["Hanging Gardens","Colossus of Rhodes","The Lighthouse","Statue of Zeus"], ans:2, exp:"The Lighthouse of Alexandria was one of the tallest structures of the ancient world." },
    { q:"The Renaissance began in which country?", opts:["France","England","Germany","Italy"], ans:3, exp:"The Renaissance began in Italy in the 14th century, centered in Florence." },
    { q:"Which empire was ruled by Julius Caesar?", opts:["Greek","Ottoman","Roman","Byzantine"], ans:2, exp:"Julius Caesar was a Roman general and statesman who shaped the Roman Republic/Empire." },
    { q:"In what year did the Berlin Wall fall?", opts:["1987","1988","1989","1990"], ans:2, exp:"The Berlin Wall fell on November 9, 1989, marking the end of the Cold War era." },
    { q:"Which country was the first to give women the right to vote?", opts:["USA","UK","Australia","New Zealand"], ans:3, exp:"New Zealand granted women the right to vote in 1893, the first country to do so." },
    { q:"Who developed the theory of relativity?", opts:["Isaac Newton","Nikola Tesla","Albert Einstein","Max Planck"], ans:2, exp:"Albert Einstein published the special theory of relativity in 1905." },
    { q:"Which ancient civilization built the pyramids at Giza?", opts:["Greek","Roman","Mayan","Egyptian"], ans:3, exp:"The ancient Egyptians built the Giza pyramids around 2560–2500 BCE." },
    { q:"The Cold War was primarily between the USA and which country?", opts:["China","Germany","Japan","Soviet Union"], ans:3, exp:"The Cold War (1947–1991) was a geopolitical tension between the USA and the Soviet Union." },
    { q:"In which year did the Titanic sink?", opts:["1910","1912","1914","1916"], ans:1, exp:"The RMS Titanic sank on April 15, 1912, after hitting an iceberg." },
    { q:"Who led India's independence movement?", opts:["Nehru","Subhas Chandra Bose","B.R. Ambedkar","Mahatma Gandhi"], ans:3, exp:"Mahatma Gandhi led India's nonviolent independence movement against British rule." }
  ]
};

// Build mixed category
QUESTIONS.mixed = [
  ...QUESTIONS.general.slice(0,4),
  ...QUESTIONS.science.slice(0,4),
  ...QUESTIONS.technology.slice(0,4),
  ...QUESTIONS.math.slice(0,3),
  ...QUESTIONS.history.slice(0,5)
];

/* ── Difficulty Multipliers ──────────────────────────────────── */
const DIFFICULTY_POINTS = { easy: 5, medium: 10, hard: 20 };
const DIFFICULTY_BONUS  = { easy: 1, medium: 2,  hard:  4 };

/* ── State ───────────────────────────────────────────────────── */
let quizState = {
  questions:    [],
  current:      0,
  score:        0,
  correct:      0,
  wrong:        0,
  skipped:      0,
  streak:       0,
  bestStreak:   0,
  answers:      [],
  startTime:    null,
  totalTime:    0,
  category:     'general',
  difficulty:   'medium',
  timerSecs:    30,
  timerRemain:  30,
  timerInterval:null,
  answered:     false
};

let leaderboard = JSON.parse(localStorage.getItem('qm_leaderboard')) || [];

/* ── Utility ─────────────────────────────────────────────────── */
function $(id) { return document.getElementById(id); }

function showToast(msg, type = '') {
  const t = $('toast');
  t.textContent = msg;
  t.className   = 'toast show ' + type;
  clearTimeout(t._t);
  t._t = setTimeout(() => t.className = 'toast', 2600);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ── Home Screen ─────────────────────────────────────────────── */
function renderHomeStats() {
  const total = leaderboard.length;
  const best  = total ? Math.max(...leaderboard.map(r => r.pct)) + '%' : '—';
  const avg   = total ? Math.round(leaderboard.reduce((s,r) => s+r.pct, 0) / total) + '%' : '—';
  $('hsTotalPlayed').textContent = total;
  $('hsBestScore').textContent   = best;
  $('hsAvgScore').textContent    = avg;
}

// Category quick-pick cards
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    $('categorySelect').value = card.dataset.cat;
    showToast('Category: ' + card.querySelector('.cat-name').textContent, '');
  });
});

// Keep select and cards in sync
$('categorySelect').addEventListener('change', () => {
  const v = $('categorySelect').value;
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.cat === v);
  });
});

$('startBtn').addEventListener('click', startQuiz);

/* ── Leaderboard ─────────────────────────────────────────────── */
let lbFilter = 'all';

$('showLeaderboardBtn').addEventListener('click', () => {
  renderLeaderboard();
  $('leaderboardModal').hidden = false;
});

$('closeLeaderboard').addEventListener('click', () => {
  $('leaderboardModal').hidden = true;
});

$('leaderboardModal').addEventListener('click', e => {
  if (e.target === $('leaderboardModal')) $('leaderboardModal').hidden = true;
});

$('clearLeaderboardBtn').addEventListener('click', () => {
  leaderboard = [];
  localStorage.removeItem('qm_leaderboard');
  renderLeaderboard();
  renderHomeStats();
  showToast('Leaderboard cleared.', 'bad');
});

document.querySelectorAll('.lb-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lb-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    lbFilter = btn.dataset.cat;
    renderLeaderboard();
  });
});

function renderLeaderboard() {
  const list = $('lbList');
  let data = lbFilter === 'all' ? leaderboard : leaderboard.filter(r => r.category === lbFilter);
  data = data.slice().sort((a,b) => b.pct - a.pct).slice(0, 10);

  if (!data.length) {
    list.innerHTML = '<li class="empty-state">No scores in this category yet.</li>';
    return;
  }

  list.innerHTML = data.map((r, i) => {
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const rankIcon  = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`;
    return `
      <li class="lb-item">
        <span class="lb-rank ${rankClass}">${rankIcon}</span>
        <div class="lb-info">
          <span class="lb-cat">${catEmoji(r.category)} ${capitalize(r.category)} · ${capitalize(r.difficulty)}</span>
          <span class="lb-meta">${r.correct}/${r.total} correct · ${r.time}s · ${r.date}</span>
        </div>
        <span class="lb-score">${r.pct}%</span>
      </li>
    `;
  }).join('');
}

function catEmoji(cat) {
  const m = { general:'🌍', science:'🔬', technology:'💻', math:'📐', history:'📜', mixed:'🎲' };
  return m[cat] || '🌍';
}

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

/* ── Start Quiz ──────────────────────────────────────────────── */
function startQuiz() {
  const cat        = $('categorySelect').value;
  const difficulty = $('difficultySelect').value;
  const count      = parseInt($('questionCount').value);
  const timerSecs  = parseInt($('timerSelect').value);

  const pool      = shuffleArray(QUESTIONS[cat] || QUESTIONS.general);
  const questions = pool.slice(0, Math.min(count, pool.length));

  // Shuffle options for each question
  const prepared = questions.map(q => {
    const opts  = [...q.opts];
    const correct = opts[q.ans];
    const shuffled = shuffleArray(opts);
    return { ...q, opts: shuffled, ans: shuffled.indexOf(correct) };
  });

  quizState = {
    questions:    prepared,
    current:      0,
    score:        0,
    correct:      0,
    wrong:        0,
    skipped:      0,
    streak:       0,
    bestStreak:   0,
    answers:      [],
    startTime:    Date.now(),
    totalTime:    0,
    category:     cat,
    difficulty,
    timerSecs,
    timerRemain:  timerSecs,
    timerInterval:null,
    answered:     false
  };

  showScreen('quiz');
  loadQuestion();
}

/* ── Load Question ───────────────────────────────────────────── */
function loadQuestion() {
  const { questions, current, difficulty } = quizState;
  const total = questions.length;
  const q     = questions[current];

  quizState.answered = false;

  // Top bar
  $('quizCategoryTag').textContent    = catEmoji(quizState.category) + ' ' + capitalize(quizState.category);
  $('quizDifficultyTag').textContent  = capitalize(difficulty);
  $('questionCounter').textContent    = `${current + 1} / ${total}`;
  $('progressFill').style.width       = ((current / total) * 100) + '%';
  $('liveScore').textContent          = quizState.score;
  $('streakVal').textContent          = quizState.streak;
  $('questionNum').textContent        = `Question ${current + 1}`;
  $('questionText').textContent       = q.q;

  // Options
  const letters = ['A', 'B', 'C', 'D'];
  $('optionsGrid').innerHTML = q.opts.map((opt, i) => `
    <button class="option-btn" data-index="${i}" role="listitem" aria-label="Option ${letters[i]}: ${opt}">
      <span class="option-letter">${letters[i]}</span>
      ${escHtml(opt)}
    </button>
  `).join('');

  $('optionsGrid').querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
  });

  // Feedback
  $('feedbackBar').hidden = true;
  $('feedbackBar').className = 'feedback-bar';

  // Timer
  stopTimer();
  if (quizState.timerSecs > 0) {
    $('timerWrap').style.display = 'flex';
    quizState.timerRemain = quizState.timerSecs;
    updateTimerDisplay(quizState.timerSecs, quizState.timerSecs);
    quizState.timerInterval = setInterval(tickTimer, 1000);
  } else {
    $('timerWrap').style.display = 'none';
  }
}

/* ── Timer ───────────────────────────────────────────────────── */
function tickTimer() {
  quizState.timerRemain--;
  updateTimerDisplay(quizState.timerRemain, quizState.timerSecs);

  if (quizState.timerRemain <= 0) {
    stopTimer();
    timeUp();
  }
}

function updateTimerDisplay(remain, total) {
  $('timerNum').textContent = remain;
  const CIRC = 107;
  const offset = CIRC * (1 - remain / total);
  $('timerRing').style.strokeDashoffset = offset;

  const ring = $('timerRing');
  ring.className = 'timer-ring';
  if (remain <= 5)  ring.classList.add('urgent');
  else if (remain <= Math.floor(total * 0.4)) ring.classList.add('warn');
}

function stopTimer() {
  clearInterval(quizState.timerInterval);
  quizState.timerInterval = null;
}

function timeUp() {
  if (quizState.answered) return;
  quizState.answered = true;

  // Mark correct answer
  const q = quizState.questions[quizState.current];
  const btns = $('optionsGrid').querySelectorAll('.option-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.ans) b.classList.add('correct');
    else b.classList.add('disabled-dim');
  });

  quizState.skipped++;
  quizState.streak = 0;
  $('streakVal').textContent = 0;

  quizState.answers.push({ q: q.q, given: null, correct: q.opts[q.ans], exp: q.exp, status: 'skipped' });

  showFeedback('skipped', "⏱ Time's up!", q.opts[q.ans], q.exp);
}

/* ── Select Answer ───────────────────────────────────────────── */
function selectAnswer(index) {
  if (quizState.answered) return;
  quizState.answered = true;
  stopTimer();

  const q    = quizState.questions[quizState.current];
  const btns = $('optionsGrid').querySelectorAll('.option-btn');
  const correct = index === q.ans;

  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.ans) b.classList.add('correct');
    else if (i === index && !correct) b.classList.add('wrong');
    else b.classList.add('disabled-dim');
  });

  if (correct) {
    quizState.correct++;
    quizState.streak++;
    if (quizState.streak > quizState.bestStreak) quizState.bestStreak = quizState.streak;

    const base   = DIFFICULTY_POINTS[quizState.difficulty];
    const bonus  = Math.min(quizState.streak - 1, 5) * DIFFICULTY_BONUS[quizState.difficulty];
    const earned = base + bonus;
    const timeBonus = quizState.timerSecs > 0 ? Math.floor(quizState.timerRemain / 5) : 0;
    quizState.score += earned + timeBonus;

    $('liveScore').textContent = quizState.score;
    $('liveScore').classList.add('bump');
    setTimeout(() => $('liveScore').classList.remove('bump'), 300);
    $('streakVal').textContent = quizState.streak;

    quizState.answers.push({ q: q.q, given: q.opts[index], correct: q.opts[q.ans], exp: q.exp, status: 'correct' });
    showFeedback('correct', '✅ Correct!', null, q.exp);

  } else {
    quizState.wrong++;
    quizState.streak = 0;
    $('streakVal').textContent = 0;
    quizState.answers.push({ q: q.q, given: q.opts[index], correct: q.opts[q.ans], exp: q.exp, status: 'wrong' });
    showFeedback('wrong', '❌ Incorrect!', q.opts[q.ans], q.exp);
  }
}

/* ── Show Feedback ───────────────────────────────────────────── */
function showFeedback(type, msg, correctAnswer, explanation) {
  const bar = $('feedbackBar');
  bar.hidden = false;
  bar.className = 'feedback-bar ' + type + '-fb';

  $('feedbackIcon').textContent = type === 'correct' ? '✅' : type === 'wrong' ? '❌' : '⏱';
  $('feedbackMsg').textContent  = msg;
  $('feedbackExp').textContent  = (correctAnswer ? `Correct answer: ${correctAnswer}. ` : '') + (explanation || '');
}

$('nextBtn').addEventListener('click', nextQuestion);

document.addEventListener('keydown', e => {
  if (!document.getElementById('screen-quiz').classList.contains('active')) return;
  if (e.key === 'Enter' || e.key === ' ') {
    if (quizState.answered) nextQuestion();
  }
  const map = { '1':0, '2':1, '3':2, '4':3, 'a':0, 'b':1, 'c':2, 'd':3 };
  const idx = map[e.key.toLowerCase()];
  if (idx !== undefined && !quizState.answered) selectAnswer(idx);
});

function nextQuestion() {
  quizState.current++;
  if (quizState.current >= quizState.questions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

$('quitBtn').addEventListener('click', () => {
  if (confirm('Are you sure you want to quit this quiz?')) {
    stopTimer();
    endQuiz();
  }
});

/* ── End Quiz / Results ──────────────────────────────────────── */
function endQuiz() {
  stopTimer();
  quizState.totalTime = Math.round((Date.now() - quizState.startTime) / 1000);
  const total  = quizState.questions.length;
  const pct    = total > 0 ? Math.round((quizState.correct / total) * 100) : 0;

  // Save to leaderboard
  leaderboard.unshift({
    category:   quizState.category,
    difficulty: quizState.difficulty,
    correct:    quizState.correct,
    total,
    pct,
    score:      quizState.score,
    time:       quizState.totalTime,
    date:       new Date().toLocaleDateString()
  });
  if (leaderboard.length > 50) leaderboard.length = 50;
  localStorage.setItem('qm_leaderboard', JSON.stringify(leaderboard));

  renderHomeStats();
  showResults(pct, total);
}

function showResults(pct, total) {
  showScreen('results');

  // Emoji & title
  let emoji, title, sub;
  if (pct === 100) { emoji='🏆'; title='Perfect Score!'; sub='Outstanding — you got every question right!'; }
  else if (pct >= 80) { emoji='🎉'; title='Excellent Work!'; sub='You really know your stuff!'; }
  else if (pct >= 60) { emoji='👍'; title='Good Job!'; sub='Solid performance — keep learning!'; }
  else if (pct >= 40) { emoji='📚'; title='Keep Studying!'; sub='You\'re getting there — practice makes perfect.'; }
  else { emoji='💪'; title='Keep Going!'; sub='Every attempt is a step toward mastery.'; }

  $('resultEmoji').textContent    = emoji;
  $('resultTitle').textContent    = title;
  $('resultSubtitle').textContent = sub;

  // Stats
  $('rsCorrect').textContent = quizState.correct;
  $('rsWrong').textContent   = quizState.wrong;
  $('rsSkipped').textContent = quizState.skipped;
  $('rsTime').textContent    = quizState.totalTime + 's';
  $('rsBest').textContent    = quizState.bestStreak;
  $('rsGrade').textContent   = gradeFromPct(pct);

  // Score circle animation
  const CIRC = 440;
  const fill = $('scFill');
  fill.style.strokeDashoffset = CIRC;
  $('scPct').textContent = '0%';

  const color = pct >= 80 ? '#22c55e' : pct >= 60 ? '#4f7ef7' : pct >= 40 ? '#f59e0b' : '#ef4444';
  fill.style.stroke = color;

  // Animate after paint
  requestAnimationFrame(() => {
    setTimeout(() => {
      const offset = CIRC - (CIRC * pct / 100);
      fill.style.transition = 'stroke-dashoffset 1.5s ease';
      fill.style.strokeDashoffset = offset;

      let n = 0;
      const step = pct / 60;
      const iv = setInterval(() => {
        n = Math.min(n + step, pct);
        $('scPct').textContent = Math.round(n) + '%';
        if (n >= pct) clearInterval(iv);
      }, 25);
    }, 200);
  });

  $('reviewPanel').hidden = true;
}

function gradeFromPct(pct) {
  if (pct >= 93) return 'A';
  if (pct >= 90) return 'A-';
  if (pct >= 87) return 'B+';
  if (pct >= 83) return 'B';
  if (pct >= 80) return 'B-';
  if (pct >= 77) return 'C+';
  if (pct >= 73) return 'C';
  if (pct >= 70) return 'C-';
  if (pct >= 60) return 'D';
  return 'F';
}

/* ── Result Actions ──────────────────────────────────────────── */
$('retryBtn').addEventListener('click', () => {
  showScreen('home');
  renderHomeStats();
});

$('homeBtn').addEventListener('click', () => {
  showScreen('home');
  renderHomeStats();
});

$('reviewBtn').addEventListener('click', () => {
  const panel = $('reviewPanel');
  panel.hidden = !panel.hidden;
  if (!panel.hidden) renderReview();
  $('reviewBtn').textContent = panel.hidden ? '📋 Review Answers' : '🔼 Hide Review';
});

function renderReview() {
  const list = $('reviewList');
  list.innerHTML = quizState.answers.map((a, i) => {
    const cls  = 'review-item r-' + a.status;
    const icon = a.status === 'correct' ? '✅' : a.status === 'wrong' ? '❌' : '⏱';
    return `
      <div class="${cls}" style="animation-delay:${i * 0.05}s">
        <div class="ri-header">
          <span class="ri-q">Q${i+1}. ${escHtml(a.q)}</span>
          <span class="ri-badge">${icon}</span>
        </div>
        <div class="ri-answers">
          ${a.given ? `<span class="ri-given">Your answer: <span>${escHtml(a.given)}</span></span>` : `<span class="ri-given">No answer given (time up)</span>`}
          ${a.status !== 'correct' ? `<span class="ri-correct-ans">✓ Correct: ${escHtml(a.correct)}</span>` : ''}
        </div>
        ${a.exp ? `<span class="ri-exp">💡 ${escHtml(a.exp)}</span>` : ''}
      </div>
    `;
  }).join('');
}

/* ── Utility ─────────────────────────────────────────────────── */
function escHtml(str) {
  return String(str || '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* ── Init ────────────────────────────────────────────────────── */
renderHomeStats();
showScreen('home');

console.log('%c🧠 QuizMaster Loaded!', 'color:#4f7ef7;font-weight:bold;font-size:14px;');

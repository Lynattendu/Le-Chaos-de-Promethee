
'use strict';

// LE CHAOS DE PROMÉTHÉE
// Format : niveau, thème, question,
// Creuse un peu, Encore plus loin.

const QUESTIONS = [
[2,'Les choix','Qu’est-ce qui pourrait te faire changer complètement de vie du jour au lendemain ?','Qu’est-ce qui te manque aujourd’hui pour le faire ?','Et qu’est-ce que tu serais prêt à abandonner pour y arriver ?'],
[2,'Les choix','Si tu pouvais revenir sur une seule décision, laquelle choisirais-tu ?','Qu’est-ce qui te fait penser que tu agirais autrement ?','Et si cette décision avait aussi apporté quelque chose de positif que tu perdrais ?'],
[2,'Les choix','Pour quelle raison serais-tu prêt à tout laisser tomber pendant une semaine ?','Pourquoi cela compterait-il autant pour toi ?','Et si tu n’avais le droit de prévenir personne ?'],
[2,'Les choix','Qu’est-ce qui pourrait te faire dire oui alors que tu avais décidé de dire non ?','Qu’est-ce qui est le plus difficile à refuser pour toi ?','Et qui arriverait le plus facilement à te faire changer d’avis ?'],

[3,'Les tentations','Quelle tentation as-tu le plus de mal à refuser ?','Qu’est-ce qui la rend aussi irrésistible ?','Quelle est la dernière fois où tu as complètement cédé ?'],
[3,'Les tentations','Qu’est-ce qui pourrait te faire oublier toutes tes bonnes résolutions ?','Est-ce que tu résisterais longtemps ?','Et si personne ne devait jamais le savoir ?'],
[2,'Les tentations','Quel plaisir t’accordes-tu parfois sans avoir envie de te justifier ?','Qu’est-ce qui le rend si agréable ?','Et quel plaisir n’as-tu jamais osé t’offrir ?'],
[2,'Les tentations','Qu’est-ce qui pourrait te faire perdre toute notion du temps ?','Qu’est-ce qui te captive autant ?','Et as-tu déjà oublié quelque chose d’important à cause de ça ?'],

[3,'Les limites','Qu’est-ce que tu n’accepterais jamais, même pour beaucoup d’argent ?','Pourquoi cette limite est-elle importante pour toi ?','Et si on te proposait dix fois plus que ce que tu imagines ?'],
[2,'Les limites','Dans quelle situation pourrais-tu surprendre tout le monde par ta réaction ?','Qu’est-ce qui déclencherait cette réaction ?','Et as-tu déjà eu une réaction que tu ne te connaissais pas ?'],
[2,'Les limites','Qu’est-ce qui pourrait te faire perdre ton calme immédiatement ?','Est-ce que les autres remarquent facilement ton agacement ?','Et quelle a été ta réaction la plus inattendue ?'],
[3,'Les limites','Quelle règle serais-tu le plus tenté de contourner ?','Qu’est-ce qui te dérange dans cette règle ?','Et si tu étais certain de ne jamais te faire prendre ?'],

[3,'Les petits secrets','Quelle est une chose que tu fais quand tu es seul et que personne ici ne soupçonnerait ?','Depuis quand as-tu cette habitude ?','Et est-ce que tu accepterais de la montrer ici ?'],
[2,'Les petits secrets','Qu’est-ce que tu as déjà prétendu aimer pour faire plaisir à quelqu’un ?','Combien de temps as-tu entretenu cette impression ?','Et si cette personne te proposait de recommencer demain ?'],
[2,'Les petits secrets','Quelle anecdote sur toi surprendrait le plus les personnes autour de cette table ?','Pourquoi n’as-tu jamais eu l’occasion de la raconter ?','Et quel détail pourrait encore davantage nous surprendre ?'],
[3,'Les petits secrets','Quelle est la chose que tu as longtemps cachée par simple embarras et dont tu peux rire aujourd’hui ?','Pourquoi cela te gênait-il autant ?','Et comment réagirais-tu si quelqu’un te la rappelait devant tout le monde ?'],

[3,'Les relations','Qu’est-ce qui te donne immédiatement envie de mieux connaître quelqu’un ?','Qu’est-ce que tu remarques en premier chez cette personne ?','Et as-tu déjà été attiré par quelqu’un qui ne correspondait à aucun de tes critères ?'],
[2,'Les relations','Qu’est-ce qui pourrait te faire changer complètement d’avis sur quelqu’un ?','As-tu déjà vécu ce retournement d’opinion ?','Et pourrais-tu reconnaître devant cette personne que tu t’étais trompé ?'],
[2,'Les relations','Quelle qualité chez quelqu’un peut te faire oublier beaucoup de ses défauts ?','Pourquoi cette qualité compte-t-elle autant ?','Et jusqu’où serais-tu capable de fermer les yeux sur ses défauts ?'],
[2,'Les relations','Quel est le comportement que tu as le plus de mal à comprendre chez les autres ?','Comment réagis-tu généralement face à lui ?','Et si quelqu’un ici te disait que tu fais exactement la même chose ?'],

[2,'Les contradictions','Quel conseil donnes-tu facilement mais as-tu beaucoup de mal à appliquer toi-même ?','Pourquoi est-ce plus facile de le conseiller ?','Et quand as-tu fait exactement le contraire de ce que tu conseillais ?'],
[2,'Les contradictions','Quelle chose critiques-tu parfois alors que tu sais très bien que tu la fais aussi ?','Pourquoi continues-tu à la critiquer ?','Et si quelqu’un ici te prenait en flagrant délit ?'],
[2,'Les contradictions','Sur quel sujet pourrais-tu changer d’avis en quelques minutes ?','Qu’est-ce qui te convainc le plus facilement ?','Et as-tu déjà défendu deux opinions complètement opposées dans la même journée ?'],
[3,'Les contradictions','Quelle est la plus grande différence entre ce que tu montres aux autres et ce que tu ressens réellement ?','Pourquoi gardes-tu parfois cette différence ?','Et dans quelle situation laisses-tu tomber cette façade ?'],

[1,'Découvertes','Quelle est la première chose que tu ferais si tu avais une journée entière sans aucune obligation ?','Pourquoi choisirais-tu cette activité ?','Et qu’est-ce que tu n’oserais pas faire si on te regardait ?'],
[1,'Découvertes','Si tu devais donner un nouveau titre à ta vie en ce moment, lequel choisirais-tu ?','Qu’est-ce qui justifie ce titre ?','Et quel titre tes proches lui donneraient-ils ?'],
[1,'Découvertes','Qu’est-ce qui te fait rire même lorsque tu es de mauvaise humeur ?','Pourquoi cela fonctionne-t-il si bien ?','Est-ce qu’il t’est déjà arrivé d’éclater de rire au pire moment ?'],
[1,'Découvertes','Quelle habitude chez toi étonne les gens quand ils la découvrent ?','D’où te vient-elle ?','Et laquelle aimerais-tu perdre sans trop savoir comment ?'],
[1,'Découvertes','Quel talent caché pourrais-tu nous révéler aujourd’hui ?','Comment l’as-tu découvert ?','Tu serais capable de nous en donner un aperçu ?'],
[1,'Découvertes','Quelle rencontre a changé ton avis sur quelque chose ?','Qu’est-ce qui t’a surpris ?','Est-ce que la personne sait qu’elle a changé ton avis ?'],
[1,'Découvertes','Quelle est la chose que tu aimerais mieux savoir faire ?','Pourquoi celle-là ?','Quelle excuse te racontes-tu pour ne pas commencer ?'],
[1,'Découvertes','À quel moment te sens-tu le plus toi-même ?','Qu’est-ce qui change dans ton comportement ?','Et quand as-tu fait semblant d’être quelqu’un d’autre ?'],

[3,'Sans filtre','Qu’est-ce que tu as déjà fait pour impressionner quelqu’un ?','Est-ce que ça a fonctionné ?','Quelle partie de l’histoire ne racontes-tu pas d’habitude ?'],
[3,'Sans filtre','Quelle est la situation la plus gênante dont tu ris maintenant ?','Comment as-tu réagi sur le moment ?','Et quel détail rendrait cette histoire encore meilleure ?'],
[3,'Sans filtre','Quelle excuse as-tu déjà inventée pour te sortir d’une situation ?','Est-ce qu’on t’a cru ?','Et si la personne concernée était ici aujourd’hui ?'],
[3,'Sans filtre','Sur quel sujet te trouves-tu beaucoup plus audacieux que les autres ne le pensent ?','D’où te vient cette assurance ?','Et est-ce que tu nous donnerais un exemple vécu ?'],

[4,'Plus osé','Qu’est-ce qui peut te faire craquer chez quelqu’un en quelques secondes ?','Pourquoi ce détail-là ?','Et as-tu déjà eu un coup de cœur que personne n’aurait imaginé ?'],
[4,'Plus osé','Quelle est ta meilleure histoire de rendez-vous qui a mal tourné ?','Quel a été le premier signe que ça dérapait ?','Quel détail as-tu épargné à tes amis en la racontant ?'],
[4,'Plus osé','Quelle phrase anodine peut devenir très suggestive selon la façon dont on la dit ?','Qu’est-ce qui change tout selon toi ?','Tu nous en fais une démonstration théâtrale ?'],
[4,'Plus osé','Qu’as-tu déjà eu envie de dire à quelqu’un sans trouver le courage ?','Qu’est-ce qui t’a arrêté ?','Et si tu pouvais le dire sans aucune conséquence ?'],
[4,'Plus osé','Quelle a été ta plus grande surprise dans une histoire de séduction ?','Qu’est-ce qui t’a étonné ?','Est-ce que tu avais complètement mal interprété les signes ?'],
[4,'Plus osé','Qu’est-ce qui pourrait te convaincre d’accepter un rendez-vous totalement improbable ?','Qu’est-ce qui piquerait ta curiosité ?','Et quel détail te ferait changer d’avis à la dernière seconde ?'],
[4,'Plus osé','Quelle est ta manière la plus maladroite de montrer que quelqu’un te plaît ?','La personne s’en rend-elle compte ?','Tu accepterais de la rejouer en version exagérée ?'],
[4,'Plus osé','Quelle question aimerais-tu parfois poser mais n’oses jamais demander ?','Pourquoi est-elle difficile à poser ?','Tu veux nous la poser, sans désigner personne ?']
];

// QUESTIONS AUTEUR MYSTÈRE
// Les participants répondent sur papier.

const MYSTERIES = [
[1,'Quelle est une habitude que tu as et que les autres ne devineraient pas ?'],
[1,'Quel objet totalement inattendu gardes-tu chez toi ?'],
[2,'Quelle chose as-tu longtemps cru vraie avant de découvrir ton erreur ?'],
[2,'Quelle passion ou envie n’as-tu presque jamais racontée ?'],
[2,'Quel choix as-tu fait que les autres n’auraient pas imaginé ?'],
[3,'Quelle situation t’a fait rougir alors que tu ne t’y attendais pas ?'],
[3,'Quelle petite manie aimerais-tu garder secrète ?'],
[3,'Quelle phrase as-tu déjà prononcée et qui, sortie de son contexte, semble très suspecte ?'],
[4,'Quelle expérience osée ou inattendue pourrais-tu raconter sans citer de noms ?'],
[4,'Quelle tentative de séduction t’a laissé un souvenir mémorable ?']
];

// ÉVÉNEMENTS CHAOS

const CHAOS = [
[1,'Pendant les deux prochaines cartes, chacun doit commencer sa réponse par « Votre Majesté ».'],
[1,'Pour la prochaine carte, tout le monde doit répondre avec un sérieux absolu.'],
[1,'À la prochaine question, chacun doit prendre une voix de personnage de film.'],
[2,'Sur les deux prochaines cartes, personne ne peut dire « moi » dans sa réponse.'],
[2,'À la prochaine question collective, essayez de deviner la réponse du Maître du Chaos avant de l’entendre.'],
[2,'À la prochaine carte, chaque réponse doit commencer par « Je dois vous avouer que… ».'],
[3,'À la prochaine carte, celui qui répond doit d’abord inventer un titre de film pour sa réponse.'],
[3,'Pour les deux prochaines cartes, chacun peut demander une fois « Tu es sûr ? » après une réponse.'],
[4,'À la prochaine carte, le Maître peut proposer une relance « Encore plus loin » — la personne reste libre de passer.'],
[4,'Pour les deux prochaines cartes, les réponses doivent commencer par « Entre nous… ».']
];

// OUTILS

const $ = id => document.getElementById(id);

const loadNames = () => {
  try {
    const x = JSON.parse(
      localStorage.getItem('promethee-chaos-names') || '[]'
    );
    return Array.isArray(x)
      ? x.filter(n => typeof n === 'string').slice(0, 30)
      : [];
  } catch {
    return [];
  }
};

let names = loadNames();
let bag = [];
let questionBag = [];
let mysteryBag = [];
let chaosBag = [];
let cardNo = 0;
let shown = null;
let autoMode = true;
let special = null;

function saveNames() {
  try {
    localStorage.setItem(
      'promethee-chaos-names',
      JSON.stringify(names)
    );
  } catch {}
}

function shuffle(a) {
  a = [...a];

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

// GESTION DES JOUEURS

function renderNames() {
  const wrap = $('nameList');
  wrap.replaceChildren();

  names.forEach((n, i) => {
    const chip = document.createElement('span');
    chip.className = 'chip';

    const t = document.createElement('span');
    t.textContent = n;

    const b = document.createElement('button');
    b.textContent = '×';
    b.setAttribute('aria-label', 'Retirer ' + n);

    b.onclick = () => {
      names.splice(i, 1);
      saveNames();
      renderNames();
      resetDraws();
    };

    chip.append(t, b);
    wrap.appendChild(chip);
  });

  $('rosterMessage').textContent =
    `${names.length} joueur(s) inscrit(s) · minimum 2`;

  $('startBtn').disabled = names.length < 2;

  const choices = $('specificPlayer');
  choices.replaceChildren();

  names.forEach((n, i) => {
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = n;
    choices.appendChild(o);
  });
}

function resetDraws() {
  bag = [];
}

// TIRAGE ÉQUILIBRÉ

function drawNames(count = 1) {
  if (names.length < count) return [];

  const picked = [];

  while (picked.length < count) {
    if (!bag.length) {
      bag = shuffle(names.map((_, i) => i));
    }

    let idx = bag.findIndex(i => !picked.includes(i));

    if (idx < 0) {
      bag = shuffle(
        names.map((_, i) => i)
          .filter(i => !picked.includes(i))
      );
      idx = 0;
    }

    picked.push(bag.splice(idx, 1)[0]);
  }

  return picked.map(i => names[i]);
}

// PIOCHE DES CARTES

function pullFrom(pool, key) {
  const valid = pool.map((x, i) => i)
    .filter(i => x[0] <= Number($('level').value));

  if (!valid.length) return null;

  let b = key === 'mystery' ? mysteryBag : chaosBag;

  b = b.filter(i => valid.includes(i));

  if (!b.length) b = shuffle(valid);

  const ix = b.pop();

  if (key === 'mystery') {
    mysteryBag = b;
  } else {
    chaosBag = b;
  }

  return pool[ix];
}

function pullQuestion() {
  const max = Number($('level').value);

  const valid = QUESTIONS.map((q, i) => i)
    .filter(i => q[0] <= max);

  questionBag = questionBag.filter(i => valid.includes(i));

  if (!questionBag.length) {
    questionBag = shuffle(valid);
  }

  return QUESTIONS[questionBag.pop()];
}

// PROGRESSION DE L'AMBIANCE

function updatePhase() {
  if ($('autoLevel').checked) {
    const target = Math.min(
      4,
      1 + Math.floor(cardNo / 8)
    );

    $('level').value = String(target);
  }
}

// ÉVÉNEMENTS CHAOS

function decrementSpecial() {
  if (special) {
    special.left--;

    if (special.left <= 0) {
      special = null;
    }
  }
}

// RELANCES

function resetRelances() {
  $('deep').classList.add('hidden');
  $('far').classList.add('hidden');

  $('deepBtn').disabled = !shown?.q;
  $('farBtn').disabled = !shown?.q;
}

// AFFICHAGE D'UNE CARTE

function renderCard() {
  const c = shown;
  if (!c) return;

  $('cardType').textContent = c.label;
  $('cardCount').textContent = `Carte ${cardNo}`;
  $('chosenName').textContent = c.players || '';
  $('question').textContent = c.text;
  $('instructions').textContent = c.info || '';

  $('deepText').textContent = c.q?.[3] || '';
  $('farText').textContent = c.q?.[4] || '';

  resetRelances();

  $('stats').textContent =
    `${names.length} joueurs · ${QUESTIONS.length} questions · ` +
    `${MYSTERIES.length} cartes Auteur Mystère · ` +
    `intensité ${$('level').value}/4`;

  $('specialBanner').classList.toggle(
    'hidden',
    !special
  );

  if (special) {
    $('specialBanner').textContent =
      `💥 Règle active (${special.left} carte(s) restante(s)) : ` +
      special.text;
  }
}

// MOTEUR DU JEU

function next(mode = 'auto', fixed = null) {
  if (names.length < 2) return;

  decrementSpecial();
  cardNo++;
  updatePhase();

  if (mode === 'auto') {
    const n = Math.random();

    mode = n < .6
      ? 'collective'
      : n < .9
      ? 'solo'
      : 'chaos';
  }

  let label = '';
  let players = '';
  let q = null;
  let text = '';
  let info = '';

  if (mode === 'chaos') {
    const e = pullFrom(CHAOS, 'chaos');

    label = '💥 ÉVÉNEMENT CHAOS';
    text = e[1];

    info =
      'Annonce cette règle au groupe, puis tire la carte suivante.';

    special = {
      text: e[1],
      left:
        e[1].includes('deux prochaines') ||
        e[1].includes('les deux prochaines')
          ? 3
          : 2
    };

  } else if (mode === 'mystery') {
    const e = pullFrom(MYSTERIES, 'mystery');

    label = '🕵️ AUTEUR MYSTÈRE';
    text = e[1];

    info =
      'Tout le monde écrit une réponse sur un papier, toi compris. ' +
      'Mélange les papiers, lis-les un par un et laissez le groupe ' +
      'deviner les auteurs. Personne n’est obligé de se dévoiler.';

  } else {
    q = pullQuestion();
    text = q[2];

    label =
      mode === 'solo' ? '🎯 LE HASARD CHOISIT' :
      mode === 'duel' ? '⚔️ DUEL' :
      mode === 'choose' ? '👑 LE MAÎTRE DÉCIDE' :
      '👥 TOUS ENSEMBLE';

    if (mode === 'solo') {
      players = drawNames(1).join('');
    }

    if (mode === 'duel') {
      players = drawNames(2).join(' & ');
    }

    if (mode === 'choose') {
      players = names[fixed] || names[0];
    }

    info = mode === 'collective'
      ? 'Chacun peut répondre à sa manière. Tu peux aussi faire ' +
        'deviner ta réponse avant de parler.'
      : mode === 'duel'
      ? 'Les deux personnes répondent, puis chacun peut réagir.'
      : 'La personne désignée répond librement. Les autres ' +
        'peuvent tenter de deviner sa réponse.';
  }

  
shown = {
  label: label,
  players: players,
  q: q,
  text: text,
  info: info
};

renderCard();

}

// AJOUT DE PARTICIPANTS

$('addForm').addEventListener('submit', e => {
  e.preventDefault();

  const n = $('nameInput').value
    .trim()
    .replace(/\s+/g, ' ');

  if (!n) return;

  if (
    names.some(
      x => x.toLocaleLowerCase('fr') ===
           n.toLocaleLowerCase('fr')
    )
  ) {
    $('rosterMessage').textContent =
      'Ce prénom est déjà inscrit. Ajoute une initiale si nécessaire.';
    return;
  }

  if (names.length >= 30) return;

  names.push(n);
  $('nameInput').value = '';

  saveNames();
  renderNames();
  resetDraws();

  $('nameInput').focus();
});

// DÉMARRER LA PARTIE

$('startBtn').onclick = () => {
  if (names.length < 2) return;

  $('setup').classList.add('hidden');
  $('game').classList.remove('hidden');

  cardNo = 0;
  bag = [];
  questionBag = [];
  mysteryBag = [];
  chaosBag = [];
  special = null;

  $('level').value = '1';

  next('collective');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// COMMANDES DU MAÎTRE DU CHAOS

$('editBtn').onclick = () => {
  $('game').classList.add('hidden');
  $('setup').classList.remove('hidden');
  renderNames();
};

$('nextBtn').onclick = () => next();

$('skipBtn').onclick = () => next(
  shown?.label.includes('AUTEUR')
    ? 'mystery'
    : 'collective'
);

$('deepBtn').onclick = () => {
  $('deep').classList.toggle('hidden');
};

$('farBtn').onclick = () => {
  $('far').classList.toggle('hidden');
};

document.querySelectorAll('[data-action]')
  .forEach(b => {
    b.onclick = () => {
      const m = b.dataset.action;

      if (m === 'choose') {
        $('chooseWrap').classList.toggle('hidden');
        return;
      }

      $('chooseWrap').classList.add('hidden');
      next(m);
    };
  });

$('chooseConfirm').onclick = () => {
  $('chooseWrap').classList.add('hidden');

  next(
    'choose',
    Number($('specificPlayer').value)
  );
};

// INTENSITÉ

$('level').onchange = () => {
  questionBag = [];
  mysteryBag = [];
  chaosBag = [];

  $('stats').textContent =
    `Ambiance choisie : ` +
    `${$('level').selectedOptions[0].textContent} · ` +
    `prochaine carte adaptée.`;
};

$('autoLevel').onchange = () => {
  $('stats').textContent =
    $('autoLevel').checked
      ? 'Progression douce activée.'
      : 'Intensité manuelle activée.';
};

// RECOMMENCER

$('resetBtn').onclick = () => {
  if (!confirm(
    'Recommencer la partie ? Les prénoms seront conservés.'
  )) return;

  cardNo = 0;
  bag = [];
  questionBag = [];
  mysteryBag = [];
  chaosBag = [];
  special = null;

  $('level').value = '1';

  next('collective');
};

// INITIALISATION

renderNames();


/* =========================================================
   DIAGNOSTIC DU CHAOS
========================================================= */

window.addEventListener('error', function(event) {
  const message = event.message || 'Erreur inconnue';

  document.getElementById('question').textContent =
    'ERREUR : ' + message;

  document.getElementById('stats').textContent =
    'Le moteur du jeu a rencontré une erreur.';
});

window.addEventListener('unhandledrejection', function(event) {
  document.getElementById('question').textContent =
    'ERREUR : ' + String(event.reason);
});

// Test du moteur de questions

function testerChaos() {
  try {
    if (names.length < 2) {
      alert('Seulement ' + names.length + ' joueur(s) détecté(s).');
      return;
    }

    next('collective');

    if (!shown || !shown.text) {
      alert('Aucune question récupérée.');
    }

  } catch (erreur) {
    alert(
      'ERREUR DU CHAOS :\n' +
      erreur.message
    );
  }
}

document.getElementById('nextBtn').addEventListener(
  'click',
  testerChaos
);

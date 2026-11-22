
'use strict';

/* =========================================================
   LE CHAOS DE PROMÉTHÉE
   VERSION 1.1 — MOTEUR CORRIGÉ

   Jeu d'apéro collectif
   Maître du Chaos
   Tirage équilibré
   Questions et relances
   Auteur Mystère
   Événements Chaos

   HTML : index.html
   CSS  : style.css
========================================================= */


/* =========================================================
   1. QUESTIONS PRINCIPALES

   Format :
   [
     niveau,
     thème,
     question,
     creuse un peu,
     encore plus loin
   ]
========================================================= */

const QUESTIONS = [

  // LES CHOIX

  [
    2,
    'Les choix',
    'Qu’est-ce qui pourrait te faire changer complètement de vie du jour au lendemain ?',
    'Qu’est-ce qui te manque aujourd’hui pour le faire ?',
    'Et qu’est-ce que tu serais prêt à abandonner pour y arriver ?'
  ],

  [
    2,
    'Les choix',
    'Si tu pouvais revenir sur une seule décision, laquelle choisirais-tu ?',
    'Qu’est-ce qui te fait penser que tu agirais autrement ?',
    'Et si cette décision avait aussi apporté quelque chose de positif que tu perdrais ?'
  ],

  [
    2,
    'Les choix',
    'Pour quelle raison serais-tu prêt à tout laisser tomber pendant une semaine ?',
    'Pourquoi cela compterait-il autant pour toi ?',
    'Et si tu n’avais le droit de prévenir personne ?'
  ],

  [
    2,
    'Les choix',
    'Qu’est-ce qui pourrait te faire dire oui alors que tu avais décidé de dire non ?',
    'Qu’est-ce qui est le plus difficile à refuser pour toi ?',
    'Et qui arriverait le plus facilement à te faire changer d’avis ?'
  ],


  // LES TENTATIONS

  [
    3,
    'Les tentations',
    'Quelle tentation as-tu le plus de mal à refuser ?',
    'Qu’est-ce qui la rend aussi irrésistible ?',
    'Quelle est la dernière fois où tu as complètement cédé ?'
  ],

  [
    3,
    'Les tentations',
    'Qu’est-ce qui pourrait te faire oublier toutes tes bonnes résolutions ?',
    'Est-ce que tu résisterais longtemps ?',
    'Et si personne ne devait jamais le savoir ?'
  ],

  [
    2,
    'Les tentations',
    'Quel plaisir t’accordes-tu parfois sans avoir envie de te justifier ?',
    'Qu’est-ce qui le rend si agréable ?',
    'Et quel plaisir n’as-tu jamais osé t’offrir ?'
  ],

  [
    2,
    'Les tentations',
    'Qu’est-ce qui pourrait te faire perdre toute notion du temps ?',
    'Qu’est-ce qui te captive autant ?',
    'Et as-tu déjà oublié quelque chose d’important à cause de ça ?'
  ],


  // LES LIMITES

  [
    3,
    'Les limites',
    'Qu’est-ce que tu n’accepterais jamais, même pour beaucoup d’argent ?',
    'Pourquoi cette limite est-elle importante pour toi ?',
    'Et si on te proposait dix fois plus que ce que tu imagines ?'
  ],

  [
    2,
    'Les limites',
    'Dans quelle situation pourrais-tu surprendre tout le monde par ta réaction ?',
    'Qu’est-ce qui déclencherait cette réaction ?',
    'Et as-tu déjà eu une réaction que tu ne te connaissais pas ?'
  ],

  [
    2,
    'Les limites',
    'Qu’est-ce qui pourrait te faire perdre ton calme immédiatement ?',
    'Est-ce que les autres remarquent facilement ton agacement ?',
    'Et quelle a été ta réaction la plus inattendue ?'
  ],

  [
    3,
    'Les limites',
    'Quelle règle serais-tu le plus tenté de contourner ?',
    'Qu’est-ce qui te dérange dans cette règle ?',
    'Et si tu étais certain de ne jamais te faire prendre ?'
  ],


  // LES PETITS SECRETS

  [
    3,
    'Les petits secrets',
    'Quelle est une chose que tu fais quand tu es seul et que personne ici ne soupçonnerait ?',
    'Depuis quand as-tu cette habitude ?',
    'Et est-ce que tu accepterais de la montrer ici ?'
  ],

  [
    2,
    'Les petits secrets',
    'Qu’est-ce que tu as déjà prétendu aimer pour faire plaisir à quelqu’un ?',
    'Combien de temps as-tu entretenu cette impression ?',
    'Et si cette personne te proposait de recommencer demain ?'
  ],

  [
    2,
    'Les petits secrets',
    'Quelle anecdote sur toi surprendrait le plus les personnes autour de cette table ?',
    'Pourquoi n’as-tu jamais eu l’occasion de la raconter ?',
    'Et quel détail pourrait encore davantage nous surprendre ?'
  ],

  [
    3,
    'Les petits secrets',
    'Quelle est la chose que tu as longtemps cachée par simple embarras et dont tu peux rire aujourd’hui ?',
    'Pourquoi cela te gênait-il autant ?',
    'Et comment réagirais-tu si quelqu’un te la rappelait devant tout le monde ?'
  ],


  // LES RELATIONS

  [
    3,
    'Les relations',
    'Qu’est-ce qui te donne immédiatement envie de mieux connaître quelqu’un ?',
    'Qu’est-ce que tu remarques en premier chez cette personne ?',
    'Et as-tu déjà été attiré par quelqu’un qui ne correspondait à aucun de tes critères ?'
  ],

  [
    2,
    'Les relations',
    'Qu’est-ce qui pourrait te faire changer complètement d’avis sur quelqu’un ?',
    'As-tu déjà vécu ce retournement d’opinion ?',
    'Et pourrais-tu reconnaître devant cette personne que tu t’étais trompé ?'
  ],

  [
    2,
    'Les relations',
    'Quelle qualité chez quelqu’un peut te faire oublier beaucoup de ses défauts ?',
    'Pourquoi cette qualité compte-t-elle autant ?',
    'Et jusqu’où serais-tu capable de fermer les yeux sur ses défauts ?'
  ],

  [
    2,
    'Les relations',
    'Quel est le comportement que tu as le plus de mal à comprendre chez les autres ?',
    'Comment réagis-tu généralement face à lui ?',
    'Et si quelqu’un ici te disait que tu fais exactement la même chose ?'
  ],


  // LES CONTRADICTIONS

  [
    2,
    'Les contradictions',
    'Quel conseil donnes-tu facilement mais as-tu beaucoup de mal à appliquer toi-même ?',
    'Pourquoi est-ce plus facile de le conseiller ?',
    'Et quand as-tu fait exactement le contraire de ce que tu conseillais ?'
  ],

  [
    2,
    'Les contradictions',
    'Quelle chose critiques-tu parfois alors que tu sais très bien que tu la fais aussi ?',
    'Pourquoi continues-tu à la critiquer ?',
    'Et si quelqu’un ici te prenait en flagrant délit ?'
  ],

  [
    2,
    'Les contradictions',
    'Sur quel sujet pourrais-tu changer d’avis en quelques minutes ?',
    'Qu’est-ce qui te convainc le plus facilement ?',
    'Et as-tu déjà défendu deux opinions complètement opposées dans la même journée ?'
  ],

  [
    3,
    'Les contradictions',
    'Quelle est la plus grande différence entre ce que tu montres aux autres et ce que tu ressens réellement ?',
    'Pourquoi gardes-tu parfois cette différence ?',
    'Et dans quelle situation laisses-tu tomber cette façade ?'
  ],


  // DÉCOUVERTES

  [
    1,
    'Découvertes',
    'Quelle est la première chose que tu ferais si tu avais une journée entière sans aucune obligation ?',
    'Pourquoi choisirais-tu cette activité ?',
    'Et qu’est-ce que tu n’oserais pas faire si on te regardait ?'
  ],

  [
    1,
    'Découvertes',
    'Si tu devais donner un nouveau titre à ta vie en ce moment, lequel choisirais-tu ?',
    'Qu’est-ce qui justifie ce titre ?',
    'Et quel titre tes proches lui donneraient-ils ?'
  ],

  [
    1,
    'Découvertes',
    'Qu’est-ce qui te fait rire même lorsque tu es de mauvaise humeur ?',
    'Pourquoi cela fonctionne-t-il si bien ?',
    'Est-ce qu’il t’est déjà arrivé d’éclater de rire au pire moment ?'
  ],

  [
    1,
    'Découvertes',
    'Quelle habitude chez toi étonne les gens quand ils la découvrent ?',
    'D’où te vient-elle ?',
    'Et laquelle aimerais-tu perdre sans trop savoir comment ?'
  ],

  [
    1,
    'Découvertes',
    'Quel talent caché pourrais-tu nous révéler aujourd’hui ?',
    'Comment l’as-tu découvert ?',
    'Tu serais capable de nous en donner un aperçu ?'
  ],

  [
    1,
    'Découvertes',
    'Quelle rencontre a changé ton avis sur quelque chose ?',
    'Qu’est-ce qui t’a surpris ?',
    'Est-ce que la personne sait qu’elle a changé ton avis ?'
  ],

  [
    1,
    'Découvertes',
    'Quelle est la chose que tu aimerais mieux savoir faire ?',
    'Pourquoi celle-là ?',
    'Quelle excuse te racontes-tu pour ne pas commencer ?'
  ],

  [
    1,
    'Découvertes',
    'À quel moment te sens-tu le plus toi-même ?',
    'Qu’est-ce qui change dans ton comportement ?',
    'Et quand as-tu fait semblant d’être quelqu’un d’autre ?'
  ],


  // SANS FILTRE

  [
    3,
    'Sans filtre',
    'Qu’est-ce que tu as déjà fait pour impressionner quelqu’un ?',
    'Est-ce que ça a fonctionné ?',
    'Quelle partie de l’histoire ne racontes-tu pas d’habitude ?'
  ],

  [
    3,
    'Sans filtre',
    'Quelle est la situation la plus gênante dont tu ris maintenant ?',
    'Comment as-tu réagi sur le moment ?',
    'Et quel détail rendrait cette histoire encore meilleure ?'
  ],

  [
    3,
    'Sans filtre',
    'Quelle excuse as-tu déjà inventée pour te sortir d’une situation ?',
    'Est-ce qu’on t’a cru ?',
    'Et si la personne concernée était ici aujourd’hui ?'
  ],

  [
    3,
    'Sans filtre',
    'Sur quel sujet te trouves-tu beaucoup plus audacieux que les autres ne le pensent ?',
    'D’où te vient cette assurance ?',
    'Et est-ce que tu nous donnerais un exemple vécu ?'
  ],


  // PLUS OSÉ

  [
    4,
    'Plus osé',
    'Qu’est-ce qui peut te faire craquer chez quelqu’un en quelques secondes ?',
    'Pourquoi ce détail-là ?',
    'Et as-tu déjà eu un coup de cœur que personne n’aurait imaginé ?'
  ],

  [
    4,
    'Plus osé',
    'Quelle est ta meilleure histoire de rendez-vous qui a mal tourné ?',
    'Quel a été le premier signe que ça dérapait ?',
    'Quel détail as-tu épargné à tes amis en la racontant ?'
  ],

  [
    4,
    'Plus osé',
    'Quelle phrase anodine peut devenir très suggestive selon la façon dont on la dit ?',
    'Qu’est-ce qui change tout selon toi ?',
    'Tu nous en fais une démonstration théâtrale ?'
  ],

  [
    4,
    'Plus osé',
    'Qu’as-tu déjà eu envie de dire à quelqu’un sans trouver le courage ?',
    'Qu’est-ce qui t’a arrêté ?',
    'Et si tu pouvais le dire sans aucune conséquence ?'
  ],

  [
    4,
    'Plus osé',
    'Quelle a été ta plus grande surprise dans une histoire de séduction ?',
    'Qu’est-ce qui t’a étonné ?',
    'Est-ce que tu avais complètement mal interprété les signes ?'
  ],

  [
    4,
    'Plus osé',
    'Qu’est-ce qui pourrait te convaincre d’accepter un rendez-vous totalement improbable ?',
    'Qu’est-ce qui piquerait ta curiosité ?',
    'Et quel détail te ferait changer d’avis à la dernière seconde ?'
  ],

  [
    4,
    'Plus osé',
    'Quelle est ta manière la plus maladroite de montrer que quelqu’un te plaît ?',
    'La personne s’en rend-elle compte ?',
    'Tu accepterais de la rejouer en version exagérée ?'
  ],

  [
    4,
    'Plus osé',
    'Quelle question aimerais-tu parfois poser mais n’oses jamais demander ?',
    'Pourquoi est-elle difficile à poser ?',
    'Tu veux nous la poser, sans désigner personne ?'
  ],
   
/* =========================================================
   NOUVELLES QUESTIONS — SÉRIE 3
   LE CHAOS DE PROMÉTHÉE
========================================================= */

// CE QU'ON N'IMAGINE PAS DE TOI

[
  2,
  'Les surprises',
  'Quelle est la chose que les autres seraient les plus surpris de découvrir chez toi ?',
  'Pourquoi cette facette de toi est-elle si peu connue ?',
  'Et est-ce que tu aimerais vraiment que les autres la découvrent ?'
],

[
  2,
  'Les surprises',
  'Dans quelle situation es-tu complètement différent de ton comportement habituel ?',
  'Qu’est-ce qui provoque ce changement ?',
  'Et qui a déjà eu la surprise de découvrir cette autre version de toi ?'
],

[
  1,
  'Les surprises',
  'Quelle chose te procure un plaisir que les autres auraient du mal à comprendre ?',
  'Qu’est-ce qui te plaît autant ?',
  'Et jusqu’où serais-tu capable d’aller pour ce plaisir ?'
],

[
  3,
  'Les surprises',
  'Qu’est-ce que tu as déjà fait et que tu pensais ne jamais être capable de faire ?',
  'Qu’est-ce qui t’a finalement poussé à agir ?',
  'Et est-ce que tu serais capable de recommencer aujourd’hui ?'
],

[
  2,
  'Les surprises',
  'Quelle première impression les gens ont-ils de toi qui est complètement fausse ?',
  'Pourquoi donnent-ils cette impression de toi ?',
  'Et quelle serait leur réaction s’ils connaissaient vraiment cette facette ?'
],


// LES ENVIES

[
  2,
  'Les envies',
  'Si tu pouvais réaliser une envie sans aucune contrainte, laquelle choisirais-tu ?',
  'Depuis combien de temps en as-tu envie ?',
  'Et quelle est la véritable raison pour laquelle tu ne l’as pas encore fait ?'
],

[
  3,
  'Les envies',
  'Qu’est-ce que tu aimerais essayer au moins une fois dans ta vie ?',
  'Qu’est-ce qui t’attire dans cette expérience ?',
  'Et avec qui aimerais-tu vraiment la partager ?'
],

[
  3,
  'Les envies',
  'Quelle proposition pourrait te faire agir sans réfléchir ?',
  'Qu’est-ce qui te ferait perdre toute prudence ?',
  'Et as-tu déjà accepté quelque chose que tu as regretté ensuite ?'
],

[
  2,
  'Les envies',
  'Qu’est-ce que tu aimerais faire plus souvent mais que tu ne t’autorises pas assez ?',
  'Pourquoi te l’interdis-tu ?',
  'Et qu’est-ce qui pourrait te faire changer d’avis dès demain ?'
],

[
  4,
  'Les envies',
  'Quelle expérience aimerais-tu vivre mais n’as-tu jamais osé proposer ?',
  'Qu’est-ce qui te retient ?',
  'Et si quelqu’un te proposait exactement cette expérience ce soir ?'
],


// LES RÉACTIONS

[
  2,
  'Les réactions',
  'Comment réagis-tu quand quelque chose ne se passe absolument pas comme prévu ?',
  'Qu’est-ce qui te dérange le plus dans cette situation ?',
  'Et quelle a été ta réaction la plus surprenante ?'
],

[
  2,
  'Les réactions',
  'Quelle situation peut te faire changer d’humeur en quelques secondes ?',
  'Pourquoi est-elle aussi efficace sur toi ?',
  'Et les autres savent-ils reconnaître ce changement ?'
],

[
  3,
  'Les réactions',
  'Qu’est-ce qui pourrait te faire sortir complètement de ta réserve ?',
  'Qu’est-ce qui déclencherait cette réaction ?',
  'Et est-ce que quelqu’un t’a déjà découvert sous ce jour ?'
],

[
  2,
  'Les réactions',
  'Comment réagis-tu quand quelqu’un te met au défi ?',
  'Qu’est-ce qui te pousse à accepter ou à refuser ?',
  'Et quel défi as-tu accepté uniquement par fierté ?'
],

[
  3,
  'Les réactions',
  'Quelle situation pourrait te faire perdre tous tes moyens ?',
  'Qu’est-ce qui te déstabiliserait le plus ?',
  'Et cela t’est-il déjà arrivé devant quelqu’un que tu voulais impressionner ?'
],


// LES CONTRADICTIONS

[
  2,
  'Les contradictions',
  'Quelle chose affirmes-tu ne jamais vouloir faire alors que tu sais que tu pourrais céder ?',
  'Qu’est-ce qui pourrait te faire changer d’avis ?',
  'Et à quel point serais-tu facile à convaincre ?'
],

[
  3,
  'Les contradictions',
  'Sur quel sujet as-tu tendance à ne pas suivre tes propres principes ?',
  'Pourquoi fais-tu une exception ?',
  'Et quelle est la dernière fois où tu as franchi cette limite ?'
],

[
  2,
  'Les contradictions',
  'Quelle qualité apprécies-tu chez les autres mais as-tu du mal à développer toi-même ?',
  'Pourquoi est-elle difficile pour toi ?',
  'Et dans quelle situation aimerais-tu vraiment la posséder ?'
],

[
  3,
  'Les contradictions',
  'Quelle chose te semble attirante et inquiétante à la fois ?',
  'Qu’est-ce qui t’attire et qu’est-ce qui te retient ?',
  'Et si tu étais certain que tout se passerait bien, oserais-tu ?'
],

[
  3,
  'Les contradictions',
  'Quelle est la dernière fois où tu as surpris quelqu’un en faisant le contraire de ce qu’il attendait ?',
  'Pourquoi as-tu agi ainsi ?',
  'Et est-ce que tu avais secrètement envie de provoquer cette surprise ?'
],


// LES RELATIONS HUMAINES

[
  2,
  'Les relations',
  'Qu’est-ce qui peut te rendre immédiatement complice avec quelqu’un ?',
  'Pourquoi cette complicité fonctionne-t-elle ?',
  'Et as-tu déjà ressenti cette complicité avec une personne totalement inattendue ?'
],

[
  3,
  'Les relations',
  'Qu’est-ce qui pourrait te faire perdre confiance en quelqu’un ?',
  'Pourquoi ce comportement te touche-t-il autant ?',
  'Et pourrais-tu lui redonner une chance ?'
],

[
  2,
  'Les relations',
  'Quelle attitude chez une personne peut complètement te désarmer ?',
  'Qu’est-ce qui te touche autant dans cette attitude ?',
  'Et t’est-il déjà arrivé de changer tous tes plans à cause de quelqu’un ?'
],

[
  3,
  'Les relations',
  'Qu’est-ce que tu trouves séduisant chez quelqu’un sans forcément savoir l’expliquer ?',
  'Qu’est-ce que cela provoque chez toi ?',
  'Et as-tu déjà été surpris par une attirance totalement inattendue ?'
],

[
  4,
  'Les relations',
  'Quelle situation pourrait te pousser à faire le premier pas alors que tu ne le fais jamais ?',
  'Qu’est-ce qui te donnerait suffisamment confiance ?',
  'Et jusqu’où serais-tu prêt à sortir de tes habitudes pour cette personne ?'
],


// CE QU'ON N'OSE PAS TOUJOURS AVOUER

[
  3,
  'Les confidences',
  'Quelle chose as-tu déjà faite uniquement parce que tu avais peur de dire non ?',
  'Qu’est-ce qui t’empêchait de refuser ?',
  'Et aujourd’hui, réagirais-tu de la même façon ?'
],

[
  3,
  'Les confidences',
  'Quel moment de ta vie t’a fait découvrir quelque chose d’inattendu sur toi-même ?',
  'Qu’as-tu compris à ce moment-là ?',
  'Et est-ce que les autres connaissent cette facette de toi ?'
],

[
  3,
  'Les confidences',
  'Quelle est la chose que tu regrettes de ne pas avoir osé faire ?',
  'Qu’est-ce qui t’avait retenu ?',
  'Et si la même occasion se présentait aujourd’hui ?'
],

[
  4,
  'Les confidences',
  'Qu’est-ce que tu as déjà eu envie de faire mais que tu n’aurais jamais osé raconter à tes amis ?',
  'Pourquoi aurais-tu préféré le garder pour toi ?',
  'Et est-ce que tu serais capable de nous en parler aujourd’hui ?'
],

[
  4,
  'Les confidences',
  'Quelle situation t’a déjà fait oublier complètement tes principes ou tes bonnes résolutions ?',
  'Qu’est-ce qui t’a fait céder ?',
  'Et si cette situation se reproduisait demain, résisterais-tu davantage ?'
],
   
/* =========================================================
   SÉRIE 4 — CE QU'ON NE SAIT PAS ENCORE DE TOI
   30 QUESTIONS + 60 RELANCES
========================================================= */

// LES APPARENCES

[
  2,
  'Les apparences',
  'Quelle image de toi aimerais-tu parfois changer ?',
  'Pourquoi penses-tu que les autres te voient ainsi ?',
  'Et quelle partie de toi préfères-tu finalement garder mystérieuse ?'
],

[
  2,
  'Les apparences',
  'Dans quelle situation fais-tu semblant d’être plus sûr de toi que tu ne l’es réellement ?',
  'Qu’est-ce qui te pousse à donner cette impression ?',
  'Et quelqu’un a-t-il déjà découvert que tu bluffais ?'
],

[
  3,
  'Les apparences',
  'Quelle facette de ta personnalité ne montres-tu qu’à certaines personnes ?',
  'Qu’est-ce qui te permet de la montrer avec elles ?',
  'Et quelle réaction aurais-tu si tout le monde ici la découvrait ?'
],

[
  2,
  'Les apparences',
  'Qu’est-ce que les gens pensent que tu adores alors que ce n’est pas vraiment le cas ?',
  'Pourquoi les laisses-tu parfois le croire ?',
  'Et depuis combien de temps entretiens-tu cette illusion ?'
],

[
  3,
  'Les apparences',
  'Quelle chose arrives-tu particulièrement bien à cacher lorsque tu es avec d’autres personnes ?',
  'Comment fais-tu pour ne rien laisser paraître ?',
  'Et quelqu’un a-t-il déjà réussi à te démasquer ?'
],


// LES DÉCISIONS

[
  2,
  'Les décisions',
  'Quelle décision as-tu prise contre l’avis de tout le monde ?',
  'Qu’est-ce qui te rendait aussi sûr de toi ?',
  'Et est-ce que tu as fini par donner raison aux autres ?'
],

[
  2,
  'Les décisions',
  'Dans quelle situation préfères-tu suivre ton instinct plutôt que réfléchir ?',
  'Pourquoi fais-tu davantage confiance à ton instinct ?',
  'Et quelle fois t’a-t-il complètement trompé ?'
],

[
  3,
  'Les décisions',
  'Qu’est-ce qui pourrait te faire prendre une décision complètement inattendue ?',
  'Qu’est-ce qui aurait le plus d’influence sur toi ?',
  'Et as-tu déjà surpris tes proches avec une décision prise en quelques minutes ?'
],

[
  2,
  'Les décisions',
  'Quelle occasion as-tu laissée passer et à laquelle tu repenses encore parfois ?',
  'Qu’est-ce qui t’avait fait hésiter ?',
  'Et si cette occasion revenait demain, ferais-tu vraiment autrement ?'
],

[
  3,
  'Les décisions',
  'Qu’est-ce qui pourrait te faire changer d’avis sur une chose que tu considères comme essentielle ?',
  'Pourquoi y tiens-tu autant ?',
  'Et as-tu déjà dû reconnaître que tu t’étais complètement trompé ?'
],


// LES PETITS MENSONGES

[
  2,
  'Les petits mensonges',
  'Dans quelle situation as-tu tendance à arranger un peu la vérité ?',
  'Qu’est-ce que tu cherches à éviter ?',
  'Et quelle fois ton histoire est-elle devenue difficile à tenir ?'
],

[
  3,
  'Les petits mensonges',
  'Quel mensonge inoffensif as-tu entretenu beaucoup plus longtemps que prévu ?',
  'Pourquoi ne l’as-tu pas corrigé immédiatement ?',
  'Et si la vérité était révélée aujourd’hui, qui serait le plus surpris ?'
],

[
  2,
  'Les petits mensonges',
  'Qu’est-ce que tu as déjà fait semblant de comprendre alors que tu n’y comprenais absolument rien ?',
  'Pourquoi n’as-tu pas osé demander une explication ?',
  'Et combien de temps as-tu réussi à faire illusion ?'
],

[
  3,
  'Les petits mensonges',
  'Quelle excuse as-tu déjà donnée alors que la véritable raison était beaucoup plus personnelle ?',
  'Pourquoi préférais-tu garder cette raison pour toi ?',
  'Et aujourd’hui, serais-tu capable de dire simplement la vérité ?'
],

[
  2,
  'Les petits mensonges',
  'Quelle chose as-tu déjà exagérée pour rendre une histoire plus intéressante ?',
  'Qu’est-ce qui te plaisait dans cette version ?',
  'Et quelle serait la réaction des autres s’ils connaissaient les deux versions ?'
],


// LES ENVIES SECRÈTES

[
  3,
  'Les envies secrètes',
  'Quelle envie te traverse parfois l’esprit sans que tu cherches vraiment à la réaliser ?',
  'Qu’est-ce qui te plaît dans cette idée ?',
  'Et qu’est-ce qui pourrait te pousser à franchir le pas ?'
],

[
  4,
  'Les envies secrètes',
  'Quelle expérience serais-tu tenté de vivre si tu pouvais être certain de ne pas être jugé ?',
  'Qu’est-ce qui te retient aujourd’hui ?',
  'Et est-ce une envie passagère ou quelque chose auquel tu penses depuis longtemps ?'
],

[
  3,
  'Les envies secrètes',
  'Quelle chose as-tu envie de découvrir mais n’as-tu jamais osé demander ?',
  'Pourquoi cette curiosité t’intéresse-t-elle autant ?',
  'Et à qui aimerais-tu pouvoir poser cette question librement ?'
],

[
  4,
  'Les envies secrètes',
  'Quelle proposition inattendue pourrait vraiment te faire hésiter ?',
  'Qu’est-ce qui te donnerait envie d’accepter ?',
  'Et si tu n’avais que dix secondes pour répondre ?'
],

[
  3,
  'Les envies secrètes',
  'Quelle partie de ta vie aimerais-tu rendre un peu plus imprévisible ?',
  'Qu’est-ce qui te manque actuellement ?',
  'Et quelle serait la première folie raisonnable que tu pourrais tenter ?'
],


// LES RELATIONS

[
  2,
  'Les relations',
  'Qu’est-ce qui te fait sentir immédiatement à l’aise avec quelqu’un ?',
  'Pourquoi est-ce important pour toi ?',
  'Et as-tu déjà ressenti cette confiance avec une personne rencontrée depuis quelques minutes ?'
],

[
  3,
  'Les relations',
  'Quelle attitude chez quelqu’un peut complètement te faire changer de comportement ?',
  'Qu’est-ce que cette attitude provoque chez toi ?',
  'Et est-ce que cela t’a déjà amené à faire quelque chose d’inhabituel ?'
],

[
  3,
  'Les relations',
  'Qu’est-ce qui pourrait te faire reprendre contact avec quelqu’un après plusieurs années ?',
  'Qu’est-ce qui te donnerait envie de retrouver cette personne ?',
  'Et y a-t-il une conversation que tu aimerais pouvoir reprendre ?'
],

[
  4,
  'Les relations',
  'Quelle situation pourrait te faire oublier toute ta timidité ?',
  'Qu’est-ce qui te donnerait soudainement confiance ?',
  'Et as-tu déjà osé faire quelque chose qui t’aurait semblé impossible quelques minutes auparavant ?'
],

[
  3,
  'Les relations',
  'Qu’est-ce qui te touche le plus dans une attention venant de quelqu’un ?',
  'Pourquoi ce geste a-t-il autant de valeur pour toi ?',
  'Et quelle attention t’a déjà complètement surpris ?'
],


// LES MOMENTS INATTENDUS

[
  2,
  'Les moments inattendus',
  'Quel événement a pris une tournure que tu n’aurais jamais imaginée ?',
  'À quel moment as-tu compris que rien ne se passait comme prévu ?',
  'Et quelle partie de cette histoire surprendrait le plus les personnes ici ?'
],

[
  2,
  'Les moments inattendus',
  'Quelle rencontre improbable t’a laissé un souvenir particulier ?',
  'Qu’est-ce qui rendait cette rencontre si différente ?',
  'Et si tu pouvais revoir cette personne aujourd’hui, que lui dirais-tu ?'
],

[
  3,
  'Les moments inattendus',
  'Quelle situation t’a obligé à improviser complètement ?',
  'Comment as-tu trouvé une solution ?',
  'Et as-tu raconté toute la vérité sur la façon dont tu t’en es sorti ?'
],

[
  3,
  'Les moments inattendus',
  'Quelle est la dernière fois où tu t’es surpris toi-même ?',
  'Qu’est-ce que cette situation t’a appris sur toi ?',
  'Et est-ce que les autres auraient imaginé cette réaction de ta part ?'
],

[
  4,
  'Les moments inattendus',
  'Quel moment inattendu t’a donné envie de faire quelque chose que tu n’aurais jamais envisagé auparavant ?',
  'Qu’est-ce qui a déclenché cette envie ?',
  'Et est-ce que tu es finalement allé jusqu’au bout ?'
],
   
/* =========================================================
   SÉRIE 5 — DERRIÈRE LES APPARENCES
   30 QUESTIONS + 60 RELANCES
========================================================= */


// LES DILEMMES

[
  2,
  'Les dilemmes',
  'Qu’est-ce qui serait le plus difficile pour toi : renoncer à quelque chose que tu aimes ou accepter quelque chose que tu détestes ?',
  'Qu’est-ce qui influencerait le plus ton choix ?',
  'Et si ton choix pouvait changer complètement ton avenir ?'
],

[
  3,
  'Les dilemmes',
  'Si tu pouvais découvrir ce que les gens pensent réellement de toi, voudrais-tu le savoir ?',
  'Qu’est-ce que tu espérerais apprendre ?',
  'Et si tu découvrais quelque chose que tu n’avais jamais imaginé ?'
],

[
  2,
  'Les dilemmes',
  'Préférerais-tu connaître à l’avance une grande surprise ou la découvrir au dernier moment ?',
  'Pourquoi cette préférence ?',
  'Et si cette surprise pouvait bouleverser ta vie ?'
],

[
  3,
  'Les dilemmes',
  'Qu’est-ce qui pourrait te pousser à choisir ton envie plutôt que la raison ?',
  'Dans quelle situation suivrais-tu ton envie ?',
  'Et quelle décision as-tu déjà prise en sachant parfaitement que ce n’était pas raisonnable ?'
],

[
  3,
  'Les dilemmes',
  'Si tu devais choisir entre une vie très confortable et une vie pleine d’imprévus, vers laquelle irais-tu ?',
  'Qu’est-ce que tu rechercherais dans ce choix ?',
  'Et serais-tu capable de tout recommencer pour vivre autrement ?'
],


// LA CONFIANCE

[
  2,
  'La confiance',
  'Qu’est-ce qui te donne envie de faire confiance à quelqu’un ?',
  'Quel détail fait la différence pour toi ?',
  'Et as-tu déjà accordé ta confiance beaucoup trop rapidement ?'
],

[
  3,
  'La confiance',
  'Quelle chose pourrais-tu pardonner facilement alors que d’autres ne la pardonneraient jamais ?',
  'Pourquoi serais-tu capable de passer dessus ?',
  'Et y a-t-il une situation où tu as surpris quelqu’un par ton pardon ?'
],

[
  2,
  'La confiance',
  'Quand tu rencontres quelqu’un, qu’est-ce qui attire ton attention en premier ?',
  'Pourquoi remarques-tu particulièrement ce détail ?',
  'Et as-tu déjà eu une première impression complètement trompeuse ?'
],

[
  3,
  'La confiance',
  'Qu’est-ce qui pourrait te faire raconter quelque chose de personnel à une personne que tu connais à peine ?',
  'Qu’est-ce qui te mettrait suffisamment en confiance ?',
  'Et as-tu déjà confié quelque chose à un inconnu que tes proches ne savaient pas ?'
],

[
  3,
  'La confiance',
  'Quelle est la chose que tu aimerais que les autres comprennent mieux chez toi ?',
  'Pourquoi est-ce important pour toi ?',
  'Et qu’est-ce qui t’empêche parfois de leur expliquer ?'
],


// LES TENTATIONS

[
  2,
  'Les tentations',
  'Quelle chose pourrais-tu accepter simplement parce que l’occasion ne se présenterait qu’une seule fois ?',
  'Qu’est-ce qui te donnerait envie de tenter ta chance ?',
  'Et quelle occasion as-tu déjà saisie alors que tu hésitais énormément ?'
],

[
  3,
  'Les tentations',
  'Dans quelle situation pourrais-tu te laisser entraîner beaucoup plus loin que prévu ?',
  'Qu’est-ce qui pourrait te faire perdre la notion des limites ?',
  'Et t’est-il déjà arrivé de te dire après coup : « Je n’aurais jamais cru faire ça » ?'
],

[
  4,
  'Les tentations',
  'Quelle proposition te ferait hésiter entre être raisonnable et te faire plaisir ?',
  'Qu’est-ce qui pèserait le plus dans ta décision ?',
  'Et si tu savais que personne ne te demanderait de te justifier ?'
],

[
  3,
  'Les tentations',
  'Qu’est-ce qui pourrait te faire oublier complètement tes habitudes ?',
  'Qu’est-ce qui te donnerait envie de changer ?',
  'Et quelle habitude as-tu déjà abandonnée sur un simple coup de tête ?'
],

[
  4,
  'Les tentations',
  'Quelle curiosité aimerais-tu satisfaire au moins une fois ?',
  'Qu’est-ce qui te donne envie d’en savoir davantage ?',
  'Et quelle question n’as-tu encore jamais osé poser à ce sujet ?'
],


// LES SURPRISES

[
  1,
  'Les surprises',
  'Quelle activité as-tu découverte presque par hasard et que tu as finalement adorée ?',
  'Qu’est-ce qui t’a donné envie de continuer ?',
  'Et quelle autre activité inattendue accepterais-tu d’essayer maintenant ?'
],

[
  2,
  'Les surprises',
  'Quelle chose pensais-tu ne jamais aimer avant de changer complètement d’avis ?',
  'Qu’est-ce qui a provoqué ce changement ?',
  'Et qu’est-ce que tu refuses encore d’essayer aujourd’hui ?'
],

[
  2,
  'Les surprises',
  'Quel événement t’a fait découvrir une qualité que tu ne pensais pas posséder ?',
  'Comment t’en es-tu rendu compte ?',
  'Et est-ce que les personnes qui te connaissent seraient surprises par cette qualité ?'
],

[
  3,
  'Les surprises',
  'Quelle situation t’a déjà fait agir à l’opposé de tes habitudes ?',
  'Qu’est-ce qui t’a poussé à réagir ainsi ?',
  'Et si cette situation se reproduisait, ferais-tu la même chose ?'
],

[
  2,
  'Les surprises',
  'Quelle chose les gens sont-ils toujours étonnés d’apprendre à ton sujet ?',
  'Pourquoi cela les surprend-il autant ?',
  'Et quelle autre facette de toi n’ont-ils probablement pas encore découverte ?'
],


// LES RELATIONS

[
  2,
  'Les relations',
  'Quelle est la chose la plus importante pour toi dans une relation avec quelqu’un ?',
  'Pourquoi cette chose compte-t-elle autant ?',
  'Et as-tu déjà accepté une relation où elle manquait ?'
],

[
  3,
  'Les relations',
  'Qu’est-ce qui pourrait te donner envie de revoir une personne après une seule rencontre ?',
  'Qu’est-ce qui resterait dans ton esprit ?',
  'Et as-tu déjà fait le premier pas alors que cela ne te ressemblait pas ?'
],

[
  3,
  'Les relations',
  'Quel comportement chez quelqu’un peut te faire complètement perdre tes moyens ?',
  'Qu’est-ce que cela provoque chez toi ?',
  'Et comment essaies-tu de cacher ta réaction ?'
],

[
  4,
  'Les relations',
  'Quelle est la chose la plus inattendue qui pourrait te séduire chez quelqu’un ?',
  'Pourquoi ce détail pourrait-il te toucher ?',
  'Et as-tu déjà été attiré par une personne qui ne correspondait absolument pas à tes habitudes ?'
],

[
  3,
  'Les relations',
  'Qu’est-ce qui te ferait accepter de sortir complètement de ta zone de confort pour quelqu’un ?',
  'Qu’est-ce qui rendrait cette personne si importante ?',
  'Et jusqu’où serais-tu capable d’aller sans te reconnaître toi-même ?'
],


// LES VÉRITÉS PERSONNELLES

[
  2,
  'Les vérités personnelles',
  'Quelle chose as-tu comprise sur toi avec les années ?',
  'Qu’est-ce qui t’a permis de le comprendre ?',
  'Et si tu pouvais en parler à la personne que tu étais il y a dix ans ?'
],

[
  3,
  'Les vérités personnelles',
  'Quel aspect de ta personnalité as-tu longtemps essayé de changer ?',
  'Pourquoi voulais-tu le modifier ?',
  'Et as-tu finalement appris à l’accepter ?'
],

[
  2,
  'Les vérités personnelles',
  'Quelle chose te rend heureux alors que d’autres pourraient la trouver sans intérêt ?',
  'Pourquoi est-elle si importante pour toi ?',
  'Et est-ce que tu accepterais de partager ce plaisir avec quelqu’un ici ?'
],

[
  3,
  'Les vérités personnelles',
  'Dans quelle situation préfères-tu cacher ce que tu ressens réellement ?',
  'Qu’est-ce qui te pousse à agir ainsi ?',
  'Et quelqu’un a-t-il déjà réussi à comprendre ce que tu cachais ?'
],

[
  4,
  'Les vérités personnelles',
  'Quelle vérité sur toi aurais-tu aimé comprendre beaucoup plus tôt ?',
  'Qu’est-ce qui t’a empêché de la voir ?',
  'Et qu’est-ce qui changerait si tout le monde te connaissait aussi bien que tu te connais aujourd’hui ?'
]




];


/* =========================================================
   2. AUTEUR MYSTÈRE

   Tout le monde écrit sa réponse.
   Le Maître mélange les papiers.
   Le groupe recherche les auteurs.
========================================================= */

const MYSTERIES = [

  [1, 'Quelle est une habitude que tu as et que les autres ne devineraient pas ?'],

  [1, 'Quel objet totalement inattendu gardes-tu chez toi ?'],

  [2, 'Quelle chose as-tu longtemps cru vraie avant de découvrir ton erreur ?'],

  [2, 'Quelle passion ou envie n’as-tu presque jamais racontée ?'],

  [2, 'Quel choix as-tu fait que les autres n’auraient pas imaginé ?'],

  [3, 'Quelle situation t’a fait rougir alors que tu ne t’y attendais pas ?'],

  [3, 'Quelle petite manie aimerais-tu garder secrète ?'],

  [3, 'Quelle phrase as-tu déjà prononcée et qui, sortie de son contexte, semble très suspecte ?'],

  [4, 'Quelle expérience osée ou inattendue pourrais-tu raconter sans citer de noms ?'],

  [4, 'Quelle tentative de séduction t’a laissé un souvenir mémorable ?']

];


/* =========================================================
   3. ÉVÉNEMENTS CHAOS

   Format :
   [niveau, règle, nombre de cartes suivantes]
========================================================= */

const CHAOS = [

  [
    1,
    'Chacun doit commencer sa réponse par « Votre Majesté ».',
    2
  ],

  [
    1,
    'Tout le monde doit répondre avec un sérieux absolu.',
    1
  ],

  [
    1,
    'Chacun doit prendre une voix de personnage de film.',
    1
  ],

  [
    2,
    'Personne ne peut prononcer « moi » dans sa réponse.',
    2
  ],

  [
    2,
    'Essayez de deviner la réponse du Maître du Chaos avant de l’entendre.',
    1
  ],

  [
    2,
    'Chaque réponse doit commencer par « Je dois vous avouer que… ».',
    1
  ],

  [
    3,
    'Celui qui répond doit inventer un titre de film pour sa réponse.',
    1
  ],

  [
    3,
    'Chacun peut demander une fois « Tu es sûr ? » après une réponse.',
    2
  ],

  [
    4,
    'Le Maître peut proposer une relance « Encore plus loin ». Le joueur peut passer.',
    1
  ],

  [
    4,
    'Les réponses doivent commencer par « Entre nous… ».',
    2
  ]

];


/* =========================================================
   4. OUTILS GÉNÉRAUX
========================================================= */

const $ = function(id) {
  return document.getElementById(id);
};

function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    const temp = result[i];

    result[i] = result[j];
    result[j] = temp;

  }

  return result;
}


/* =========================================================
   5. SAUVEGARDE DES PARTICIPANTS
========================================================= */

function loadNames() {

  try {

    const stored = localStorage.getItem(
      'promethee-chaos-names'
    );

    const result = JSON.parse(stored || '[]');

    if (!Array.isArray(result)) {
      return [];
    }

    return result.filter(function(name) {
      return typeof name === 'string';
    }).slice(0, 30);

  } catch (error) {

    return [];

  }
}

let names = loadNames();

function saveNames() {

  try {

    localStorage.setItem(
      'promethee-chaos-names',
      JSON.stringify(names)
    );

  } catch (error) {

    // Le jeu reste utilisable sans stockage local.

  }
}


/* =========================================================
   6. ÉTAT DU JEU
========================================================= */

let playerBag = [];

let questionBag = [];
let mysteryBag = [];
let chaosBag = [];

let cardNo = 0;

let currentCard = null;

let activeChaos = null;

let lastDrawnPlayer = null;


/* =========================================================
   7. AFFICHAGE DES JOUEURS
========================================================= */

function renderNames() {

  const container = $('nameList');

  container.replaceChildren();

  names.forEach(function(name, index) {

    const chip = document.createElement('span');
    chip.className = 'chip';

    const text = document.createElement('span');
    text.textContent = name;

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = '×';

    remove.setAttribute(
      'aria-label',
      'Supprimer ' + name
    );

    remove.onclick = function() {

      names.splice(index, 1);

      saveNames();
      renderNames();

      resetPlayerDraw();

    };

    chip.appendChild(text);
    chip.appendChild(remove);

    container.appendChild(chip);

  });

  $('rosterMessage').textContent =
    names.length +
    ' joueur(s) inscrit(s) · minimum 2';

  $('startBtn').disabled = names.length < 2;

  const select = $('specificPlayer');

  select.replaceChildren();

  names.forEach(function(name, index) {

    const option = document.createElement('option');

    option.value = String(index);
    option.textContent = name;

    select.appendChild(option);

  });

}


/* =========================================================
   8. TIRAGE ÉQUILIBRÉ DES JOUEURS

   Tous les joueurs sont tirés une fois
   avant de recommencer un cycle.

   Un duel ne désigne jamais deux fois
   la même personne.
========================================================= */

function resetPlayerDraw() {

  playerBag = [];
  lastDrawnPlayer = null;

}

function drawPlayers(count = 1) {

  if (names.length < count) {
    return [];
  }

  const selected = [];

  while (selected.length < count) {

    if (playerBag.length === 0) {

      playerBag = shuffle(
        names.map(function(name, index) {
          return index;
        })
      );

      if (
        lastDrawnPlayer !== null &&
        playerBag.length > 1
      ) {

        const lastIndex = playerBag.length - 1;

        if (playerBag[lastIndex] === lastDrawnPlayer) {

          const other = playerBag.findIndex(function(index) {
            return index !== lastDrawnPlayer;
          });

          if (other >= 0) {

            const temp = playerBag[lastIndex];

            playerBag[lastIndex] = playerBag[other];
            playerBag[other] = temp;

          }
        }
      }
    }

    const candidate = playerBag.pop();

    if (selected.includes(candidate)) {

      playerBag.unshift(candidate);
      continue;

    }

    selected.push(candidate);
    lastDrawnPlayer = candidate;

  }

  return selected.map(function(index) {
    return names[index];
  });

}


/* =========================================================
   9. PIOCHE SANS RÉPÉTITION

   Les cartes ne se répètent pas tant que
   les cartes disponibles au niveau actuel
   n'ont pas été épuisées.
========================================================= */

function drawFromPool(pool, bagName) {

  const level = Number($('level').value);

  const eligible = [];

  pool.forEach(function(card, index) {

    if (card[0] <= level) {
      eligible.push(index);
    }

  });

  if (eligible.length === 0) {
    return null;
  }

  let selectedBag;

  if (bagName === 'question') {

    selectedBag = questionBag;

  } else if (bagName === 'mystery') {

    selectedBag = mysteryBag;

  } else {

    selectedBag = chaosBag;

  }

  selectedBag = selectedBag.filter(function(index) {
    return eligible.includes(index);
  });

  if (selectedBag.length === 0) {

    selectedBag = shuffle(eligible);

  }

  const chosenIndex = selectedBag.pop();

  if (bagName === 'question') {

    questionBag = selectedBag;

  } else if (bagName === 'mystery') {

    mysteryBag = selectedBag;

  } else {

    chaosBag = selectedBag;

  }

  return pool[chosenIndex] || null;

}


/* =========================================================
   10. GESTION DE L'INTENSITÉ
========================================================= */

function updatePhase() {

  if (!$('autoLevel').checked) {
    return;
  }

  const calculatedLevel = Math.min(
    4,
    1 + Math.floor((cardNo - 1) / 8)
  );

  $('level').value = String(calculatedLevel);

}


/* =========================================================
   11. ÉVÉNEMENTS CHAOS
========================================================= */

function advanceChaos() {

  if (!activeChaos) {
    return;
  }

  activeChaos.remaining--;

  if (activeChaos.remaining <= 0) {
    activeChaos = null;
  }

}


/* =========================================================
   12. RELANCES
========================================================= */

function resetRelances() {

  $('deep').classList.add('hidden');

  $('far').classList.add('hidden');

  const hasQuestion = Boolean(
    currentCard &&
    currentCard.questionData
  );

  $('deepBtn').disabled = !hasQuestion;
  $('farBtn').disabled = !hasQuestion;

}

function toggleDeep() {

  if (!currentCard || !currentCard.questionData) {
    return;
  }

  $('deep').classList.toggle('hidden');

}

function toggleFar() {

  if (!currentCard || !currentCard.questionData) {
    return;
  }

  $('far').classList.toggle('hidden');

}


/* =========================================================
   13. AFFICHAGE DES CARTES
========================================================= */

function renderCard() {

  if (!currentCard) {
    return;
  }

  const card = currentCard;

  $('cardType').textContent = card.label;

  $('cardCount').textContent =
    'Carte ' + cardNo;

  $('chosenName').textContent =
    card.players || '';

  $('question').textContent =
    card.text || 'Aucune question disponible.';

  $('instructions').textContent =
    card.instructions || '';

  if (card.questionData) {

    $('deepText').textContent =
      card.questionData[3] || '';

    $('farText').textContent =
      card.questionData[4] || '';

  } else {

    $('deepText').textContent = '';
    $('farText').textContent = '';

  }

  resetRelances();

  $('stats').textContent =
    names.length + ' joueurs · ' +
    QUESTIONS.length + ' questions · ' +
    MYSTERIES.length + ' cartes Auteur Mystère · ' +
    'Intensité ' + $('level').value + '/4';

  const banner = $('specialBanner');

  if (activeChaos) {

    banner.classList.remove('hidden');

    banner.textContent =
      '💥 Règle active (' +
      activeChaos.remaining +
      ' carte(s) restante(s)) : ' +
      activeChaos.text;

  } else {

    banner.classList.add('hidden');
    banner.textContent = '';

  }

}


/* =========================================================
   14. MOTEUR PRINCIPAL

   60 % : collectif
   30 % : individuel
   10 % : Chaos

   Les commandes du Maître permettent
   de choisir un mode à tout moment.
========================================================= */

function next(mode = 'auto', fixedPlayer = null) {

  if (names.length < 2) {

    $('stats').textContent =
      'Ajoute au moins deux participants.';

    return;
  }

  if (mode === 'auto') {

    const chance = Math.random();

    if (chance < 0.60) {

      mode = 'collective';

    } else if (chance < 0.90) {

      mode = 'solo';

    } else {

      mode = 'chaos';

    }

  }

  if (mode !== 'chaos') {
    advanceChaos();
  }

  cardNo++;

  updatePhase();

  let cardLabel = '';
  let cardPlayers = '';
  let cardQuestion = null;
  let cardText = '';
  let cardInstructions = '';


  // ÉVÉNEMENT CHAOS

  if (mode === 'chaos') {

    const eventCard = drawFromPool(
      CHAOS,
      'chaos'
    );

    if (!eventCard) {
      return;
    }

    cardLabel = '💥 ÉVÉNEMENT CHAOS';

    cardText = eventCard[1];

    cardInstructions =
      'Annonce la règle au groupe. ' +
      'Elle s’appliquera aux prochaines cartes.';

    activeChaos = {
      text: eventCard[1],
      remaining: eventCard[2]
    };


  // AUTEUR MYSTÈRE

  } else if (mode === 'mystery') {

    const mysteryCard = drawFromPool(
      MYSTERIES,
      'mystery'
    );

    if (!mysteryCard) {
      return;
    }

    cardLabel = '🕵️ AUTEUR MYSTÈRE';

    cardText = mysteryCard[1];

    cardInstructions =
      'Tout le monde écrit une réponse sur papier, ' +
      'y compris le Maître du Chaos. ' +
      'Mélange les papiers et lis-les un par un. ' +
      'Le groupe doit retrouver chaque auteur. ' +
      'Chacun reste libre de passer.';


  // QUESTIONS CLASSIQUES

  } else {

    const selectedQuestion = drawFromPool(
      QUESTIONS,
      'question'
    );

    if (!selectedQuestion) {

      $('question').textContent =
        'Aucune question disponible à cette intensité.';

      return;
    }

    cardQuestion = selectedQuestion;

    cardText = selectedQuestion[2];


    if (mode === 'solo') {

      cardLabel = '🎯 LE HASARD CHOISIT';

      cardPlayers = drawPlayers(1).join('');

      cardInstructions =
        'La personne désignée répond librement. ' +
        'Les autres peuvent essayer de deviner sa réponse.';


    } else if (mode === 'duel') {

      cardLabel = '⚔️ DUEL';

      cardPlayers = drawPlayers(2).join(' & ');

      cardInstructions =
        'Les deux personnes répondent à la même question. ' +
        'Le groupe peut ensuite réagir.';


    } else if (mode === 'choose') {

      cardLabel = '👑 LE MAÎTRE DÉCIDE';

      cardPlayers = names[fixedPlayer] || names[0];

      cardInstructions =
        'Le Maître du Chaos a choisi cette personne. ' +
        'Elle répond librement.';


    } else {

      cardLabel = '👥 TOUS ENSEMBLE';

      cardInstructions =
        'Tout le monde peut répondre. ' +
        'Le Maître du Chaos peut demander au groupe ' +
        'de deviner sa réponse avant de la révéler.';

    }

  }


  // MÉMORISATION DE LA CARTE

  currentCard = {

    label: cardLabel,

    players: cardPlayers,

    questionData: cardQuestion,

    text: cardText,

    instructions: cardInstructions,

    mode: mode

  };


  // AFFICHAGE

  renderCard();

}


/* =========================================================
   15. AJOUT D'UN JOUEUR
========================================================= */

$('addForm').addEventListener('submit', function(event) {

  event.preventDefault();

  const input = $('nameInput');

  const newName = input.value
    .trim()
    .replace(/\s+/g, ' ');

  if (!newName) {
    return;
  }

  const alreadyExists = names.some(function(name) {

    return name.toLocaleLowerCase('fr') ===
           newName.toLocaleLowerCase('fr');

  });

  if (alreadyExists) {

    $('rosterMessage').textContent =
      'Ce prénom existe déjà. ' +
      'Ajoute une initiale si nécessaire.';

    return;
  }

  if (names.length >= 30) {

    $('rosterMessage').textContent =
      'Maximum 30 participants.';

    return;
  }

  names.push(newName);

  saveNames();

  renderNames();

  resetPlayerDraw();

  input.value = '';

  input.focus();

});


/* =========================================================
   16. DÉMARRAGE D'UNE PARTIE
========================================================= */

function resetGame() {

  cardNo = 0;

  playerBag = [];

  questionBag = [];
  mysteryBag = [];
  chaosBag = [];

  currentCard = null;
  activeChaos = null;

  lastDrawnPlayer = null;

  $('level').value = '1';

  next('collective');

}

$('startBtn').onclick = function() {

  if (names.length < 2) {
    return;
  }

  $('setup').classList.add('hidden');

  $('game').classList.remove('hidden');

  resetGame();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

};


/* =========================================================
   17. RETOUR AUX JOUEURS
========================================================= */

$('editBtn').onclick = function() {

  $('game').classList.add('hidden');

  $('setup').classList.remove('hidden');

  renderNames();

};


/* =========================================================
   18. CARTE SUIVANTE
========================================================= */

$('nextBtn').onclick = function() {

  next('auto');

};


/* =========================================================
   19. PASSER UNE CARTE
========================================================= */

$('skipBtn').onclick = function() {

  if (
    currentCard &&
    currentCard.mode === 'mystery'
  ) {

    next('mystery');

  } else if (
    currentCard &&
    currentCard.mode === 'chaos'
  ) {

    activeChaos = null;

    next('collective');

  } else {

    next('collective');

  }

};


/* =========================================================
   20. BOUTONS DE RELANCE
========================================================= */

$('deepBtn').onclick = function() {

  toggleDeep();

};

$('farBtn').onclick = function() {

  toggleFar();

};


/* =========================================================
   21. COMMANDES DU MAÎTRE DU CHAOS
========================================================= */

document.querySelectorAll('[data-action]')
  .forEach(function(button) {

    button.onclick = function() {

      const action = button.dataset.action;

      if (action === 'choose') {

        $('chooseWrap').classList.toggle('hidden');

        return;
      }

      $('chooseWrap').classList.add('hidden');

      next(action);

    };

  });


/* =========================================================
   22. LE MAÎTRE DÉCIDE
========================================================= */

$('chooseConfirm').onclick = function() {

  const index = Number(
    $('specificPlayer').value
  );

  $('chooseWrap').classList.add('hidden');

  next('choose', index);

};


/* =========================================================
   23. RÉGLAGE DE L'INTENSITÉ
========================================================= */

$('level').onchange = function() {

  // Un réglage manuel désactive la progression
  // automatique pour ne pas écraser le choix.

  $('autoLevel').checked = false;

  // On conserve les questions encore disponibles.
  // Les cartes incompatibles seront filtrées
  // au prochain tirage.

  $('stats').textContent =
    'Ambiance choisie : ' +
    $('level').selectedOptions[0].textContent +
    ' · progression manuelle.';

};

$('autoLevel').onchange = function() {

  if ($('autoLevel').checked) {

    updatePhase();

    $('stats').textContent =
      'Progression douce activée · niveau ' +
      $('level').value + '/4';

  } else {

    $('stats').textContent =
      'Progression manuelle activée · niveau ' +
      $('level').value + '/4';

  }

};


/* =========================================================
   24. NOUVELLE PARTIE
========================================================= */

$('resetBtn').onclick = function() {

  const confirmation = confirm(
    'Recommencer la partie ?\n\n' +
    'Les prénoms seront conservés.'
  );

  if (!confirmation) {
    return;
  }

  resetGame();

};


/* =========================================================
   25. INITIALISATION
========================================================= */

renderNames();

console.log(
  'LE CHAOS DE PROMÉTHÉE — VERSION 1.1'
);

console.log(
  'Questions : ' + QUESTIONS.length
);

console.log(
  'Auteur Mystère : ' + MYSTERIES.length
);

console.log(
  'Événements Chaos : ' + CHAOS.length
);


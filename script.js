
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
],
   
/* =========================================================
   LE CHAOS DE PROMÉTHÉE
   SÉRIE 6 — LES FACETTES INCONNUES

   30 NOUVELLES QUESTIONS
   60 RELANCES
   NIVEAUX 1 À 4
========================================================= */


// =========================================================
// 1. LES SOUVENIRS
// =========================================================

[
  1,
  'Les souvenirs',
  'Quel souvenir de ton enfance te fait encore sourire aujourd’hui ?',
  'Qu’est-ce qui rend ce souvenir si particulier ?',
  'Et quelle version de cette histoire raconterait ta famille ?'
],

[
  2,
  'Les souvenirs',
  'Quelle bêtise de jeunesse t’a laissé une leçon que tu n’as jamais oubliée ?',
  'Qu’as-tu compris après cette expérience ?',
  'Et quelle partie de cette histoire ferait le plus rire les personnes ici ?'
],

[
  2,
  'Les souvenirs',
  'Quelle personne de ton passé aimerais-tu retrouver juste pour discuter une heure ?',
  'Qu’aimerais-tu lui raconter en premier ?',
  'Et quelle question n’avais-tu jamais osé lui poser à l’époque ?'
],

[
  3,
  'Les souvenirs',
  'Quelle histoire de ton adolescence racontes-tu aujourd’hui très différemment de la façon dont tu l’as vécue ?',
  'Qu’est-ce que le temps a changé dans ta manière de la voir ?',
  'Et si quelqu’un qui était présent venait raconter sa propre version ?'
],

[
  2,
  'Les souvenirs',
  'Quel objet de ton passé aimerais-tu retrouver, même s’il ne vaut rien ?',
  'Qu’est-ce qu’il représentait pour toi ?',
  'Et combien serais-tu réellement prêt à dépenser pour le récupérer ?'
],


// =========================================================
// 2. L'ARGENT ET SES MYSTÈRES
// =========================================================

[
  2,
  'L’argent',
  'À partir de quel prix trouves-tu qu’un plaisir devient une folie ?',
  'Qu’est-ce qui justifie cette limite pour toi ?',
  'Et pour quel plaisir serais-tu capable de dépasser largement ce montant ?'
],

[
  3,
  'L’argent',
  'Si tu devais dépenser 5 000 euros avant minuit sans rien conserver de matériel, comment t’y prendrais-tu ?',
  'Pourquoi choisirais-tu ces dépenses ?',
  'Et quelle dépense aurais-tu du mal à expliquer à ton entourage ?'
],

[
  2,
  'L’argent',
  'Pour quel service serais-tu prêt à payer quelqu’un simplement pour ne plus jamais avoir à le faire toi-même ?',
  'Qu’est-ce qui te déplaît autant dans cette tâche ?',
  'Et quelle somme mensuelle serais-tu vraiment prêt à y consacrer ?'
],

[
  3,
  'L’argent',
  'Si quelqu’un t’offrait une somme importante à condition de ne jamais révéler son identité, comment réagirais-tu ?',
  'Qu’est-ce qui te ferait accepter ou hésiter ?',
  'Et si tu découvrais que cette personne te connaît beaucoup mieux que tu ne le pensais ?'
],

[
  4,
  'L’argent',
  'Quelle partie de ton mode de vie changerait en premier si tu n’avais plus besoin de travailler ?',
  'Qu’est-ce qui te manquerait malgré tout ?',
  'Et combien de temps penses-tu pouvoir rester sans aucune obligation avant de devenir insupportable ?'
],


// =========================================================
// 3. LES HABITUDES SOCIALES
// =========================================================

[
  1,
  'La vie sociale',
  'Quand tu arrives dans un groupe où tu ne connais personne, que fais-tu naturellement ?',
  'Qu’est-ce qui guide ton comportement ?',
  'Et quelle situation pourrait te faire agir exactement à l’inverse ?'
],

[
  2,
  'La vie sociale',
  'Quelle place prends-tu spontanément lorsqu’un groupe doit organiser quelque chose ?',
  'Pourquoi prends-tu ce rôle plutôt qu’un autre ?',
  'Et que se passerait-il si tout le monde refusait de te laisser jouer ce rôle ?'
],

[
  2,
  'La vie sociale',
  'Quel type de silence te met le plus mal à l’aise ?',
  'Qu’est-ce qui te dérange dans ce silence ?',
  'Et quelle est la chose la plus inattendue que tu aies dite simplement pour le briser ?'
],

[
  3,
  'La vie sociale',
  'Quand une conversation devient tendue entre deux personnes, quelle est ta première réaction ?',
  'Pourquoi adoptes-tu cette attitude ?',
  'Et as-tu déjà volontairement mis de l’huile sur le feu pour voir ce qui allait se passer ?'
],

[
  3,
  'La vie sociale',
  'Quelle chose te donne immédiatement envie de quitter une soirée, même si tu passais un bon moment ?',
  'Qu’est-ce qui fait basculer ton envie ?',
  'Et t’est-il déjà arrivé de partir discrètement sans dire au revoir à personne ?'
],


// =========================================================
// 4. LES SITUATIONS IMPOSSIBLES
// =========================================================

[
  1,
  'Les situations impossibles',
  'Si tu devais échanger ta voix avec celle d’une personne pendant une journée, qui choisirais-tu ?',
  'Qu’est-ce que tu aimerais faire avec cette voix ?',
  'Et quelle serait la première phrase que tu prononcerais pour surprendre quelqu’un ?'
],

[
  2,
  'Les situations impossibles',
  'Si toutes tes conversations étaient accompagnées d’un sous-titre révélant ton humeur, qu’est-ce qui apparaîtrait le plus souvent ?',
  'Pourquoi cette humeur revient-elle aussi souvent ?',
  'Et dans quelle situation ces sous-titres te mettraient-ils vraiment dans l’embarras ?'
],

[
  2,
  'Les situations impossibles',
  'Si tu pouvais supprimer une seule obligation sociale pour tout le monde, laquelle choisirais-tu ?',
  'Pourquoi cette obligation te paraît-elle inutile ?',
  'Et quel problème inattendu sa disparition pourrait-elle provoquer ?'
],

[
  3,
  'Les situations impossibles',
  'Si tu pouvais observer une seule conversation à laquelle tu n’as pas assisté, laquelle choisirais-tu ?',
  'Qu’espérerais-tu comprendre en l’écoutant ?',
  'Et si tu entendais quelque chose qui changeait complètement ton opinion ?'
],

[
  4,
  'Les situations impossibles',
  'Si tu pouvais vivre pendant une semaine avec une identité entièrement inventée, quel personnage créerais-tu ?',
  'Quelle liberté trouverais-tu dans cette nouvelle identité ?',
  'Et quelle chose oserais-tu faire sous ce personnage que tu ne ferais jamais sous ton vrai prénom ?'
],


// =========================================================
// 5. L'EGO ET LA FIERTÉ
// =========================================================

[
  2,
  'L’ego',
  'Dans quel domaine supportes-tu particulièrement mal de perdre ?',
  'Pourquoi la défaite te touche-t-elle autant ?',
  'Et quelle excuse as-tu déjà trouvée pour expliquer une défaite ?'
],

[
  3,
  'L’ego',
  'Quelle remarque, même dite sur le ton de la plaisanterie, touche facilement ta fierté ?',
  'Pourquoi cette remarque a-t-elle cet effet sur toi ?',
  'Et quelle réaction as-tu déjà regrettée après avoir été piqué au vif ?'
],

[
  2,
  'L’ego',
  'De quelle réussite personnelle es-tu fier sans en parler souvent ?',
  'Qu’est-ce qui la rend importante à tes yeux ?',
  'Et quelle réaction aimerais-tu obtenir si tu la racontais aujourd’hui ?'
],

[
  3,
  'L’ego',
  'Quand quelqu’un réussit beaucoup mieux que toi dans un domaine que tu maîtrises, que ressens-tu en premier ?',
  'Qu’est-ce qui explique cette réaction ?',
  'Et as-tu déjà fait semblant de ne pas être vexé alors que tu l’étais énormément ?'
],

[
  4,
  'L’ego',
  'Quelle critique serait particulièrement difficile à entendre venant d’une personne que tu admires ?',
  'Pourquoi son opinion compterait-elle autant ?',
  'Et serais-tu capable de lui répondre franchement, même au risque de lui déplaire ?'
],


// =========================================================
// 6. LES PETITES VÉRITÉS DU QUOTIDIEN
// =========================================================

[
  1,
  'Le quotidien',
  'Quelle est la première chose que tu remarques en entrant chez quelqu’un ?',
  'Pourquoi ton attention se porte-t-elle là-dessus ?',
  'Et quelle chose chez toi préférerais-tu que les invités ne remarquent pas ?'
],

[
  2,
  'Le quotidien',
  'Quel petit rituel personnel devient indispensable lorsque tu passes une mauvaise journée ?',
  'Qu’est-ce que ce rituel t’apporte ?',
  'Et comment réagirais-tu si quelqu’un venait volontairement l’interrompre ?'
],

[
  2,
  'Le quotidien',
  'Sur quel sujet du quotidien as-tu des exigences que les autres trouvent parfois excessives ?',
  'Pourquoi y accordes-tu autant d’importance ?',
  'Et jusqu’où es-tu déjà allé pour que les choses soient faites à ta manière ?'
],

[
  3,
  'Le quotidien',
  'Quelle est la chose que tu vérifies parfois plusieurs fois alors que tu sais parfaitement l’avoir déjà faite ?',
  'Qu’est-ce qui te pousse à vérifier encore ?',
  'Et as-tu déjà fait demi-tour uniquement pour te rassurer ?'
],

[
  3,
  'Le quotidien',
  'Quelle habitude de vie as-tu adoptée simplement pour éviter une situation que tu n’aimes pas ?',
  'Qu’est-ce que tu cherches exactement à éviter ?',
  'Et quelle serait ta réaction si quelqu’un découvrait la véritable raison de cette habitude ?'
],


/* =========================================================
   LE CHAOS DE PROMÉTHÉE
   SÉRIE 7 — HUMOUR, MALICE ET RÉVÉLATIONS

   60 QUESTIONS
   120 RELANCES
========================================================= */


// =========================================================
// 1. LES PETITES VENGEANCES
// =========================================================

[
  2,
  'Les petites vengeances',
  'Quelle petite revanche t’a procuré une satisfaction particulière ?',
  'Qu’est-ce qui t’avait donné envie de te venger ?',
  'Et est-ce que la personne a compris ce qui venait de lui arriver ?'
],

[
  2,
  'Les petites vengeances',
  'Quelle est ta manière préférée de faire comprendre à quelqu’un qu’il t’agace ?',
  'Pourquoi préfères-tu cette méthode ?',
  'Et quelle fois ton message a-t-il été compris beaucoup trop tard ?'
],

[
  3,
  'Les petites vengeances',
  'Quelle chose serais-tu capable de faire uniquement pour avoir le dernier mot ?',
  'Pourquoi est-ce important pour toi de conclure ?',
  'Et quelle dispute as-tu déjà prolongée alors que tu savais avoir tort ?'
],

[
  2,
  'Les petites vengeances',
  'Quelle petite satisfaction ressens-tu parfois quand quelqu’un qui t’a contrarié se trompe ?',
  'Est-ce que tu arrives à cacher cette satisfaction ?',
  'Et as-tu déjà savouré ce moment un peu trop ouvertement ?'
],

[
  3,
  'Les petites vengeances',
  'Quelle est la façon la plus élégante que tu connaisses de remettre quelqu’un à sa place ?',
  'Pourquoi cette méthode fonctionne-t-elle ?',
  'Et quelle réplique aurais-tu aimé trouver sur le moment, mais qui t’est venue trop tard ?'
],

[
  2,
  'Les petites vengeances',
  'Qu’est-ce qui pourrait te pousser à organiser une petite farce à quelqu’un ?',
  'Comment saurais-tu que cette personne apprécierait la plaisanterie ?',
  'Et quelle farce t’a déjà valu un retour de bâton ?'
],

[
  3,
  'Les petites vengeances',
  'Quand quelqu’un cherche à te provoquer, quelle réaction te procure le plus de satisfaction ?',
  'Pourquoi choisis-tu cette réaction ?',
  'Et quand as-tu volontairement fait exactement le contraire de ce que la personne attendait ?'
],

[
  2,
  'Les petites vengeances',
  'Quelle situation t’a déjà donné envie de dire : « Je te l’avais bien dit » ?',
  'Pourquoi avais-tu vu venir le problème ?',
  'Et as-tu résisté à la tentation de prononcer cette phrase ?'
],

[
  3,
  'Les petites vengeances',
  'Quelle petite injustice du quotidien t’agace beaucoup plus qu’elle ne le devrait ?',
  'Pourquoi celle-là te touche-t-elle autant ?',
  'Et quelle solution personnelle as-tu déjà inventée pour ne plus la subir ?'
],

[
  4,
  'Les petites vengeances',
  'Si tu pouvais organiser une revanche parfaitement inoffensive contre quelqu’un qui t’a fait une mauvaise blague, que préparerais-tu ?',
  'Qu’est-ce qui rendrait cette revanche particulièrement satisfaisante ?',
  'Et jusqu’où irais-tu pour garder la surprise jusqu’au dernier moment ?'
],


// =========================================================
// 2. LA GOURMANDISE ET LES PLAISIRS DE TABLE
// =========================================================

[
  1,
  'La gourmandise',
  'Quel aliment pourrais-tu manger plusieurs jours de suite sans te lasser ?',
  'Qu’est-ce que tu apprécies autant dans cet aliment ?',
  'Et avec quelle combinaison inattendue oserais-tu le manger ?'
],

[
  2,
  'La gourmandise',
  'Quel plat te rappelle immédiatement une personne ou un moment particulier ?',
  'Qu’est-ce qui rend ce souvenir si présent ?',
  'Et serais-tu capable de retrouver exactement le même plaisir aujourd’hui ?'
],

[
  2,
  'La gourmandise',
  'Quelle habitude à table pourrait faire halluciner les autres ?',
  'Depuis quand fais-tu cela ?',
  'Et serais-tu capable de la défendre devant un grand chef cuisinier ?'
],

[
  2,
  'La gourmandise',
  'Quelle est la chose la plus surprenante que tu aies goûtée ?',
  'Qu’est-ce qui t’avait donné envie de goûter ?',
  'Et si tu devais convaincre quelqu’un ici de tenter la même expérience ?'
],

[
  3,
  'La gourmandise',
  'Pour quel repas serais-tu capable de faire un très long détour ?',
  'Qu’est-ce qui rendrait ce repas exceptionnel ?',
  'Et quelle distance serais-tu réellement prêt à parcourir ?'
],

[
  2,
  'La gourmandise',
  'Quelle règle de savoir-vivre à table trouves-tu inutile ?',
  'Pourquoi cette règle te dérange-t-elle ?',
  'Et comment réagirais-tu si quelqu’un la transgressait lors d’un dîner très chic ?'
],

[
  3,
  'La gourmandise',
  'Quel est le repas le plus mémorable auquel tu aies participé ?',
  'Qu’est-ce qui l’a rendu inoubliable ?',
  'Et quelle partie de cette soirée pourrait encore faire rire les invités ?'
],

[
  2,
  'La gourmandise',
  'Quelle spécialité que beaucoup de gens adorent ne te donne absolument pas envie ?',
  'Qu’est-ce qui te rebute dans cette spécialité ?',
  'Et pour quelle récompense accepterais-tu d’en manger une assiette entière ?'
],

[
  3,
  'La gourmandise',
  'Quelle expérience culinaire accepterais-tu de tenter les yeux bandés ?',
  'Qu’est-ce qui te ferait suffisamment confiance pour essayer ?',
  'Et quel aliment espérerais-tu surtout ne pas découvrir dans ton assiette ?'
],

[
  4,
  'La gourmandise',
  'Si tu devais préparer un dîner pour impressionner quelqu’un, quelle serait ta stratégie ?',
  'Pourquoi choisirais-tu cette approche ?',
  'Et qu’est-ce que tu ferais si tout tournait mal juste avant son arrivée ?'
],


// =========================================================
// 3. LES VOYAGES ET LES AVENTURES
// =========================================================

[
  1,
  'Les aventures',
  'Quel endroit t’a surpris beaucoup plus que tu ne l’imaginais ?',
  'Qu’est-ce qui t’a marqué en arrivant ?',
  'Et quelle expérience inattendue y as-tu vécue ?'
],

[
  2,
  'Les aventures',
  'Quand tu pars quelque part, quel détail est indispensable pour que tu sois heureux ?',
  'Pourquoi ce détail compte-t-il autant ?',
  'Et qu’est-ce qui pourrait te faire accepter de t’en passer complètement ?'
],

[
  2,
  'Les aventures',
  'Quelle mésaventure de voyage est devenue une bonne histoire à raconter ?',
  'Comment as-tu réagi sur le moment ?',
  'Et quel détail avais-tu oublié de raconter à ton retour ?'
],

[
  3,
  'Les aventures',
  'Quelle destination choisirais-tu pour découvrir une version différente de toi-même ?',
  'Qu’aimerais-tu découvrir là-bas ?',
  'Et qu’est-ce que tu oserais sur place que tu ne fais jamais chez toi ?'
],

[
  2,
  'Les aventures',
  'Quel genre de compagnon de voyage pourrait rapidement t’épuiser ?',
  'Qu’est-ce qui serait le plus difficile à supporter ?',
  'Et comment ferais-tu pour survivre à quinze jours ensemble ?'
],

[
  3,
  'Les aventures',
  'Si tu devais partir demain avec seulement trois objets personnels, lesquels prendrais-tu ?',
  'Pourquoi ces trois objets précisément ?',
  'Et quel objet totalement embarrassant aurais-tu envie d’ajouter en cachette ?'
],

[
  2,
  'Les aventures',
  'Quelle activité touristique très populaire ne t’attire absolument pas ?',
  'Qu’est-ce qui ne te plaît pas dans cette activité ?',
  'Et si tout le groupe voulait absolument la faire ?'
],

[
  3,
  'Les aventures',
  'Quel voyage pourrais-tu faire uniquement pour retrouver une sensation particulière ?',
  'Quelle sensation rechercherais-tu ?',
  'Et quelle expérience passée te donne encore envie de repartir ?'
],

[
  3,
  'Les aventures',
  'Quelle situation à l’étranger t’a déjà obligé à communiquer autrement que par les mots ?',
  'Comment as-tu réussi à te faire comprendre ?',
  'Et quel malentendu aurait pu rendre la scène encore plus mémorable ?'
],

[
  4,
  'Les aventures',
  'Quelle aventure accepterais-tu de vivre sans connaître tous les détails à l’avance ?',
  'Quelle part d’inconnu te plairait le plus ?',
  'Et quelle information te ferait immédiatement changer d’avis ?'
],


// =========================================================
// 4. LES SITUATIONS EMBARRASSANTES
// =========================================================

[
  2,
  'Les moments gênants',
  'Quelle est la fois où tu as répondu à quelqu’un en croyant qu’il s’adressait à toi ?',
  'Comment as-tu compris ton erreur ?',
  'Et as-tu essayé de faire comme si rien ne s’était passé ?'
],

[
  2,
  'Les moments gênants',
  'Quelle conversation as-tu déjà entendue alors que tu n’étais clairement pas censé l’entendre ?',
  'Comment t’es-tu retrouvé dans cette situation ?',
  'Et comment as-tu réussi à ne pas montrer que tu avais tout entendu ?'
],

[
  3,
  'Les moments gênants',
  'Quelle est la fois où tu as oublié le prénom de quelqu’un au pire moment ?',
  'Comment as-tu essayé de t’en sortir ?',
  'Et combien de temps as-tu tenu avant de te faire démasquer ?'
],

[
  2,
  'Les moments gênants',
  'Quel message as-tu déjà envoyé à la mauvaise personne ?',
  'Comment as-tu découvert ton erreur ?',
  'Et quelle excuse as-tu trouvée pour expliquer ce message ?'
],

[
  3,
  'Les moments gênants',
  'Quelle remarque as-tu déjà faite avant de découvrir que la personne concernée était juste derrière toi ?',
  'Quelle a été ta première réaction ?',
  'Et comment as-tu essayé de retourner la situation à ton avantage ?'
],

[
  2,
  'Les moments gênants',
  'Quelle est la plus grande confusion que tu aies faite entre deux personnes ?',
  'Pourquoi les as-tu confondues ?',
  'Et jusqu’où as-tu laissé durer le malentendu avant de reconnaître ton erreur ?'
],

[
  3,
  'Les moments gênants',
  'Quelle est la pire situation dans laquelle ton téléphone t’a déjà mis ?',
  'Pourquoi ce moment était-il aussi gênant ?',
  'Et qu’aurait-il pu afficher ou diffuser de pire encore ?'
],

[
  3,
  'Les moments gênants',
  'Quel compliment as-tu déjà fait et qui a été complètement mal interprété ?',
  'Que voulais-tu réellement dire ?',
  'Et comment as-tu essayé de corriger cette impression ?'
],

[
  4,
  'Les moments gênants',
  'Quelle rencontre t’a déjà mis mal à l’aise pour une raison que tu ne pouvais pas expliquer ?',
  'Qu’est-ce qui provoquait ce malaise ?',
  'Et quelle aurait été la pire question qu’on aurait pu te poser à ce moment-là ?'
],

[
  4,
  'Les moments gênants',
  'Quel moment aurais-tu aimé pouvoir mettre sur pause pour réfléchir avant de parler ?',
  'Quelle phrase aurais-tu voulu éviter ?',
  'Et qu’aurais-tu réellement envie de dire aujourd’hui à la personne présente ce jour-là ?'
],


// =========================================================
// 5. LES PARIS ET LES DÉFIS
// =========================================================

[
  1,
  'Les défis',
  'Quel défi pourrais-tu relever sans aucune préparation ?',
  'Pourquoi penses-tu pouvoir le réussir ?',
  'Et accepterais-tu de le tenter maintenant devant tout le monde ?'
],

[
  2,
  'Les défis',
  'Quelle compétition totalement inutile prendrais-tu pourtant très au sérieux ?',
  'Pourquoi aurais-tu autant envie de gagner ?',
  'Et quelle technique utiliserais-tu pour battre les autres ?'
],

[
  2,
  'Les défis',
  'Quel pari as-tu déjà remporté alors que personne ne croyait en toi ?',
  'Pourquoi avais-tu accepté ce pari ?',
  'Et quelle a été la réaction des personnes qui te pensaient incapable de réussir ?'
],

[
  3,
  'Les défis',
  'Quelle chose accepterais-tu de faire sur un simple pari entre amis ?',
  'Qu’est-ce qui te motiverait à accepter ?',
  'Et quelle condition te ferait immédiatement refuser ?'
],

[
  2,
  'Les défis',
  'Dans quel domaine pourrais-tu battre facilement les personnes présentes autour de cette table ?',
  'Qu’est-ce qui te donne autant confiance ?',
  'Et qui ici pourrait finalement te réserver une mauvaise surprise ?'
],

[
  3,
  'Les défis',
  'Quel défi personnel t’es-tu fixé sans jamais en parler à personne ?',
  'Pourquoi as-tu choisi de le garder pour toi ?',
  'Et quelle récompense t’accorderais-tu si tu réussissais ?'
],

[
  2,
  'Les défis',
  'Quel jeu ou activité te transforme en mauvais perdant ?',
  'Qu’est-ce qui te fait perdre ton sang-froid ?',
  'Et quelle excuse utilises-tu pour prétendre que tu t’en fiches ?'
],

[
  3,
  'Les défis',
  'Quelle chose as-tu déjà apprise uniquement pour prouver à quelqu’un que tu pouvais le faire ?',
  'Pourquoi voulais-tu autant lui donner tort ?',
  'Et cette personne a-t-elle reconnu ta réussite ?'
],

[
  3,
  'Les défis',
  'Si tu devais faire une démonstration de ton talent le plus inattendu, que choisirais-tu ?',
  'Comment as-tu appris à faire cela ?',
  'Et est-ce que tu accepterais de nous montrer ta technique sans préparation ?'
],

[
  4,
  'Les défis',
  'Quel défi accepterais-tu plus facilement après quelques compliments ?',
  'Pourquoi les compliments auraient-ils autant d’effet sur toi ?',
  'Et quel défi as-tu déjà accepté simplement parce qu’on avait touché ton ego ?'
],


// =========================================================
// 6. LES PLAISIRS INAVOUABLES
// =========================================================

[
  2,
  'Les plaisirs cachés',
  'Quelle émission ou quel programme regardes-tu parfois sans avoir envie de le reconnaître ?',
  'Qu’est-ce qui te plaît secrètement dans ce programme ?',
  'Et si on découvrait ton historique de visionnage, qu’est-ce qui surprendrait le plus ?'
],

[
  2,
  'Les plaisirs cachés',
  'Quelle chanson connais-tu parfaitement alors que tu prétends ne pas l’aimer ?',
  'Comment as-tu fini par la connaître aussi bien ?',
  'Et accepterais-tu d’en interpréter le refrain devant nous ?'
],

[
  3,
  'Les plaisirs cachés',
  'Quelle activité très simple te procure une satisfaction disproportionnée ?',
  'Qu’est-ce qui rend ce moment si agréable ?',
  'Et combien de temps pourrais-tu y consacrer sans voir le temps passer ?'
],

[
  2,
  'Les plaisirs cachés',
  'Quelle chose apprécies-tu particulièrement quand tu as enfin la maison pour toi tout seul ?',
  'Pourquoi est-ce différent quand tu es seul ?',
  'Et quelle scène surprendrait quelqu’un qui rentrerait sans prévenir ?'
],

[
  3,
  'Les plaisirs cachés',
  'Quel petit luxe t’accordes-tu même quand tu sais que ce n’est pas très raisonnable ?',
  'Qu’est-ce qui le rend difficile à abandonner ?',
  'Et quel luxe encore plus extravagant aimerais-tu essayer ?'
],

[
  2,
  'Les plaisirs cachés',
  'Quelle activité considérée comme ennuyeuse par beaucoup de gens trouves-tu étonnamment agréable ?',
  'Qu’est-ce qui te plaît dans cette activité ?',
  'Et pourrais-tu convaincre une personne ici de partager ce plaisir avec toi ?'
],

[
  3,
  'Les plaisirs cachés',
  'Quelle petite victoire personnelle célèbres-tu parfois sans que personne ne le sache ?',
  'Pourquoi cette victoire compte-t-elle autant ?',
  'Et comment la célèbres-tu lorsque personne ne te regarde ?'
],

[
  3,
  'Les plaisirs cachés',
  'Quelle chose très ordinaire peut te procurer un véritable sentiment de liberté ?',
  'Qu’est-ce qui te donne cette sensation ?',
  'Et quelle contrainte aimerais-tu voir disparaître pour en profiter davantage ?'
],

[
  4,
  'Les plaisirs cachés',
  'Quelle expérience réservée habituellement à une occasion spéciale aimerais-tu pouvoir vivre plus souvent ?',
  'Qu’est-ce qui la rend si attirante ?',
  'Et quelle excuse serais-tu capable d’inventer pour t’offrir cette expérience ?'
],

[
  4,
  'Les plaisirs cachés',
  'Quel plaisir aimerais-tu partager avec quelqu’un mais n’as-tu encore jamais trouvé la bonne personne ?',
  'Qu’est-ce que tu aimerais vivre ensemble ?',
  'Et quelle proposition originale pourrais-tu faire pour convaincre quelqu’un de t’accompagner ?'
],


/* =========================================================
   LE CHAOS DE PROMÉTHÉE
   SÉRIE 8 — LES 100 CARTES DE L'IMPRÉVISIBLE

   100 QUESTIONS PRINCIPALES
   200 RELANCES
   10 THÈMES
========================================================= */


// =========================================================
// 1. LA RÉPUTATION — 10 CARTES
// =========================================================

[2,'La réputation',
'Quel surnom pourrait te correspondre si tes proches devaient t’en inventer un aujourd’hui ?',
'Quelle particularité de ton caractère inspirerait ce surnom ?',
'Et quel surnom existant préférerais-tu ne surtout pas entendre ici ?'],

[2,'La réputation',
'Quelle histoire racontée à ton sujet a fini par devenir plus célèbre que toi ?',
'Comment cette histoire a-t-elle commencé ?',
'Et quelle partie a été largement embellie au fil des années ?'],

[3,'La réputation',
'Quel détail de ta vie pourrait donner une idée totalement fausse de ta personnalité ?',
'Pourquoi serait-il aussi trompeur ?',
'Et comment réagirais-tu si tout le monde te jugeait uniquement sur ce détail ?'],

[2,'La réputation',
'Pour quelle chose aimerais-tu que les gens viennent spontanément te demander conseil ?',
'Qu’est-ce qui te rendrait légitime pour les aider ?',
'Et dans quel domaine vaudrait-il mieux ne surtout pas suivre tes conseils ?'],

[3,'La réputation',
'Quel compliment te ferait particulièrement plaisir parce qu’on ne te le fait presque jamais ?',
'Pourquoi celui-ci aurait-il autant de valeur ?',
'Et serais-tu capable de croire quelqu’un qui te le dirait très sérieusement ?'],

[2,'La réputation',
'Quelle légende pourrait naître à ton sujet si quelqu’un interprétait mal une de tes habitudes ?',
'Quelle habitude serait à l’origine de cette légende ?',
'Et serais-tu tenté de laisser cette histoire circuler pour t’amuser ?'],

[3,'La réputation',
'Quelle partie de ton caractère pourrait te rendre célèbre dans une émission de télévision ?',
'Pourquoi les téléspectateurs la remarqueraient-ils ?',
'Et quelle séquence risquerait de devenir virale malgré toi ?'],

[2,'La réputation',
'Quel avis sur toi aimerais-tu entendre de la bouche d’une personne qui te connaît depuis vingt ans ?',
'Pourquoi son regard serait-il intéressant ?',
'Et quelle remarque de sa part te surprendrait vraiment ?'],

[3,'La réputation',
'Quelle réputation complètement injustifiée pourrais-tu entretenir simplement pour t’amuser ?',
'Qu’est-ce qui rendrait cette réputation amusante ?',
'Et combien de temps tiendrais-tu avant de révéler la plaisanterie ?'],

[4,'La réputation',
'Si un réalisateur voulait tourner un documentaire sur ta vie privée, quelle partie mériterait le titre le plus intrigant ?',
'Pourquoi cette période serait-elle intéressante à raconter ?',
'Et quelle scène demanderais-tu immédiatement à couper au montage ?'],


// =========================================================
// 2. LES OBJETS ET POSSESSIONS — 10 CARTES
// =========================================================

[1,'Les objets',
'Quel objet utilises-tu d’une manière complètement différente de celle pour laquelle il a été inventé ?',
'Comment as-tu découvert cette utilisation ?',
'Et serais-tu capable de convaincre son fabricant que ton idée est meilleure ?'],

[2,'Les objets',
'Quel objet refuses-tu de remplacer alors qu’il a manifestement fait son temps ?',
'Pourquoi y tiens-tu encore ?',
'Et dans quel état faudrait-il qu’il soit pour que tu acceptes enfin de t’en séparer ?'],

[2,'Les objets',
'Qu’est-ce que le contenu de ton sac ou de tes poches pourrait raconter sur toi ?',
'Quel objet serait le plus révélateur ?',
'Et lequel aurait le plus besoin d’une explication devant tes collègues ?'],

[1,'Les objets',
'Quel appareil du quotidien mériterait d’avoir une fonction supplémentaire spécialement conçue pour toi ?',
'Quel problème voudrais-tu résoudre ?',
'Et quelle fonction totalement excessive aimerais-tu secrètement ajouter ?'],

[2,'Les objets',
'Quel objet serais-tu incapable de retrouver chez toi sans entreprendre une véritable expédition ?',
'Pourquoi se retrouve-t-il toujours au mauvais endroit ?',
'Et quelle découverte inattendue pourrais-tu faire en le cherchant ?'],

[3,'Les objets',
'Quel objet as-tu conservé uniquement parce que tu n’as jamais su quoi en faire ?',
'Qu’est-ce qui t’empêche de t’en débarrasser ?',
'Et accepterais-tu de le donner à quelqu’un ici sans lui expliquer son histoire ?'],

[2,'Les objets',
'Si un objet chez toi pouvait raconter tout ce qu’il a vu, lequel te ferait le plus rire ?',
'Quelles scènes pourrait-il raconter ?',
'Et quel passage de son témoignage voudrais-tu interrompre immédiatement ?'],

[1,'Les objets',
'Quel objet possèdes-tu en plusieurs exemplaires alors qu’un seul devrait suffire ?',
'Pourquoi continues-tu à en accumuler ?',
'Et combien en faudrait-il pour que tu trouves enfin cela excessif ?'],

[3,'Les objets',
'Quel objet pourrait déclencher une longue discussion si quelqu’un le découvrait par hasard chez toi ?',
'Quelle serait ta première explication ?',
'Et quelle interprétation totalement erronée pourrait-on en faire ?'],

[4,'Les objets',
'Si tu devais choisir un objet pour représenter ton côté le plus imprévisible, lequel prendrais-tu ?',
'Qu’est-ce qui fait le lien entre cet objet et toi ?',
'Et quelle histoire personnelle faudrait-il raconter pour vraiment comprendre ton choix ?'],


// =========================================================
// 3. LES CONVERSATIONS — 10 CARTES
// =========================================================

[2,'Les conversations',
'Quel sujet pourrait te faire parler pendant une heure sans t’arrêter ?',
'Qu’est-ce qui te passionne autant dans ce sujet ?',
'Et à quel moment tes interlocuteurs commencent-ils à regretter de t’avoir lancé ?'],

[2,'Les conversations',
'Quelle question aimerais-tu qu’on te pose plus souvent ?',
'Pourquoi aimerais-tu y répondre ?',
'Et quelle réponse surprenante donnerais-tu aujourd’hui ?'],

[3,'Les conversations',
'Quelle expression utilises-tu régulièrement sans t’en rendre compte ?',
'Comment cette expression est-elle entrée dans tes habitudes ?',
'Et quelqu’un a-t-il déjà commencé à t’imiter à cause d’elle ?'],

[2,'Les conversations',
'Quel sujet de discussion arrives-tu à rendre intéressant même lorsqu’il paraît ennuyeux ?',
'Quelle approche utilises-tu pour captiver les autres ?',
'Et serais-tu capable de nous passionner avec ce sujet pendant une minute ?'],

[3,'Les conversations',
'Quelle phrase as-tu déjà dite spontanément avant de te rendre compte de son double sens ?',
'Dans quelles circonstances l’as-tu prononcée ?',
'Et comment as-tu réagi quand les autres ont commencé à rire ?'],

[2,'Les conversations',
'Quelle question toute simple peut déclencher chez toi une réponse interminable ?',
'Pourquoi as-tu autant de choses à raconter à ce sujet ?',
'Et quelle personne a déjà regretté de te l’avoir posée ?'],

[3,'Les conversations',
'Quel sujet préfères-tu aborder avec humour plutôt que sérieusement ?',
'Pourquoi le rire te semble-t-il plus naturel ?',
'Et quelle fois ton humour a-t-il été pris beaucoup trop au sérieux ?'],

[2,'Les conversations',
'Quelle conversation aurais-tu aimé enregistrer simplement parce qu’elle était mémorable ?',
'Qu’est-ce qui l’a rendue aussi particulière ?',
'Et quelle phrase aurait mérité de devenir une citation célèbre ?'],

[3,'Les conversations',
'Quel mot ou quelle expression change complètement de sens selon la personne qui le prononce ?',
'Pourquoi ce changement te frappe-t-il ?',
'Et peux-tu nous montrer deux façons opposées de le prononcer ?'],

[4,'Les conversations',
'Quelle conversation serait particulièrement difficile à tenir en gardant un visage sérieux ?',
'Qu’est-ce qui te ferait perdre ton sérieux ?',
'Et quelle phrase provoquerait immédiatement ton premier fou rire ?'],


// =========================================================
// 4. LES CHOIX DE GROUPE — 10 CARTES
// =========================================================

[2,'Les choix collectifs',
'Quand plusieurs personnes doivent choisir un restaurant, quelle méthode te paraît la plus efficace ?',
'Pourquoi cette méthode te convient-elle ?',
'Et comment réagis-tu quand personne ne veut prendre la décision ?'],

[2,'Les choix collectifs',
'Quel rôle aimerais-tu avoir si votre groupe devait organiser une grande fête surprise ?',
'Qu’est-ce qui ferait de toi la bonne personne pour ce rôle ?',
'Et quelle mission risquerait de tourner à la catastrophe entre tes mains ?'],

[3,'Les choix collectifs',
'Quand tout le monde approuve une idée qui ne te plaît pas, comment te comportes-tu ?',
'Qu’est-ce qui influence ta décision de parler ou de te taire ?',
'Et as-tu déjà suivi le groupe en sachant que cela allait mal finir ?'],

[2,'Les choix collectifs',
'Quelle règle proposerais-tu pour rendre une réunion entre amis beaucoup plus amusante ?',
'Qu’est-ce que cette règle changerait ?',
'Et quel problème imprévu pourrait-elle déclencher dès les premières minutes ?'],

[3,'Les choix collectifs',
'Si le groupe devait te confier une mission importante pendant une soirée, laquelle accepterais-tu ?',
'Pourquoi penses-tu être à la hauteur ?',
'Et quelle mission faudrait-il absolument éviter de te confier ?'],

[2,'Les choix collectifs',
'Qu’est-ce qui peut transformer une simple sortie entre amis en un souvenir mémorable ?',
'Quel ingrédient te semble indispensable ?',
'Et quelle sortie ordinaire a déjà fini beaucoup plus tard que prévu ?'],

[3,'Les choix collectifs',
'Quand une décision collective tourne mal, quelle est ta manière de réagir ?',
'Qu’est-ce qui te semble prioritaire à ce moment-là ?',
'Et as-tu déjà été secrètement content de ne pas être responsable du choix ?'],

[2,'Les choix collectifs',
'Quel genre d’activité pourrait réunir des personnes qui n’ont presque aucun goût en commun ?',
'Pourquoi cette activité fonctionnerait-elle ?',
'Et comment convaincrais-tu les deux personnes les plus réticentes ?'],

[3,'Les choix collectifs',
'Quelle tradition complètement nouvelle aimerais-tu inventer pour votre groupe ?',
'Qu’est-ce qu’elle apporterait à vos rencontres ?',
'Et quelle règle pourrait rendre cette tradition totalement imprévisible ?'],

[4,'Les choix collectifs',
'Si votre groupe devait créer une entreprise uniquement pour s’amuser, quel serait son concept ?',
'Pourquoi cette idée pourrait-elle fonctionner ?',
'Et quelle serait la première dispute entre les associés ?'],


// =========================================================
// 5. LES SITUATIONS DÉLICATES — 10 CARTES
// =========================================================

[2,'Les situations délicates',
'Comment réagis-tu lorsqu’on t’offre un cadeau qui ne te plaît absolument pas ?',
'Qu’est-ce que tu essaies de faire comprendre à la personne ?',
'Et quel cadeau t’a déjà demandé un véritable talent d’acteur ?'],

[3,'Les situations délicates',
'Que fais-tu quand quelqu’un te raconte pour la quatrième fois exactement la même histoire ?',
'Qu’est-ce qui te retient de l’interrompre ?',
'Et quelle stratégie as-tu déjà employée pour éviter la cinquième version ?'],

[2,'Les situations délicates',
'Comment réagis-tu lorsqu’un invité semble décidé à ne jamais repartir ?',
'Qu’est-ce qui t’empêche de lui demander franchement de partir ?',
'Et quelle technique de plus en plus évidente pourrais-tu utiliser ?'],

[3,'Les situations délicates',
'Que fais-tu lorsqu’une personne te demande un avis honnête sur quelque chose qu’elle adore et que tu détestes ?',
'Comment choisis-tu tes mots ?',
'Et quel avis as-tu déjà regretté d’avoir donné trop franchement ?'],

[2,'Les situations délicates',
'Comment réagis-tu quand quelqu’un te reconnaît mais que tu n’as aucune idée de qui il s’agit ?',
'Comment essaies-tu de gagner du temps ?',
'Et jusqu’où pourrais-tu pousser la conversation sans demander son identité ?'],

[3,'Les situations délicates',
'Que fais-tu lorsqu’un ami te demande de garder une surprise que tu as très envie de raconter ?',
'Comment résistes-tu à l’envie de parler ?',
'Et quelle révélation t’a déjà échappé beaucoup trop tôt ?'],

[2,'Les situations délicates',
'Quelle est ta réaction lorsqu’on t’invite à participer à une activité que tu ne maîtrises absolument pas ?',
'Qu’est-ce qui te pousse à accepter ou refuser ?',
'Et as-tu déjà bluffé sur ton niveau avant de devoir faire une démonstration ?'],

[3,'Les situations délicates',
'Comment réagis-tu quand quelqu’un te demande ton avis alors qu’il semble avoir déjà pris sa décision ?',
'Qu’est-ce qui te fait comprendre qu’il n’écoute pas vraiment ?',
'Et t’est-il déjà arrivé de lui donner volontairement une réponse inattendue ?'],

[3,'Les situations délicates',
'Que fais-tu lorsqu’une personne te parle pendant que tu essaies désespérément de te concentrer ?',
'Comment lui fais-tu comprendre la situation ?',
'Et quelle distraction a déjà provoqué chez toi une erreur mémorable ?'],

[4,'Les situations délicates',
'Quelle situation sociale te donnerait envie d’avoir un bouton pour disparaître immédiatement ?',
'Qu’est-ce qui la rendrait aussi inconfortable ?',
'Et quelle sortie théâtrale pourrais-tu inventer pour t’en échapper ?'],


// =========================================================
// 6. LES ÉMOTIONS — 10 CARTES
// =========================================================

[2,'Les émotions',
'Quelle chose peut t’émouvoir alors que tu ne t’y attends jamais ?',
'Pourquoi cela te touche-t-il ?',
'Et as-tu déjà essayé de dissimuler cette émotion devant d’autres personnes ?'],

[2,'Les émotions',
'Quel petit événement peut te donner l’impression d’avoir réussi ta journée ?',
'Qu’est-ce qui lui donne autant d’importance ?',
'Et est-ce une satisfaction que les personnes ici pourraient comprendre ?'],

[3,'Les émotions',
'Quand tu ressens une grande joie, quelle est ta première envie ?',
'Pourquoi cette réaction vient-elle naturellement ?',
'Et quel comportement particulièrement exubérant as-tu déjà eu ?'],

[2,'Les émotions',
'Quelle chose te rend nostalgique alors qu’elle paraît tout à fait ordinaire ?',
'Quel souvenir y associes-tu ?',
'Et que ressentirais-tu si tu pouvais revivre exactement ce moment pendant cinq minutes ?'],

[3,'Les émotions',
'Comment sais-tu qu’une situation te tient vraiment à cœur ?',
'Quel changement remarques-tu chez toi ?',
'Et quelle fois as-tu découvert trop tard à quel point cela comptait ?'],

[2,'Les émotions',
'Quel geste d’une autre personne peut transformer une journée difficile en une bonne journée ?',
'Pourquoi ce geste fonctionne-t-il ?',
'Et as-tu déjà été surpris par la personne qui l’a fait ?'],

[3,'Les émotions',
'Qu’est-ce qui te fait passer instantanément du sérieux au fou rire ?',
'Pourquoi ce déclencheur est-il aussi efficace ?',
'Et quelle fois as-tu dû quitter une pièce pour retrouver ton calme ?'],

[2,'Les émotions',
'Quelle musique, odeur ou ambiance peut modifier ton humeur sans que tu comprennes pourquoi ?',
'Quel souvenir ou quelle sensation y associes-tu ?',
'Et quelle réaction inattendue pourrait-elle provoquer chez toi en public ?'],

[3,'Les émotions',
'Quelle bonne nouvelle aurais-tu beaucoup de mal à garder pour toi pendant une journée entière ?',
'Pourquoi aurais-tu besoin de la partager ?',
'Et à qui risquerais-tu de la révéler en premier par accident ?'],

[4,'Les émotions',
'Quelle émotion as-tu du mal à reconnaître sur le moment mais comprends beaucoup mieux après coup ?',
'Qu’est-ce qui t’empêche de l’identifier immédiatement ?',
'Et quelle situation t’a déjà fait découvrir cette émotion de manière surprenante ?'],


// =========================================================
// 7. LES JEUX DE RÔLE — 10 CARTES
// =========================================================

[1,'Les personnages',
'Si tu devais présenter la météo avec ton style personnel, à quoi ressemblerait ton bulletin ?',
'Quel ton adopterais-tu naturellement ?',
'Et comment annoncerais-tu une catastrophe météorologique en restant optimiste ?'],

[2,'Les personnages',
'Si tu devais jouer le méchant dans une comédie, quelle serait ta particularité ?',
'Qu’est-ce qui rendrait ton personnage mémorable ?',
'Et quelle faiblesse ferait échouer tous tes plans ?'],

[2,'Les personnages',
'Quel personnage célèbre serais-tu incapable d’imiter correctement mais essaierais-tu quand même ?',
'Pourquoi ce personnage te tente-t-il ?',
'Et accepterais-tu de nous en proposer une version très personnelle ?'],

[3,'Les personnages',
'Si tu étais responsable du recrutement pour une expédition sur Mars, quel critère inattendu utiliserais-tu ?',
'Pourquoi ce critère serait-il important ?',
'Et quelle question poserais-tu pour démasquer les candidats qui bluffent ?'],

[1,'Les personnages',
'Si tu devais ouvrir une école pour enseigner quelque chose de totalement personnel, quelle matière proposerais-tu ?',
'Quelle serait ta première leçon ?',
'Et pour quelle raison un élève pourrait-il être renvoyé de ton cours ?'],

[2,'Les personnages',
'Quel rôle aimerais-tu jouer dans un film où tous les autres joueurs seraient également acteurs ?',
'Qu’est-ce qui te plairait dans ce personnage ?',
'Et quelle scène souhaiterais-tu improviser avec le groupe ?'],

[3,'Les personnages',
'Si tu devenais le porte-parole officiel des personnes qui aiment ne rien faire, quel serait ton premier discours ?',
'Quel argument défendrais-tu avec le plus de conviction ?',
'Et comment justifierais-tu ton salaire sans jamais travailler ?'],

[2,'Les personnages',
'Si tu ouvrais un musée consacré à un aspect de ta vie, quelle serait son exposition principale ?',
'Qu’est-ce que les visiteurs pourraient découvrir ?',
'Et quelle salle serait strictement interdite aux moins curieux ?'],

[3,'Les personnages',
'Si tu devais inventer une fausse publicité pour toi-même, quel serait ton argument de vente ?',
'Quelle qualité mettrais-tu en avant ?',
'Et quel avertissement honnête faudrait-il ajouter en très petits caractères ?'],

[4,'Les personnages',
'Si tu devais tenir un rôle complètement opposé à ton caractère pendant toute une soirée, quel personnage choisirais-tu ?',
'Quelle serait la partie la plus difficile à jouer ?',
'Et qui serait le premier à te démasquer en te voyant agir ?'],


// =========================================================
// 8. NOTRE RAPPORT AU TEMPS — 10 CARTES
// =========================================================

[1,'Le temps',
'Quelle activité te semble toujours durer cinq minutes alors qu’elle prend beaucoup plus longtemps ?',
'Qu’est-ce qui te fait perdre la notion de la durée ?',
'Et quel rendez-vous as-tu déjà failli manquer à cause de ça ?'],

[2,'Le temps',
'Quel moment de la journée voudrais-tu pouvoir prolonger d’une heure ?',
'Pourquoi celui-ci précisément ?',
'Et que ferais-tu de cette heure supplémentaire si personne ne pouvait te déranger ?'],

[2,'Le temps',
'Quelle tâche repousses-tu régulièrement alors qu’elle prendrait très peu de temps ?',
'Qu’est-ce qui te donne si peu envie de commencer ?',
'Et depuis combien de temps certaines de ces tâches attendent-elles ?'],

[3,'Le temps',
'Quelle période de ta vie a semblé passer beaucoup trop vite ?',
'Qu’est-ce qui la rendait si particulière ?',
'Et quel détail aurais-tu aimé prendre davantage le temps d’apprécier ?'],

[2,'Le temps',
'Quand tu arrives beaucoup trop tôt quelque part, comment occupes-tu ton attente ?',
'Pourquoi choisis-tu cette occupation ?',
'Et quelle chose inattendue as-tu déjà découverte en attendant ?'],

[3,'Le temps',
'Quelle occasion mériterait selon toi de devenir un jour férié personnel ?',
'Pourquoi voudrais-tu la célébrer chaque année ?',
'Et quelle tradition surprenante imposerais-tu à ceux qui voudraient participer ?'],

[2,'Le temps',
'Quelle chose te paraît interminable alors que les autres semblent l’apprécier ?',
'Qu’est-ce qui rend ce moment si long pour toi ?',
'Et quelle stratégie as-tu développée pour accélérer le temps dans ta tête ?'],

[3,'Le temps',
'Quel projet pourrais-tu commencer avec enthousiasme mais abandonner dès que la nouveauté disparaît ?',
'Qu’est-ce qui te plaît surtout au début ?',
'Et combien de projets inachevés pourraient témoigner contre toi ?'],

[2,'Le temps',
'Quelle activité ferais-tu différemment si tu devais obligatoirement prendre deux fois plus de temps ?',
'Qu’est-ce que tu changerais dans ta manière de faire ?',
'Et découvrirais-tu finalement un plaisir que tu négligeais ?'],

[4,'Le temps',
'Si tu pouvais réserver chaque année une journée entièrement effacée de ton agenda, comment l’utiliserais-tu ?',
'Qu’est-ce qui rendrait cette journée spéciale ?',
'Et quelle activité n’oserais-tu pas inscrire sur un agenda visible de tous ?'],


// =========================================================
// 9. LES SCÉNARIOS DE SOCIÉTÉ — 10 CARTES
// =========================================================

[1,'Les scénarios',
'Si tout le monde devait inventer sa propre poignée de main, à quoi ressemblerait la tienne ?',
'Qu’est-ce qu’elle dirait de toi ?',
'Et accepterais-tu de nous faire une démonstration ?'],

[2,'Les scénarios',
'Si les adultes devaient avoir une récréation obligatoire chaque jour, comment devrait-elle se dérouler ?',
'Quelle activité faudrait-il absolument prévoir ?',
'Et quelle règle risquerait rapidement de transformer la récréation en compétition ?'],

[2,'Les scénarios',
'Si chaque personne devait afficher un message d’accueil avant qu’on lui adresse la parole, qu’écrirais-tu ?',
'Pourquoi choisirais-tu ce message ?',
'Et quel message afficherais-tu pendant une très mauvaise journée ?'],

[3,'Les scénarios',
'Si tu pouvais changer une seule règle de politesse pour toute la société, que proposerais-tu ?',
'Qu’est-ce que cela améliorerait selon toi ?',
'Et quel comportement aujourd’hui mal vu deviendrait soudainement acceptable ?'],

[2,'Les scénarios',
'Si une machine pouvait préparer parfaitement une chose à ta place chaque matin, que lui demanderais-tu ?',
'Pourquoi ce service serait-il précieux ?',
'Et quelle erreur de programmation rendrait la machine particulièrement pénible ?'],

[3,'Les scénarios',
'Si les humains devaient obligatoirement porter un badge indiquant leur niveau d’énergie, comment utiliserais-tu cette information ?',
'Qu’est-ce que cela changerait dans les relations ?',
'Et à quel moment souhaiterais-tu pouvoir truquer ton propre badge ?'],

[2,'Les scénarios',
'Si les conversations devaient commencer par une question plutôt que par une salutation, laquelle choisirais-tu ?',
'Pourquoi cette question serait-elle intéressante ?',
'Et quelle réponse pourrait immédiatement mettre les deux personnes dans l’embarras ?'],

[3,'Les scénarios',
'Si tu pouvais ajouter un bouton à la vie quotidienne pour simplifier les relations humaines, que ferait-il ?',
'Quel problème voudrais-tu éviter grâce à ce bouton ?',
'Et comment pourrait-on en abuser de façon comique ?'],

[3,'Les scénarios',
'Si chacun devait posséder une mascotte représentant son caractère, quel animal ou objet choisirais-tu ?',
'Quelle particularité partageriez-vous ?',
'Et quelle mauvaise habitude cette mascotte aurait-elle héritée de toi ?'],

[4,'Les scénarios',
'Si toute la société devait vivre une journée sans pouvoir utiliser de prétextes, qu’est-ce qui changerait le plus ?',
'Quelle situation deviendrait particulièrement délicate ?',
'Et quelle vérité du quotidien aurait beaucoup plus de mal à passer ?'],


// =========================================================
// 10. LES RÉVÉLATIONS INATTENDUES — 10 CARTES
// =========================================================

[2,'Les révélations',
'Quelle chose fais-tu beaucoup mieux lorsque personne ne t’observe ?',
'Pourquoi la présence des autres change-t-elle ta façon d’agir ?',
'Et quelle démonstration ratée pourrait prouver exactement le contraire de ton talent ?'],

[2,'Les révélations',
'Quel détail très précis peut te permettre de reconnaître une personne après plusieurs années ?',
'Pourquoi ce détail reste-t-il aussi présent dans ta mémoire ?',
'Et quelle personne serais-tu incapable de reconnaître malgré des années passées ensemble ?'],

[3,'Les révélations',
'Quel sujet possèdes-tu des connaissances étonnamment détaillées sans raison évidente ?',
'Comment as-tu appris tout cela ?',
'Et quelle information pourrais-tu nous donner qui nous laisserait complètement perplexes ?'],

[2,'Les révélations',
'Quelle tradition personnelle as-tu inventée sans jamais vraiment l’expliquer aux autres ?',
'Comment cette tradition est-elle apparue ?',
'Et quelle serait la réaction de tes proches si tu décidais de l’imposer à tout le monde ?'],

[3,'Les révélations',
'Quelle chose du quotidien peux-tu reconnaître uniquement grâce à son bruit ?',
'Comment as-tu développé cette capacité ?',
'Et serais-tu capable de réussir un test les yeux fermés ?'],

[2,'Les révélations',
'Quel souvenir très précis gardes-tu d’une journée dont tout le reste t’a échappé ?',
'Pourquoi ce petit détail est-il resté ?',
'Et serait-il possible que les autres personnes présentes s’en souviennent complètement différemment ?'],

[3,'Les révélations',
'Quel comportement chez toi change sensiblement selon la saison ?',
'Qu’est-ce qui explique cette différence ?',
'Et quelle version saisonnière de toi serait la plus difficile à supporter en vacances ?'],

[2,'Les révélations',
'Quel savoir-faire complètement démodé aimerais-tu transmettre à quelqu’un ?',
'Pourquoi tiens-tu à ce savoir-faire ?',
'Et quelle réaction aurais-tu si on te disait qu’une application fait déjà beaucoup mieux ?'],

[3,'Les révélations',
'Quelle chose as-tu déjà réussie par pur hasard alors que tu prétendais parfaitement savoir ce que tu faisais ?',
'Qu’est-ce qui t’a permis de maintenir les apparences ?',
'Et as-tu accepté les compliments sans jamais révéler la vérité ?'],

[4,'Les révélations',
'Quelle expérience apparemment banale a finalement modifié ta façon de voir une situation ?',
'Quel détail a provoqué ce changement ?',
'Et quelle personne autour de cette table serait la plus étonnée d’apprendre ce que tu en as retenu ?'],

// FIN DE LA SÉRIE 8

/* =========================================================
   LE CHAOS DE PROMÉTHÉE
   SÉRIE 9 — LES 100 NOUVELLES CARTES
========================================================= */

// 1. LES MALADRESSES HUMAINES

[1,'Les maladresses',
'Quelle petite maladresse te ressemble particulièrement ?',
'À quel moment te joue-t-elle des tours ?',
'Et quelle fois a-t-elle provoqué un fou rire général ?'],

[2,'Les maladresses',
'Quelle chose arrives-tu à renverser presque systématiquement ?',
'Pourquoi cela t’arrive-t-il aussi souvent ?',
'Et quelle catastrophe as-tu déjà évitée de justesse ?'],

[2,'Les maladresses',
'Quelle erreur de manipulation as-tu déjà commise avec un appareil que tu utilisais pourtant depuis des années ?',
'Comment as-tu réussi cette erreur ?',
'Et qui était présent pour assister à cet exploit ?'],

[1,'Les maladresses',
'Quel geste tout simple rates-tu régulièrement sans comprendre pourquoi ?',
'Qu’est-ce qui te complique la tâche ?',
'Et accepterais-tu de le refaire devant nous ?'],

[2,'Les maladresses',
'Quelle confusion as-tu déjà faite en lisant une indication ou une pancarte ?',
'Comment as-tu découvert ton erreur ?',
'Et jusqu’où cette mauvaise lecture t’a-t-elle entraîné ?'],

[3,'Les maladresses',
'Quelle situation t’a déjà obligé à prétendre que tout était volontaire alors que tu venais de faire une énorme maladresse ?',
'Pourquoi as-tu préféré sauver les apparences ?',
'Et combien de personnes ont réellement cru à ton explication ?'],

[2,'Les maladresses',
'Quelle erreur de tenue ou d’habillement as-tu découverte beaucoup trop tard ?',
'À quel moment t’en es-tu aperçu ?',
'Et combien de personnes avaient probablement déjà remarqué le problème ?'],

[1,'Les maladresses',
'Quel objet as-tu déjà cherché longtemps alors qu’il était juste devant toi ?',
'Pourquoi ne le voyais-tu pas ?',
'Et quelqu’un t’a-t-il laissé chercher simplement pour rire ?'],

[3,'Les maladresses',
'Quelle démonstration censée être impressionnante s’est transformée en véritable fiasco ?',
'À quel moment as-tu compris que cela tournait mal ?',
'Et comment as-tu terminé la démonstration malgré tout ?'],

[2,'Les maladresses',
'Quelle maladresse d’une autre personne t’a fait rire alors que tu aurais dû rester sérieux ?',
'Qu’est-ce qui rendait la scène si drôle ?',
'Et la personne a-t-elle fini par rire avec toi ?'],


// 2. LES INVENTIONS

[1,'Les inventions',
'Quel problème minuscule du quotidien mériterait une invention révolutionnaire ?',
'Pourquoi ce problème te dérange-t-il autant ?',
'Et quel prix serais-tu prêt à payer pour cette invention ?'],

[2,'Les inventions',
'Quelle machine complètement inutile aimerais-tu pourtant posséder ?',
'À quoi te servirait-elle réellement ?',
'Et comment justifierais-tu cet achat auprès de ton entourage ?'],

[2,'Les inventions',
'Si tu pouvais créer un nouveau parfum, quelle odeur choisirais-tu ?',
'Quel souvenir voudrais-tu provoquer ?',
'Et quelle personne serait totalement horrifiée par ton parfum ?'],

[1,'Les inventions',
'Quel objet du quotidien devrait obligatoirement être équipé d’un bouton secret ?',
'À quoi servirait ce bouton ?',
'Et dans quelle situation son utilisation deviendrait-elle très embarrassante ?'],

[2,'Les inventions',
'Quelle invention actuelle te semble encore beaucoup trop compliquée à utiliser ?',
'Qu’est-ce que tu voudrais simplifier ?',
'Et quelle erreur ridicule as-tu déjà commise en essayant de la comprendre ?'],

[3,'Les inventions',
'Si tu devais commercialiser une invention destinée aux personnes paresseuses, que proposerais-tu ?',
'Pourquoi serait-elle irrésistible ?',
'Et quel slogan utiliserais-tu pour convaincre les plus courageux ?'],

[2,'Les inventions',
'Quelle fonction aimerais-tu ajouter à ton miroir ?',
'Qu’est-ce que tu voudrais apprendre ou obtenir grâce à elle ?',
'Et quelle fonction risquerait de devenir insupportable après trois jours ?'],

[3,'Les inventions',
'Si une intelligence artificielle pouvait imiter parfaitement ta voix, quelle utilisation amusante en ferais-tu ?',
'Qu’est-ce qui rendrait cette imitation convaincante ?',
'Et quelle phrase ne voudrais-tu surtout pas qu’elle prononce en public ?'],

[2,'Les inventions',
'Quel objet aimerais-tu pouvoir miniaturiser pour toujours le transporter avec toi ?',
'Pourquoi cet objet serait-il si utile ?',
'Et à quel moment sa présence pourrait-elle surprendre tout le monde ?'],

[3,'Les inventions',
'Quelle invention du futur pourrait complètement bouleverser tes habitudes personnelles ?',
'Qu’est-ce que tu adopterais immédiatement ?',
'Et quelle fonction refuserais-tu absolument d’activer ?'],


// 3. ENTRE AMIS

[1,'Entre amis',
'Quelle tradition entre amis mériterait de durer toute une vie ?',
'Qu’est-ce qui la rend si agréable ?',
'Et quelle modification pourrait la rendre encore plus mémorable ?'],

[2,'Entre amis',
'Quelle activité te semble beaucoup plus drôle à plusieurs que tout seul ?',
'Qu’est-ce qui change lorsque les autres sont présents ?',
'Et quelle fois le groupe a-t-il complètement détourné l’activité prévue ?'],

[2,'Entre amis',
'Qu’est-ce qui te fait reconnaître immédiatement une soirée qui s’annonce mémorable ?',
'Quels sont les premiers signes ?',
'Et quelle soirée a commencé calmement pour finir complètement autrement ?'],

[3,'Entre amis',
'Quel genre de plaisanterie entre amis te fait rire pendant des années ?',
'Pourquoi cette plaisanterie ne vieillit-elle jamais ?',
'Et quelle histoire pourrait encore être racontée dans vingt ans ?'],

[2,'Entre amis',
'Qu’est-ce que tu apprécies le plus chez une personne avec laquelle tu peux rester longtemps sans parler ?',
'Qu’est-ce qui rend ce silence agréable ?',
'Et dans quelle situation serais-tu incapable de rester silencieux ?'],

[3,'Entre amis',
'Quelle activité entre amis as-tu déjà acceptée sans vraiment savoir dans quoi tu t’engageais ?',
'Comment t’a-t-on présenté cette activité ?',
'Et à quel moment as-tu compris qu’on avait oublié quelques détails ?'],

[2,'Entre amis',
'Quel détail peut transformer une simple invitation en quelque chose que tu attends avec impatience ?',
'Pourquoi ce détail fait-il la différence ?',
'Et quelle invitation inattendue t’a déjà particulièrement enthousiasmé ?'],

[3,'Entre amis',
'Quelle chose arrives-tu à raconter beaucoup plus facilement à plusieurs qu’en tête-à-tête ?',
'Qu’est-ce qui rend cette situation plus confortable ?',
'Et as-tu déjà regretté qu’une conversation de groupe devienne soudainement très silencieuse ?'],

[2,'Entre amis',
'Quelle activité aimerais-tu organiser avec un groupe qui accepte de jouer le jeu à fond ?',
'Qu’est-ce qui rendrait cette activité amusante ?',
'Et quelle consigne spéciale imposerais-tu dès le départ ?'],

[3,'Entre amis',
'Quel comportement des autres te fait immédiatement comprendre que tu es vraiment à l’aise dans un groupe ?',
'Qu’est-ce que cela change dans ta manière d’être ?',
'Et quelle facette inattendue de toi apparaît à ce moment-là ?'],


// 4. LES GRANDS DÉBATS LÉGERS

[1,'Les débats',
'Quelle habitude du quotidien devrait faire l’objet d’une règle universelle ?',
'Pourquoi cette règle serait-elle utile ?',
'Et quelle exception voudrais-tu absolument obtenir pour toi-même ?'],

[2,'Les débats',
'Quelle chose semble très facile à tout le monde mais demande selon toi un véritable savoir-faire ?',
'Qu’est-ce qui la rend plus compliquée qu’il n’y paraît ?',
'Et accepterais-tu de démontrer ta technique devant le groupe ?'],

[2,'Les débats',
'Quel comportement banal devrait selon toi être récompensé par une médaille ?',
'Pourquoi mériterait-il une récompense ?',
'Et quelle personne ici pourrait prétendre à cette médaille ?'],

[1,'Les débats',
'Quelle activité est bien meilleure le matin que le soir, ou l’inverse ?',
'Qu’est-ce qui change selon le moment ?',
'Et quelle expérience pourrait te convaincre de changer d’avis ?'],

[2,'Les débats',
'Quelle règle non écrite de la vie quotidienne devrait être officiellement expliquée à tout le monde ?',
'Pourquoi devrait-on la connaître ?',
'Et quelle situation gênante pourrait-elle éviter ?'],

[3,'Les débats',
'Quelle chose considérée comme luxueuse trouve-tu finalement assez décevante ?',
'Qu’est-ce qui ne correspond pas à sa réputation ?',
'Et comment convaincrais-tu quelqu’un qui rêve de cette expérience ?'],

[2,'Les débats',
'Quel petit service devrait toujours être gratuit selon toi ?',
'Pourquoi le trouves-tu si essentiel ?',
'Et quelle contrepartie amusante accepterais-tu à la place de l’argent ?'],

[3,'Les débats',
'Quel objet ou usage mériterait un championnat du monde officiel ?',
'Quelles seraient les règles de la compétition ?',
'Et dans quelle catégorie pourrais-tu devenir champion ?'],

[2,'Les débats',
'Quelle chose les adultes devraient-ils apprendre à faire avant un certain âge ?',
'Pourquoi cela te semble-t-il important ?',
'Et combien de personnes autour de cette table réussiraient ton examen ?'],

[3,'Les débats',
'Quelle situation rendrait acceptable un comportement normalement considéré comme impoli ?',
'Pourquoi ferais-tu une exception ?',
'Et quel exemple pourrait diviser complètement le groupe ?'],


// 5. LES ANIMAUX

[1,'Les animaux',
'Quel comportement animal trouves-tu étonnamment proche de celui des humains ?',
'Qu’est-ce qui te fait penser cela ?',
'Et dans quelle situation pourrais-tu te reconnaître dans cet animal ?'],

[2,'Les animaux',
'Si tu pouvais discuter cinq minutes avec un animal, lequel choisirais-tu ?',
'Quelle serait ta première question ?',
'Et quelle réponse risquerait de te décevoir énormément ?'],

[2,'Les animaux',
'Quelle rencontre avec un animal t’a laissé un souvenir particulièrement drôle ?',
'Qu’est-ce qui s’est passé exactement ?',
'Et comment raconterait-il cette rencontre s’il pouvait parler ?'],

[1,'Les animaux',
'Quel animal choisirais-tu comme gardien d’un trésor sans aucune valeur ?',
'Pourquoi serait-il parfait pour cette mission ?',
'Et comment empêcherais-tu les curieux de découvrir que le trésor ne vaut rien ?'],

[2,'Les animaux',
'Quelle chose aimerais-tu apprendre à un animal s’il pouvait vraiment te comprendre ?',
'À quoi cela te servirait-il ?',
'Et quelle mauvaise habitude risquerait-il d’apprendre en t’observant ?'],

[3,'Les animaux',
'Si un animal devait raconter tes habitudes quotidiennes, que remarquerait-il en premier ?',
'Qu’est-ce qui lui semblerait étrange ?',
'Et quelle habitude jugerait-il complètement incompréhensible ?'],

[2,'Les animaux',
'Quelle espèce animale serait la plus difficile à accueillir comme colocataire ?',
'Quel serait le principal problème ?',
'Et quelle règle de vie devrais-tu imposer dès le premier jour ?'],

[1,'Les animaux',
'Quel animal pourrait te servir d’entraîneur personnel ?',
'Quelle qualité aimerais-tu lui emprunter ?',
'Et quelle partie de son entraînement refuserais-tu immédiatement ?'],

[3,'Les animaux',
'Si les animaux domestiques pouvaient laisser des avis sur leurs propriétaires, quel commentaire te ferait rire ?',
'Sur quoi porteraient leurs critiques ?',
'Et quelle note te donnerait ton propre animal, réel ou imaginaire ?'],

[2,'Les animaux',
'Quelle aptitude animale serait la plus pratique dans ta vie quotidienne ?',
'Dans quelle situation l’utiliserais-tu ?',
'Et quel usage complètement futile en ferais-tu en premier ?'],


// 6. LES FÊTES ET CÉLÉBRATIONS

[1,'Les fêtes',
'Quelle occasion aimerais-tu célébrer alors que personne n’y pense jamais ?',
'Pourquoi mériterait-elle une fête ?',
'Et quelle tradition originale inventerais-tu pour cette occasion ?'],

[2,'Les fêtes',
'Quel détail peut transformer une fête ordinaire en une soirée exceptionnelle ?',
'Pourquoi ce détail change-t-il autant l’ambiance ?',
'Et quelle fête t’a déjà surpris grâce à quelque chose de très simple ?'],

[2,'Les fêtes',
'Quelle chanson déclenche chez toi une envie immédiate de participer à la fête ?',
'Qu’est-ce qui la rend aussi efficace ?',
'Et accepterais-tu de lancer la danse tout seul si personne ne bougeait ?'],

[3,'Les fêtes',
'Quel rôle prends-tu naturellement quand une fête commence à devenir très animée ?',
'Pourquoi te retrouves-tu dans ce rôle ?',
'Et quelle fois as-tu surpris les autres par ton comportement ?'],

[2,'Les fêtes',
'Quelle décoration de fête pourrait être complètement exagérée sans te déranger ?',
'Qu’est-ce qui te plaît dans cette exagération ?',
'Et comment pousserais-tu l’idée encore plus loin ?'],

[3,'Les fêtes',
'Quelle fête ou célébration a pris une direction totalement imprévue ?',
'Quel événement a provoqué ce changement ?',
'Et quelle partie est devenue le meilleur souvenir de la soirée ?'],

[2,'Les fêtes',
'Quel thème de soirée aimerais-tu imposer au moins une fois ?',
'Qu’est-ce qui te plaît dans cette ambiance ?',
'Et quel costume choisirais-tu pour provoquer le plus de réactions ?'],

[3,'Les fêtes',
'Quel cadeau collectif totalement inattendu pourrait faire plaisir à quelqu’un qui possède déjà tout ?',
'Pourquoi choisirais-tu ce cadeau ?',
'Et comment organiserais-tu sa remise pour provoquer un grand fou rire ?'],

[2,'Les fêtes',
'Quel moment d’une fête attends-tu généralement le plus ?',
'Qu’est-ce qui le rend spécial pour toi ?',
'Et quelle fois ce moment a-t-il complètement dépassé tes attentes ?'],

[4,'Les fêtes',
'Quelle soirée aimerais-tu revivre uniquement pour observer à nouveau les réactions de certaines personnes ?',
'Qu’est-ce qui rendait leurs réactions mémorables ?',
'Et quelle scène aimerais-tu revoir depuis un autre point de vue ?'],


// 7. LES RENCONTRES FORTUITES

[2,'Les rencontres fortuites',
'Quelle rencontre a commencé par un malentendu finalement très amusant ?',
'Comment le malentendu a-t-il été dissipé ?',
'Et auriez-vous continué à discuter si tout avait été clair dès le départ ?'],

[2,'Les rencontres fortuites',
'Quelle conversation inattendue t’a fait découvrir un univers que tu ne connaissais pas ?',
'Qu’est-ce qui t’a intrigué ?',
'Et quelle nouvelle curiosité cette discussion a-t-elle déclenchée ?'],

[3,'Les rencontres fortuites',
'Quelle personne inconnue t’a déjà rendu un service au moment où tu ne t’y attendais pas ?',
'Qu’est-ce qui t’a marqué dans son geste ?',
'Et quelle réaction aurais-tu eue si elle t’avait demandé quelque chose en retour ?'],

[2,'Les rencontres fortuites',
'Quelle question posée par un inconnu t’a déjà complètement déstabilisé ?',
'Pourquoi ne t’y attendais-tu pas ?',
'Et quelle réponse aurais-tu aimé trouver immédiatement ?'],

[3,'Les rencontres fortuites',
'Quel événement t’a déjà rapproché temporairement de personnes avec lesquelles tu n’avais rien en commun ?',
'Qu’est-ce qui vous a réunis ?',
'Et quel souvenir avez-vous finalement partagé ?'],

[2,'Les rencontres fortuites',
'Quelle personne croisée brièvement t’a laissé une impression étonnamment durable ?',
'Quel détail t’a particulièrement marqué ?',
'Et que lui demanderais-tu si tu la retrouvais par hasard ?'],

[3,'Les rencontres fortuites',
'Quelle conversation as-tu déjà engagée uniquement parce qu’un détail avait éveillé ta curiosité ?',
'Quel était ce détail ?',
'Et quelle révélation inattendue as-tu obtenue ?'],

[2,'Les rencontres fortuites',
'Quelle rencontre a changé complètement le déroulement d’une journée ordinaire ?',
'Qu’est-ce qui s’est passé ensuite ?',
'Et que serait devenue cette journée sans cette rencontre ?'],

[3,'Les rencontres fortuites',
'Quelle personne as-tu déjà recroisée dans un endroit où tu ne t’attendais absolument pas à la voir ?',
'Comment avez-vous réagi ?',
'Et quelle coïncidence supplémentaire aurait rendu cette rencontre encore plus incroyable ?'],

[4,'Les rencontres fortuites',
'Quelle rencontre imprévue aurait pu prendre une direction totalement différente si tu avais prononcé une autre phrase ?',
'Quelle phrase a changé la suite ?',
'Et que penses-tu qu’il se serait passé avec une réponse plus audacieuse ?'],


// 8. LES MESSAGES ET COMMUNICATIONS

[1,'Les messages',
'Quelle sorte de message te fait sourire avant même que tu l’aies ouvert ?',
'Qu’est-ce qui te met dans cet état ?',
'Et quel message inattendu t’a déjà fait rire plusieurs minutes ?'],

[2,'Les messages',
'Quelle habitude as-tu lorsque tu dois répondre à un message particulièrement long ?',
'Pourquoi adoptes-tu cette méthode ?',
'Et combien de messages attendent parfois une réponse de ta part ?'],

[2,'Les messages',
'Quelle expression ou quel emoji utilises-tu d’une façon que les autres ne comprennent pas toujours ?',
'Quel sens lui donnes-tu ?',
'Et quel malentendu cela a-t-il déjà provoqué ?'],

[3,'Les messages',
'Quelle conversation par messages est devenue beaucoup plus compliquée qu’elle ne l’aurait été en face à face ?',
'Qu’est-ce qui provoquait les difficultés ?',
'Et quelle phrase aurait suffi à régler le problème immédiatement ?'],

[2,'Les messages',
'Quel type de notification te donne envie de regarder ton téléphone immédiatement ?',
'Pourquoi a-t-elle autant d’importance ?',
'Et quelle notification complètement banale t’a déjà fait espérer quelque chose de beaucoup plus intéressant ?'],

[3,'Les messages',
'Quelle erreur de correction automatique t’a déjà fait écrire quelque chose de complètement différent ?',
'Comment l’as-tu découverte ?',
'Et quelle réaction a provoqué le message avant que tu puisses le corriger ?'],

[2,'Les messages',
'Quelle chose préfères-tu toujours expliquer oralement plutôt que par écrit ?',
'Qu’est-ce qui se perd lorsque tu l’écris ?',
'Et quel message écrit a déjà été interprété d’une manière inattendue ?'],

[3,'Les messages',
'Quelle est la dernière conversation que tu as relue simplement parce qu’elle t’avait fait plaisir ?',
'Qu’est-ce qui la rendait agréable ?',
'Et quelle phrase t’avait particulièrement marqué ?'],

[2,'Les messages',
'Quel genre de message vocal pourrais-tu enregistrer sans jamais réussir à être bref ?',
'Pourquoi aurais-tu autant de choses à dire ?',
'Et quelle durée te semblerait déjà beaucoup trop longue pour celui qui le reçoit ?'],

[4,'Les messages',
'Quelle phrase pourrais-tu envoyer à quelqu’un qui prendrait un sens complètement différent sans son contexte ?',
'Quel serait le contexte réel ?',
'Et comment réagirais-tu si cette phrase était lue à voix haute devant un groupe ?'],


// 9. LES NÉGOCIATIONS

[2,'Les négociations',
'Quelle chose arrives-tu particulièrement bien à obtenir sans jamais insister lourdement ?',
'Quelle méthode utilises-tu ?',
'Et quelle fois cette méthode a-t-elle fonctionné beaucoup mieux que prévu ?'],

[2,'Les négociations',
'Quand tu dois convaincre quelqu’un, quel argument utilises-tu généralement en premier ?',
'Pourquoi fais-tu confiance à cet argument ?',
'Et quel type de personne reste complètement insensible à cette méthode ?'],

[3,'Les négociations',
'Quelle situation pourrait te pousser à accepter un compromis que tu trouves pourtant mauvais ?',
'Qu’est-ce qui te ferait céder ?',
'Et comment expliquerais-tu ensuite ce compromis aux autres ?'],

[2,'Les négociations',
'Quel service pourrais-tu échanger contre un autre sans utiliser d’argent ?',
'Pourquoi cet échange serait-il intéressant ?',
'Et quelle proposition totalement inattendue accepterais-tu d’étudier ?'],

[3,'Les négociations',
'Quelle chose préfères-tu obtenir par la patience plutôt que par la persuasion ?',
'Pourquoi la patience te semble-t-elle plus efficace ?',
'Et combien de temps serais-tu réellement capable d’attendre ?'],

[2,'Les négociations',
'Quelle règle proposerais-tu pour départager deux personnes qui veulent exactement la même chose ?',
'Pourquoi cette règle serait-elle juste ?',
'Et dans quelle situation demanderais-tu immédiatement une exception ?'],

[3,'Les négociations',
'Quel argument pourrait te faire accepter une activité dont tu n’as aucune envie ?',
'Pourquoi cet argument fonctionnerait-il ?',
'Et quelle promesse exigerais-tu pour accepter définitivement ?'],

[2,'Les négociations',
'Quelle situation te pousse à marchander alors que le montant n’est pas vraiment important ?',
'Qu’est-ce qui te plaît dans cette négociation ?',
'Et quelle réduction dérisoire t’a déjà procuré une grande satisfaction ?'],

[3,'Les négociations',
'Quelle concession fais-tu facilement pour préserver la bonne ambiance ?',
'Pourquoi celle-ci plutôt qu’une autre ?',
'Et à quel moment déciderais-tu que tu as déjà assez cédé ?'],

[4,'Les négociations',
'Si tu devais convaincre un groupe entier d’accepter une idée originale, comment présenterais-tu ton projet ?',
'Quel argument serait le plus convaincant ?',
'Et quelle partie du projet présenterais-tu seulement après avoir obtenu leur enthousiasme ?'],


// 10. LES RÉACTIONS IMPRÉVUES

[1,'Les réactions imprévues',
'Quelle bonne surprise pourrait te faire oublier instantanément ce que tu étais en train de faire ?',
'Pourquoi serait-elle aussi réjouissante ?',
'Et quelle activité importante pourrais-tu abandonner sur-le-champ ?'],

[2,'Les réactions imprévues',
'Que fais-tu quand tu réalises que tout le monde te regarde sans que tu saches pourquoi ?',
'Quelle est ta première pensée ?',
'Et quelle explication imaginerais-tu avant de découvrir la vérité ?'],

[2,'Les réactions imprévues',
'Comment réagirais-tu si quelqu’un t’applaudissait soudainement sans aucune explication ?',
'Qu’essaierais-tu de comprendre ?',
'Et comment pourrais-tu transformer cette scène en spectacle improvisé ?'],

[3,'Les réactions imprévues',
'Quelle chose pourrait te faire interrompre une discussion passionnante immédiatement ?',
'Pourquoi cela attirerait-il toute ton attention ?',
'Et comment expliquerais-tu cette interruption aux autres ?'],

[2,'Les réactions imprévues',
'Que ferais-tu si tout le monde commençait à rire alors que tu venais de dire quelque chose de parfaitement sérieux ?',
'Comment chercherais-tu à comprendre ?',
'Et serais-tu capable de continuer sans rire toi-même ?'],

[3,'Les réactions imprévues',
'Quelle annonce inattendue pourrait te faire rester complètement silencieux pendant plusieurs secondes ?',
'Qu’est-ce qui te surprendrait autant ?',
'Et quelle serait probablement ta première phrase après ce silence ?'],

[2,'Les réactions imprévues',
'Comment réagirais-tu si une personne te félicitait pour quelque chose que tu n’as jamais fait ?',
'Comment chercherais-tu à éclaircir la situation ?',
'Et combien de temps laisserais-tu durer le malentendu pour comprendre son origine ?'],

[3,'Les réactions imprévues',
'Quelle situation pourrait te faire éclater de rire alors que personne d’autre ne trouve cela drôle ?',
'Qu’est-ce qui déclencherait ton rire ?',
'Et comment expliquerais-tu ton amusement sans vexer personne ?'],

[3,'Les réactions imprévues',
'Que ferais-tu si tu recevais une invitation mystérieuse pour une activité dont tu ignores tout ?',
'Quelle information chercherais-tu en premier ?',
'Et quel indice pourrait suffire à te faire accepter avec enthousiasme ?'],

[4,'Les réactions imprévues',
'Quelle situation inattendue pourrait te pousser à révéler un talent ou une compétence que tu gardais habituellement pour toi ?',
'Pourquoi choisirais-tu ce moment pour le montrer ?',
'Et comment réagirais-tu si tous les autres te demandaient immédiatement une démonstration ?'],

// FIN SÉRIE 9



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


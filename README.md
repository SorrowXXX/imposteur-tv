# Imposteur TV

Page ouverte par les téléphones quand on scanne un QR code du jeu Imposteur sur la TV.
Le mot est encodé dans le lien (après le #) : rien n’est envoyé à un serveur.

## Quiz & Petit Bac

Jeu à plusieurs : la TV affiche les questions et les scores, chacun joue depuis son téléphone.

- `quiz-tv.html` : à ouvrir sur la TV (navigateur webOS ou app). Affiche un QR code, puis les questions, la validation et les scores. Se pilote à la télécommande (flèches + OK).
- `quiz-joueur.html` : la manette ouverte par le QR code. Le premier joueur arrivé (👑) peut aussi lancer la partie et passer à la suite depuis son téléphone.
- `js/quiz-questions.js` : les questions du quiz et les catégories du Petit Bac, faciles à compléter.
- `js/qrcode.js` : génération du QR code (qrcode-generator, licence MIT).

Modes :
- **Quiz** (10 ou 20 questions) : 4 réponses, 20 s par question, de 500 à 1000 points selon la rapidité.
- **Petit Bac** (3 ou 5 manches) : une lettre, 6 catégories, 2 min. Celui qui a tout rempli peut dire STOP (10 s pour les autres). Les joueurs refusent ensuite les réponses douteuses depuis leur téléphone. 15 pts si seul à avoir une réponse valable, 10 pts pour une réponse unique, 5 pts si quelqu’un a la même.

Comme le blind test, la TV et les téléphones se parlent en direct via PeerJS. Si `quiz-tv.html` est ouverte en local (file://), le QR code pointe vers `https://sorrowxxx.github.io/imposteur-tv/quiz-joueur.html` ; une autre adresse peut être donnée avec `quiz-tv.html?base=https://…/`.

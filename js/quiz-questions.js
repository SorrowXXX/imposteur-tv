// Banque de questions du quiz (page TV).
// Format : [thème, question, bonne réponse, mauvaise 1, mauvaise 2, mauvaise 3]
// Les réponses sont mélangées au moment de jouer.
var QUIZ_QUESTIONS = [
	// Géographie
	['Géographie', 'Quelle est la capitale de l\'Australie ?', 'Canberra', 'Sydney', 'Melbourne', 'Perth'],
	['Géographie', 'Quel est le plus long fleuve de France ?', 'La Loire', 'La Seine', 'Le Rhône', 'La Garonne'],
	['Géographie', 'Dans quel pays se trouve la ville de Marrakech ?', 'Maroc', 'Algérie', 'Tunisie', 'Égypte'],
	['Géographie', 'Quel est le plus haut sommet d\'Espagne ?', 'Le Teide', 'Le Mulhacén', 'L\'Aneto', 'Le Veleta'],
	['Géographie', 'Quelle mer borde Málaga ?', 'La Méditerranée', 'L\'Atlantique', 'La mer Cantabrique', 'La mer du Nord'],
	['Géographie', 'Quel pays a la plus grande superficie ?', 'La Russie', 'Le Canada', 'La Chine', 'Les États-Unis'],
	['Géographie', 'Quelle est la capitale du Canada ?', 'Ottawa', 'Toronto', 'Montréal', 'Vancouver'],
	['Géographie', 'Quel océan est le plus grand ?', 'Le Pacifique', 'L\'Atlantique', 'L\'Indien', 'L\'Arctique'],
	['Géographie', 'Dans quel pays se trouve le Machu Picchu ?', 'Pérou', 'Bolivie', 'Chili', 'Mexique'],
	['Géographie', 'Quelle ville est surnommée « la Ville Lumière » ?', 'Paris', 'Lyon', 'Rome', 'Las Vegas'],
	['Géographie', 'Quel détroit sépare l\'Espagne du Maroc ?', 'Gibraltar', 'Le Bosphore', 'Messine', 'Ormuz'],
	['Géographie', 'Quelle est la capitale de l\'Italie ?', 'Rome', 'Milan', 'Naples', 'Florence'],
	['Géographie', 'Quel pays est surnommé « le pays du Soleil-Levant » ?', 'Le Japon', 'La Chine', 'La Corée du Sud', 'La Thaïlande'],
	['Géographie', 'Quel est le plus grand désert chaud du monde ?', 'Le Sahara', 'Le Gobi', 'L\'Atacama', 'Le Kalahari'],
	['Géographie', 'Quelle est la capitale du Portugal ?', 'Lisbonne', 'Porto', 'Coimbra', 'Faro'],
	['Géographie', 'Quelle chaîne de montagnes sépare la France et l\'Espagne ?', 'Les Pyrénées', 'Les Alpes', 'Le Jura', 'Les Vosges'],

	// Histoire
	['Histoire', 'En quelle année a eu lieu la prise de la Bastille ?', '1789', '1792', '1776', '1804'],
	['Histoire', 'Qui était le premier homme à marcher sur la Lune ?', 'Neil Armstrong', 'Buzz Aldrin', 'Youri Gagarine', 'John Glenn'],
	['Histoire', 'En quelle année est tombé le mur de Berlin ?', '1989', '1991', '1985', '1961'],
	['Histoire', 'Quel empereur a été exilé sur l\'île de Sainte-Hélène ?', 'Napoléon Ier', 'Napoléon III', 'Charlemagne', 'Jules César'],
	['Histoire', 'Quelle civilisation a construit les pyramides de Gizeh ?', 'Les Égyptiens', 'Les Mayas', 'Les Romains', 'Les Perses'],
	['Histoire', 'En quelle année Christophe Colomb a-t-il atteint l\'Amérique ?', '1492', '1515', '1453', '1607'],
	['Histoire', 'Qui a peint la Joconde ?', 'Léonard de Vinci', 'Michel-Ange', 'Raphaël', 'Botticelli'],
	['Histoire', 'Quelle reine de France a été guillotinée en 1793 ?', 'Marie-Antoinette', 'Catherine de Médicis', 'Anne d\'Autriche', 'Joséphine'],
	['Histoire', 'En quelle année a pris fin la Seconde Guerre mondiale ?', '1945', '1944', '1946', '1918'],
	['Histoire', 'Quel navire a coulé en 1912 après avoir heurté un iceberg ?', 'Le Titanic', 'Le Lusitania', 'Le Britannic', 'Le Normandie'],
	['Histoire', 'Quelle ville était la capitale de l\'Empire byzantin ?', 'Constantinople', 'Rome', 'Athènes', 'Alexandrie'],
	['Histoire', 'Qui a été le premier président de la Ve République ?', 'Charles de Gaulle', 'Georges Pompidou', 'François Mitterrand', 'Vincent Auriol'],
	['Histoire', 'Quelle ville andalouse fut le dernier royaume musulman d\'Espagne ?', 'Grenade', 'Cordoue', 'Séville', 'Málaga'],
	['Histoire', 'En quelle année l\'euro est-il entré dans les porte-monnaie ?', '2002', '1999', '2000', '2004'],

	// Sciences
	['Sciences', 'Quel est le symbole chimique de l\'or ?', 'Au', 'Ag', 'Or', 'Go'],
	['Sciences', 'Quelle planète est la plus proche du Soleil ?', 'Mercure', 'Vénus', 'Mars', 'La Terre'],
	['Sciences', 'Combien d\'os compte le squelette d\'un adulte ?', '206', '186', '226', '312'],
	['Sciences', 'Quelle est la formule chimique de l\'eau ?', 'H₂O', 'CO₂', 'O₂', 'H₂O₂'],
	['Sciences', 'Quelle est la plus grande planète du système solaire ?', 'Jupiter', 'Saturne', 'Neptune', 'Uranus'],
	['Sciences', 'À quelle température l\'eau bout-elle au niveau de la mer ?', '100 °C', '90 °C', '110 °C', '80 °C'],
	['Sciences', 'Quel organe pompe le sang dans le corps ?', 'Le cœur', 'Le foie', 'Les poumons', 'Les reins'],
	['Sciences', 'Quel gaz les plantes absorbent-elles pour la photosynthèse ?', 'Le dioxyde de carbone', 'L\'oxygène', 'L\'azote', 'L\'hélium'],
	['Sciences', 'Qui a formulé la théorie de la relativité ?', 'Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Stephen Hawking'],
	['Sciences', 'Combien de temps la lumière du Soleil met-elle environ pour atteindre la Terre ?', '8 minutes', '8 secondes', '1 heure', '1 journée'],
	['Sciences', 'Quel est l\'élément le plus abondant dans l\'air ?', 'L\'azote', 'L\'oxygène', 'Le dioxyde de carbone', 'L\'argon'],
	['Sciences', 'Quelle planète est surnommée la planète rouge ?', 'Mars', 'Vénus', 'Jupiter', 'Mercure'],
	['Sciences', 'Combien de chromosomes possède une cellule humaine normale ?', '46', '23', '44', '48'],
	['Sciences', 'Quelle unité mesure la résistance électrique ?', 'L\'ohm', 'Le volt', 'L\'ampère', 'Le watt'],
	['Sciences', 'Qui a découvert la pénicilline ?', 'Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Robert Koch'],

	// Culture
	['Culture', 'Qui a écrit « Les Misérables » ?', 'Victor Hugo', 'Émile Zola', 'Alexandre Dumas', 'Gustave Flaubert'],
	['Culture', 'Qui a écrit « Don Quichotte » ?', 'Miguel de Cervantes', 'Federico García Lorca', 'Lope de Vega', 'Gabriel García Márquez'],
	['Culture', 'Dans quelle ville est né Pablo Picasso ?', 'Málaga', 'Barcelone', 'Madrid', 'Séville'],
	['Culture', 'Quel compositeur est devenu sourd en fin de vie ?', 'Beethoven', 'Mozart', 'Bach', 'Chopin'],
	['Culture', 'Combien de cordes possède une guitare classique ?', '6', '4', '7', '12'],
	['Culture', 'Dans quel musée est exposée la Joconde ?', 'Le Louvre', 'Le musée d\'Orsay', 'Le Prado', 'Les Offices'],
	['Culture', 'Qui a écrit « Le Petit Prince » ?', 'Antoine de Saint-Exupéry', 'Jules Verne', 'Albert Camus', 'Marcel Pagnol'],
	['Culture', 'Quel peintre s\'est coupé une partie de l\'oreille ?', 'Vincent van Gogh', 'Paul Gauguin', 'Claude Monet', 'Salvador Dalí'],
	['Culture', 'Quelle est la langue la plus parlée au monde en langue maternelle ?', 'Le chinois mandarin', 'L\'anglais', 'L\'espagnol', 'L\'hindi'],
	['Culture', 'Quel architecte a conçu la Sagrada Família ?', 'Antoni Gaudí', 'Le Corbusier', 'Santiago Calatrava', 'Gustave Eiffel'],
	['Culture', 'Quel instrument joue-t-on avec un archet ?', 'Le violon', 'La trompette', 'Le piano', 'La harpe'],
	['Culture', 'De quelle couleur est la fumée qui annonce l\'élection d\'un nouveau pape ?', 'Blanche', 'Noire', 'Grise', 'Rouge'],
	['Culture', 'Combien de cases compte un plateau d\'échecs ?', '64', '81', '100', '49'],

	// Sport
	['Sport', 'Combien de joueurs compte une équipe de football sur le terrain ?', '11', '10', '9', '12'],
	['Sport', 'Tous les combien d\'années ont lieu les Jeux olympiques d\'été ?', '4 ans', '2 ans', '3 ans', '5 ans'],
	['Sport', 'Quel tournoi de tennis se joue sur terre battue à Paris ?', 'Roland-Garros', 'Wimbledon', 'l\'US Open', 'l\'Open d\'Australie'],
	['Sport', 'Combien de points vaut un essai au rugby à XV ?', '5', '3', '4', '7'],
	['Sport', 'Dans quel sport utilise-t-on un volant ?', 'Le badminton', 'Le squash', 'Le tennis de table', 'Le padel'],
	['Sport', 'Quelle est la distance d\'un marathon ?', '42,195 km', '40 km', '21,1 km', '50 km'],
	['Sport', 'Quel joueur de tennis espagnol a gagné Roland-Garros 14 fois ?', 'Rafael Nadal', 'Carlos Alcaraz', 'David Ferrer', 'Carlos Moyá'],
	['Sport', 'Combien de joueurs compte une équipe de basket sur le terrain ?', '5', '6', '7', '4'],
	['Sport', 'De quelle couleur est le maillot du leader du Tour de France ?', 'Jaune', 'Vert', 'Blanc', 'Rose'],
	['Sport', 'Dans quel sport parle-t-on de « strike » et de « spare » ?', 'Le bowling', 'Le baseball', 'Le golf', 'Le cricket'],
	['Sport', 'Quel pays a gagné la Coupe du monde de football 2010 ?', 'L\'Espagne', 'Les Pays-Bas', 'L\'Allemagne', 'Le Brésil'],
	['Sport', 'Combien de trous compte un parcours de golf standard ?', '18', '9', '12', '21'],
	['Sport', 'Quel club joue au stade Santiago-Bernabéu ?', 'Le Real Madrid', 'L\'Atlético de Madrid', 'Le FC Barcelone', 'Le FC Séville'],

	// Cuisine
	['Cuisine', 'Quel est l\'ingrédient principal du guacamole ?', 'L\'avocat', 'Le concombre', 'Les petits pois', 'La courgette'],
	['Cuisine', 'De quel pays vient le gaspacho ?', 'L\'Espagne', 'L\'Italie', 'Le Mexique', 'La Grèce'],
	['Cuisine', 'Quel fromage est indispensable à une vraie pizza Margherita ?', 'La mozzarella', 'Le parmesan', 'Le gorgonzola', 'Le cheddar'],
	['Cuisine', 'Avec quelle céréale fait-on les sushis ?', 'Le riz', 'Le blé', 'L\'orge', 'Le maïs'],
	['Cuisine', 'Quel fruit sec est la base de la pâte d\'amande ?', 'L\'amande', 'La noisette', 'La noix de cajou', 'La pistache'],
	['Cuisine', 'Qu\'est-ce qu\'un « espeto » à Málaga ?', 'Des sardines grillées en brochette', 'Un dessert au chocolat', 'Un vin doux', 'Une soupe froide'],
	['Cuisine', 'Quel légume donne sa couleur au bortsch ?', 'La betterave', 'La tomate', 'Le poivron', 'La carotte'],
	['Cuisine', 'Quelle épice est la plus chère au monde ?', 'Le safran', 'La vanille', 'La cardamome', 'La cannelle'],
	['Cuisine', 'De quelle ville vient la tarte Tatin, selon la tradition ?', 'Lamotte-Beuvron', 'Lyon', 'Strasbourg', 'Tours'],
	['Cuisine', 'Le jamón ibérico provient de quel animal ?', 'Le porc', 'Le sanglier', 'Le bœuf', 'L\'agneau'],
	['Cuisine', 'Quel est l\'ingrédient de base de la mayonnaise, avec l\'huile ?', 'Le jaune d\'œuf', 'La crème', 'Le beurre', 'Le blanc d\'œuf'],

	// Nature
	['Nature', 'Quel est le plus grand mammifère du monde ?', 'La baleine bleue', 'L\'éléphant d\'Afrique', 'Le cachalot', 'La girafe'],
	['Nature', 'Combien de pattes a une araignée ?', '8', '6', '10', '12'],
	['Nature', 'Quel animal est le plus rapide sur terre ?', 'Le guépard', 'Le lion', 'L\'antilope', 'Le lévrier'],
	['Nature', 'Comment appelle-t-on le petit de la vache ?', 'Le veau', 'Le poulain', 'L\'agneau', 'Le chevreau'],
	['Nature', 'De quoi se nourrit principalement le panda géant ?', 'De bambou', 'De poissons', 'De fruits', 'D\'insectes'],
	['Nature', 'Quel oiseau est le symbole de la paix ?', 'La colombe', 'Le cygne', 'L\'aigle', 'Le moineau'],
	['Nature', 'Quel arbre produit les glands ?', 'Le chêne', 'Le hêtre', 'Le châtaignier', 'Le noyer'],
	['Nature', 'Combien de cœurs possède une pieuvre ?', '3', '1', '2', '8'],
	['Nature', 'Quel est le seul mammifère capable de voler ?', 'La chauve-souris', 'L\'écureuil volant', 'Le colugo', 'Le phalanger'],
	['Nature', 'Comment s\'appelle la transformation de la chenille en papillon ?', 'La métamorphose', 'La mue', 'La photosynthèse', 'L\'éclosion'],
	['Nature', 'Quel animal est connu pour changer de couleur ?', 'Le caméléon', 'Le gecko', 'L\'iguane', 'La salamandre'],
	['Nature', 'Combien de bosses a un dromadaire ?', '1', '2', '3', '0'],

	// Divers
	['Divers', 'Combien de minutes y a-t-il dans une journée ?', '1 440', '1 200', '2 400', '3 600'],
	['Divers', 'Combien de faces a un dé classique ?', '6', '4', '8', '12'],
	['Divers', 'Quelle est la couleur obtenue en mélangeant du bleu et du jaune ?', 'Vert', 'Violet', 'Orange', 'Marron'],
	['Divers', 'Combien de jours compte une année bissextile ?', '366', '365', '364', '360'],
	['Divers', 'Quel est le nombre romain pour 50 ?', 'L', 'C', 'D', 'V'],
	['Divers', 'Quelle est la devise de la France ?', 'Liberté, Égalité, Fraternité', 'Travail, Famille, Patrie', 'Unité, Justice, Liberté', 'Paix, Force, Honneur'],
	['Divers', 'Combien de lettres compte l\'alphabet français ?', '26', '24', '28', '30'],
	['Divers', 'Quel est le nom du célèbre plombier des jeux vidéo de Nintendo ?', 'Mario', 'Luigi', 'Wario', 'Link'],
	['Divers', 'Quelle est la monnaie du Royaume-Uni ?', 'La livre sterling', 'L\'euro', 'Le dollar', 'Le franc'],
	['Divers', 'Combien y a-t-il de secondes dans une heure ?', '3 600', '6 000', '360', '1 440'],
	['Divers', 'Quel réseau social a pour logo un oiseau bleu jusqu\'en 2023 ?', 'Twitter', 'Facebook', 'Instagram', 'Snapchat'],
	['Divers', 'Quel est le plus petit nombre premier ?', '2', '1', '3', '0']
];

// Catégories du Petit Bac (6 sont tirées au hasard à chaque manche)
var BAC_CATEGORIES = [
	'Prénom', 'Pays', 'Ville', 'Animal', 'Fruit ou légume', 'Métier', 'Objet',
	'Marque', 'Sport', 'Couleur', 'Célébrité', 'Plat ou aliment', 'Film ou série',
	'Instrument', 'Vêtement', 'Partie du corps', 'Moyen de transport', 'Boisson',
	'Personnage de fiction', 'Chose qu\'on trouve dans une cuisine'
];

// Lettres tirées pour le Petit Bac (les plus difficiles sont exclues)
var BAC_LETTERS = 'ABCDEFGHIJLMNOPRSTV';

// Réglages du site. C'est le seul fichier à modifier.
window.CONFIG = {
  titre: "Eclaireurs-Saint-Quirin",
  sousTitre: "Année 2026-2027",

  // Couleurs de l'unité.
  couleurs: {
    principale: "#7b1e2e", // bordeaux
    secondaire: "#5d6166", // gris
    fond: "#efeeeb",       // gris clair du fond de page
  },

  // Logo affiché dans l'en-tête et logo affiché en bas de page. Vide = pas de logo.
  logo: "images/eclaireurs.png",
  logoPied: "images/scoutisme-mondial.png",

  // Couleur et logo de chaque patrouille (facultatif). Le nom doit être écrit
  // exactement comme dans le Google Sheet. Sans réglage, une couleur est attribuée
  // automatiquement et un fanion est dessiné.
  patrouilles: {
    //"Cobras": { couleur: "#c9772b", logo: "images/360_F_2122129890_tqKjRPWrsinfLhUULierLTT58hm6qdwQ.jpg" },
    //"Lions": { couleur: "#c9772b", logo: "images/gettyimages-913059310-612x612.jpg" },
    
  },

  // Identifiant du Google Sheet : la partie entre /d/ et /edit dans son adresse.
  // Tant qu'il est vide, le site affiche les données d'exemple du dossier modele/.
  sheetId: "1iFtfsYzccsoCJKrBJG6v42VSMQlk-s_8QZ9JuqqK2ak",

  // Nom de l'onglet à lire. Vide = le premier onglet du tableau.
  onglet: "",
};

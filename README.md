# Classement des patrouilles

Site statique (GitHub Pages) qui affiche le classement des patrouilles à partir d'un Google Sheet tenu par les chefs. Aucun serveur, aucune compilation : le site relit la feuille à chaque ouverture de page.

## La feuille de calcul

Le site lit un seul onglet, organisé en deux parties côte à côte. `modele/classement.csv` en donne un exemple à importer.

**À gauche, une ligne par jeu :**

| (date)     | (nom du jeu)    | Multiplicateur | Addax | Aïdi | … |
|------------|-----------------|----------------|-------|------|---|
| 17/10/2026 | Camp d'approche | 1              | ▾     | ▾    |   |
| 24/10/2026 | En ligne        | 2              | ▾     | ▾    |   |

La date et le nom du jeu sont dans les deux colonnes juste avant `Multiplicateur`.

**À droite, sous une colonne `Date`, un bloc de quatre lignes par jeu**, dans le même ordre que les lignes de gauche, avec une colonne par patrouille :

| Date         | Addax | Aïdi | … |
|--------------|-------|------|---|
| 17/10/2026   |       |      |   |
| Jeu          | 10    | 3    |   |
| Présences    | 6     | 5    |   |
| Total cumulé | 16    | 8    |   |

Ce que le site en fait :

- Les **points affichés sont ceux de la feuille** : lignes `Jeu` et `Présences` de chaque bloc. C'est donc la feuille qui applique le barème et le multiplicateur ; le site ne recalcule rien, il additionne.
- Le **classement d'un jeu** se déduit des points de la ligne `Jeu` (le plus de points = 1ᵉʳ).
- Le **multiplicateur** est affiché en étiquette (×2) à côté du nom du jeu quand il est différent de 1.
- Un jeu dont le bloc est entièrement vide est considéré comme pas encore joué et n'apparaît pas.
- Les **patrouilles** sont les titres de colonnes à droite de `Date` : en ajouter ou en renommer une dans la feuille suffit.

## Brancher le site

1. Dans le Google Sheet : *Partager → Accès général → Tous les utilisateurs disposant du lien → Lecteur*.
2. Dans `config.js`, coller l'identifiant de la feuille dans `sheetId` : c'est la partie de l'adresse entre `/d/` et `/edit`.
3. Si le classement n'est pas dans le premier onglet, indiquer son nom dans `onglet`.

`config.js` contient aussi les couleurs, les logos, et la couleur ou le logo de chaque patrouille.

## Publier sur GitHub Pages

1. Pousser `index.html`, `config.js`, `images/`, `modele/` et `README.md` dans un dépôt GitHub public.
2. *Settings → Pages → Source : Deploy from a branch → `main` / `(root)`*.
3. Le site est en ligne à `https://<utilisateur>.github.io/<dépôt>/`.

## Tester en local

```bash
python3 -m http.server 8123
```

---
projet: 1
exercice: 4
sujet: html
ex: exh4
next: exh5
title: Les commentaires
dashedName: les-commentaires
---

# --description--

# Les commentaires

Les commentaires vous permettent de laisser des messages sans affecter l'affichage du navigateur. Ils vous permettent également de rendre le code inactif. Un commentaire en HTML commence par `<!--`, contient un nombre quelconque de lignes de texte et se termine par `-->`. Par exemple, le commentaire:
`<!-- A faire: Ajouter un lien vers la galerie photo -->` contient le texte: A faire: Ajouter un lien vers la galerie photo.

## Exercice

Créer un commentaire au-dessus de la balise `p` et y écrire le texte **"A faire: Ajouter un lien vers la galerie photos"**.

# --hints--

Le commentaire `A faire: Ajouter un lien vers la galerie photos` doit être présent dans le code.

```js
assert(html.match(/<!--\s*A faire: Ajouter un lien vers la galerie photos\s*-->/));
```

Assurez-vous que le commentaire est placé au-dessus de toute balise `p` dans le code.

```js
assert(html.indexOf('<!-- A faire: Ajouter un lien vers la galerie photos -->') < html.indexOf('<p>'));
```

Votre commentaire doit commencer par `<!--`.

```js
assert(html.match(/<!--/));
```
Votre commentaire doit se terminer par -->.

```js
assert(html.match(/-->/));
```

Votre code ne devrait pas avoir de caractères supplémentaires d'ouverture/fermeture de commentaire.

```js
const noSpaces = html.replace(/\s/g, '');
assert(noSpaces.match(/<!--/g).length === 1 && noSpaces.match(/-->/g).length === 1);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>Nos aventures</h1>
    <h2>Photos de nos voyages</h2>
    <!-- Remplacez ce commentaire par le vôtre -->
    <p>Plus de photos dans notre galerie.</p>
  </body>
</html>
```
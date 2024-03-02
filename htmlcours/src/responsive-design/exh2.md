---
projet: 1
exercice: 2
sujet: html
ex: exh2
next: fin
title: Un texte structuré avec les balises de titres hn
dashedName: un-texte-structure-avec-les-balises-de-titres-hn
---

# --description--

# Un texte structuré avec les balises de titres hn

Les éléments de titre h1 à h6 sont utilisés pour indiquer l'importance du contenu situé en dessous. Plus le chiffre est bas, plus l'importance est grande. 

Les éléments h2 ont donc moins d'importance que les éléments h1. N'utilisez qu'un seul élément h1 par page et placez les titres de moindre importance sous les titres de plus grande importance.

## Exercice

Créez un élément `h2` et y écrire le texte **"Photos de nos voyages"**.

# --hints--

Le texte `Photos de nos voyages` doit être présent dans le code. Vous voudrez peut-être vérifier votre orthographe.

```js
assert(typeof html === 'string' && html.includes("Photos de nos voyages"), "Le texte 'Photos de nos voyages' doit être présent dans le HTML.");
```

Votre élément `h2` doit avoir une balise ouvrante. Les balises ouvrantes ont cette syntaxe : `<h2>`.

```js
assert(typeof html === 'string' && html.match(/<h2>/));
```

Votre élément `h2` doit avoir une balise fermante. Les balises fermantes ont un `/` juste après le caractère `<`.

```js
assert(typeof html === 'string' && html.match(/<\/h2>/));
```

Le texte de votre élément `h2` doit être `Photos de nos voyages`. Vous avez soit omis le texte, soit il y a une faute de frappe, ou il n'est pas entre les balises ouvrantes et fermantes de l'élément `h2`.

```js
assert(typeof html === 'string' && /<h2>\s*Photos de nos voyages\s*<\/h2>/i.test(html.toLowerCase()), "Expected HTML's <h2> tag to contain 'Photos de nos voyages'");
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>Nos aventures</h1>
    <!-- Ajoutez votre élément h2 ci-dessous -->
  </body>
</html>
```
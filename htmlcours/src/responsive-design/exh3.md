---
projet: 1
exercice: 3
sujet: html
ex: exh3
next: exh4
title: Les paragraphes
dashedName: les-paragraphes
---

# --description--

# Les paragraphes

L'élément `p` est utilisé pour créer un paragraphe, un bloc de texte.

## Exercice

Créez un élément `p` et y écrire le texte **"Plus de photos dans notre galerie."**.

# --hints--

Votre élément `p` doit avoir une balise ouvrante. Les balises ouvrantes ont cette syntaxe : `<nomElement>`.

```js
assert(html.match(/<p>/));
```

Votre élément `p` doit avoir une balise fermante. Les balises fermantes ont un `/` juste après le caractère `<`.

```js
assert(html.match(/<\/p>/));
```

Le texte de votre élément `p` doit être `Plus de photos dans notre galerie.`.

```js
assert(html.replace(/\s+/g, ' ').match(/<p>Plus de photos dans notre galerie\.<\/p>/i));
```

Votre élément p doit se situer en dessous de l'élément h2.

```js
assert(!html.match(/<h2>.*<p>.*<\/p>.*<\/h2>/s) && html.match(/<p>.*<\/p>/s));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>Nos aventures</h1>
    <h2>Photos de nos voyages</h2>
    <!-- Commencez à écrire votre code ici -->
  </body>
</html>
```
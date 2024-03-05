---
projet: 1
exercice: 5
sujet: html
ex: exh5
next: exh6
title: Le contenu le plus important
dashedName: le-contenu-le-plus-important
---

# --description--

# L'élément main

Le HTML5 comporte certains éléments qui identifient les différentes zones de contenu. Ces éléments rendent votre HTML plus facile à lire et contribuent à l'optimisation des moteurs de recherche (SEO) et à l'accessibilité.

Englober le contenu majoritaire par la balise `<main>` permet d'indiquer le contenu principal de votre page.

## Exercice

Créez un élément `main` qui englobe tous les éléments précédemment créés.

# --hints--

Votre élément `main` doit suivre directement l'ouverture du `body`.

```js
assert(html.indexOf('<body>') < html.indexOf('<main>'));
```

Le premier élément à l'intérieur de votre main doit être un h1.

```js
assert(html.match(/<main>\s*<h1>/));
```

Le dernier élément à l'intérieur de votre main doit être un p.

```js
assert(html.match(/<p>[\s\S]*<\/p>\s*<\/main>/));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>Nos aventures</h1>
    <h2>Photos de nos voyages</h2>
    <!-- A faire: Ajouter un lien vers la galerie photos -->
    <p>Plus de photos dans notre galerie.</p>
  </body>
</html>
```
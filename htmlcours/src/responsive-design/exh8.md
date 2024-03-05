---
projet: 1
exercice: 8
sujet: html
ex: exh8
next: exh9
title: L'élément section
dashedName: lelement-section
---

# --description--

# L'élément section

Diviser son contenu en sections permet de regrouper les contenus logiquement liés pour créer des blocs d'informations.

## Exercice

Créez un élément `section` englobant tous les éléments à l'intérieur du `main`.

# --hints--

Votre élément `section` doit englober tous les éléments à l'intérieur du `main`.

```js
assert(html.match(/<main>\s*<section>[\s\S]*<\/section>\s*<\/main>/));
```

Assurez-vous que l'élément `section` contienne bien tous les autres éléments précédemment créés.

```js
const sectionContentCheck = html.match(/<section>[\s\S]*<\/section>/);
assert(sectionContentCheck && sectionContentCheck[0].includes('<h1>') && sectionContentCheck[0].includes('<h2>') && sectionContentCheck[0].includes('<p>') && html.includes('<a') && html.includes('<img'));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>Nos aventures</h1>
      <h2>Photos de nos voyages</h2>
      <!-- A faire: Ajouter un lien vers la galerie photos -->
      <p>Plus de photos dans <a href="https://google.fr" target="_blank">notre galerie</a>.</p>
      <a href="https://google.fr" target="_blank">
        <img alt="Plage en Thaïlande" src="/thailande.jpg"/>
      </a>
    </main>
  </body>
</html>
```
---
projet: 1
exercice: 9
sujet: html
ex: exh9
next: exh10
title: Les listes
dashedName: les-listes
---

# --description--

# Les listes

Les listes non ordonnées (unordered lists en anglais):
- Sont représentées par l'élément `ul` et affichent une liste d'éléments sans ordre particuliers avec des puces.
- L'élément `li` est utilisé pour représenter un élément dans une liste.

Les listes ordonnées (ordered lists en anglais):
- Sont représentés par l'élément `ol` et affichent une liste ordonnée et numérotée.

## Exercice

Ajouter une section en dessous de la précédente, puis y ajouter un `h2` contenant le texte "Nos pays visités", un `h3` contenant le texte "Nos pays préférés". En dessous de ce premier `h3`, une liste non ordonnée contenant trois `li`. De nouveau un `h3` contenant le texte "Les pays les moins appréciés". Suivi d'une liste ordonnée avec trois `li`. Dans ces li ajoutez le texte que vous souhaitez.

# --hints--

Votre nouvelle section doit être ajoutée immédiatement après la précédente.

```js
assert(html.match(/<\/a>\s*<\/section>\s*<section>/));
```

Votre nouvelle section doit contenir un `h2` avec le texte "Nos pays visités".

```js
assert(html.match(/<h2>Nos pays visités<\/h2>/));
```

Assurez-vous d'inclure un `h3` avec le texte "Nos pays préférés" suivie d'une liste non ordonnée.

```js
assert(html.match(/<h3>Nos pays préférés<\/h3>\s*<ul>\s*<li>[\s\S]*<\/li>\s*<li>[\s\S]*<\/li>\s*<li>[\s\S]*<\/li>\s*<\/ul>/));
```

Incluez un autre `h3` avec le texte "Les pays les moins appréciés" suivi d'une liste ordonnée.

```js
assert(html.match(/<h3>Les pays les moins appréciés<\/h3>\s*<ol>\s*<li>[\s\S]*<\/li>\s*<li>[\s\S]*<\/li>\s*<li>[\s\S]*<\/li>\s*<\/ol>/));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <section>
        <h1>Nos aventures</h1>
        <h2>Photos de nos voyages</h2>
        <!-- A faire: Ajouter un lien vers la galerie photos -->
        <p>Plus de photos dans <a href="https://google.fr" target="_blank">notre galerie</a>.</p>
        <a href="https://google.fr" target="_blank">
          <img alt="Plage en Thaïlande" src="/thailande.jpg"/>
        </a>
      </section>
    </main>
  </body>
</html>
```
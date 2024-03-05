---
projet: 1
exercice: 10
sujet: html
ex: exh10
next: exh11
title: Les éléments figure et figcaption
dashedName: les-elements-figure-et-figcaption
---

# --description--

# Les éléments figure et figcaption

L'élément `figure` sert de conteneur à plusieurs éléments comme des images, des schémas, des vidéos, des tableaux ou encore des blocs de code. L'objectif est de lier ce bloc de contenu à une légende, définie par l'élément `figcaption`.

## Exercice

Créez un premier élément `figure` en dessous de votre liste non ordonnée et y ajouter une image avec l'attribut src `voyage.jpg` et l'élément `figcaption` avec le texte suivant: Photos de nos voyages. Répétez l'opération en dessous de votre liste ordonnée.

# --hints--

Votre élément `figure` doit se situer immédiatement après la liste non ordonnée (`ul`).

```js
assert(html.match(/<\/ul>\s*<figure>/));
```

Vérifiez que les `figure` contiennent bien un élément `img`.

```js
assert(html.match(/<figure>\s*<img/));
```

Assurez-vous que les éléments `img` dans les `figure` ont l'attribut `src` correctement défini à `"/voyage.jpg"`.

```js
assert(html.includes('<img src="/voyage.jpg"'));
```

Les `figcaption` dans les `figure` doivent contenir le texte "Photos de nos voyages".

```js
assert(html.match(/<figcaption>[\s\S]*Photos de nos voyages[\s\S]*<\/figcaption>/));
```

Votre deuxième élément `figure` doit se situer immédiatement après la liste ordonnée (`ol`).

```js
assert(html.match(/<\/ol>\s*<figure>/));
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
      <section>
        <h2>Nos pays visités</h2>
        <h3>Nos pays préférés</h3>
        <ul>
          <li>Italie</li>
          <li>Japon</li>
          <li>Australie</li>
        </ul>
        <h3>Les pays les moins appréciés</h3>
        <ol>
          <li>Chine</li>
          <li>USA</li>
          <li>Autriche</li>
        </ol>
      </section>
    </main>
  </body>
</html>
```
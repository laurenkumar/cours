---
projet: 1
exercice: 7
sujet: html
ex: exh7
next: exh8
title: Les liens en HTML (ancre)
dashedName: les-liens-en-html-ancre
---

# --description--

# Les liens en HTML (ancre)

L'élément d'ancre (a) permet de créer un lien vers une autre page avec son attribut href. Un lien hypertexte peut mener vers des pages web, des adresses e-mail, des emplacements se trouvant dans la même page, ou bien des fichiers.

Par exemple, `<a href='https://google.fr'></a>` renverrait à google.fr. 

Le texte d'un lien (a) doit être placé entre les balises d'ouverture et de fermeture d'un élément d'ancrage. Par exemple, `<a href="https://google.fr">Cliquez ici pour aller sur google</a>` est un lien dont le texte est "Cliquez ici pour aller sur google".

L'attribut target indique où ouvrir le document lié. Généralement, on va ouvrir un document externe à notre page dans un nouvel onglet, afin que l'utilisateur ne quitte pas notre site. Dans un tel cas, nous allons ajouter `target="_blank"`.

Nous allons juste modifier quelques mots à l'intérieur de notre paragraphe et les transformer en lien. Des éléments peuvent aussi être transformés en lien, tout simplement en ajoutant les balises d'ouverture et fermeture au début et à la fin de l'élément en question.

## Exercice

Créer deux éléments `a` avec les attributs href que vous souhaitez: 
Un premier englobant le texte "notre galerie" dans le paragraphe, avec un attribut `target="_blank"`.
Un deuxième englobant l'élément `img`, avec un attribut `target="_blank"`.

# --hints--

Votre premier élément `a` doit englober le texte "notre galerie".

```js
assert(html.match(/<a[^>]*>notre galerie<\/a>/));
```

Assurez-vous que les éléments `a` contiennent l'attribut `target="_blank"`.

```js
assert(html.match(/<a[^>]*target="_blank"[^>]*>/g).length >= 2);
```

Le deuxième élément `a` doit englober un élément `img`.

```js
assert(html.match(/<a[^>]*>\s*<img/));
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
      <p>Plus de photos dans notre galerie.</p>
      <img alt="Plage en Thaïlande" src="/thailande.jpg"/>
    </main>
  </body>
</html>
```
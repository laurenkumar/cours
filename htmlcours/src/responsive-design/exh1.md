---
projet: 1
exercice: 1
sujet: html
ex: exh1
next: exh2
title: Apprendre HTML en codant un site de voyage 👋
dashedName: apprendre-html-en-codant-un-site-de-voyage
---

# --description--

# Apprendre HTML en codant un site de voyage 👋

Les balises HTML donnent à une page Web sa structure. Vous pouvez utiliser les balises HTML pour ajouter des photos, des boutons et d'autres éléments à votre page Web.

Dans ce cours, vous apprendrez les balises HTML les plus courantes en créant votre premier site de voyage.

## Les balises HTML

Les éléments HTML ont des balises ouvrantes comme `<body>` et des balises fermantes comme `</body>`.

Le texte d'un élément est placé entre ses balises ouvrantes et fermantes.

## Exercice

Chaque cours contient un exercice à résoudre sur le sujet traité. Le valider vous assure la bonne maîtrise du cours.

Cependant, il n'est pas indispensable pour continuer et apprendre.

Si vous vous sentez suffisamment prêt, passez à la suite !

Créez un élément `h1` et y écrire le texte **"Nos aventures"**.

# --hints--

Le texte `Nos aventures` doit être présent dans le code. Vous voudrez peut-être vérifier votre orthographe.

```js
assert(typeof html === 'string' && html.match(/Nos aventures/i));
```

Votre élément `h1` doit avoir une balise ouvrante. Les balises ouvrantes ont cette syntaxe : `<nomelement>`.

```js
assert(document.querySelector('h1'));
```

Votre élément `h1` doit avoir une balise fermante. Les balises fermantes ont un `/` juste après le caractère `<`.

```js
assert(typeof html === 'string' && html.match(/<\/h1\>/));
```

Vous n'avez pas plus d'un élément `h1`.

```js
assert(document.querySelectorAll('h1').length === 1);
```

Le texte de votre élément `h1` doit être `Nos aventures`. Vous avez soit omis le texte, soit il y a une faute de frappe, ou il n'est pas entre les balises ouvrantes et fermantes de l'élément `h1`.

```js
assert(typeof html === 'string' && /<h1>\s*Nos aventures\s*<\/h1>/i.test(html.toLowerCase()));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Salut, écris juste en dessous -->
  </body>
</html>
```
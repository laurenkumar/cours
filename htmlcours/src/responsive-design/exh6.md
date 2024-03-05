---
projet: 1
exercice: 6
sujet: html
ex: exh6
next: exh7
title: L'imbrication et l'indentation
dashedName: limbrication-et-lindentation
---

# --description--

# L'imbrication et l'indentation

Le fait d'imbriquer des balises, c'est à dire mettre des balises dans des balises, c'est ce qu'on appelle l'imbrication ou le nesting en anglais. Les éléments imbriqués doivent être placés deux espaces plus loin à droite de l'élément dans lequel ils sont imbriqués. Cet espacement s'appelle l'indentation et est utilisé pour rendre le HTML plus facile à lire.

## Les images et son élément img

Vous pouvez ajouter des images à votre site Web en utilisant l'élément img. Les éléments img ont une balise d'ouverture sans balise de fermeture. Un élément sans balise de fermeture est connue comme une balise auto-fermante.

Les attributs HTML sont des mots spéciaux utilisés à l'intérieur de la balise ouvrante d'un élément pour contrôler le comportement de l'élément. L'attribut src d'un élément img spécifie l'URL de l'image (où se trouve l'image). Un exemple d'un élément img utilisant un attribut src : `<img src="https://exemple.fr/image.jpg">`.

Tous les éléments img doivent avoir un attribut alt (texte alternatif). Le texte de l'attribut alt est utilisé par les lecteurs d'écran pour améliorer l'accessibilité et s'affiche si l'image ne parvient pas à se charger. Par exemple, `<img src="thailande.jpg" alt="Plage en Thaïlande">` a un attribut alt avec le texte "Plage en Thaïlande".

## Exercice

Créez un élément img et y ajouter la source suivante: "/thailande.jpg" et un texte alternatif suivant: "Plage en Thaïlande".

# --hints--

Votre élément `img` doit avoir une balise d'ouverture sans balise de fermeture.

```js
assert(!html.match(/<\/img>/));
```

Assurez-vous que votre élément `img` contient l'attribut `src` avec la valeur "/thailande.jpg".

```js
assert(html.match(/<img[^>]*src="\/thailande.jpg"/));
```

Votre élément `img` doit avoir un attribut `alt` avec le texte "Plage en Thaïlande".

```js
assert(html.match(/<img[^>]*alt="Plage en Thaïlande"/));
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
      <!-- Ajouter l'image en dessous -->
    </main>
  </body>
</html>
```
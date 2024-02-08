import $ from "jquery"

const { assert } = require('chai');

export const runTests = async (ex) => {
  const $exercice = $("#exercice").contents();

  function createTestMessages(isAllGood, messages) {
    const baseMessage = isAllGood
    ? '🎉 Bravo ! Tu peux passer à la suite.'
    : '🤯 Tu vas y arriver, courage !';

    return [baseMessage, ...messages];
  }

  function ex1() {
    let isAllGood = true;

    try {
      assert($exercice.find("h1").length > 0, "L'élement h1 doit exister");
      assert.isTrue(/Nos(\s)+aventures/gi.test($exercice.find("h1").text()), "L'élement h1 doit contenir le texte 'Nos aventures'");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément h1 doit exister.",
      "L'élément doit contenir le texte 'Nos aventures'."
      ]);  
  }

  function ex2() {
    let isAllGood = true;

    try {
      assert($exercice.find("h2").length > 0, "L'élement h2 doit exister");
      assert.isTrue(/Photos(\s)+de(\s)+nos(\s)voyages/gi.test($exercice.find("h2").text()), "L'élement h2 doit contenir le texte 'Photos de nos voyages'");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément h2 doit exister.",
      "L'élément doit contenir le texte 'Photos de nos voyages'."
      ]);  
  }

  function ex3() {
    let isAllGood = true;

    try {
      assert($exercice.find("p").length > 0, "L'élement p doit exister");
      assert.isTrue(/Plus de photos dans notre galerie./gi.test($exercice.find("p").text()), "L'élement p doit contenir le texte 'Plus de photos dans notre galerie.'");
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément p doit exister.", 
      "L'élément doit contenir le texte 'Plus de photos dans notre galerie.'."
      ]);
  }

  function ex4() {
    let isAllGood = true;

    try {
      const html = document.querySelector("#exercice")
      assert(html.srcdoc.match(/<!--\s*A faire: Ajouter un lien vers la galerie photos\s*-->/i), "Le commentaire doit contenir le texte 'A faire: Ajouter un lien vers la galerie photos'");
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Le commentaire doit exister.", "L'élément doit contenir le texte 'A faire: Ajouter un lien vers la galerie photos'."
      ]);

  }

  function ex5() {
    let isAllGood = true;

    try {
      assert($exercice.find("main").length > 0, "L'élement main doit exister");
      assert($exercice.find("main h1").length > 0, "L'élement h1 doit se retrouver dans le main");
      assert($exercice.find("main h2").length > 0, "L'élement h2 doit se retrouver dans le main");
      assert($exercice.find("main p").length > 0, "L'élement p doit se retrouver dans le main");
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément main doit exister.", "L'élement h1 doit se retrouver dans le main", "L'élement h2 doit se retrouver dans le main", "L'élement p doit se retrouver dans le main"
      ]);
  }

  function ex6() {
    let isAllGood = true;

    try {
      assert($exercice.find("img").length > 0, "L'élement img doit exister");
      assert($exercice.find("img").attr('src') === "thailande.jpg")
      assert($exercice.find("img").attr('alt') === "Plage en Thaïlande")
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément img doit exister.", "L'attribut src de l'image doit être 'thailande.jpg'", "Le texte alternatif de l'image doit être 'Plage en Thailande'"
      ]);
  }

  function ex7() {
    let isAllGood = true;

    try {
      assert($exercice.find("p a").length > 0, "L'élement a se trouve dans le p");
      assert($exercice.find("p a").attr('target') === "_blank", "L'élement doit avoir un attribut target='_blank'");
      assert.isTrue(/notre galerie/gi.test($exercice.find("p a").text()), "L'élement a se trouvant dans le paragraphe doit contenir le texte 'notre galerie'");
      assert($exercice.find("a img").length > 0, "L'image se trouve dans le lien")
      assert($exercice.find("a").attr('target') === "_blank", "L'élément doit avoir un attribut target='_blank'");
      assert($exercice.find("a").attr('href') === "https://google.fr", "L'élément doit avoir un attribut href='https://google.fr'");
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les deux éléments a doivent exister.", "Les deux liens doivent rediriger sur google.", "Leurs attribut target doit être '_blank'", "Le premier lien doit se trouver dans le paragraphet et englober le texte 'notre galerie'", "Le deuxième lien doit englober l'image"
      ]);
  }

  function ex8() {
    let isAllGood = true;

    try {
      assert($exercice.find("main section").length > 0, "L'élement section se trouve dans le main");
      assert($exercice.find("main section h1").length > 0, "L'élement h1 doit se retrouver dans la section");
      assert($exercice.find("main section h2").length > 0, "L'élement h2 doit se retrouver dans la section");
      assert($exercice.find("main section p").length > 0, "L'élement p doit se retrouver dans la section");
      assert($exercice.find("main section a").length > 0, "L'élement a doit se retrouver dans la section");
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément section doit exister.", "L'élement h1 doit se retrouver dans la section", "L'élement h2 doit se retrouver dans la section", "L'élement p doit se retrouver dans la section", "L'élement a doit se retrouver dans la section"
      ]);
  }

  function ex9() {
    let isAllGood = true;

    try {
      assert($exercice.find('main').children("section").eq(1).length > 0, "Un deuxième élément section doit être ajouté");
      assert.isTrue(/Nos pays visités/gi.test($exercice.find("section h2").text()), "L'élement h2 doit contenir le texte 'Nos pays visités'");
      assert.isTrue(/Nos pays préférés/gi.test($exercice.find("section h2 + h3").text()), "L'élement h3 doit contenir le texte 'Nos pays préférés'");
      assert($exercice.find("main section ul").length > 0, "L'élement ul doit se retrouver dans la section");
      assert($exercice.find('main section ul').children("li").eq(2).length > 0, "L'élement ul doit contenir 3 li");
      assert.isTrue(/Les pays les moins appréciés/gi.test($exercice.find("section ul + h3").text()), "L'élement h3 doit contenir le texte 'Les pays les moins appréciés'");
      assert($exercice.find("main section ol").length > 0, "L'élement ol doit se retrouver dans la section");
      assert($exercice.find('main section ol').children("li").eq(2).length > 0, "L'élement ol doit contenir 3 li");
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Un deuxième élément section doit être ajouté.", "L'élement h2 doit contenir le texte 'Nos pays visités'", "L'élement h3 doit contenir le texte 'Nos pays préférés'", "L'élement ul doit se retrouver dans la section", "L'élement h3 doit contenir le texte 'Les pays les moins appréciés'", "L'élement ul et ol doivent contenir 3 li"
      ]);
  }

  function ex10() {
    let isAllGood = true;

    try {
      assert($exercice.find("main section ul + figure").length > 0, "L'élement figure doit être ajouté en dessous de la liste non ordonnée");
      assert($exercice.find("main section ul + figure figcaption").length > 0, "L'élement figcaption doit être ajouté dans l'élément figure en dessous de la liste non ordonnée");
      assert($exercice.find("main section ul + figure img").length > 0, "L'élement img doit être ajouté dans l'élément figure en dessous de la liste non ordonnée");
      assert($exercice.find("main section ol + figure").length > 0, "L'élement figure doit être ajouté en dessous de la liste ordonnée");
      assert($exercice.find("main section ol + figure figcaption").length > 0, "L'élement figcaption doit être ajouté dans l'élément figure en dessous de la liste ordonnée");
      assert($exercice.find("main section ol + figure img").length > 0, "L'élement img doit être ajouté dans l'élément figure en dessous de la liste ordonnée");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élement figure doit être ajouté en dessous de la liste non ordonnée", "L'élement figcaption doit être ajouté dans l'élément figure en dessous de la liste non ordonnée", "L'élement img doit être ajouté dans l'élément figure en dessous de la liste non ordonnée", "L'élement figure doit être ajouté en dessous de la liste ordonnée", "L'élement figcaption doit être ajouté dans l'élément figure en dessous de la liste ordonnée", "L'élement img doit être ajouté dans l'élément figure en dessous de la liste ordonnée"
      ]);
  }

  function ex11() {
    let isAllGood = true;

    try {
      assert.isTrue(/préférés/gi.test($exercice.find("section h2 + h3 em").text()), "L'élement h3 doit contenir un em avec le texte 'préférés'");
      assert.isTrue(/appréciés/gi.test($exercice.find("section figure + h3 strong").text()), "L'élement h3 doit contenir un strong le texte 'appréciés'");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élement h3 doit contenir un em avec le texte 'préférés'", "L'élement h3 doit contenir un strong avec le texte 'appréciés'"
      ]);
  }

  function ex12() {
    let isAllGood = true;

    try {
      assert($exercice.find('main').children("section").eq(2).length > 0, "Une troisième section doit être ajouté");
      assert.isTrue(/Formulaire de Voyage/gi.test($exercice.find("section h2").text()), "L'élement h2 doit contenir le texte 'Formulaire de Voyage'");
      assert($exercice.find("main section form").length > 0, "L'élement form doit se retrouver dans la section");
      assert($exercice.find('main section form input').length > 0, "L'élement form doit contenir un input");
      assert($exercice.find("main section input").attr('type') === "text", "L'élément doit avoir un attribut target='_blank'");
      assert($exercice.find("main section input").attr('name') === "urlphotovoyage", "L'élément doit avoir un attribut target='_blank'");
      assert($exercice.find("main section input").attr('placeholder') === "Url d'une photo d'un pays", "L'élément doit avoir un attribut target='_blank'");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Un troisième élément section doit être ajouté.", "L'élement h2 doit contenir le texte 'Formulaire de Voyage'", "L'élement form doit contenir un input", "L'input possède les bons attributs"
      ]);
  }

  function ex13() {
    let isAllGood = true;

    try {
      assert.isTrue(/Submit/gi.test($exercice.find("form input + button").text()));
      assert($exercice.find("form input + button").attr('type') === "submit");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élement button doit contenir le texte 'Submit'", "L'élément button doit avoir un attribut type='submit'"
      ]);
  }

  function ex14() {
    let isAllGood = true;

    try {
      assert($exercice.find("form input").attr('type') === "radio");
      assert($exercice.find("form input").attr('name') === "voyage-maison");
      assert($exercice.find("form input + input").attr('name') === "voyage-maison");
      assert($exercice.find("form input + input").attr('type') === "radio");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les deux éléments doivent avoir le type radio", "Les deux input possèdent le name 'voyage-maison"
      ]);
  }

  function ex15() {
    let isAllGood = true;

    try {
      assert($exercice.find("form label").eq(1).length > 0);
      assert($exercice.find("form label input").length > 0);
      assert($exercice.find("form label + label input").length > 0);
      assert.isTrue(/Voyager/gi.test($exercice.find("form label").text()));
      assert.isTrue(/Rester à la maison/gi.test($exercice.find("form label + label").text()));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les deux label doivent contenir des élèments input", "Les deux label doivent contenir les textes suivants 'Voyager' et 'Rester à la maison'"
      ]);
  }

  function ex16() {
    let isAllGood = true;

    try {
      assert($exercice.find("form label input").attr('id') === "voyager");
      assert($exercice.find("form label input").attr('value') === "voyager");
      assert($exercice.find("form label + label input").attr('id') === "maison");
      assert($exercice.find("form label + label input").attr('value') === "maison");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les deux éléments doivent avoir la bonne value et les bons ids"
      ]);
  }

  function ex17() {
    let isAllGood = true;

    try {
      assert($exercice.find("form fieldset").children("label").eq(1).length > 0);
      assert($exercice.find("form fieldset").length > 0);

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément fieldset englobent les deux labels"
      ]);
  }

  function ex18() {
    let isAllGood = true;

    try {
      assert($exercice.find("form fieldset legend").length > 0);
      assert.isTrue(/Préférez vous voyager ou rester à la maison?/gi.test($exercice.find("form fieldset legend").text()));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément legend doit contenir le texte 'Préférez vous voyager ou rester à la maison?' et se trouve dans le fieldset"
      ]);
  }

  function ex19() {
    let isAllGood = true;

    try {
      assert($exercice.find("form fieldset + fieldset").length > 0);
      assert.isTrue(/Quelles sont vos destinations préférées?/gi.test($exercice.find("form fieldset + fieldset legend").text()));
      assert($exercice.find("form fieldset + fieldset label").eq(1).length > 0);
      assert.isTrue(/Paris/gi.test($exercice.find("form fieldset + fieldset label").text()));
      assert($exercice.find("form fieldset + fieldset label input").length > 0);
      assert.isTrue(/Rome/gi.test($exercice.find("form fieldset + fieldset label").text()));
      assert($exercice.find("form fieldset + fieldset label + label input").length > 0);
      assert($exercice.find("form fieldset + fieldset label input").attr('id') === "paris");
      assert($exercice.find("form fieldset + fieldset label input").attr('value') === "paris");
      assert($exercice.find("form fieldset + fieldset label input").attr('type') === "checkbox");
      assert($exercice.find("form fieldset + fieldset label + label input").attr('id') === "rome");
      assert($exercice.find("form fieldset + fieldset label + label input").attr('value') === "rome");
      assert($exercice.find("form fieldset + fieldset label + label input").attr('type') === "checkbox");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément legend doit contenir le texte 'Quelles sont vos destinations préférées?' et se trouve dans le deuxième fieldset", "Deux labels sont ajoutés avec des input et leurs attributs"
      ]);
  }

  function ex20() {
    let isAllGood = true;

    try {
      assert($exercice.find("form fieldset + fieldset label input").attr('name') === "destinations");
      assert($exercice.find("form fieldset + fieldset label").attr('for') === "paris");
      assert($exercice.find("form fieldset + fieldset label + label").attr('for') === "rome");
      assert($exercice.find("form fieldset + fieldset label + label input").attr('name') === "destinations");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Ajouter un attribut for aux deux labels englobant les inputs de type checkbox avec les textes respectifs suivants 'paris' et 'rome'.", "Sur les deux inputs, ajouter le name 'destinations'"
      ]);
  }

  function ex21() {
    let isAllGood = true;

    try {
      assert($exercice.find("#voyager").attr('checked'));
      assert($exercice.find("#rome").attr('checked'));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'input radio 'Voyager' est coché.", "L'input checkbox 'Rome' est coché."
      ]);
  }

  function ex22() {
    let isAllGood = true;

    try {
      assert($exercice.find("main + footer"));
      assert.isTrue(/Sans Copyright - LK Digital/gi.test($exercice.find("main + footer p").text()));
      assert($exercice.find("main + footer p a").length > 0);
      assert($exercice.find("main + footer p a").attr('href') === "https://lkdigital.ninja");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément footer est présent", "Le footer doit contenir un paragraphe 'Sans copyright - LK Digital'", "Un lien englobe le texte 'LK Digital'"
      ]);
  }

  function ex23() {
    let isAllGood = true;

    try {
      assert($exercice.find("body main"));
      assert($exercice.find("body footer"));
      assert($exercice.find("head + body"));
      assert.isTrue(/Nos aventures/gi.test($exercice.find("head title").text()));
      assert($exercice.find("head meta").attr('charset') === "utf-8");
      assert($exercice.find("html head"));
      assert($exercice.find("html body"));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément html englobe le body et le head", "Le title 'Nos aventures' est présent", "Le meta charset utf-8 est présent"
      ]);
  }

  function exc1() {
    let isAllGood = true;

    try {
      assert($exercice.find("head style").length > 0, "L'élement style doit exister");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élement style se trouve dans le head"
      ]);
  }

  function exc2() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("head style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/h1{text-align:center;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élement h1 est centré"
      ]);
  }

  function exc3() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("head style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/h2{text-align:center;}?/gi.test(text));
      assert.isTrue(/p{text-align:center;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les élements h2 et p sont centrés"
      ]);
  }

  function exc4() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("head style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/h1,h2,p{text-align:center;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les sélecteurs sont regroupés pour les centrer"
      ]);
  }

  function exc5() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/h1,h2,p{text-align:center;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les éléments h1 h2 et p sont centrés"
      ]);
  }

  function exc6() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/h1,h2,p{text-align:center;}?/gi.test(text));
      assert($exercice.find("head link").attr('rel') === "stylesheet");
      assert($exercice.find("head link").attr('href') === "style.css");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Les éléments h1 h2 et p sont centrés", "La balise link et ses attributs sont bien présents"
      ]);
  }

  function exc7() {
    let isAllGood = true;

    try {
      assert($exercice.find("head").children('meta').eq(1).attr('name') === "viewport");
      assert($exercice.find("head").children('meta').eq(1).attr('content') === "width=device-width, initial-scale=1.0");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément meta et ses attributs name et content sont présents"
      ]);
  }

  function exc8() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/body{background-color:lightcyan;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "La couleur de fond du body a bien changé"
      ]);
  }

  function exc9() {
    let isAllGood = true;

    try {
      assert($exercice.find("div").attr('id') === "voyage");
      assert($exercice.find("div main").length > 0, "L'élement main est dans l'élément div");
      assert($exercice.find("div footer").length > 0, "L'élement main est dans l'élément div");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "L'élément div a le bon attribut id et doit contenir le main ainsi que le footer"
      ]);
  }

  function exc10() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/#voyage{width:300px;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "La div voyage a une largeur de 300px"
      ]);
  }

  function exc11() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/\/\*\s*Toutvabiensepasser?\s*\*\//i.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Le commentaire CSS a bien été ajouté"
      ]);
  }

  function exc12() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/#voyage{width:300px;background-color:coral;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "La div a changé de couleur de fond"
      ]);
  }

  function exc13() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/#voyage{width:80%;background-color:coral;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "La div prend maintenant 80% de la largeur du body"
      ]);
  }

  function exc14() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/#voyage{width:80%;background-color:coral;margin-left:auto;margin-right:auto;}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "La div est centrée horizontalement"
      ]);
  }

  function exc15() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/\.voyage{width:80%;background-color:coral;margin-left:auto;margin-right:auto;}?/gi.test(text));
      assert($exercice.find("div").attr('class') === "voyage");

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "La div a une classe voyage et le selecteur #voyage est transformé en .voyage"
      ]);
  }

  function exc16() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text().replace(/[\n\r\s\t]+/g,'');
      assert.isTrue(/body{background-color:lightcyan;background-image:url\('voyage\.jpg'\);}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Le body a une image de fond"
      ]);
  }

  function exc17() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text();
      assert.isTrue(/\.voyage\sform\s\{\s*([\s\S]*?text-align: center;[\s\S]*?)\s*\}?/gi.test(text));

    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Le formulaire présent dans l'élément div.voyage est centré"
      ]);
  }

  function exc18() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text();
      const regex = /\.voyage\s*\{[\s\S]*?width:\s*80%;[\s\S]*?background-color:\s*coral;[\s\S]*?margin-left:\s*auto;[\s\S]*?margin-right:\s*auto;[\s\S]*?padding-top:\s*20px;[\s\S]*?padding-right:\s*20px;[\s\S]*?padding-bottom:\s*20px;[\s\S]*?padding-left:\s*20px;[\s\S]*?\}/i;
      assert.isTrue(regex.test(text));
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Un padding de 20px autour de 'élément div.voyage est présent"
      ]);
  }

  function exc19() {
    let isAllGood = true;

    try {
      const text = $("#exercice").contents().find("style").text();
      const regex = /\.voyage\s*\{[\s\S]*?width:\s*80%;[\s\S]*?background-color:\s*coral;[\s\S]*?margin-left:\s*auto;[\s\S]*?margin-right:\s*auto;[\s\S]*?padding-top:\s*20px;[\s\S]*?padding-right:\s*20px;[\s\S]*?padding-bottom:\s*20px;[\s\S]*?padding-left:\s*20px;[\s\S]*?max-width:\s*960px;[\s\S]*?\}/i;
      assert.isTrue(regex.test(text));
    } catch (error) {
      console.error(error);
      isAllGood = false;
    }

    return createTestMessages(isAllGood, [
      "Une max-width de 960 px a été ajouté à l'élément .voyage."
      ]);
  }

  function exc20() {
    let isAllGood = true;

    try {
        const text = $("#exercice").contents().find("style").text();
        const regex = /\.(voyage\s+h1,\s*.voyage\s+h2)\s*\{[\s\S]*?font-family:\s*sans-serif;[\s\S]*?\}/i;
        assert.isTrue(regex.test(text));
    } catch (error) {
        console.error(error);
        isAllGood = false;
    }

    return createTestMessages(isAllGood, [
        "La propriété font-family a été correctement appliquée avec sans-serif."
    ]);
  }

  function exc21() {
    let isCssGood = true;
    let isHtmlGood = true;

    try {
        // Vérification CSS
        const cssText = $("#exercice").contents().find("style").text();
        const cssRegex = /\.emphase-titre\s*\{[\s\S]*?font-style:\s*italic;[\s\S]*?\}/i;
        isCssGood = cssRegex.test(cssText);

        // Vérification HTML
        const htmlContent = $("#exercice").contents().find("body").html();
        const htmlRegex = /<h3 class=["']?emphase-titre["']?[\s\S]*?>/;
        isHtmlGood = htmlContent.match(htmlRegex).length > 0;

    } catch (error) {
        console.error(error);
        isCssGood = false;
        isHtmlGood = false;
    }

    const isAllGood = isCssGood && isHtmlGood;

    return createTestMessages(isAllGood, [
        isCssGood ? "La propriété font-style: italic a été correctement appliquée à la classe 'emphase-titre'." : "La propriété font-style: italic n'a pas été correctement appliquée.",
        isHtmlGood ? "La classe 'emphase-titre' a été correctement appliquée aux éléments <h3>." : "La classe 'emphase-titre' n'a pas été trouvée sur les éléments <h3>."
    ]);
  }

  function exc22() {
    let isAllGood = true;

    try {
        // Vérification CSS
        const cssText = $("#exercice").contents().find("style").text();
        const h1Regex = /\.voyage\s+h1\s*\{[\s\S]*?font-size:\s*36px;[\s\S]*?\}/i;
        const h2Regex = /\.voyage\s+h2\s*\{[\s\S]*?font-size:\s*24px;[\s\S]*?\}/i;
        isAllGood = h1Regex.test(cssText) && h2Regex.test(cssText);
    } catch (error) {
        console.error(error);
        isAllGood = false;
    }

    return createTestMessages(isAllGood, [
        "La taille de police pour les titres h1 a été correctement ajustée à 36px.",
        "La taille de police pour les titres h2 a été correctement ajustée à 24px."
    ]);
  }

  try {
    switch (ex) {
      case 'ex1':
      return ex1();
      break;
      case 'ex2':
      return ex2();
      case 'ex3':
      return ex3()
      break;
      case 'ex4':
      return ex4()
      break;
      case 'ex5':
      return ex5()
      break;
      case 'ex6':
      return ex6()
      break;
      case 'ex7':
      return ex7()
      break;
      case 'ex8':
      return ex8()
      break;
      case 'ex9':
      return ex9()
      break;
      case 'ex10':
      return ex10()
      break;
      case 'ex11':
      return ex11()
      break;
      case 'ex12':
      return ex12()
      break;
      case 'ex13':
      return ex13()
      break;
      case 'ex14':
      return ex14()
      break;
      case 'ex15':
      return ex15()
      break;
      case 'ex16':
      return ex16()
      break;
      case 'ex17':
      return ex17()
      break;
      case 'ex18':
      return ex18()
      break;
      case 'ex19':
      return ex19()
      break;
      case 'ex20':
      return ex20()
      break;
      case 'ex21':
      return ex21()
      break;
      case 'ex22':
      return ex22()
      break;
      case 'ex23':
      return ex23()
      break;
      case 'exc1':
      return exc1()
      break;
      case 'exc2':
      return exc2()
      break;
      case 'exc3':
      return exc3()
      break;
      case 'exc4':
      return exc4()
      break;
      case 'exc5':
      return exc5()
      break;
      case 'exc6':
      return exc6()
      break;
      case 'exc7':
      return exc7()
      break;
      case 'exc8':
      return exc8()
      break;
      case 'exc9':
      return exc9()
      break;
      case 'exc10':
      return exc10()
      break;
      case 'exc11':
      return exc11()
      break;
      case 'exc12':
      return exc12()
      break;
      case 'exc13':
      return exc13()
      break;
      case 'exc14':
      return exc14()
      break;
      case 'exc15':
      return exc15()
      break;
      case 'exc16':
      return exc16()
      break;
      case 'exc17':
      return exc17()
      break;
      case 'exc18':
      return exc18()
      break;
      case 'exc19':
      return exc19()
      break;
      case 'exc20':
      return exc20()
      break;
      case 'exc21':
      return exc21()
      break;
      case 'exc2':
      return exc22()
      break;
      default:
      console.log(`Sorry, we are out of exercices.`);
      return ['🤯 Oops! Quelque chose s\'est mal passé.', 'Aucun exercice correspondant trouvé.'];
    }
  } catch (error) { 
    return ['🤯 Il manque quelque chose !', 'Tu vas y arriver, courage !'];
  }
}
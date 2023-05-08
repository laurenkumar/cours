import $ from "jquery"

const { assert } = require('chai');

export const runTests = async (ex) => {
  let isAllGood = true;
  let tests = [];

  function ex1() {
    assert($("#exercice").contents().find("h1").length > 0, "L'élement h1 existe");
    assert.isTrue(/Nos(\s)+aventures/gi.test($("#exercice").contents().find("h1").text()), "L'élement h1 contient le texte 'Nos aventures'");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément h1 existe.", "L'élément contient le texte 'Nos aventures'."];
    return tests;
  }

  function ex2() {
    assert($("#exercice").contents().find("h2").length > 0, "L'élement h2 existe");
    assert.isTrue(/Photos(\s)+de(\s)+nos(\s)voyages/gi.test($("#exercice").contents().find("h2").text()), "L'élement h2 contient le texte 'Photos de nos voyages'");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément h2 existe.", "L'élément contient le texte 'Photos de nos voyages'."];
    return tests;
  }

  function ex3() {
    assert($("#exercice").contents().find("p").length > 0, "L'élement p existe");
    assert.isTrue(/Plus de photos dans notre galerie./gi.test($("#exercice").contents().find("p").text()), "L'élement p contient le texte 'Plus de photos dans notre galerie.'");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément p existe.", "L'élément contient le texte 'Plus de photos dans notre galerie.'."];
    return tests;
  }

  function ex4() {
    const html = document.querySelector("#exercice")
    assert(html.srcdoc.match(/<!--\s*A faire: Ajouter un lien vers la galerie photos\s*-->/i), "Le commentaire contient le texte 'A faire: Ajouter un lien vers la galerie photos'");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "Le commentaire existe.", "L'élément contient le texte 'A faire: Ajouter un lien vers la galerie photos'."];

    return tests;
  }

  function ex5() {
    assert($("#exercice").contents().find("main").length > 0, "L'élement main existe");
    assert($("#exercice").contents().find("main h1").length > 0, "L'élement h1 est bien dans le main");
    assert($("#exercice").contents().find("main h2").length > 0, "L'élement h2 est bien dans le main");
    assert($("#exercice").contents().find("main p").length > 0, "L'élement p est bien dans le main");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément main existe.", "L'élement h1 est bien dans le main", "L'élement h2 est bien dans le main", "L'élement p est bien dans le main"];
    return tests;
  }

  function ex6() {
    assert($("#exercice").contents().find("img").length > 0, "L'élement img existe");
    assert($("#exercice").contents().find("img").attr('src') === "thailande.jpg")
    assert($("#exercice").contents().find("img").attr('alt') === "Plage en Thaïlande")
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément img existe.", "L'attribut src de l'image est 'thailande.jpg'", "Le texte alternatif de l'image est 'Plage en Thailande'"];
    return tests;
  }

  function ex7() {
    assert($("#exercice").contents().find("p a").length > 0, "L'élement a se trouve dans le p");
    assert($("#exercice").contents().find("p a").attr('target') === "_blank", "L'élement a un attribut target='_blank'");
    assert.isTrue(/notre galerie/gi.test($("#exercice").contents().find("p a").text()), "L'élement a se trouvant dans le paragraphe contient le texte 'notre galerie'");
    assert($("#exercice").contents().find("a img").length > 0, "L'image se trouve dans le lien")
    assert($("#exercice").contents().find("a").attr('target') === "_blank", "L'élément a un attribut target='_blank'");
    assert($("#exercice").contents().find("a").attr('href') === "https://google.fr", "L'élément a un attribut href='https://google.fr'");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "Les deux éléments a existent.", "Les deux liens redirigent sur google.", "Leurs attribut target est '_blank'", "Le premier lien se trouve dans le paragraphet et englobe le texte 'notre galerie'", "Le deuxième lien englobe l'image"];
    return tests;
  }

  function ex8() {
    assert($("#exercice").contents().find("main section").length > 0, "L'élement section se trouve dans le main");
    assert($("#exercice").contents().find("main section h1").length > 0, "L'élement h1 est bien dans la section");
    assert($("#exercice").contents().find("main section h2").length > 0, "L'élement h2 est bien dans la section");
    assert($("#exercice").contents().find("main section p").length > 0, "L'élement p est bien dans la section");
    assert($("#exercice").contents().find("main section a").length > 0, "L'élement a est bien dans la section");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément section existe.", "L'élement h1 est bien dans la section", "L'élement h2 est bien dans la section", "L'élement p est bien dans la section", "L'élement a est bien dans la section"];
    return tests;
  }

  function ex9() {
    assert($("#exercice").contents().find('main').children("section").eq(1).length > 0, "Un deuxième élément section est ajouté");
    assert.isTrue(/Nos pays visités/gi.test($("#exercice").contents().find("section h2").text()), "L'élement h2 contient le texte 'Nos pays visités'");
    assert.isTrue(/Nos pays préférés/gi.test($("#exercice").contents().find("section h2 + h3").text()), "L'élement h3 contient le texte 'Nos pays préférés'");
    assert($("#exercice").contents().find("main section ul").length > 0, "L'élement ul est bien dans la section");
    assert($("#exercice").contents().find('main section ul').children("li").eq(2).length > 0, "L'élement ul contient 3 li");
    assert.isTrue(/Les pays les moins appréciés/gi.test($("#exercice").contents().find("section ul + h3").text()), "L'élement h3 contient le texte 'Les pays les moins appréciés'");
    assert($("#exercice").contents().find("main section ol").length > 0, "L'élement ol est bien dans la section");
    assert($("#exercice").contents().find('main section ol').children("li").eq(2).length > 0, "L'élement ol contient 3 li");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "Un deuxième élément section est ajouté.", "L'élement h2 contient le texte 'Nos pays visités'", "L'élement h3 contient le texte 'Nos pays préférés'", "L'élement ul est bien dans la section", "L'élement h3 contient le texte 'Les pays les moins appréciés'", "L'élement ul et ol contiennent 3 li"];
    return tests;
  }

  function ex10() {
    assert($("#exercice").contents().find("main section ul + figure").length > 0, "L'élement figure est bien ajouté en dessous de la liste non ordonnée");
    assert($("#exercice").contents().find("main section ul + figure figcaption").length > 0, "L'élement figcaption est bien ajouté dans l'élément figure en dessous de la liste non ordonnée");
    assert($("#exercice").contents().find("main section ul + figure img").length > 0, "L'élement img est bien ajouté dans l'élément figure en dessous de la liste non ordonnée");
    assert($("#exercice").contents().find("main section ol + figure").length > 0, "L'élement figure est bien ajouté en dessous de la liste ordonnée");
    assert($("#exercice").contents().find("main section ol + figure figcaption").length > 0, "L'élement figcaption est bien ajouté dans l'élément figure en dessous de la liste ordonnée");
    assert($("#exercice").contents().find("main section ol + figure img").length > 0, "L'élement img est bien ajouté dans l'élément figure en dessous de la liste ordonnée");
    
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élement figure est bien ajouté en dessous de la liste non ordonnée", "L'élement figcaption est bien ajouté dans l'élément figure en dessous de la liste non ordonnée", "L'élement img est bien ajouté dans l'élément figure en dessous de la liste non ordonnée", "L'élement figure est bien ajouté en dessous de la liste ordonnée", "L'élement figcaption est bien ajouté dans l'élément figure en dessous de la liste ordonnée", "L'élement img est bien ajouté dans l'élément figure en dessous de la liste ordonnée"];
    return tests;
  }

  function ex11() {
    assert.isTrue(/préférés/gi.test($("#exercice").contents().find("section h2 + h3 em").text()), "L'élement h3 contient un em avec le texte 'préférés'");
    assert.isTrue(/appréciés/gi.test($("#exercice").contents().find("section figure + h3 strong").text()), "L'élement h3 contient un strong le texte 'appréciés'");
    
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élement h3 contient un em avec le texte 'préférés'", "L'élement h3 contient un strong le texte 'appréciés'"];
    return tests;
  }

  function ex12() {
    assert($("#exercice").contents().find('main').children("section").eq(2).length > 0, "Une troisième section est ajouté");
    assert.isTrue(/Formulaire de Voyage/gi.test($("#exercice").contents().find("section h2").text()), "L'élement h2 contient le texte 'Formulaire de Voyage'");
    assert($("#exercice").contents().find("main section form").length > 0, "L'élement form est bien dans la section");
    assert($("#exercice").contents().find('main section form input').length > 0, "L'élement form contient un input");
    assert($("#exercice").contents().find("main section input").attr('type') === "text", "L'élément a un attribut target='_blank'");
    assert($("#exercice").contents().find("main section input").attr('name') === "urlphotovoyage", "L'élément a un attribut target='_blank'");
    assert($("#exercice").contents().find("main section input").attr('placeholder') === "Url d'une photo d'un pays", "L'élément a un attribut target='_blank'");

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "Un troisième élément section est ajouté.", "L'élement h2 contient le texte 'Formulaire de Voyage'", "L'élement form contient un input", "L'input possède les bons attributs"];
    return tests;
  }

  function ex13() {
    assert.isTrue(/Submit/gi.test($("#exercice").contents().find("form input + button").text()));
    assert($("#exercice").contents().find("form input + button").attr('type') === "submit");

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'élement button contient le texte 'Submit'", "L'élément button a un attribut type='submit'"];
    return tests;
  }

  function ex14() {
    assert($("#exercice").contents().find("form input").attr('type') === "radio");
    assert($("#exercice").contents().find("form input").attr('name') === "voyage-maison");
    assert($("#exercice").contents().find("form input + input").attr('name') === "voyage-maison");
    assert($("#exercice").contents().find("form input + input").attr('type') === "radio");

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "Les deux éléments ont le type radio", "Les deux input possèdent le name 'voyage-maison"];
    return tests;
  }

  function ex15() {
    assert($("#exercice").contents().find("form label").eq(1).length > 0);
    assert($("#exercice").contents().find("form label input").length > 0);
    assert($("#exercice").contents().find("form label + label input").length > 0);
    assert.isTrue(/Voyager/gi.test($("#exercice").contents().find("form label").text()));
    assert.isTrue(/Rester à la maison/gi.test($("#exercice").contents().find("form label + label").text()));

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "Les deux label contiennent des élèments input", "Les deux label contiennent les textes suivants 'Voyager' et 'Rester à la maison'"];
    return tests;
  }

  function ex16() {
    assert($("#exercice").contents().find("form label input").attr('id') === "voyager");
    assert($("#exercice").contents().find("form label input").attr('value') === "voyager");
    assert($("#exercice").contents().find("form label + label input").attr('id') === "maison");
    assert($("#exercice").contents().find("form label + label input").attr('value') === "maison");

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "Les deux éléments ont la bonne value et les bons ids"];
    return tests;
  }

  function ex17() {
    assert($("#exercice").contents().find("form fieldset").children("label").eq(1).length > 0);
    assert($("#exercice").contents().find("form fieldset").length > 0);

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'élément fieldset englobent les deux labels"];
    return tests;
  }

  function ex18() {
    assert($("#exercice").contents().find("form fieldset legend").length > 0);
    assert.isTrue(/Préférez vous voyager ou rester à la maison?/gi.test($("#exercice").contents().find("form fieldset legend").text()));

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'élément legend contient le texte 'Préférez vous voyager ou rester à la maison?' et se trouve dans le fieldset"];
    return tests;
  }

  function ex19() {
    assert($("#exercice").contents().find("form fieldset + fieldset").length > 0);
    assert.isTrue(/Quelles sont vos destinations préférées?/gi.test($("#exercice").contents().find("form fieldset + fieldset legend").text()));
    assert($("#exercice").contents().find("form fieldset + fieldset label").eq(1).length > 0);
    assert.isTrue(/Paris/gi.test($("#exercice").contents().find("form fieldset + fieldset label").text()));
    assert($("#exercice").contents().find("form fieldset + fieldset label input").length > 0);
    assert.isTrue(/Rome/gi.test($("#exercice").contents().find("form fieldset + fieldset label").text()));
    assert($("#exercice").contents().find("form fieldset + fieldset label + label input").length > 0);
    assert($("#exercice").contents().find("form fieldset + fieldset label input").attr('id') === "paris");
    assert($("#exercice").contents().find("form fieldset + fieldset label input").attr('value') === "paris");
    assert($("#exercice").contents().find("form fieldset + fieldset label input").attr('type') === "checkbox");
    assert($("#exercice").contents().find("form fieldset + fieldset label + label input").attr('id') === "rome");
    assert($("#exercice").contents().find("form fieldset + fieldset label + label input").attr('value') === "rome");
    assert($("#exercice").contents().find("form fieldset + fieldset label + label input").attr('type') === "checkbox");

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'élément legend contient le texte 'Quelles sont vos destinations préférées?' et se trouve dans le deuxième fieldset", "Deux labels sont ajoutés avec des input et leurs attributs"];
    return tests;
  }

  function ex20() {
    assert($("#exercice").contents().find("form fieldset + fieldset label input").attr('name') === "destinations");
    assert($("#exercice").contents().find("form fieldset + fieldset label").attr('for') === "paris");
    assert($("#exercice").contents().find("form fieldset + fieldset label + label").attr('for') === "rome");
    assert($("#exercice").contents().find("form fieldset + fieldset label + label input").attr('name') === "destinations");
    
    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "Ajouter un attribut for aux deux labels englobant les inputs de type checkbox avec les textes respectifs suivants 'paris' et 'rome'.", "Sur les deux inputs, ajouter le name 'destinations'"];
    return tests;
  }

  function ex21() {
    assert($("#exercice").contents().find("#voyager").attr('checked'));
    assert($("#exercice").contents().find("#rome").attr('checked'));
    
    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'input radio 'Voyager' est coché.", "L'input checkbox 'Rome' est coché."];
    return tests;
  }

  function ex22() {
    assert($("#exercice").contents().find("main + footer"));
    assert.isTrue(/Sans Copyright - LK Digital/gi.test($("#exercice").contents().find("main + footer p").text()));
    assert($("#exercice").contents().find("main + footer p a").length > 0);
    assert($("#exercice").contents().find("main + footer p a").attr('href') === "https://lkdigital.ninja");
    
    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'élément footer est présent", "Le footer contient un paragraphe 'Sans copyright - LK Digital'", "Un lien englobe le texte 'LK Digital'"];
    return tests;
  }

  function ex23() {
    assert($("#exercice").contents().find("body main"));
    assert($("#exercice").contents().find("body footer"));
    assert($("#exercice").contents().find("head + body"));
    assert.isTrue(/Nos aventures/gi.test($("#exercice").contents().find("head title").text()));
    assert($("#exercice").contents().find("head meta").attr('charset') === "utf-8");
    assert($("#exercice").contents().find("html head"));
    assert($("#exercice").contents().find("html body"));

    tests = ['🎉 Bravo ! Tu peux passer à la suite.', "L'élément html englobe le body et le head", "Le title 'Nos aventures' est présent", "Le meta charset utf-8 est présent"];
    return tests;
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
      default:
        console.log(`Sorry, we are out of exercices.`);
    }
  } catch (error) { 
    tests = ['🤯 Il manque quelque chose !', 'Tu vas y arriver, courage !'];
    return tests;
  }
}
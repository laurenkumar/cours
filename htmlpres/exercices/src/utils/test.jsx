import $ from "jquery"

const { assert } = require('chai');

export const runTests = async () => {
  let isAllGood = true;
  let tests = [];
  try {
    assert($("#exercice").contents().find("h1").length > 0, "L'élement h1 existe");
    assert.isTrue(/Nos(\s)+aventures/gi.test($("#exercice").contents().find("h1").text()), "L'élement h1 contient le texte 'Nos aventures'");
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "L'élément h1 existe.", "L'élément contient le texte 'Nos aventures'."];
    return tests;
  } catch (error) { // `error` contains "Assert log message" 
    isAllGood = false;
    tests = [isAllGood
  ? '🎉 Bravo ! Tu peux passer à la suite.'
  : '🤯 Tu vas y arriver, courage !', "Il faut créer un h1.","L'élément doit contenir le texte 'Nos aventures'."];
    return tests;
  }
}
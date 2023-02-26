  if (typeof window !== 'undefined') {

import { describe, it, expect, run } from 'jest-lite';
    // Liste des tests à valider pour l'exercice
    describe('liste des tests à passer', () => {
      it('Ton élément "h1" doit contenir le texte "Nos aventures".', () => {
        const titres = Array.from(document.querySelector("#exercice").contentWindow.document.querySelectorAll('h1'))
        const textTitres = titres.map((titre) => titre.innerText)
        expect(textTitres).toContain('Nos aventures')
      })
    })

  // Fonction pour console.log le résultat des tests.
  // La function run() lit les tests Jest et retourne un Array d'Objet avec le résultat des tests.
  export const runTests = async () => {

      // Lancer les tests et récupérer les résultats
      const result = await run()
      let tests = [];
      // Pour chaque test on affiche le bon emoji en fonction de si le test passe ou non
      const results = result.forEach((res) => {
        const desc = res.testPath[2]
        const isFailed = res.status === 'fail'

        tests = (`${isFailed ? '❌' : '✅'} ${desc}`)
      })

      // Check si tous les tests sont bon et afficher un message en conséquence.
      const isAllGood = result.filter((res) => res.status === 'fail').length === 0
      
      return ([isAllGood
          ? '🎉 Bravo ! Tu peux passer à la suite.'
          : '🤯 Tu vas y arriver, courage !', tests]);
  }
}
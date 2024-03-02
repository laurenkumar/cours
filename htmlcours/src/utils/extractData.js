const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const markdownDirectory = path.join(process.cwd(), 'src/responsive-design');
const outputDirectory = path.join(process.cwd(), 'public/data');
const outputFile = path.join(outputDirectory, 'programData.json');

function convertMdToJson() {
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  const files = fs.readdirSync(markdownDirectory);

  const programData = files.reduce((acc, file) => {
    const fullPath = path.join(markdownDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    if (!acc[data.sujet]) {
      acc[data.sujet] = {};
    }

    if (!acc[data.sujet][data.projet]) {
      acc[data.sujet][data.projet] = [];
    }

    acc[data.sujet][data.projet].push({
      exo: file.replace(/\.md$/, ''), // Utiliser le nom du fichier sans l'extension .md comme identifiant
      title: data.title,
      dashedName: data.dashedName,
    });

    return acc;
  }, {});

  fs.writeFileSync(outputFile, JSON.stringify(programData, null, 2)); // Indentation pour une meilleure lisibilité
}

convertMdToJson();

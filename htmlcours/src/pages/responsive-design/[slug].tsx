import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSession } from '@supabase/auth-helpers-react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import CodeOnline from '../../components/Codeeditor';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

function extractCode(markdownContent) {
  const codeBlockRegex = /```(html|css|js)\r?\n([\s\S]+?)```/g;
  let code = {
    html: '',
    css: '',
    js: ''
  };
  let match;

  while ((match = codeBlockRegex.exec(markdownContent)) !== null) {
    if (match[1] && match[2]) {
      code[match[1]] += match[2].trim();
    }
  }

  return code;
}

const parseMarkdownSections = (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data: metaData, content } = matter(fileContents);

  const sections = content.split(/# --\w+--\r?\n/).slice(1);

  const [description, hints, seed] = sections;
  const code = extractCode(seed);
  return {
    metaData: metaData || {},
    description: description || '',
    hints: hints || '',
    code: code || '',
  };
};

const Cours = (({ title, sujet, ex, next, description, hints, code }) => {
  const session = useSession();

  const FREE_EXERCISES = ['exc1', 'exc2', 'exc3', 'exh1', 'exh2', 'exh3'];

  const isAccessible = useMemo(() => FREE_EXERCISES.includes(ex) || !!session, [ex, session]);

  const [showConclusion, setShowConclusion] = useState(false);

  return (
    <Main
      meta={
        <Meta
          title={title}
          description={`idevu - Apprendre à coder - Tutoriel Responsive Design - ${title}`}
        />
      }
    >
      {isAccessible || session ? (
        showConclusion ? (
          <section className="hero my-auto ml-[18.48px] mr-[18.48px] mt-20 mb-20 flex md:flex-row flex-col">
            <div className="wrapper hero__wrapper">
              <div className="hero__content">
                <span className="text-white">Vous savez maintenant créer un site statique</span>
                <h1 className="md:font-normal md:text-5xl mb-4 text-left font-semibold text-4xl m-auto">Vous avez terminé le parcours Responsive Design.</h1>
                <p>Allez maintenant voir la suite du cursus et devenez un développeur web complet</p>
                <div className="mt-12">
                  <Link
                    href="/programme"
                    className="button_login !p-4 font-semibold"
                    title="Le programme - idevu"
                  >
                    Suite du Programme - Le Javascript
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <div className="ml-[18.48px] mr-[18.48px] pb-2 text-white flex block">
              <Link
                href="/programme#responsive-design"
                className="mr-2 font-semibold block text-ellipsis whitespace-nowrap overflow-hidden max-w-full hover:text-[#f25f4c]"
                title="Le programme - idevu - responsive design"
              >
                Responsive Design
              </Link>
              ➤
              <Link
                href={`/programme#${ex}`}
                className="ml-2 font-semibold block text-ellipsis whitespace-nowrap overflow-hidden max-w-full hover:text-[#f25f4c]"
                title={`Le programme - idevu - ${title}`}
              >
                {title}
              </Link>
            </div>
            <div className="flex flex-col md:flex-row cours-container">
              <div className="cours-panel flex-1">
                <Markdown>{description}</Markdown>
              </div>
              <CodeOnline key={ex} ex={ex} next={next} subject={sujet} code={code} hints={hints} />
            </div>
            {next !== 'fin' && (
              <Link
                className="next-exo"
                href={next}
                title="Exercice suivant"
              >
                Exo suivant
              </Link>
            )}
            {next === 'fin' && (
              <button
                className="next-exo"
                title="La conclusion"
                onClick={() => setShowConclusion(true)}
              >
                La conclusion
              </button>
            )}
          </>
        )
      ) : (
        <section className="hero my-auto ml-4 mr-4 md:ml-16 md:mr-16 mt-20 mb-20 flex md:flex-row flex-col">
          <div className="wrapper hero__wrapper">
            <div className="hero__content">
              <h1 className="md:font-normal md:text-5xl mb-4 text-left font-semibold text-4xl m-auto">Vous devez vous inscrire pour accéder à cette leçon.</h1>
              <p>Seuls les trois premiers exercices des deux premiers projets sont gratuits.</p>
              <div className="mt-12">
                <Link
                  href="/connexion"
                  className="button_login !p-4 font-semibold"
                  title="Inscrivez vous - idevu"
                >
                  Inscrivez vous
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </Main>
  );
});

export async function getStaticProps({ params }) {
  try {
    const { metaData, description, hints, code } = parseMarkdownSections(`src/responsive-design/${params.slug}.md`);

    return {
      props: {
        title: metaData.title || 'Apprendre le développement web',
        sujet: metaData.sujet || 'Apprendre le développement web',
        ex: metaData.ex || 'Apprendre le développement web',
        next: metaData.next || 'Apprendre le développement web',
        description: description || 'Apprenons le développement web',
        hints: hints || 'Aucun indice disponible',
        code: code || 'Aucun code de démarrage disponible',
      },
    };
  } catch (error) {
    console.error('Erreur lors du parsing du fichier Markdown:', error);
    return {
      props: {
        title: 'Erreur',
        next: "Plus d'éxercice",
        description: 'Un problème est survenu lors du chargement du cours.',
        hints: '',
        code: '',
      },
    };
  }
}

export async function getStaticPaths() {
  const coursesDirectory = path.join(process.cwd(), 'src/responsive-design');
  const filenames = fs.readdirSync(coursesDirectory);

  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');

    return {
      params: { slug }, // Assurez-vous que `slug` correspond au nom du paramètre dynamique utilisé dans vos routes de pages
    };
  });

  return { paths, fallback: false };
}

export default Cours;
import { KodemoPlayer } from '@kodemo/player';
import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useSession } from '@supabase/auth-helpers-react';
import fs from 'fs';
import path from 'path';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import curriculum from 'src/cours/curriculum.json';

const FREE_EXERCISES = ['exc1', 'exc2', 'exc3', 'exh1', 'exh2', 'exh3'];

const CurriculumContent = () => {
  return (
    <nav className="side">
      <div className="side__program">
        <div className="side__program__course">
          <div className="side__program__course__icon">
            <span className="dashicons dashicons-admin-appearance">📜</span>
          </div>
          <div className="side__program__course__title">
            <div><small>Formation</small></div>
            Responsive Web Design: créer un site web sur mesure
          </div>
        </div> 
        <div>
          <div>
            {Object.entries(curriculum).map(([property, details]) => (
              <div key={property}>
                <div className="side__program__part">
                  <div className="side__program__part__picto">❤️</div>
                  <div className="side__program__part__title">
                    <span>Projet •</span> {details.sujet}
                  </div>
                </div>
                <div className="side__program__chapter">
                  <div className="side__program__chapter__num">{property}</div>
                  <div className="side__program__chapter__text">{details.titre}</div>
                </div>
                {Object.keys(details.sousparties).map((key) => (
                  <li className="side__program__lesson" key={`ex${details.sujet.substring(0,1)}${parseInt(key)+1}`}>
                    <Link
                      href={`/cours/ex${details.sujet.substring(0,1)}${parseInt(key) + 1}`}
                      title={details.sousparties[key].titre}
                    >
                      {details.sousparties[key].titre}
                    </Link>
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="side__program__part">
          <div className="side__program__part__picto">
            ❤️
          </div>
          <div className="side__program__part__title">
            <span>Conclusion •</span> Vous savez maintenant créer un site statique !
          </div>
        </div>

        <ul className="side__program__lessons">
          <li
            className="side__program__lesson"
          >
            <a>1. Conclusion : et maintenant ?</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

const Cours = React.memo(({ course }) => {
  const router = useRouter();
  const {json} = router.query;
  const session = useSession();

  const isAccessible = useMemo(() => FREE_EXERCISES.includes(json) || !!session, [json, session]);

  return (
    <Main
      meta={
        <Meta
          title="Apprendre HTML en codant un site de voyage"
          description="LK Digital - Apprendre à coder - Tutoriel HTML"
        />
      }
    >
      {isAccessible || session ? (
        <>
          <CurriculumContent />
          <KodemoPlayer json={course} >
          </KodemoPlayer>
          { json &&
            <Link
              className="next-exo"
              href={`/cours/${json === 'exh23' ? "exc1" : `ex${json.substring(2,3)}${parseInt(json.substring(3)) + 1}`}`}
              title="Exercice suivant"
            >
              Exo suivant
            </Link>
          }
        </>
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
                  title="Inscrivez vous - LK Digital"
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
  // Construire le chemin vers le dossier où sont stockés les fichiers JSON
  const filePath = path.join(process.cwd(), 'src/cours', `${params.json}.json`);

  let course = null;
  try {
    // Lire le contenu du fichier JSON de manière synchrone ou asynchrone
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    course = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading course data:', error);
    // Gérer l'erreur si le fichier n'existe pas ou autre
    course = null;
  }

  return {
    props: {
      course,
    },
  };
}

export async function getStaticPaths() {
  const coursesDirectory = path.join(process.cwd(), 'src/cours');
  const filenames = fs.readdirSync(coursesDirectory);

  const paths = filenames
    .filter(filename => filename.endsWith('.json')) // Assurez-vous que seuls les fichiers .json sont inclus
    .map(filename => ({
      params: { json: filename.replace('.json', '') },
    }));

  return { paths, fallback: false };
}


export default Cours;
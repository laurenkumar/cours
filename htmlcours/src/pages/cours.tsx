import { KodemoPlayer } from '@kodemo/player';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import curriculum from 'src/cours/curriculum.json';

const FREE_EXERCISES = ['exc1', 'exc2', 'exc3', 'exh1', 'exh2', 'exh3'];

const Cours = React.memo(({ course }) => {
  const [sidebar, setSidebar] = useState("");
  const router = useRouter();
  const {json} = router.query;
  const user = useUser();

  const [isOnline, setIsOnline] = useState(false);
  const [isAccessible, setIsAccessible] = useState(true);
  const isExerciseFree = (exercise) => {
    return FREE_EXERCISES.includes(exercise);
  }

  useEffect(() => {
    if(!json) {
      return;
    }
    if (user) {
      setIsOnline(true);
    }
    setIsAccessible(isExerciseFree(json));
    setSidebar(curriculum);
  }, [json, user]);

  const SetCurriculum = (curriculum) => {
    let parties = [];
    for (const property in curriculum) {
      parties.push(
        <div key={property}>
          <div className="side__program__part">
            <div className="side__program__part__picto">
              ❤️
            </div>
            <div className="side__program__part__title">
              <span>Projet •</span> {curriculum[property].sujet}
            </div>
          </div>
          <div className="side__program__chapter">
            <div className="side__program__chapter__num">{property}</div>
            <div className="side__program__chapter__text">{curriculum[property].titre}</div>
          </div>
        </div>
      );
      for (const property2 in curriculum[property].sousparties) {
        parties.push(
          <li className="side__program__lesson" key={`ex${(curriculum[property].sujet).substring(0,1)}${parseInt(property2)+1}`}>
            <Link
              href={{
                pathname: '/cours',
                query: { json: `ex${(curriculum[property].sujet).substring(0,1)}${parseInt(property2)+1}` },
              }}
              title={curriculum[property].sousparties[property2].titre}
            >
              {curriculum[property].sousparties[property2].titre}
            </Link>
          </li>
        );
      }
    }
    return (
      <div>
        {parties}
      </div>
      
    );
  }
  
  const RWD = SetCurriculum(sidebar);

  function SideNav(sidebar) {
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
              {RWD}
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
  }

  return (
    <Main
      meta={
        <Meta
          title="Apprendre HTML en codant un site de voyage"
          description="LK Digital - Apprendre à coder - Tutoriel HTML"
        />
      }
    >
      {isAccessible || isOnline ? (
        <>
          {sidebar && (<SideNav />)}
          <KodemoPlayer json={course} >
          </KodemoPlayer>
          { json &&
            <Link
              className="next-exo"
              href={{
                pathname: '/cours',
                query: { json: json === 'exh23' ? "exc1" : `ex${json.substring(2,3)}${parseInt(json.substring(3)) + 1}` },
              }}
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

export async function getServerSideProps(context) {
  const { json } = context.query;

  let course = null;
  try {
    if (json) {
      course = await import(`../cours/${json}.json`, { assert: { type: "json" } });
      course = course.default;
    }
  } catch (error) {
    console.error('Erreur lors du chargement du fichier JSON', error);
    // Gérer l'erreur si nécessaire
  }

  return {
    props: {
      course,
    },
  };
}

export default Cours;
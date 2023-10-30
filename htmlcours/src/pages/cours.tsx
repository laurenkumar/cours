import { KodemoPlayer } from '@kodemo/player';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import curriculum from 'src/cours/curriculum.json';

const Cours = () => {
  const [sidebar, setSidebar] = useState("");
  const router = useRouter();
  const {json} = router.query;

  const [course, setCourse] = useState("")

  useEffect(() => {
    if(!json) {
      return;
    }
    const load = async () => {
      const data = await import(`../cours/${json}.json`, { assert: { type: "json" } });
      setCourse(data.default);
      console.log("json ::: ", json)
    }
    load();
    setSidebar(curriculum);
  }, [sidebar, course, json]);

  const SetCurriculum = (curriculum) => {
    let parties = [];
    for (const property in curriculum) {
      parties.push(
        <>
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
        </>
      );
      for (const property2 in curriculum[property].sousparties) {
        parties.push(
          <li className="side__program__lesson" key={property2}>
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
              <small>Formation</small><br/>
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
    </Main>
  );
};

export default Cours;
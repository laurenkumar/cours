import { KodemoPlayer, Pagination } from '@kodemo/player';
import { KodemoMenu } from '@kodemo/util';
import { useEffect, useState } from 'react';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import html_part_1 from 'src/cours/html_part_1.json';

const Index = () => {
  const [sidebar, setSidebar] = useState("");

  useEffect(() => {
    setSidebar(html_part_1.documentNav);
    console.log(sidebar.sousparties); 
  }, [sidebar]);

  function Menu() {
    return (
      <>
        <div className="ko-pagination">
          <Arrows />
        </div>
      </>
    );
  }

  function Arrows() {
    return (
      <KodemoMenu.Root>
          <Pagination />
      </KodemoMenu.Root>
    );
  }

  function SideNav() {
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
                  <div className="side__program__part">
                    <div className="side__program__part__picto">
                      ❤️
                    </div>
                    <div className="side__program__part__title">
                      <span>Projet •</span> {sidebar.sujet}
                    </div>
                  </div>
                  <div className="side__program__chapter">
                    <div className="side__program__chapter__num">1A</div>
                    <div className="side__program__chapter__text">{sidebar.partie}</div>
                  </div> 
                  <ul className="side__program__lessons">
                    {sidebar.sousparties.map((data, idx) => (
                    <li className="side__program__lesson">
                      <a href={data.id}>{idx+1}. {data.titre}</a>
                    </li>
                    ))}
                  </ul>
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
      <KodemoPlayer
        menu={<Menu />}
        keyboardPagination={true} 
        json={html_part_1}>
      </KodemoPlayer>
    </Main>
  );
};

export default Index;

import Link from 'next/link';
import type { ReactNode } from 'react';
import { KodemoMenu } from '@kodemo/util';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}

    <nav className="topmenu">
      <div className="logo">
        <Link
          href={`/`}
          title="Page d'accueil - Formation - LK Digital"
        >
        <svg width={50} height={30} viewBox="0 0 50 30">
          <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="5pt" stroke="#000" strokeWidth="0.5mm" fill="none"><path d="M 37.28 0 L 41.8 0 L 31.72 12.12 L 42.12 27.44 L 37.56 27.44 L 29.24 15.12 L 25.36 19.2 L 25.36 27.44 L 21.44 27.44 L 21.44 0 L 25.36 0 L 25.36 14.28 L 37.28 0 Z M 0 0 L 3.92 0 L 3.92 23.88 L 16.52 23.88 L 17.08 27.44 L 0 27.44 L 0 0 Z" vectorEffect="non-scaling-stroke"/></g> 
        </svg>
        </Link>
      </div>

      <div className="menucontent">
        <ul>
          <li className="dropdownmenu">
            <Link
              href={`https://formations.lkdigital.ninja/cours`}
              title="Tous nos cours - Formation - LK Digital"
            >
              Cours
            </Link>
            <div className="menu_drop">
              <p className="menu_subtitle">Formations en ligne</p>
              <ul className="menu_subcours">
                <li>
                  <Link
                    href="/"
                    className="menu_subcours_link"
                    title="Apprendre HTML: un langage de balisage"
                  >
                    Apprendre HTML: un langage de balisage
                  </Link>
                </li> 
                <li>
                  <Link
                    href="/"
                    className="menu_subcours_link"
                    title="Apprendre CSS: un langage de mise en page"
                  >
                    Apprendre CSS: un langage de mise en page
                  </Link>
                </li> 
                <li>
                  <Link
                    href="/"
                    className="menu_subcours_link"
                    title="Apprendre Javascript: un langage de programmation"
                  >
                    Apprendre Javascript: un langage de programmation
                  </Link>
                </li>    
              </ul>
              <p className="menu_subtitle">Formations en présentiel</p>
              <div className="menu_subblock">
                <div className="menu_subblock_content">
                  <p>Nous nous déplaçons également dans votre entreprise avec un programme sur mesure. Ces formations sont aussi disponibles à distance en visio.</p>
                  <p>
                    <Link
                      href="https://lkdigital.ninja/formations"
                      target="_blank"
                      className="button button--premium"
                      title="Formation Présentiel - LK Digital"
                    >
                      Formation Intra
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              href={`https://lkdigital.ninja/blog`}
              target="_blank"
              title="Le blog - LK Digital"
            >
              {`Blog`}
            </Link>
          </li>
          <li>
            <Link
              href={`https://lkdigital.ninja/contact`}
              target="_blank"
              title="Contactez nous - LK Digital"
            >
              {`Contact`}
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="https://formations/lkdigital.ninja/connexion"
        className="button_login"
        title="Connexion - LK Digital"
      >
        Connexion
      </Link>
    </nav>

    <div>{props.children}</div>

  </div>
);

export { Main };

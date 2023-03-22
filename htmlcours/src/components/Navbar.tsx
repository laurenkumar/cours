import React from "react";
import Link from 'next/link';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="topmenu">
          <div className="w-full flex justify-between items-center">
            <div className="logo">
              <Link
                href={`/`}
                title="Page d'accueil - Formation - LK Digital"
              >
              <svg width={50} height={30} viewBox="0 0 50 30">
                <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="5pt" stroke="#fffffe" strokeWidth="0.5mm" fill="none"><path d="M 37.28 0 L 41.8 0 L 31.72 12.12 L 42.12 27.44 L 37.56 27.44 L 29.24 15.12 L 25.36 19.2 L 25.36 27.44 L 21.44 27.44 L 21.44 0 L 25.36 0 L 25.36 14.28 L 37.28 0 Z M 0 0 L 3.92 0 L 3.92 23.88 L 16.52 23.88 L 17.08 27.44 L 0 27.44 L 0 0 Z" vectorEffect="non-scaling-stroke"/></g> 
              </svg>
              </Link>
            </div>
            <button
              className="relative text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
            <div className="menucontent hidden lg:block">
              <ul>
                <li className="dropdownmenu">
                  <Link
                    href="/programme"
                    title="Tous nos cours - Formation - LK Digital"
                  >
                    Programme
                  </Link>
                  <div className="menu_drop">
                    <p className="menu_subtitle">Formations en ligne</p>
                    <ul className="menu_subcours">
                      <li>
                        <Link
                          href="/"
                          className="menu_subcours_link"
                          title="Responsive Web Design"
                        >
                          Responsive Web Design
                        </Link>
                      </li> 
                      <li>
                        <Link
                          href="/"
                          className="menu_subcours_link"
                          title="Javascript"
                        >
                          Javascript
                        </Link>
                      </li> 
                      <li>
                        <Link
                          href="/"
                          className="menu_subcours_link"
                          title="Développement Front-End"
                        >
                          Développement Front-End
                        </Link>
                      </li>  
                      <li>
                        <Link
                          href="/"
                          className="menu_subcours_link"
                          title="Développement Back-End"
                        >
                          Développement Back-End
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
                    href="tarifs"
                    title="Les tarifs - LK Digital"
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://lkdigital.ninja/blog`}
                    target="_blank"
                    title="Le blog - LK Digital"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#contact`}
                    title="Contactez nous - LK Digital"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link
                href="https://formations/lkdigital.ninja/connexion"
                className="hidden lg:flex button_login"
                title="Connexion - LK Digital"
            >
                Connexion
            </Link>
          </div>
          <div className={
              "mt-16 w-4/5 flex flex-col gap-6" +
              (navbarOpen ? " menu_resp" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul>
              <li className="dropdownmenu mb-6">
                <Link
                  href="/programme"
                  title="Tous nos cours - Formation - LK Digital"
                >
                  Programme
                </Link>
                <div className="menu_drop">
                  <p className="menu_subtitle">Formations en ligne</p>
                  <ul className="menu_subcours">
                    <li>
                      <Link
                        href="/"
                        className="menu_subcours_link"
                        title="Responsive Web Design"
                      >
                        Responsive Web Design
                      </Link>
                    </li> 
                    <li>
                      <Link
                        href="/"
                        className="menu_subcours_link"
                        title="Javascript"
                      >
                        Javascript
                      </Link>
                    </li> 
                    <li>
                      <Link
                        href="/"
                        className="menu_subcours_link"
                        title="Développement Front-End"
                      >
                        Développement Front-End
                      </Link>
                    </li>  
                    <li>
                      <Link
                        href="/"
                        className="menu_subcours_link"
                        title="Développement Back-End"
                      >
                        Développement Back-End
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
              <li className="mb-6">
                <Link
                  href="tarifs"
                  title="Les tarifs - LK Digital"
                >
                  Tarifs
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href={`https://lkdigital.ninja/blog`}
                  target="_blank"
                  title="Le blog - LK Digital"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`/#contact`}
                  target=""
                  title="Contactez nous - LK Digital"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="https://formations/lkdigital.ninja/connexion"
              className="button_login flex items-center justify-center"
              title="Connexion - LK Digital"
            >
              Connexion
            </Link>
          </div>
      </nav>
    </>
  );
}
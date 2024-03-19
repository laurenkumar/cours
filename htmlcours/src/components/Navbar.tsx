import React, {useState} from "react";
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const session = useSession();

  return (
    <>
      <nav className="topmenu">
          <div className="w-full flex justify-between items-center">
            <div className="logo">
              <Link
                href={`/`}
                title="Page d'accueil - Formation - idevu"
                className="text-white font-black text-2xl"
              >
                idevu.
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
                    title="Tous nos cours - Formation - idevu"
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
                            title="Formation Présentiel - idevu"
                          >
                            Formation Intra
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <Link
                    href="/tarifs"
                    title="Les tarifs - idevu"
                  >
                    Tarifs
                  </Link>
                </li>*/}
                <li>
                  <Link
                    href={`https://blog.lkdigital.ninja`}
                    target="_blank"
                    title="Le blog - idevu"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/#contact`}
                    title="Contactez nous - idevu"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link
                href="/connexion"
                className="hidden lg:flex button_login"
                title="Connexion - idevu"
            >
              {!session ? 'Connexion' : session.user.email}
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
                  title="Tous nos cours - Formation - idevu"
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
                          title="Formation Présentiel - idevu"
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
                  title="Les tarifs - idevu"
                >
                  Tarifs
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href={`https://lkdigital.ninja/blog`}
                  target="_blank"
                  title="Le blog - idevu"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`/#contact`}
                  target=""
                  title="Contactez nous - idevu"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="/connexion"
              className="button_login flex items-center justify-center"
              title="Connexion - idevu"
            >
              {!session ? 'Connexion' : session.user.email}
            </Link>
          </div>
      </nav>
    </>
  );
}

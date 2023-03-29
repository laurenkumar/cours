import { Auth } from '@supabase/auth-ui-react'
import Link from 'next/link';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import * as fr from '../utils/fr.json'
import { useState } from 'react'

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const views: { id: ViewType; title: string }[] = [
    { id: 'sign_in', title: 'Sign In' },
    { id: 'sign_up', title: 'Sign Up' },
    { id: 'magic_link', title: 'Magic Link' },
    { id: 'forgotten_password', title: 'Forgotten Password' },
    { id: 'update_password', title: 'Update Password' },
]

const Connexion = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [view, setView] = useState(views[0])

  return (
    <Main
      meta={
        <Meta
          title="Votre profil - Formation LK Digital"
          description="Acquérir les compétences techniques nécessaires pour devenir développeur web."
        />
      }
    >
    <div className="container md:w-2/6 w-4/5 mx-auto mt-16 mb-16">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          localization={{
            variables: fr
          }}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#ff8906',
                  brandAccent: '#f25f4c',
                },
              },
            },
          }}
          theme="dark"
          view={view.id}
          providers={['google', 'github']} 
        />
      ) : (
        <Account session={session} />
      )}
    </div>
    <footer className="md:ml-2 md:mr-2 ml-4 mr-4">
            <div className="container">
              <div>
                <Link
                  href="/"
                  cursor-class="arrow"
                  aria-current="page"
                  title="Aller à l'acceil"
                >
                    <svg
                      width="44"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-8"
                    >
                      <g
                        id="svgGroup"
                        strokeLinecap="round"
                        fillRule="evenodd"
                        fontSize="5pt"
                        stroke="#ff8906"
                        strokeWidth="0.5mm"
                        fill="none"
                      >
                        <path
                          d="M 37.28 0 L 41.8 0 L 31.72 12.12 L 42.12 27.44 L 37.56 27.44 L 29.24 15.12 L 25.36 19.2 L 25.36 27.44 L 21.44 27.44 L 21.44 0 L 25.36 0 L 25.36 14.28 L 37.28 0 Z M 0 0 L 3.92 0 L 3.92 23.88 L 16.52 23.88 L 17.08 27.44 L 0 27.44 L 0 0 Z"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                      </g>
                    </svg>
                  
                </Link>
                <div className="column">
                  <Link href="mailto:lauren_d@outlook.fr" cursor-class="arrow" title="Notre mail">
                      lauren_d@outlook.fr
                  </Link>
                  <Link href="tel:0033612801258" cursor-class="arrow" title="Notre 06">
                      ou alors notre 06
                  </Link>
                </div>
                <small className="text-legal">
                  <Link href="/legal" className="text-legal" cursor-class="arrow" title="Mentions légales">
                      Legal
                  </Link>
                  &nbsp;©&nbsp;2022
                </small>
              </div>
              <div>
                <h4>Qui sommes nous</h4>
                <div className="column">
                  <Link href="https://lkdigital.ninja/a-propos" cursor-class="arrow" title="A propos de nous">
                      A propos
                  </Link>
                  <Link href="/contact" cursor-class="arrow" title="Nous Contacter">
                      Contact
                  </Link>
                </div>
              </div>
              <div>
                <h4>Nos activités</h4>
                <div className="column">
                  <Link href="/programme" cursor-class="arrow" title="Aller voir nos formations">
                      Programme
                  </Link>
                  <Link href="/tarifs" cursor-class="arrow" title="Aller voir nos tarifs">
                      Tarifs
                  </Link>
                  <Link href="https://lkdigital.ninja/services" cursor-class="arrow" title="Aller voir nos services">
                      Services
                  </Link>
                  <Link href="https://lkdigital.ninja/blog" cursor-class="arrow" title="Aller sur notre blog">
                      Blog
                  </Link>
                </div>
              </div>
              <div>
                <h4>Suivez nous</h4>
                <div className="column social">
                  <Link
                    href="https://github.com/laurenkumar/"
                    cursor-class="arrow"
                    title="Aller Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#141124"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          d="M18.442 5.228a9.833 9.833 0 00-3.548-3.638A9.358 9.358 0 0010 .25C8.23.25 6.6.697 5.106 1.59a9.832 9.832 0 00-3.548 3.638C.686 6.759.25 8.43.25 10.244c0 2.178.62 4.136 1.86 5.876 1.24 1.74 2.841 2.943 4.805 3.61.228.044.398.014.508-.09a.515.515 0 00.165-.39l-.007-.703c-.004-.443-.006-.829-.006-1.158l-.292.052c-.186.035-.421.05-.705.045a5.241 5.241 0 01-.882-.09 1.949 1.949 0 01-.85-.391 1.65 1.65 0 01-.56-.8l-.126-.3c-.085-.199-.218-.42-.4-.663-.182-.243-.366-.408-.552-.495l-.089-.065a.941.941 0 01-.165-.156.716.716 0 01-.114-.182c-.026-.061-.005-.111.063-.15.068-.04.19-.058.368-.058l.254.038c.17.035.379.139.629.313.25.173.454.399.615.676.195.356.43.627.705.814.275.186.552.28.831.28.28 0 .52-.022.724-.066.203-.043.393-.108.571-.195.076-.581.284-1.028.622-1.34a8.5 8.5 0 01-1.301-.235 5.111 5.111 0 01-1.193-.507 3.44 3.44 0 01-1.022-.872c-.271-.347-.493-.803-.667-1.367-.173-.564-.26-1.214-.26-1.952 0-1.05.334-1.943 1.003-2.68-.313-.79-.284-1.675.089-2.655.245-.078.61-.02 1.092.176.482.195.835.362 1.06.5.224.14.404.257.54.352A8.808 8.808 0 0110 5.078c.838 0 1.65.112 2.438.338l.482-.312c.33-.209.72-.4 1.168-.573.448-.173.791-.221 1.028-.143.381.98.415 1.865.102 2.655.668.737 1.003 1.63 1.003 2.68 0 .738-.087 1.39-.26 1.959-.174.568-.398 1.023-.673 1.366a3.57 3.57 0 01-1.029.866c-.41.234-.808.403-1.193.507a8.492 8.492 0 01-1.301.235c.44.39.66 1.006.66 1.848v2.745c0 .156.053.286.159.39.105.104.272.135.501.091 1.964-.667 3.565-1.871 4.805-3.61 1.24-1.74 1.86-3.698 1.86-5.876 0-1.813-.437-3.485-1.308-5.016z"
                        ></path>
                      </svg>
                  </Link>
                  <Link
                    href="https://facebook.com/lkdigital/"
                    title="Aller sur Facebook"
                    target="_blank"
                    noreferrer
                    noopener
                    cursor-class="arrow"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <path
                          fill="#111314"
                          fillRule="nonzero"
                          d="M12.0935 20.1021C16.6406 19.5616 20.1666 15.6925 20.1666 11C20.1666 5.93737 16.0625 1.83331 10.9999 1.83331C5.93731 1.83331 1.83325 5.93737 1.83325 11C1.83325 15.5521 5.15139 19.3293 9.50096 20.0447V13.8947H7.33325V11.4504H9.50096V9.64784C9.50096 7.55582 10.8128 6.41668 12.7296 6.41668C13.6479 6.41668 14.4365 6.48349 14.6666 6.51318V8.69968L13.3374 8.70036C12.2951 8.70036 12.0935 9.18287 12.0935 9.89011V11.451H14.5793L14.2556 13.8953H12.0935V20.1021Z"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/laurenceau/"
                    cursor-class="arrow"
                    title="Aller sur Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#141124"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        d="M14.5.75a4.75 4.75 0 014.75 4.75v9a4.75 4.75 0 01-4.75 4.75h-9A4.75 4.75 0 01.75 14.5v-9A4.75 4.75 0 015.5.75h9zm0 1.5h-9A3.25 3.25 0 002.25 5.5v9a3.25 3.25 0 003.25 3.25h9a3.25 3.25 0 003.25-3.25v-9a3.25 3.25 0 00-3.25-3.25zM7.46 7.479V14H5.38V7.479h2.08zm5.533-.112c1.453 0 2.268.914 2.268 2.455V14h-2.08v-3.732c0-.756-.352-1.207-1.067-1.207-.703 0-1.125.521-1.125 1.26V14H8.915V7.479h2.016v1.224h.04c.352-.873 1.026-1.336 2.022-1.336zM6.417 4.89c.592 0 1.073.44 1.073 1.025 0 .592-.48 1.025-1.073 1.025-.586 0-1.066-.433-1.066-1.025 0-.586.48-1.025 1.066-1.025z"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com/lkdigital_eu"
                    cursor-class="arrow"
                    title="Aller sur instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <circle cx="15" cy="5" r="1" fill="#141124"></circle>
                        <path
                          fill="#141124"
                          fillRule="nonzero"
                          d="M14.5.75a4.75 4.75 0 014.75 4.75v9a4.75 4.75 0 01-4.75 4.75h-9A4.75 4.75 0 01.75 14.5v-9A4.75 4.75 0 015.5.75h9zm0 1.5h-9A3.25 3.25 0 002.25 5.5v9a3.25 3.25 0 003.25 3.25h9a3.25 3.25 0 003.25-3.25v-9a3.25 3.25 0 00-3.25-3.25zm-4.5 3a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
        </footer>
    </Main>
  )
}

export default Connexion
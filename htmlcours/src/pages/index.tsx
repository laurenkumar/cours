import Link from 'next/link';
import { useEffect, useState } from 'react';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import exemple from 'assets/videos/exemple.mp4';
import curriculum from 'src/cours/curriculum.json';

const Index = () => {
  const [sidebar, setSidebar] = useState("");

  useEffect(() => {
    setSidebar(curriculum);
  }, [sidebar]);

  const SetCurriculum = (curriculum) => {
    let parties = [];
    for (const property in curriculum) {
      parties.push(
        <>
          <label key={`tab-multi-${property}`} className="cursor-pointer">
            <h4 className="md:text-4xl mb-4 mt-6 text-white text-left text-xl font-semibold">
              <span className="mr-4">
                {curriculum[property].sujet}
              </span>
              {property} : {curriculum[property].titre}
            </h4>
          </label>
        </>
      );
      for (const property2 in curriculum[property].sousparties) {
        parties.push(
          <div className="inline-grid border p-2 m-1">
          <p key={property2} className="pt-3 pb-3 font-semibold text-white">
            {property2}.
            <Link className="tracking-wider link-cursus" href={`cours/` + curriculum[property].sousparties[property2].id} title={curriculum[property].sousparties[property2].titre} > {curriculum[property].sousparties[property2].titre}</Link>
          </p>
          </div>
        );
      }
    }
    return (
      <div className="pt-5 tab w-full">
        {parties}
      </div>
    );
  }
  
  const RWD = SetCurriculum(sidebar);

  return (
    <Main
      meta={
        <Meta
          title="Apprendre HTML en codant un site de voyage"
          description="LK Digital - Apprendre à coder - Tutoriel HTML"
        />
      }
    >
      <div className="home">
        <section className="hero md:h-screen my-auto ml-4 mr-4 md:ml-16 md:mr-16 md:mt-0 mt-16 items-center flex md:flex-row flex-col justify-center">
          <div className="wrapper hero__wrapper">
            <div className="hero__content">
              <h1 className="md:font-normal md:text-4xl mb-4 text-left font-semibold text-3xl m-auto">Apprendre à coder facilement depuis chez vous !</h1>
              <h2 className="text-left text-xl"><strong>La création de site web, étape par étape.</strong></h2>
            </div>

            <div className="text-left max-w-xl text-l mt-10">
              <p className="text-lg">Vous voulez en apprendre plus sur le métier de développeur web ou en devenir un ?</p>
              <p className="text-lg">Les formations LK Digital sont faites pour vous !</p>
              <p className="text-lg">
                Apprenez dans un environnement interactif.
                Lisez de courtes leçons, coder en même temps et relevez des défis directement dans votre navigateur.
              </p>
              <button className="mt-4 button_login font-semibold">
                <Link href="/cours" title="Formation en ligne">Formation en ligne</Link>
              </button>
            </div>
          </div>
          <div className="w-embed mt-8 md:mt-0 w-4/5 h-auto max-w-lg">
            <svg viewBox="0 0 555 422" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="32.5" y="1.5" width="456" height="355" rx="5.5" fill="#f25f4c" stroke="black" strokeWidth="3"></rect>
              <path d="M380 110L414 110C417.866 110 421 113.134 421 117V355.5H380V110Z" fill="black" fillOpacity="0.2"></path>
              <rect x="1.5" y="89.5" width="400" height="331" rx="5.5" fill="#fffffe" stroke="black" strokeWidth="3"></rect>
              <rect x="26.5" y="118.5" width="231" height="279" rx="3.5" fill="#ff8906" stroke="black" strokeWidth="3"></rect>
              <rect x="315.5" y="177.5" width="63" height="47" rx="3.5" fill="#f25f4c" stroke="black" strokeWidth="3"></rect>
              <rect x="315.5" y="118.5" width="63" height="47" rx="3.5" fill="#ff8906" stroke="black" strokeWidth="3"></rect>
              <circle cx="54.5" cy="24.5" r="6" fill="#fffffe" stroke="black" strokeWidth="3"></circle>
              <circle cx="75.5" cy="24.5" r="6" fill="#fffffe" stroke="black" strokeWidth="3"></circle>
              <circle cx="96.5" cy="24.5" r="6" fill="#fffffe" stroke="black" strokeWidth="3"></circle>
              <path d="M32 47H500" stroke="black" strokeWidth="3"></path>
              <path d="M337 75H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 100H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 125H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 150H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 175H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              
              <path d="M403 250H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 275H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 300H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M403 325H450" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              
              <path d="M70 75H300" stroke="black" strokeWidth="3" strokeLinecap="round"></path>

              <circle cx="321.5" cy="247.5" r="6" fill="#ff8906" stroke="black" strokeWidth="3"></circle>
              <path d="M337 248H378.5" stroke="black" strokeWidth="3" strokeLinecap="round"></path> 
              <circle cx="321.5" cy="303.5" r="6" fill="#fffffe" stroke="black" strokeWidth="3"></circle>
              <path d="M337 304H378.5" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
              <circle cx="321.5" cy="275.5" r="6" fill="#fffffe" stroke="black" strokeWidth="3"></circle>
              <path d="M337 276H378.5" stroke="black" strokeWidth="3" strokeLinecap="round"></path>
            </svg>
          </div>
        </section>
        <section className="items-center pres-video flex md:flex-row flex-col justify-center bg-white md:h-screen my-auto md:mt-0 md:mb-0 mt-16 mb-16">
          <div className="ml-4 mr-4 md:ml-28 md:mr-28 md:mt-10 md:mb-10 mb-16 mt-16">
            <div className="items-center flex md:flex-row flex-col justify-center">
              <video className="video-responsive w-full md:w-4/6" id="video" width="900" height="600" muted loop playsInline preload="none" autoPlay>
                <source src="assets/videos/exemple.mp4" type="video/mp4" />
              </video>
              <div className="md:ml-20 md:mt-0 mt-6 max-w-md">
                <span>Débutants bienvenus</span>
                <h2 className="md:text-4xl mb-4 text-black text-left text-xl font-semibold m-auto">Commencer à apprendre le développement web rapidement.</h2>
                <p>
                  Allez-y, essayez. Notre environnement d'apprentissage pratique vous permettra d'écrire du vrai code dès votre première leçon.
                </p>
                <button className="mt-4 button_login font-semibold">
                    <Link href="/cours" title="La première leçon">Commencer la première leçon</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center pres-video flex md:flex-row flex-col justify-center my-auto md:mt-16 md:mb-16 mt-8 mb-8">
          <div className="w-full ml-4 mr-4 md:ml-28 md:mr-28 md:mt-16 md:mb-16">
            <div className="md:ml-0 md:mr-0 mr-4 ml-4 items-center flex md:flex-row flex-col justify-between">
              <h2 className="leading-loose md:text-4xl mb-4 text-white text-left text-xl font-semibold">
                Apprendre le développement web<br />
                Développer des projets concrets<br />
                Obtenir des certifications
              </h2>
              <div className="md:ml-20 md:mt-0 mt-6 max-w-md">
                <span className="text-white">Il faut pratiquer</span>
                <p className="text-lg mb-4 mt-4"><strong>Apprenez le développement web</strong> à partir de zéro et pratiquez dans un environnement intuitif.</p>
                <p className="text-lg mb-4">Vous lirez de courtes leçons et résoudrez des défis et des projets, une étape à la fois. Essayez le premier cours et les challenges de celui-ci <strong>gratuitement</strong>. Vous pouvez passer à un compte Pro avec un paiement unique qui vous donne accès au curriculum en entier.</p>
                <p className="text-lg mb-4">Nous avons une <strong>approche unique</strong> car nous aimons expliquer les concepts étape par étape afin que vous puissiez comprendre pleinement comment cela fonctionne.</p>
                <p className="text-lg">Les leçons et les défis vous guideront pas à pas à travers ces concepts.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center pres-video flex md:flex-row flex-col justify-center bg-white md:h-screen my-auto md:mt-0 md:mb-0 mt-16 mb-16">
          <div className="w-full md:ml-28 md:mr-28 md:mt-10 md:mb-10 mb-16 mt-16">
            <div>
              <h2 className="md:text-4xl mb-4 md:ml-0 ml-4 text-white text-left text-xl font-semibold">
                Le concept
              </h2>
              <div className="md:mt-0 mt-6 md:ml-0 ml-4 max-w-5xl">
                <p>Fort de notre expérience de formateur/mentor chez différents clients tels que <Link href="https://openclassrooms.com/fr" target="_blank" title="Openclassrooms" nofollow="true">OpenClassrooms</Link>, <Link href="https://digital-college.fr/" target="_blank" title="Digital Collège" nofollow="true">Digital Collège</Link> ou même <Link href="https://webtech.institute" target="_blank" title="Webtech" nofollow="true">Webtech</Link>.</p>
                <p>En présentiel dans votre entreprise ou en distanciel, vous choisissez comment vous former.</p>
              </div>
              <div className="programme gap-x-6 flex md:flex-row flex-col justify-between mt-6">
                <div className="card max-w-md md:w-1/2 pt-6 p-6 md:mb-0 mb-6 min-h-50">
                  <h3 className="text-white text-xl font-semibold text-center mb-4">En E-learning</h3>
                  <strong className="text-center">Des formations à suivre en ligne (800 euros)</strong>
                  <ul className="text-white mt-4 list-disc pl-4">
                      <li>Pédagogie par projet</li>
                      <li>Lire des leçons concises</li>
                      <li>Compléter l'exercice</li>
                      <li>Lancement de tests pour corriger l'exercice</li>
                      <li>Des projets validés par un mentor</li>
                  </ul>
                  <button className="mt-6 button_login font-semibold">
                    <Link href="/cours" title="La première leçon">Commencer une formation</Link>
                  </button>
                </div>
                <div className="card max-w-md md:w-1/2 pt-6 p-6 min-h-50">
                  <h3 className="text-white text-xl font-semibold text-center mb-4">En présentiel</h3>
                  <strong className="text-center">Des formations sur-mesure (à partir de 900 euros)</strong>
                  <ul className="text-white mt-4 list-disc pl-4">
                      <li>Dans vos locaux ou en visio</li>
                      <li>Programme sur mesure</li>
                      <li>Aux dates de votre choix</li>
                      <li>De 2 à 5 jours</li>
                      <li>Accès aux formations e-learning</li>
                  </ul>
                  <button className="mt-6 button_login font-semibold">
                    <Link href="https://lkdigital.ninja/formation" title="La première leçon">En savoir plus</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="programme mx-auto items-center pres-video flex md:flex-row flex-col justify-center my-auto md:mt-16 md:mb-16 mt-16 mb-16">
          <div className="ml-4 mr-4 md:ml-28 md:mr-28 md:mt-16 md:mb-16">
            <div>
              <h2 className="md:text-4xl mix-blend-difference mb-4 text-white text-left text-xl font-semibold">
                Le programme
              </h2>
              <div className="shadow-md">
                <div className="tab w-full overflow-hidden">
                   <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />

                   <label className="block pt-5 pb-5 cursor-pointer text-white" htmlFor="tab-multi-one">
                    <h3 className="absolute">Responsive Web Design</h3>
                   </label>
                   <div className="tab-content overflow-scroll border-l-2 w-full leading-normal pl-5">
                      <strong className="md:text-xs mb-4 mt-6 text-white text-sm font-thin">HTML pour le contenu et CSS pour la mise en page</strong>
                      {RWD}
                   </div>
                </div>
                <div className="tab w-full overflow-hidden">
                   <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                   <label className="block pt-5 pb-5 cursor-pointer text-white" htmlFor="tab-multi-two">Javascript</label>
                   <div className="tab-content overflow-scroll border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                      <p className="p-5">Ca arrive bientôt !</p>
                    </div> 
                </div>
                <div className="tab w-full overflow-hidden">
                   <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
                   <label className="block pt-5 pb-5 cursor-pointer text-white" htmlFor="tab-multi-three">Développement Front-End</label>
                   <div className="tab-content overflow-scroll border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                      <p className="p-5">Ca arrive bientôt !</p>
                    </div> 
                </div>
                <div className="tab w-full overflow-hidden">
                   <input className="absolute opacity-0" id="tab-multi-four" type="checkbox" name="tabs" />
                   <label className="block pt-5 pb-5 cursor-pointer text-white" htmlFor="tab-multi-four">Développement Back-End</label>
                   <div className="tab-content overflow-scroll border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                      <p className="p-5">Ca arrive bientôt !</p>
                    </div> 
                </div>
             </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;

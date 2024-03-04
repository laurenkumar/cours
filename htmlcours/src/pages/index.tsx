import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import programData from '../../public/data/programData.json';
import Accordeon from '../components/Accordeon';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const [openSection, setOpenSection] = useState('responsiveDesign');
  const [transitionState, setTransitionState] = useState({
    responsiveDesign: true,
    javascript: false,
    frontEnd: false,
    backEnd: false
  });

  const toggleSection = (section) => {
    const isOpen = openSection === section;
    setOpenSection(isOpen ? null : section);
    if (!isOpen) {
      setTransitionState(prev => ({ ...prev, [section]: true }));
    } else {
      setTransitionState(prev => ({ ...prev, [section]: false }));
    }
  };

  function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_SIMPLE_FORM_ID);//process.env.NEXT_PUBLIC_SIMPLE_FORM_ID
    if (state.succeeded) {
      return (
        <p>Votre message a bien été envoyé, nous vous répondrons rapidement !</p>
      );
    }
    return (
      <form
        onSubmit={handleSubmit}
        className="contactform card w-full pt-10 p-6 mb-6 min-h-50"
        initial={{ opacity: 0, y: 50 }}
        whileinview={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        exit={{ opacity: 0, y: 50 }}
        key="sectionform"
      >
        <p className="mb-6">
          <label htmlFor="name">Bonjour LK Formation, je m&lsquo;appelle </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Dorian Laurenceau"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          .
        </p>
        <p>
          <label htmlFor="objet">Je vous contacte car je voudrais</label>
          <select name="objet" id="objet" required>
            <option value="formations" defaultValue>
              des informations sur les formations.
            </option>
            <option value="rendez-vous"> avoir un entretien.</option>
            <option value="débouchés">connaître les débouchés.</option>
            <option value="informations">
              juste plus d'informations.
            </option>
            <option value="intra">une formation intra.</option>
          </select>
          <ValidationError prefix="Objet" field="objet" errors={state.errors} />
        </p>
        <p className="mt-10 mb-6">
          <label htmlFor="email">Vous pouvez me joindre sur cet email </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="hello@lkdigital.ninja"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          .
        </p>
        <p className="mb-6 text-white">
          J&lsquo;attends avec impatience votre retour.
        </p>
        <p className="mb-6">
          Bonne journée,
        </p>
        <label htmlFor="rgpd" className="checkbox mb-10">
          <input
            id="rgpd"
            type="checkbox"
            name="rgpd"
            required
            data-error="accepter les conditions d'utilisation"
          />
          <p className="rgpd">
            En cochant cette case j&lsquo;accepte que idevu utilise mes
            données pour me recontacter.
          </p>
        </label>
        <ValidationError prefix="Rgpd" field="rgpd" errors={state.errors} />
        <div className="mb-12 text-black">
          <button
            type="submit"
            disabled={state.submitting}
            className="contactsubmit"
          >
            Envoyer
            <i className="arrow"></i>
          </button>
        </div>
      </form>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title="Apprendre à coder facilement depuis chez vous - idevu"
          description="Acquérir les compétences techniques nécessaires pour devenir développeur web."
        />
      }
    >
      <div className="home">
        <section className="hero md:h-screen my-auto mx-[18.48px] md:mt-0 mt-16 items-center flex md:flex-row flex-col justify-center">
          <div className="wrapper hero__wrapper">
            <div className="hero__content">
              <h1 className="md:font-normal md:text-4xl mb-4 text-left font-semibold text-3xl m-auto">Apprendre à coder facilement depuis chez vous !</h1>
              <h2 className="text-left text-xl"><strong>La création de site web, étape par étape.</strong></h2>
            </div>

            <div className="text-left max-w-xl text-l mt-10">
              <p className="text-lg">Vous voulez en apprendre plus sur le métier de développeur web ou en devenir un ?</p>
              <p className="text-lg">Les formations idevu sont faites pour vous !</p>
              <p className="text-lg">
                Apprenez dans un environnement interactif.
                Lisez de courtes leçons, codez en même temps et relevez des défis directement dans votre navigateur.
              </p>
              <button className="mt-4 button_login font-semibold">
                <Link href="/responsive-design/exh1" title="Formation en ligne">Formation en ligne</Link>
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
        <section className="items-center pres-video flex lg:flex-row flex-col justify-center bg-white md:h-screen my-auto md:mt-0 md:mb-0 mt-16 mb-16">
          <div className="mx-[18.48px] md:mt-10 md:mb-10 mb-16 mt-16">
            <div className="items-center flex lg:flex-row flex-col justify-center">
              <video className="video-responsive w-full md:w-4/6" id="video" width="900" height="600" muted loop playsInline preload="none" autoPlay>
                <source src="assets/videos/preview.webm" type="video/webm" />
                <source src="assets/videos/preview.mp4" type="video/mp4" />
              </video>
              <div className="lg:ml-20 lg:mt-0 mt-6 lg:max-w-md">
                <span>Débutants bienvenus</span>
                <h2 className="md:text-4xl mt-4 mb-4 text-black text-left text-xl font-semibold m-auto">Commencer à apprendre le développement web rapidement.</h2>
                <p>
                  Allez-y, essayez. Notre environnement d'apprentissage pratique vous permettra d'écrire du vrai code dès votre première leçon.
                </p>
                <button className="mt-4 button_login font-semibold">
                    <Link href="/responsive-design/exh1" title="La première leçon">Commencer la première leçon</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center pres-video flex md:flex-row flex-col justify-center my-auto md:mt-16 md:mb-16 mt-8 mb-8">
          <div className="w-full mx-[18.48px] md:mt-16 md:mb-16">
            <div className="md:ml-0 md:mr-0 mr-4 ml-4 items-center flex lg:flex-row flex-col justify-between">
              <h2 className="w-full leading-loose lg:text-4xl mb-4 text-white text-left text-xl font-semibold">
                Apprendre le développement web<br />
                Développer des projets concrets<br />
                Obtenir des certifications
              </h2>
              <div className="lg:ml-20 lg:mt-0 mt-6 lg:max-w-md">
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
          <div className="w-full mx-[18.48px] md:mt-10 md:mb-10 mb-16 mt-16">
            <div>
              <h2 className="md:text-4xl mb-4 md:ml-0 ml-4 text-white text-left text-xl font-semibold">
                Le concept
              </h2>
              <div className="md:mt-0 mt-6 md:ml-0 ml-4 max-w-sm md:w-full w-4/5">
                <p>Fort de notre expérience de formateur/mentor chez différents clients tels que <Link href="https://openclassrooms.com/fr" target="_blank" title="Openclassrooms" nofollow="true">OpenClassrooms</Link>, <Link href="https://digital-college.fr/" target="_blank" title="Digital Collège" nofollow="true">Digital Collège</Link> ou même <Link href="https://webtech.institute" target="_blank" title="Webtech" nofollow="true">Webtech</Link>.</p>
                <p>En présentiel dans votre entreprise ou en distanciel, vous choisissez comment vous former.</p>
              </div>
              <div className="programme md:mr-0 md:ml-0 mr-4 ml-4 gap-x-6 flex md:flex-row flex-col justify-between mt-6">
                <div className="card max-w-md md:w-1/2 pt-6 p-6 md:mb-0 mb-6 min-h-50">
                  <h3 className="text-white text-xl font-semibold text-center mb-4">En E-learning</h3>
                  <strong className="text-center">Des formations à suivre en ligne (à partir de 20 euros par mois)</strong>
                  <ul className="text-white mt-4 list-disc pl-4">
                      <li>Pédagogie par projet</li>
                      <li>Lire des leçons concises</li>
                      <li>Compléter l'exercice</li>
                      <li>Lancement de tests pour corriger l'exercice</li>
                      <li>Des projets validés par un mentor</li>
                  </ul>
                  <button className="mt-6 button_login font-semibold">
                    <Link href="/responsive-design/exh1" title="La première leçon">Commencer une formation</Link>
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
        <section className="programme items-center pres-video flex md:flex-row flex-col justify-center my-auto md:mt-16 md:mb-16 mt-16 mb-16">
          <div className="px-[18.48px] w-full md:mt-16 md:mb-16">
            <div>
              <h2 className="md:text-4xl mix-blend-difference mb-4 text-white text-left text-xl font-semibold">
                Le programme
              </h2>
              <div className="shadow-md">
                <section aria-labelledby="responsive-design" className="border-b-[2px] border-b-[#F36B59]">
                  <button 
                    id="responsive-design"
                    aria-expanded={openSection === 'responsiveDesign'} 
                    aria-controls="responsiveDesignDetails"
                    title="Voir les projets"
                    className="mt-5 h-[48px] cursor-pointer w-full text-left"
                    onClick={() => toggleSection('responsiveDesign')}
                  >
                    <h2>Responsive Design</h2>
                  </button>
                  <div 
                    id="responsiveDesignDetails"
                    aria-hidden={openSection !== 'responsiveDesign'}
                    className={`mb-4 max-h-dvh details-transition ${transitionState['responsiveDesign'] ? 'details-visible' : 'details-hidden'}`}
                  >
                    <strong className="md:text-xs mb-4 mt-6 text-white text-sm font-thin">HTML pour le contenu et CSS pour la mise en page</strong>
                    <p className="mt-6 md:w-1/2">
                      Dans cette certification Responsive Web Design, vous apprendrez les langages que les développeurs utilisent pour créer des pages web : HTML (Hypertext Markup Language) pour le contenu et CSS (Cascading Style Sheets) pour la conception.
                    </p>
                    <p className="mt-2 md:w-1/2">
                      Vous commencerez par créer un site de voyages pour apprendre les bases du HTML et du CSS. 
                    </p>
                    <p className="mt-2 md:w-1/2">
                      Enfin, vous apprendrez à créer des pages web qui s'adaptent à différentes tailles d'écran en construisant une galerie de photos avec Flexbox et une mise en page d'article de magazine avec CSS Grid.
                    </p>
                    <Accordeon sidebarData={programData} />
                  </div>
                </section>
                <section aria-labelledby="javascript" className="mt-5 border-b-[2px] border-b-[#F36B59]">
                  <button 
                    id="javascript"
                    aria-expanded={openSection === 'javascript'} 
                    aria-controls="javascriptDetails"
                    title="Voir les projets"
                    className="text-white h-[48px] cursor-pointer w-full text-left"
                    onClick={() => toggleSection('javascript')}
                  >
                    <h2>Javascript</h2>
                  </button>
                  <div 
                    id="javascriptDetails"
                    aria-hidden={openSection !== 'javascript'}
                    className={`text-white mb-4 max-h-dvh details-transition ${transitionState['javascript'] ? 'details-visible' : 'details-hidden'}`}
                  >
                    <p className="mt-6 md:w-1/2">Ca arrive bientôt !</p>
                  </div>
                </section>
                <section aria-labelledby="front-end" className="mt-5 border-b-[2px] border-b-[#F36B59]">
                  <button 
                    id="front-end"
                    aria-expanded={openSection === 'frontEnd'} 
                    aria-controls="frontEndDetails"
                    title="Voir les projets"
                    className="text-white h-[48px] w-full text-left cursor-pointer"
                    onClick={() => toggleSection('frontEnd')}
                  >
                    <h2>Front End</h2>
                  </button>
                  <div 
                    id="frontEndDetails"
                    aria-hidden={openSection !== 'frontEnd'}
                    className={`text-white mb-4 max-h-dvh details-transition ${transitionState['frontEnd'] ? 'details-visible' : 'details-hidden'}`}
                  >
                    <p className="mt-6 md:w-1/2">Ca arrive bientôt !</p>
                  </div>
                </section>
                <section aria-labelledby="back-end" className="mt-5 border-b-[2px] border-b-[#F36B59]">
                  <button 
                    id="back-end"
                    aria-expanded={openSection === 'backEnd'} 
                    aria-controls="backEndDetails"
                    title="Voir les projets"
                    className="h-[48px] text-white w-full text-left cursor-pointer"
                    onClick={() => toggleSection('backEnd')}
                  >
                    <h2>Back End</h2>
                  </button>
                  <div 
                    id="backEndDetails"
                    aria-hidden={openSection !== 'backEnd'}
                    className={`text-white mb-4 max-h-dvh details-transition ${transitionState['backEnd'] ? 'details-visible' : 'details-hidden'}`}
                  >
                    <p className="mt-6 md:w-1/2">Ca arrive bientôt !</p>
                  </div>
                </section>
             </div>
            </div>
          </div>
        </section>
        <section
          className="items-center pres-video flex flex-col justify-center bg-white my-auto md:mt-16 md:mb-16 mt-16 mb-16"
          id="contact"
        >
          <div className="mx-[18.48px] md:mt-16 md:mb-16 mt-16 mb-16">
            <h2 className="md:text-4xl mb-4 text-black text-left text-xl font-semibold">Des questions ? Contactez nous !</h2>
            <ContactForm />
            <h3 className="mb-6 mt-4 text-black font-semibold">
              Si vous préférez, vous pouvez aussi nous contacter via mail ou nous
              envoyer un sms directement !
            </h3>
            <div className="flex flex-col w-full justify-between 2xl:flex-row">
              <div className="flex flex-col justify-center">
                <p className="nomargin">1 impasse Saint Laurent</p>
                <p className="nomargin">38200 Vienne</p>
              </div>
              <div className="flex flex-col justify-center">
                <Link
                  href="mailto:lauren_d@outlook.fr"
                  cursor-class="arrow"
                  title="Notre mail"
                  className="text-dark"
                >
                    lauren_d@outlook.fr
                </Link>
                <Link href="sms:0033612801258" cursor-class="arrow" title="Notre numéro de portable">
                    06 12 80 12 58
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-[18.48px]">
            <div className="container">
              <div>
                <Link
                  href="/"
                  cursor-class="arrow"
                  aria-current="page"
                  title="Aller à l'acceil"
                >
                  idevu.  
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
                  <Link href="https://blog.lkdigital.ninja" cursor-class="arrow" title="Aller sur notre blog">
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
                    rel="noopener noreferrer"
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
      </div>
    </Main>
  );
};

export default Index;

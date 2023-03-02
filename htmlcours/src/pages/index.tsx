import Link from 'next/link';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="Apprendre HTML en codant un site de voyage"
          description="LK Digital - Apprendre à coder - Tutoriel HTML"
        />
      }
    >
      <Link className="text-white" href="/cours" title="cours">Cours</Link>
      <section className="hero">
        <div className="wrapper hero__wrapper">
          <div className="hero__content">
            <h1>Apprendre à coder facilement !</h1>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;

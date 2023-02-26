import CodeOnline from '../components/Codeeditor';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import html_part_1 from 'src/cours/html_part_1.json';

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
      <CodeOnline subject={html_part_1.sujet}/>
    </Main>
  );
};

export default Index;
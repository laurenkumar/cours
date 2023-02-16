import { KodemoPlayer, Pagination } from '@kodemo/player';
import { KodemoMenu } from '@kodemo/util';
import { useEffect } from 'react';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import html_part_1 from 'src/cours/html_part_1.json';

const Index = () => {

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

  useEffect(() => {
    console.log(html_part_1.documentNav)
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Apprendre HTML en codant un site de voyage"
          description="LK Digital - Apprendre à coder - Tutoriel HTML"
        />
      }
    >
      <KodemoPlayer
        menu={<Menu />}
        keyboardPagination={true} 
        json={html_part_1}>
      </KodemoPlayer>
    </Main>
  );
};

export default Index;

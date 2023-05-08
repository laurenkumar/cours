import CodeOnline from '../components/Codeeditor';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const Index = () => {
  const router = useRouter();
  const {ex, subject} = router.query;
  const [exo, setExo] = useState("");
  const [subjectParam, setSubjectParam] = useState("");

  useEffect(() => {
    if(!subject) {
      return;
    }
    setExo(ex);
    setSubjectParam(subject);
  }, [subject]);

  return (
    <Main
      meta={
        <Meta
          title="Apprendre HTML en codant des projets réalistes"
          description="LK Digital - Apprendre à coder - Cours Web dev"
        />
      }
    >
      <CodeOnline subject={subjectParam} ex={exo}/>
    </Main>
  );
};

export default Index;
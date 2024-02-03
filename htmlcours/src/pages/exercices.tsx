import CodeOnline from '../components/Codeeditor';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const Exercices = () => {
  const router = useRouter();
  const {ex, subject} = router.query;
  const [exo, setExo] = useState("");
  const [subjectParam, setSubjectParam] = useState("");

  useEffect(() => {
    if(!subject) {
      return;
    }
    console.log(subject);
    setExo(ex);
    setSubjectParam(subject);
  }, [subject]);

  return (
    <CodeOnline subject={subjectParam} ex={exo}/>
  );
};

export default Exercices;
import CodeOnline from '../components/Codeeditor';

/* tslint:disable */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';

const Index = React.memo(() => {
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
    <CodeOnline subject={subjectParam} ex={exo}/>
  );
});

export default Index;
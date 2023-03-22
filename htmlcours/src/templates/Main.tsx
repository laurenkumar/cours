import Link from 'next/link';
import type { ReactNode } from 'react';
import { KodemoMenu } from '@kodemo/util';

import { AppConfig } from '@/utils/AppConfig';

import Navbar from '../components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}
    <Navbar />
    <div>{props.children}</div>

  </div>
);

export { Main };

import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}


      <div>{props.children}</div>

      <div>
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </div>
  </div>
);

export { Main };

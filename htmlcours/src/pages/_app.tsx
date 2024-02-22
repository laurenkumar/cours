import '../styles/global.css';
import { useState } from 'react';
import { supabase } from '@/utils/initSupabase';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import type { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}

export default MyApp;

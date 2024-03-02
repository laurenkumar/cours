import { Auth } from '@supabase/auth-ui-react'
import Link from 'next/link';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import * as fr from '../utils/fr.json';
import { useState, useEffect } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const views: { id: ViewType; title: string }[] = [
    { id: 'sign_in', title: 'Sign In' },
    { id: 'sign_up', title: 'Sign Up' },
    { id: 'magic_link', title: 'Magic Link' },
    { id: 'forgotten_password', title: 'Forgotten Password' },
    { id: 'update_password', title: 'Update Password' },
]

const Connexion = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [view, setView] = useState(views[0])

  const [hasPaid, setHasPaid] = useState(false); 

  useEffect(() =>
  {      
    const checkSubscriptionStatus = async () => {
      if (session) {
        const { data: subscription, error } = await supabase
          .from('subscriptions')
          .select('status')
          .eq('user_id', session.user.id)
          .single();
        setHasPaid(subscription && subscription.status === 'active');
      }
    };

    checkSubscriptionStatus();  
    document.body.classList.add("profile");
  }, [session]);

  return (
    <Main
      meta={
        <Meta
          title="Votre profil - Formation LK Digital"
          description="Acquérir les compétences techniques nécessaires pour devenir développeur web."
        />
      }
      className="profile"
    >
    <div className="container opacity-80 md:w-100 w-4/5 mx-auto mt-16 mb-16 flex justify-between md:flex-row flex-col align-center justify-center">  
      {!session ? (
        <Auth
          supabaseClient={supabase}
          localization={{
            variables: fr
          }}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#ff8906',
                  brandAccent: '#f25f4c',
                },
              },
            },
          }}
          theme="dark"
          view={view.id}
          providers={['google', 'github']} 
        />
      ) : (
        <>
          <Account session={session} />
          <div className="todolist w-2/5 p-4">
            <header>
              <h2 className="text-white">Mon abonnement</h2>
            </header>
            {!hasPaid && (
              <div className="subscription-prompt hero mt-10">
                    <p>Pour accéder aux autres cours vous devriez sélectionner un plan.</p>
                    <div className="mt-12">
                      <Link
                        href="/tarifs"
                        className="button flex align-center primary text-center block button_login font-semibold"
                        title="S'abonner - LK Digital"
                      >
                        S'abonner
                      </Link>
                    </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
    </Main>
  )
}

export default Connexion
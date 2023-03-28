import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import * as fr from '../utils/fr.json'
import { useState } from 'react'

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

  return (
    <Main
      meta={
        <Meta
          title="Votre profil - Formation LK Digital"
          description="Acquérir les compétences techniques nécessaires pour devenir développeur web."
        />
      }
    >
    <div className="container md:w-2/6 w-4/5 mx-auto mt-16">
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
        <Account session={session} />
      )}
    </div>
    </Main>
  )
}

export default Connexion
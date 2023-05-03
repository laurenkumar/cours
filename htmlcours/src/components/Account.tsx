import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { Database } from '../utils/database.types'
type Profiles = Database['public']['Tables']['profiles']['Row']

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profiles['username']>(null)
  const [course, setCourse] = useState<Profiles['course']>(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, course_id`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setCourse(data.course_id)
      }
    } catch (error) {
      console.log('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    course_id,
  }: {
    username: Profiles['username']
    course_id: Profiles['course_id']
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const updates = {
        id: user.id,
        username,
        course_id,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      console.log('Profile updated!')
    } catch (error) {
      console.log('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget p-4 w-2/5 hero mb-16">
      <h1 className="md:font-normal md:text-4xl mb-4 text-left font-semibold text-3xl m-auto">Votre avancée</h1>
      <div className="mt-8 flex md:flex-row flex-col justify-between items-center">
        <label htmlFor="email" className="text-lg text-white mr-4">Email</label>
        <input id="email" type="text" className="p-2 w-4/6" value={session.user.email} disabled />
      </div>
      <div className="mt-8 flex md:flex-row flex-col justify-between items-center">
        <label className="text-lg text-white mr-4" htmlFor="username">Pseudo</label>
        <input
          id="username"
          className="p-2 w-4/6"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mt-8 flex md:flex-row flex-col justify-between items-center">
        <label className="text-lg text-white mr-4" htmlFor="course_id">Votre avancée</label>
        <input
          id="course_id"
          className="p-2 w-4/6"
          type="text"
          value={course || "Vous n'avez pas encore commencé le cursus"}
          onChange={(e) => setCourse(e.target.value)}
          disabled
        />
      </div>
      <div className="mt-8 flex md:flex-row flex-col justify-between items-center">
        <label className="text-lg text-white mr-4" htmlFor="course_id">Votre niveau: 100</label>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="mt-8">
          <button
            className="mt-4 button primary block button_login font-semibold"
            onClick={() => updateProfile({ username })}
            disabled={loading}
          >
            {loading ? 'En cours ...' : 'Mise à jour'}
          </button>
        </div>

        <div className="mt-8">
          <button className="mt-4 button primary block button_login_deco font-semibold" onClick={() => supabase.auth.signOut()}>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  )
}
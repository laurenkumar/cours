import { Auth } from '@supabase/auth-ui-react'
import Link from 'next/link';
import Image from 'next/image';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import * as fr from '../utils/fr.json'
import { useState, useEffect } from 'react'

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// custom hooks
import useLocalStorage from '../Hooks/LocalStorage'

// custom components
import CustomForm from '../components/CustomForm'
import EditForm from '../components/EditForm'
import TaskList from '../components/TaskList'

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

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  useEffect(() =>
  {        
      document.body.classList.add("profile");
  });

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
              <h2 className="text-white">Mes taches</h2>
            </header>
            {
              isEditing && (
                <EditForm
                  editedTask={editedTask}
                  updateTask={updateTask}
                  closeEditMode={closeEditMode}
                />
              )
            }
            <CustomForm addTask={addTask}/>
            {tasks && (
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
              />
            )}
          </div>
        </>
      )}
    </div>
    </Main>
  )
}

export default Connexion
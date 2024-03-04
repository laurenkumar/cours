import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const Accordeon = ({ sidebarData }) => {
  const [ouvert, setOuvert] = useState(null);
  const session = useSession();

  const FREE_EXERCISES = ['exh1', 'exh2', 'exh3', 'exc1', 'exc2', 'exc3'];


  const toggleOuvert = (numeroProjet) => {
    if (ouvert === numeroProjet) {
      setOuvert(null); // Fermer si déjà ouvert
    } else {
      setOuvert(numeroProjet); // Ouvrir le projet sélectionné
    }
  };

  const isAccessible = (exo) => {
    return FREE_EXERCISES.includes(exo) || !!session;
  };

  return (
    <div className="mt-8">
      {Object.entries(sidebarData).map(([sujet, projets]) => (
        <div key={sujet}>
          {Object.entries(projets).map(([numeroProjet, exercices]) => (
            <div key={numeroProjet}>
              {exercices.length > 0 && (
                <div className="flex items-center">
                  <button onClick={() => toggleOuvert(numeroProjet)} className="flex items-center text-white w-full justify-between">
                    <span className="p-2 mr-4">{sujet}</span>
                    <h3 className="text-lg hover:text-[#f25f4c]">{exercices[0].title}</h3>🠟
                  </button>
                </div>
              )}
              {ouvert === numeroProjet && (
                <ul className="ml-4 mt-4 mb-4">  
                  {exercices.map((exercice, index) => (
                    <li key={index} className={isAccessible(exercice.exo) ? "text-white" : "text-gray-500"}>
                      {isAccessible(exercice.exo) ? (
                        <Link href={`/responsive-design/${exercice.exo}`} title={exercice.title} className="hover:text-[#f25f4c] leading-8">
                          {index + 1} - {exercice.title}
                        </Link>
                      ) : (
                        <div title="Il faut se connecter pour y accéder">
                          {index + 1} - {exercice.title}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Accordeon;
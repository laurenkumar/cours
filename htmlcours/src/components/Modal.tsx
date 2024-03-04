import Link from 'next/link';

export default function Modal({ test, showModal, seeModal, next }) {
  console.log(test[0])
  return (
    <>
      {seeModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 m-auto max-w-2xl h-auto max-h-96">
              <div className="border-2 rounded shadow-lg relative m-auto flex flex-col w-11/12 h-80 overflow-y-scroll border-white bg-black outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  {test.map((result, index) => (
                    <div key={index} className="my-4 text-slate-500 text-base leading-relaxed">
                      <p>{result}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {next !== 'fin' && (
                    <Link
                      className="text-white text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                      href={next}
                      title="Exercice suivant"
                    >
                      Exo suivant
                    </Link>
                  )}
                  {next === 'fin' && (
                    <button
                      className="text-white text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                      title="La conclusion"
                      onClick={() => setShowConclusion(true)}
                    >
                      La conclusion
                    </button>
                  )}
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => showModal(false)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

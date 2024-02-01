import React, { useState } from "react";

export default function Modal({test, seeModal, showModal, ...rest}) {
  return (
    <>
      {seeModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {test.map((item, i) => (
                  <p key={i} className="my-2 text-lg text-white leading-relaxed">
                    {item}
                  </p>
                  ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
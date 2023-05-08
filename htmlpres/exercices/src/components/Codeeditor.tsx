import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import { useLocalStorage } from "../Hooks/LocalStorage";
import Editor, { Monaco } from "@monaco-editor/react";
import { BrowserView, MobileView } from 'react-device-detect';
import Modal from '../components/Modal.tsx';

function CodeOnline({subject, ex}) {
  const [showModal, setShowModal] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  const htmlDefault = ``;
  const cssDefault = ``;

  const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStrorage] = useLocalStorage("js", "");

  const [modalMessageTest, updateModalMessageTest] = useState("");
  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);
  let isMouseDown = false;

  const srcDoc = `
      ${css && `<style>${css}</style>`}
      ${html}
      ${js && `<script src=""></script>`}
      `;

  useEffect(() => {
    setTimeout(() => {}, 500);
    updateHtmlStrorage(html);
    updateCssStrorage(css);
    updateJsStrorage(js);
  }, [html, css, js]);

  return (
    <div>
        { subject === "html" ?
          <>
            <BrowserView>
              <ul className="tabs" role="tablist">
                <li>
                    <input type="radio" name="tabs" id="tab1" defaultChecked />
                    <label htmlFor="tab1" 
                           role="tab" 
                           aria-selected="true" 
                           aria-controls="panel1" 
                           tabIndex="0">
                      index.html
                    </label>
                    <div 
                      id="tab-content1" 
                      className="tab-content" 
                      role="tabpanel" 
                      aria-labelledby="index.html" 
                      aria-hidden="false"
                    >
                      <Editor
                        height="90vh"
                        defaultLanguage="html"
                        onChange={(evn) => updateHtml(evn)}
                        defaultValue={html}
                        value={html}
                        selectOnLineNumbers="true"
                        cursorStyle="line"
                        theme="vs-dark"
                      />
                    </div>
                </li>
              </ul>
              <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
              >
                <div
                  id="wrapper"
                  className={isMaximize ? 'bg-white md:w-full h-full w-[98%] absolute !translate-x-0 !left-0 !right-0 md:!top-0 md:!bottom-0 bottom-16 m-auto z-10' : 'bg-white md:w-[40%] w-[98%] h-[320px] absolute right-10 md:top-0 md:bottom-0 bottom-16 m-auto z-10'}
                >
                  <div htmlFor="tab2" 
                         role="tab" 
                         aria-selected="true" 
                         aria-controls="panel2" 
                         tabIndex="0"
                         id="header"
                         className="handle cursor-move p-2 border-b border-gray-300 text-xl bg-[#ff8906] flex justify-between items-center"
                  >
                    Navigateur
                    <div id="actions" className="flex justify-between items-center gap-3 cursor-pointer">
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMaximize(!isMaximize)}>
                        <path d="M6 11H18V13H6V11Z" fill="#000000"/>
                      </svg>
                      <svg fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" viewBox="0 0 473 473" onClick={() => setIsMaximize(!isMaximize)}>
                        <g>
                          <g>
                            <path d="M459.5,0H330.4c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5h96.5L218.8,235.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4
                              s6.9-1.3,9.5-4L446,46.1v96.5c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V13.5C473,6,467,0,459.5,0z"/>
                            <path d="M459.5,231.2c-7.5,0-13.5,6-13.5,13.5v130.9c0,38.8-31.6,70.4-70.4,70.4H97.4C58.6,446,27,414.4,27,375.6V97.4
                              C27,58.6,58.6,27,97.4,27h129.9c7.5,0,13.5-6,13.5-13.5S234.8,0,227.3,0H97.4C43.7,0,0,43.7,0,97.4v278.2
                              C0,429.3,43.7,473,97.4,473h278.2c53.7,0,97.4-43.7,97.4-97.4V244.7C473,237.2,467,231.2,459.5,231.2z"/>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div 
                    id="tab-content2" 
                    className="h-full text-center navigateur" 
                    role="tabpanel" 
                    aria-labelledby="Navigateur" 
                    aria-hidden="false"
                  >
                    <iframe
                      srcDoc={srcDoc}
                      className="output-pane w-full h-full"
                      id="exercice"
                      allowFullScreen
                    ></iframe> 
                  </div>
                </div>
              </Draggable>
            </BrowserView>
            <MobileView>
              <ul className="tabs" role="tablist">
                  <li>
                      <input type="radio" name="tabs" id="tab1" defaultChecked />
                      <label htmlFor="tab1" 
                             role="tab" 
                             aria-selected="true" 
                             aria-controls="panel1" 
                             tabIndex="0">
                        index.html
                      </label>
                      <div 
                        id="tab-content1" 
                        className="tab-content" 
                        role="tabpanel" 
                        aria-labelledby="index.html" 
                        aria-hidden="false"
                      >
                        <Editor
                          height="90vh"
                          defaultLanguage="html"
                          onChange={(evn) => updateHtml(evn)}
                          defaultValue={html}
                          value={html}
                          selectOnLineNumbers="true"
                          cursorStyle="line"
                          theme="vs-dark"
                        />
                      </div>
                  </li>
                  <li>
                    <input type="radio" name="tabs" id="tab2" />
                    <label htmlFor="tab2" 
                           role="tab" 
                           aria-selected="true" 
                           aria-controls="panel2" 
                           tabIndex="0">
                      Navigateur
                    </label>
                    <div 
                      id="tab-content2" 
                      className="h-full tab-content navigateur" 
                      role="tabpanel" 
                      aria-labelledby="Navigateur" 
                      aria-hidden="false"
                    >
                      <iframe
                        srcDoc={srcDoc}
                        className="output-pane h-full w-full"
                        id="exercice"
                        allowFullScreen
                      ></iframe> 
                    </div>
                  </li>
                </ul>
            </MobileView>
          </>
        :
          <>
            <BrowserView>
            <ul className="tabs" role="tablist">
            <li>
                <input type="radio" name="tabs" id="tab1" defaultChecked />
                <label htmlFor="tab1" 
                       role="tab" 
                       aria-selected="true" 
                       aria-controls="panel1" 
                       tabIndex="0">
                  index.html
                </label>
                <div 
                  id="tab-content1" 
                  className="tab-content" 
                  role="tabpanel" 
                  aria-labelledby="index.html" 
                  aria-hidden="false"
                >
                  <Editor
                    height="90vh"
                    defaultLanguage="html"
                    onChange={(evn) => updateHtml(evn)}
                    defaultValue={html}
                    value={html}
                    selectOnLineNumbers="true"
                    cursorStyle="line"
                    theme="vs-dark"
                  />
                </div>
            </li>
            <li>
                <input type="radio" name="tabs" id="tab2" />
                <label htmlFor="tab2"
                       role="tab" 
                       aria-selected="false" 
                       aria-controls="panel2" 
                       tabIndex="0">style.css</label>
                <div id="tab-content2" 
                     className="tab-content navigateur"
                     role="tabpanel" 
                     aria-labelledby="style.css" 
                     aria-hidden="true">
                  <Editor
                    height="90vh"
                    defaultLanguage="css"
                    onChange={(evn) =>
                      updateCss(evn)
                    }
                    defaultValue={css}
                    value={css}
                    selectOnLineNumbers="true"
                    cursorStyle="line"
                    theme="vs-dark"
                  />
                </div>
            </li>
            </ul>
            <Draggable
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null}
              grid={[25, 25]}
              scale={1}
            >
              <div
                id="wrapper"
                className={isMaximize ? 'bg-white md:w-full h-full w-[98%] absolute !translate-x-0 !left-0 !right-0 md:!top-0 md:!bottom-0 bottom-16 m-auto z-10' : 'bg-white md:w-[40%] w-[98%] h-[320px] absolute right-10 md:top-0 md:bottom-0 bottom-16 m-auto z-10'}
              >
                <div htmlFor="tab2" 
                       role="tab" 
                       aria-selected="true" 
                       aria-controls="panel2" 
                       tabIndex="0"
                       id="header"
                       className="handle cursor-move p-2 border-b border-gray-300 text-xl bg-[#ff8906] flex justify-between items-center"
                >
                  Navigateur
                  <div id="actions" className="flex justify-between items-center gap-3 cursor-pointer">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMaximize(!isMaximize)}>
                      <path d="M6 11H18V13H6V11Z" fill="#000000"/>
                    </svg>
                    <svg fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" viewBox="0 0 473 473" onClick={() => setIsMaximize(!isMaximize)}>
                      <g>
                        <g>
                          <path d="M459.5,0H330.4c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5h96.5L218.8,235.1c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4
                            s6.9-1.3,9.5-4L446,46.1v96.5c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V13.5C473,6,467,0,459.5,0z"/>
                          <path d="M459.5,231.2c-7.5,0-13.5,6-13.5,13.5v130.9c0,38.8-31.6,70.4-70.4,70.4H97.4C58.6,446,27,414.4,27,375.6V97.4
                            C27,58.6,58.6,27,97.4,27h129.9c7.5,0,13.5-6,13.5-13.5S234.8,0,227.3,0H97.4C43.7,0,0,43.7,0,97.4v278.2
                            C0,429.3,43.7,473,97.4,473h278.2c53.7,0,97.4-43.7,97.4-97.4V244.7C473,237.2,467,231.2,459.5,231.2z"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div 
                  id="tab-content2" 
                  className="h-full text-center navigateur" 
                  role="tabpanel" 
                  aria-labelledby="Navigateur" 
                  aria-hidden="false"
                >
                  <iframe
                    srcDoc={srcDoc}
                    className="output-pane h-full w-full"
                    id="exercice"
                    allowFullScreen
                  ></iframe> 
                </div>
              </div>
            </Draggable>
            </BrowserView>
            <MobileView>
              <ul className="tabs" role="tablist">
                  <li>
                      <input type="radio" name="tabs" id="tab1" defaultChecked />
                      <label htmlFor="tab1" 
                             role="tab" 
                             aria-selected="true" 
                             aria-controls="panel1" 
                             tabIndex="0">
                        index.html
                      </label>
                      <div 
                        id="tab-content1" 
                        className="tab-content" 
                        role="tabpanel" 
                        aria-labelledby="index.html" 
                        aria-hidden="false"
                      >
                        <Editor
                          height="90vh"
                          defaultLanguage="html"
                          onChange={(evn) => updateHtml(evn)}
                          defaultValue={html}
                          value={html}
                          selectOnLineNumbers="true"
                          cursorStyle="line"
                          theme="vs-dark"
                        />
                      </div>
                  </li>
                  <li>
                    <input type="radio" name="tabs" id="tab2" />
                    <label htmlFor="tab2" 
                           role="tab" 
                           aria-selected="true" 
                           aria-controls="panel2" 
                           tabIndex="0">
                      Navigateur
                    </label>
                    <div 
                      id="tab-content2" 
                      className="h-full tab-content navigateur" 
                      role="tabpanel" 
                      aria-labelledby="Navigateur" 
                      aria-hidden="false"
                    >
                      <iframe
                        srcDoc={srcDoc}
                        className="output-pane"
                        id="exercice"
                        allowFullScreen
                      ></iframe> 
                    </div>
                  </li>
                </ul>
            </MobileView>
          </>
        }
        <button className="button_test" id="submit"
          onClick={async (e) => {
            if (typeof window !== 'undefined') {
            const test = (await import('../utils/test.jsx').then((r) => {
                const result = r.runTests(ex).then(
                  x=> {
                    updateModalMessageTest(x);
                  }
                  ,err=>console.warn("got rejected:",err)
                );
              })
            )
            }
            setShowModal(true);
        }}
        >Envoyer</button>
        <Modal test={modalMessageTest} showModal={setShowModal} seeModal={showModal}/>
    </div>
  );
}

export default CodeOnline;
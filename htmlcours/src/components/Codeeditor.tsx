import React, { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../Hooks/LocalStorage";
import { useDebouncedState } from "../Hooks/DebouncedState";
import Editor, { Monaco } from "@monaco-editor/react";
import Modal from '../components/Modal.tsx';

function CodeOnline({subject, ex}) {
  const iframeRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  const htmlDefault = ``;
  const cssDefault = ``;

  const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStrorage] = useLocalStorage("js", "");

  const [modalMessageTest, updateModalMessageTest] = useState("");
  const [html, updateHtml] = useDebouncedState(htmlVal, 500); // 500ms delay
  const [css, updateCss] = useDebouncedState(cssVal, 500);
  const [js, updateJs] = useDebouncedState(jsVal, 500);

  useEffect(() => {
    if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage({
            html,
            css
            // js - handle JS with care due to security implications
        }, '*'); // Consider narrowing from '*' to my specific domain for security
    }
  }, [html, css, js]);

  return (
    <div className="exercice-interactif">
        { subject === "html" ?
          <>
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
                      src="iframe.html"
                      ref={iframeRef}
                      className="output-pane h-full w-full"
                      id="exercice"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      sandbox="allow-same-origin allow-scripts"
                    ></iframe> 
                  </div>
                </li>
            </ul>
          </>
        :
          <>
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
              <li>
                <input type="radio" name="tabs" id="tab3" />
                <label htmlFor="tab3" 
                       role="tab" 
                       aria-selected="true" 
                       aria-controls="panel2" 
                       tabIndex="0">
                  Navigateur
                </label>
                <div 
                  id="tab-content3" 
                  className="h-full tab-content navigateur" 
                  role="tabpanel" 
                  aria-labelledby="Navigateur" 
                  aria-hidden="false"
                >
                  <iframe
                    srcDoc={srcDoc}
                    className="output-pane"
                    id="exercice"
                    width="100%"
                    height="100%"
                   allowFullScreen

                  ></iframe> 
                </div>
              </li>
            </ul>
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
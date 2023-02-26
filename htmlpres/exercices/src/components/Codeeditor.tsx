import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../Hooks/LocalStorage";
import Editor, { Monaco } from "@monaco-editor/react";
import runTests from '../pages/test.jsx';
import Modal from '../components/Modal.tsx';

function CodeOnline({subject}) {
  const [showModal, setShowModal] = useState(false);
  const htmlDefault = ``;
  const cssDefault = `body {background-color:white;color:black;}`;

  const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStrorage] = useLocalStorage("js", "");

  const [modalMessageRes, updateModalMessageRes] = useState("");
  const [modalMessageTest, updateModalMessageTest] = useState("");
  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);

  const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<style>${css}</style>`}
      </head>
        <body>${html}
        ${js && `<script src=""></script>`}
        </body>
      </html>`;

  useEffect(() => {
    setTimeout(() => {}, 500);
    updateHtmlStrorage(html);
    updateCssStrorage(css);
    updateJsStrorage(js);
  }, [html, css, js]);

  return (
    <div>
        { subject === "html" ?
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
                className="tab-content navigateur" 
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
        :
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
                     aria-controls="panel3" 
                     tabIndex="0">
                Navigateur
              </label>
              <div 
                id="tab-content3" 
                className="tab-content" 
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
        }
        <button className="button_test" id="submit"
          onClick={async (e) => {
            const test = (await import('../pages/test.jsx').then((r) => {
                const result = r.runTests().then(
                  x=> {
                    updateModalMessageRes(x[0]);
                    updateModalMessageTest(x[1]);
                  }
                  ,err=>console.warn("got rejected:",err)
                );
              })
            )
            setShowModal(true);
        }}
        >Envoyer</button>
        <Modal reussite={modalMessageRes} test={modalMessageTest} showModal={setShowModal} seeModal={showModal}/>
    </div>
  );
}

export default CodeOnline;
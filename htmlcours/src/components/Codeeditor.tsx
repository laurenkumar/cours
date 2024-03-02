import React, { useState, useEffect, useRef } from "react";
import Editor, { loader } from "@monaco-editor/react";
import Modal from './Modal.tsx';

const assert = require('chai').assert;

const blackboardTheme = {
  base: 'vs-dark', // ou 'vs' pour la base claire
  inherit: true,
  rules: [
    {
      background: "0C1021",
      token: ""
    },
    {
      foreground: "aeaeae",
      token: "comment"
    },
    {
      foreground: "d8fa3c",
      token: "constant"
    },
    {
      foreground: "ff6400",
      token: "entity"
    },
    {
      foreground: "fbde2d",
      token: "keyword"
    },
    {
      foreground: "fbde2d",
      token: "storage"
    },
    {
      foreground: "61ce3c",
      token: "string"
    },
    {
      foreground: "61ce3c",
      token: "meta.verbatim"
    },
    {
      foreground: "8da6ce",
      token: "support"
    },
    {
      foreground: "ab2a1d",
      "fontStyle": "italic",
      token: "invalid.deprecated"
    },
    {
      foreground: "f8f8f8",
      "background": "9d1e15",
      token: "invalid.illegal"
    },
    {
      foreground: "ff6400",
      "fontStyle": "italic",
      token: "entity.other.inherited-class"
    },
    {
      foreground: "ff6400",
      token: "string constant.other.placeholder"
    },
    {
      foreground: "becde6",
      token: "meta.function-call.py"
    },
    {
      foreground: "7f90aa",
      token: "meta.tag"
    },
    {
      foreground: "7f90aa",
      token: "meta.tag entity"
    },
    {
      foreground: "ffffff",
      token: "entity.name.section"
    },
    {
      foreground: "d5e0f3",
      token: "keyword.type.variant"
    },
    {
      foreground: "f8f8f8",
      token: "source.ocaml keyword.operator.symbol"
    },
    {
      foreground: "8da6ce",
      token: "source.ocaml keyword.operator.symbol.infix"
    },
    {
      foreground: "8da6ce",
      token: "source.ocaml keyword.operator.symbol.prefix"
    },
    {
      "fontStyle": "underline",
      token: "source.ocaml keyword.operator.symbol.infix.floating-point"
    },
    {
      "fontStyle": "underline",
      token: "source.ocaml keyword.operator.symbol.prefix.floating-point"
    },
    {
      "fontStyle": "underline",
      token: "source.ocaml constant.numeric.floating-point"
    },
    {
      "background": "ffffff08",
      token: "text.tex.latex meta.function.environment"
    },
    {
      "background": "7a96fa08",
      token: "text.tex.latex meta.function.environment meta.function.environment"
    },
    {
      foreground: "fbde2d",
      token: "text.tex.latex support.function"
    },
    {
      foreground: "ffffff",
      token: "source.plist string.unquoted"
    },
    {
      foreground: "ffffff",
      token: "source.plist keyword.operator"
    }
  ],
  colors: {
    "editor.foreground": "#F8F8F8",
    "editor.background": "#0C1021",
    "editor.selectionBackground": "#253B76",
    "editor.lineHighlightBackground": "#FFFFFF0F",
    "editorCursor.foreground": "#FFFFFFA6",
    "editorWhitespace.foreground": "#FFFFFF40"
  }
};

const CodeOnline = ({subject, code, hints, ex}) => {
  const iframeRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [modalMessageTest, updateModalMessageTest] = useState("");
  const [html, setHtml] = useState(code.html || "");
  const [css, setCss] = useState(code.css || "");
  const [js, setJs] = useState(code.js);

  useEffect(() => {
    loader.init().then(monaco => {
      monaco.editor.defineTheme('blackboard', blackboardTheme);
      monaco.editor.setTheme('blackboard');
    });
  }, []);

  useEffect(() => {
    const sendMessage = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage({ html, css, js }, 'https://formation.lkdigital.ninja'); // Consider specifying the target origin for better security
      }
    };

    const iframe = iframeRef.current;
    const handleLoad = () => sendMessage();
    iframe.addEventListener('load', handleLoad);

    sendMessage();

    return () => iframe.removeEventListener('load', handleLoad);
  }, [html, css, js, ex]); // Ensure this runs on mount, and whenever html, css, js, or ex changes.

  function parseHints(hintsText) {
    // Adjusted regex to account for different newline characters and optional spaces
    const regex = /(.+?)(?:\r?\n\s*```js\r?\n([\s\S]+?)```)/g;
    const hintsAndAssertions = [];
    let match;

    while ((match = regex.exec(hintsText)) !== null) {
        const hint = match[1].trim();
        const assertionCode = match[2].trim();

        hintsAndAssertions.push({ hint, assertionCode });
    }

    return hintsAndAssertions;
  }

  async function runAssertions() {
    const hintsAndAssertions = parseHints(hints);
    let isAllGood = true;
    const messages = [];

    hintsAndAssertions.forEach(({ hint, assertionCode }) => {
      try {
        const assertionFunction = new Function('assert', 'html', 'css', 'js', `"use strict"; ${assertionCode}`);
        assertionFunction(assert, html, css, js); // Execute the function with necessary arguments
        messages.push(`✅ ${hint}`);
      } catch (error) {
        isAllGood = false;
        messages.push(`❌ ${hint}`);
      }
    });

    // Ajoutez un message global basé sur le résultat de tous les tests
    const globalMessage = isAllGood ? 
      '🎉 Bravo ! Tu peux passer à la suite.' : 
      '🤯 Certains tests n\'ont pas réussi. Voici les détails :';

    // Préparez les données finales à envoyer au modal
    const finalResults = [globalMessage, ...messages];

    console.log(finalResults);
    // Mise à jour de l'état pour afficher le modal avec les résultats
    updateModalMessageTest(finalResults);
    setShowModal(true);
  }

  const openPreviewWindow = () => {
    const previewWindow = window.open('', '_blank', 'width=500,height=700');

    const content = `
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `;

    previewWindow.document.open();
    previewWindow.document.write(content);
    previewWindow.document.close();
  };

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
                         tabIndex="0"
                         className="firstlabel"
                  >
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
                      onChange={(newValue) => {
                        setHtml(newValue);
                      }}
                      defaultValue={html}
                      value={html}
                      selectOnLineNumbers="true"
                      cursorStyle="line"
                      theme="blackboard"
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
                    Aperçu
                  </label>
                  <div 
                    id="tab-content2" 
                    className="h-full tab-content navigateur" 
                    role="tabpanel" 
                    aria-labelledby="Navigateur" 
                    aria-hidden="false"
                  >
                    <iframe
                      src="/iframe.html"
                      ref={iframeRef}
                      className="output-pane h-full w-full"
                      id="exercice"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      key={ex}
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
                         tabIndex="0"
                         className="firstlabel"
                  >
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
                      onChange={setHtml}
                      defaultValue={html} // Mise à jour pour utiliser code.html
                      value={html}
                      selectOnLineNumbers="true"
                      cursorStyle="line"
                      theme="blackboard"
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
                      onChange={setCss}
                      defaultValue={css}
                      value={css}
                      selectOnLineNumbers="true"
                      cursorStyle="line"
                      theme="blackboard"
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
                  Aperçu
                </label>
                <div 
                  id="tab-content3" 
                  className="h-full tab-content navigateur" 
                  role="tabpanel" 
                  aria-labelledby="Navigateur" 
                  aria-hidden="false"
                >
                  <iframe
                      src="/iframe.html"
                      ref={iframeRef}
                      className="output-pane h-full w-full"
                      id="exercice"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      key={ex}
                  ></iframe> 
                </div>
              </li>
            </ul>
          </>
        }
        <button className="button_test" id="submit" onClick={runAssertions}>Envoyer</button>
        <button onClick={openPreviewWindow} className="text-black text-lg rounded opacity-50 left-[95%] top-[5%] preview-button hidden sm:block bg-[#ff8906] z-10 p-2 relative">
          🗔
        </button>
        <Modal test={modalMessageTest} showModal={setShowModal} seeModal={showModal}/>
    </div>
  );
};

export default CodeOnline;
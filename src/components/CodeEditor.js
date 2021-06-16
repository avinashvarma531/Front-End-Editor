import React, { useState } from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";

function CodeEditor({ setHTML }) {
    const [text, setText] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);

    const download = () => {
        let filename = "download.txt";

        const ele = document.createElement('a');
        ele.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
        ele.setAttribute('download', filename);
        ele.style.display = 'none';
        document.body.appendChild(ele);
        ele.click();
        document.body.removeChild(ele);
    }

    const toggleTheme = event => {
        setDarkTheme(!darkTheme);
        document.getElementById('theme').innerText = darkTheme ? "dark_mode" : "light_mode";
    }

    return (
        <div className="editor-container">
            <div className="menu">
                <div class="logo">Front-End Editor</div>
                <div className="btn-wrapper">
                    <button
                        className="secondary-btn btn"
                        title="save code to local"
                        onClick={download}
                    >
                        <i className="material-icons">save</i>
                    </button>
                    <button
                        className="secondary-btn btn"
                        title={`Switch to ${darkTheme ? "light" : "dark"} mode`}
                        onClick={toggleTheme}
                    >
                        <i id="theme" className="material-icons">dark_mode</i>
                    </button>
                    <button className="run btn" title="Run code" onClick={() => setHTML(text)}>Run</button>
                </div>
            </div>
            <AceEditor
                id="editor"
                width="100%"
                height="85vh"
                placeholder="Your code goes here"
                mode="html"
                theme={darkTheme ? "monokai" : "github"}
                name="ACE_EDITOR"
                onChange={val => setText(val)}
                value={text}
                fontSize={16}
                wrapEnabled={true}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
        </div>
    );
}

export default CodeEditor;
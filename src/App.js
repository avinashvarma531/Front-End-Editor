import React, {useState} from 'react';
import CodeEditor from './components/CodeEditor';
import IFrame from './components/IFrame';

import './App.css';

function App() {
    const [HTML, setHTML] = useState("");
    return (
        <div className="container">
            <CodeEditor setHTML={setHTML} />
            <IFrame HTML={HTML} />
        </div>
    );
}

export default App;
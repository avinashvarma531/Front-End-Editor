import React from 'react';

function IFrame({HTML}) {
    return (
        <div className="iframe-wrapper">
            <iframe title="CodeOutput" srcDoc={HTML} width="100%" height="100%"></iframe>
        </div>
    );
}

export default IFrame;
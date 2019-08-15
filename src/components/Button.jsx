import React from 'react';

function Button( { onClick, ...styles }) {
    return (
        <div>
            <button { ...styles } onClick={ onClick }>Reset</button>    
        </div>
    );

}

export default Button;

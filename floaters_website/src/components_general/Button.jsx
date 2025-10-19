import React from 'react';

const styles = {
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        color: '#fff',
        backgroundColor: 'black',
        border: 'none',
        borderRadius: '4px',
    },
};

const Button = ({onClick, children}) => {
    return (
        <button style={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
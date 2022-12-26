import React from 'react';

const PrimaryButton = ({ children, classes, handler, disabled }) => {
    return (
        <button
            onClick={handler}
            disabled={disabled}
            className={`hover:text-gray-100 btn bg-gradient-to-r from-primary to-secondary text-white ${classes}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
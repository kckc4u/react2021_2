import React from 'react';

import './custom-button.style.scss';

export const CustomButton = ({children, isGoogleBtn, ...otherprops}) => {
    return (
        <button className={`${isGoogleBtn ? 'google-btn' : ''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton;

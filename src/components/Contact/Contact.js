import React from 'react';
import translate from '../../i18n/translate';

export const Contact = () => {
    return(
        <div>
            <h1>{ translate("contact-page-title") }</h1>
            <p>Journalists and bloggers, please reach out to: press@duolingo.com</p>
            <p>Looking to partner with us?: partnerships@duolingo.com</p>
        </div>
    );
}
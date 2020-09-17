import React from 'react';
import translate from '../../../i18n/translate';

export const Contact = () => {
    return(
        <div>
            <h1>{ translate("contact-page-title") }</h1>
            <p>Journalists and bloggers, please reach out to: press@languini.com</p>
            <p>Looking to partner with us?: partnerships@languini.com</p>
        </div>
    );
}
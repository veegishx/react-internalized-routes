import React from 'react';
import translate from '../../../i18n/translate';

export const Home = () => {
    return (
       <div className="intro">
           <h1 className="intro-title">{ translate("intro-title") }</h1>
           <p>
           { translate("homepage-intro") }
           </p>
       </div> 
    );
}

export default Home;
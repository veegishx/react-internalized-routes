import React from 'react';
import translate from '../../i18n/translate';

export const Home = () => {
    return (
       <div className="intro">
           <p>
           { translate("homepage-intro") }
           </p>
       </div> 
    );
}

export default Home;
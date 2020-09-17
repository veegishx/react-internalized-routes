import React, { useEffect, useState } from 'react';
import './App.scss';

import { I18nProvider, LOCALES } from './i18n';

import { Home } from './components/Navigation/Home/Home';
import { Contact } from './components/Navigation/Contact/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect 
} from "react-router-dom";

import translate from './i18n/translate';

function App() {
  let url = window.location.pathname.split("/").filter(String);
  let [locale, setLocale] = useState(LOCALES[localStorage.getItem('locale')]);
  let userLocale = "en-us";
  const lang = {
    'en-us' : 'ENGLISH',
    'de-de': 'GERMAN',
    'fr-ca': 'FRENCH',
  }
  
  /**
   * Retrieve local via URL and return appropriate components based on the localized url
   * @param {*} props 
   */
  const renderLocale = (props) => {
    userLocale = props.match.params.defaultlocale; 
    const componentUrl = props.match.url.split("/").slice(-1);

    switch (componentUrl[0]) {
      case "contact" :
        return <Contact />
      case "home" :
        return <Home />
      default:
        return <Home />
    }
  }

  useEffect( _=> {
    setLocale(LOCALES[lang[userLocale]]);
    //console.log("LOCALE: " + lang[userLocale]);
    // console.log("LOCALE: " + LOCALES[lang[userLocale]]);
  }, [lang, userLocale]);


  const updateUrl = (props) => {
    url = window.location.pathname.split("/").filter(String);
    url.shift();
    url.unshift(props);
    console.log("UPDATE");
    console.log(url);
    console.log("---=-=-=-==")
  }

  const getUrl = (props) => {
    console.log("=====JOIN=====")
    url.shift();
    url.unshift(props);
    console.log(url.join("/"));
    return("/" + url.join("/"));
  }
  
  const handleLanguage = (lang) => { 
    switch(lang) {
      case "en-us":
        setLocale(LOCALES.ENGLISH);
        localStorage.setItem('locale', 'ENGLISH');
        userLocale = "en-us";
        break;
      case "fr-ca":
        setLocale(LOCALES.FRENCH);
        localStorage.setItem('locale', 'FRENCH');
        userLocale = "fr-ca";
        break
      case "de-de":
        setLocale(LOCALES.GERMAN);
        localStorage.setItem('locale', 'GERMAN');
        break
      default:
        setLocale(LOCALES.ENGLISH);
        localStorage.setItem('locale', 'ENGLISH');
        break
    }
  }
  
  return (
    <Router>
        <I18nProvider locale={locale}>
          <nav className="primary-navigation">
            <h1>Languini</h1>
            <span>{ translate("tagline") }</span>
            <ul>
                <li>
                  <span onClick={ ()=> updateUrl('home') }><Link to={`/${locale}/home`}>{ translate("home-link-label") }</Link></span>
                </li>
                <li>
                  <span onClick={ ()=> updateUrl('contact') }><Link  to={`/${locale}/contact`}>{ translate("contact-link-label") }</Link></span>
                </li>
            </ul>
          </nav>
            
          <div className="App">
              <button onClick={ () => handleLanguage("fr-ca") } ><Link to={ () => getUrl("fr-ca") }>FRENCH</Link>  </button>
              <button onClick={ () => handleLanguage("en-us" ) }><Link to={ () => getUrl("en-us") }>ENGLISH</Link></button>
              <button onClick={ () => handleLanguage("de-de") }><Link to={ () => getUrl("de-de") }>GERMAN</Link></button>
          </div>

        <Switch>
            <Route exact path="/" component={ Home }>
              { localStorage.getItem('locale') ? undefined : localStorage.setItem('locale', "ENGLISH") }
              <Redirect to={`/${LOCALES[localStorage.getItem('locale')]}/home`} />
            </Route>

            <Route exact path="/:defaultlocale" component={ Home }>
              { localStorage.getItem('locale') ? undefined : localStorage.setItem('locale', "ENGLISH") }
              <Redirect to={`/${LOCALES[localStorage.getItem('locale')]}/home`} />
            </Route>
            
            <Route path="/:defaultlocale/home" render= { renderLocale }  /> 
            <Route path="/:defaultlocale/contact" render= { renderLocale }  /> 
        </Switch>

      </I18nProvider>
    </Router>
    
  );
}

export default App;

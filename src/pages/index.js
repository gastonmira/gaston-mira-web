import React from 'react';
import {
    Helmet
} from 'react-helmet';
import App from '../components/App';
import {
    headData
} from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
    const {
        title,
        lang,
        description
    } = headData;

    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gaston Mira | Software Engineer | Manager'}</title>
        <html lang={lang || 'en'} />
        <meta name="title" content='Gaston Mira | Software Engineer | Manager' />
        <meta name="titleTemplate" content='Gaston Mira - Software Engineer from Argentina' />
        <meta name="description" content={description || 'Software Engineer from Mar del Plata, Argentina.'} />
        <meta name="url" content='https://gastonmira.dev/' />
        <meta name="image" content='./images/gastonPerfilWeb.jpg' />
      </Helmet>
        <App /> < />
    );
};
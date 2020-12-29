import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';
//7c4aee08-1073-4a32-b862-ebe1850e0732
const {REACT_APP_SPEECHLY_APP_ID} = process.env;
ReactDOM.render(
  <SpeechProvider appId={REACT_APP_SPEECHLY_APP_ID} language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import UserStore from './store/UserStore';
import ApplicationStore from './store/ApplicationStore';
import InsightsStore from './store/InsightsStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    userState: new UserStore(),
    appState: new ApplicationStore(),
    insightsState: new InsightsStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'pages/app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProvider } from 'providers/app';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  // </React.StrictMode>
);

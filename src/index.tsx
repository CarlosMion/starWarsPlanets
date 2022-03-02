import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from 'redux/store';
import { Provider } from 'react-redux';
import { LightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

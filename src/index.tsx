/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, ReactNode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
// const Con = () => {
//   const Context = createContext({ setValues, values })
//   const [values, setValues] = useState({ isLoggedIn: false, token: '' })

// }
export const Con = (children?: ReactNode) => {
  const [values, setValues] = useState({ isLoggedIn: false, token: '' })
  const Context = createContext({ setValues, values })
  return { provider: <Context.Provider value={{ values, setValues }}>{children}</Context.Provider>, context: Context }
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

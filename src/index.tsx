import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './components/ui/reset.scss';
import './components/ui/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

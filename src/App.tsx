import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Header } from './Components/hearder';

/* Purpose of the App : Creating a Portfolio Website using React and Bootstrap */
export const App: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
}
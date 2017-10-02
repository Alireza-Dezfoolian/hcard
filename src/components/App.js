import React from 'react';
import './App.scss';
import HcardBuilder from './hcard-builder/HcardBuilder.js';
import HcardPreview from './hcard-preview/HcardPreview.js';

const App = () => {
  return (
    <div className="hcard">
      <HcardBuilder />
      <HcardPreview />
    </div>
  )
}

export default App;
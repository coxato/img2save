import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
// styles
import './globalStyles/global.css';
import './globalStyles/global-fonts.css';
// utilities
import typeWritter from './utilities/typewritter';

 ReactDOM.render(<App />, document.getElementById('root'));
 // activate the tipeWriter for the TitlePage component
 typeWritter(
     ['landscapes','pets','space','cars','vintage','cities'],
      document.getElementById('spanText')
)



import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
// styles
import './globalStyles/global.css';
import './globalStyles/global-fonts.css';

// import Descarga from './utilities/pruebaDescarga';
// import Select from './components/searchPageComponents/dropDown'; 
// let asd={
//     valor: 123,
//     valor2: 345
// }
//ReactDOM.render(<Select dimensions={asd} isNightMode={false} />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));




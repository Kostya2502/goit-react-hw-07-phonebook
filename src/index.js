import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import store from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// ReactDOM.render(<Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//         <App /></PersistGate></Provider>, document.getElementById('root'));
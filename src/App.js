import React from "react";

import './App.css';
import RouterCode from './routercode.js';


import {BrowserRouter as Router} from "react-router-dom";


export default function App() {
  return (
    <div>
		<Router>
			<RouterCode/>
		</Router>
	</div>
  );
}



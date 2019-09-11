import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ToDo from './components/Todo'


function App() {
return (
<div className="App">
<Header subtitle = "A new app"/>
<ToDo />
</div>
);
}

export default App;

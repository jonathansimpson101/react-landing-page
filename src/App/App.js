import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

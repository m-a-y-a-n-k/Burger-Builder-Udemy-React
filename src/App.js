import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Builder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Builder />
        </Layout>
      </div>
    );
  }
}

export default App;

import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './main.css';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import api from './services/api';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const loadDevs = async () => {
      const response  = await api.get('/devs');
      setDevs(response.data);
    };

    loadDevs();
  }, []);

  return (
    <div id="app">
      <DevForm />      
      <main>
        <ul>
            {
              devs.map(dev => (
                <DevItem key={dev._id} dev={dev}/>
              ))
            }
        </ul>
      </main>
    </div>
  );
};

export default App;

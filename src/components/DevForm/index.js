import React, { useState, useEffect } from 'react';

import InputBlock from '../InputBlock';
import api from '../../services/api';
import './style.css';

const DevForm = () => {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const setCordinates = (position) => {
    const { latitude, longitude } = position.coords;

    setLatitude(latitude);
    setLongitude(longitude);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setCordinates, (err) => console.log(err), { timeout: 30000 });
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    console.log(response);
  };

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <InputBlock
          label='Usuário do GitHub'
          id='github_username'
          required={true}
          value={github_username}
          onChange={e => setGithub_username(e.target.value)}
        />
        
        <InputBlock
          label='Tecnologias'
          id='techs'
          required={true}
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
        
        <div className='input-group'>
          <InputBlock
            label='Latitude'
            id='latitude'
            required={true}
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
          
          <InputBlock
            label='Longitude'
            id='longitude'
            required={true}
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>

        <button type='submit'>Salvar</button> 
      </form>
    </aside>
  );
};

export default DevForm;

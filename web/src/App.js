import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
        const response = await api.get('/devs')

        setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    setGithubUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input 
              name="username_github" 
              id="username_github"
              riquired
              value={github_username}
              onChange={ e => setGithubUsername(e.target.value)}
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              riquired
              value={techs}
              onChange={ e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                riquired 
                value={latitude}
                onChange={ e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
                name="longitude" 
                id="longitude" 
                riquired 
                value={longitude}
                onChange={ e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
          
        </form>
      </aside>
      <main>
        <ul>
          {devs.map}
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/33223817?s=460&v=4" alt="Fabiano Souza"/>
                <div className="user-info">
                  <strong>Fabiano Souza</strong>
                  <span>AWS, Linux, JS</span>
                </div>
            </header>
            <p>
              Teste do Teste Testado!
            </p>
            <a href="https://github.com/fabianohensouza/">Acessar Perfil no Github</a>
          </li>
          
        </ul>
      </main>
    </div>
  );
}

export default App;

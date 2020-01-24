import React, {useState} from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="username_github" id="username_github" riquired/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" riquired/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" riquired/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" riquired/>
            </div>
          </div>

          <button type="submit">Salvar</button>
          
        </form>
      </aside>
      <main>
        <ul>
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
        <ul>
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
        <ul>
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
        <ul>
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


import { useState } from 'react';
import './Style.css';

function Usuario() {
  const [nombre, setNombre] = useState(
    localStorage.getItem('nombreUsuario') || 'Entrenador Pokémon'
  );

  const [correo, setCorreo] = useState(
    localStorage.getItem('correoUsuario') || ''
  );

  const [editando, setEditando] = useState(false);

  const favoritos = JSON.parse(
    localStorage.getItem('favoritos') || '[]'
  );

  const guardarPerfil = () => {
    localStorage.setItem('nombreUsuario', nombre);
    localStorage.setItem('correoUsuario', correo);
    setEditando(false);
  };

  return (
    <div className="usuario-container">
      <h1>Mi perfil</h1>
      <p className="usuario-subtitulo">
        Información de tu entrenador
      </p>

      <div className="usuario-card">
        <div className="usuario-avatar">👤</div>

        {editando ? (
          <>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />

            <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Tu correo electrónico"
              type="email"
            />

            <button onClick={guardarPerfil}>
              Guardar cambios
            </button>
          </>
        ) : (
          <>
            <h2>{nombre}</h2>
            <p>{correo || 'Sin correo registrado'}</p>

            <button onClick={() => setEditando(true)}>
              Editar perfil
            </button>
          </>
        )}

        <div className="usuario-favoritos">
          <span>❤️</span>
          <p>Pokémon favoritos</p>
          <strong>{favoritos.length}</strong>
        </div>
      </div>
    </div>
  );
}

export default Usuario;

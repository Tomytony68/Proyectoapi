
import './Style.css';

function Informativa() {
  return (
    <div className="informativa-container">
      <div className="informativa-contenido">
        <span className="informativa-etiqueta">
          ⚡ BIENVENIDO A LA POKÉDEX
        </span>

        <h1>
          Explora el mundo de <span>Pokémon</span>
        </h1>

        <p>
          Bienvenido a nuestra Pokédex, un espacio creado para
          todos los entrenadores que quieren descubrir y conocer
          más sobre el increíble universo Pokémon.
        </p>

        <p>
          Aquí podrás explorar diferentes especies, buscar
          Pokémon por su nombre, filtrarlos según su tipo,
          consultar sus detalles y guardar tus favoritos
          para tenerlos siempre a tu alcance.
        </p>

        <div className="informativa-funciones">
          <div className="informativa-item">
            <span>🔎</span>
            <h3>Explora</h3>
            <p>Encuentra tus Pokémon favoritos fácilmente.</p>
          </div>

          <div className="informativa-item">
            <span>📚</span>
            <h3>Descubre</h3>
            <p>Conoce diferentes especies y sus características.</p>
          </div>

          <div className="informativa-item">
            <span>❤️</span>
            <h3>Colecciona</h3>
            <p>Guarda tus Pokémon preferidos en tu colección.</p>
          </div>
        </div>

        <p className="informativa-final">
          ¡Conviértete en el mejor entrenador Pokémon!
        </p>
      </div>
    </div>
  );
}

export default Informativa;

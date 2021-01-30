// El nombre de componente siempre debe iniciar con Mayuscula y sin espacios.
import React, { Fragment } from 'react';
// Se puede usar props o esto.
function Header({ titulo, descripcion }) {
  return (
    <Fragment>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </Fragment>
  );
}

export default Header;

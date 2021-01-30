// El nombre de componente siempre debe iniciar con Mayuscula y sin espacios.
import React, { Fragment } from 'react';

const Header = ({ titulo, descripcion }) => (
  <Fragment>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </Fragment>
);

export default Header;

import React, { Fragment } from 'react';
import Header from './componentes/Headers';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <Fragment>
      <Header titulo="Cotizador de Prestamos" descripcion="Ingresa al cotizador y obten tu crédito" />
      <div className="container">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;

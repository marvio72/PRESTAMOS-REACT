import React, { Fragment, useState } from 'react';
import Header from './componentes/Headers';
import Formulario from './componentes/Formulario';

function App() {
  // Definir el state

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);

  return (
    <Fragment>
      <Header titulo="Cotizador de Prestamos" descripcion="Ingresa al cotizador y obten tu crédito" />
      <div className="container">
        <Formulario cantidad={cantidad} guardarCantidad={guardarCantidad} plazo={plazo} guardarPlazo={guardarPlazo} />
      </div>
    </Fragment>
  );
}

export default App;

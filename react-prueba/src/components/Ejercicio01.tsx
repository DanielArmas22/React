import { useState } from "react";
import Button from "./Button";
function Ejercicio01() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const boton1 = (
    <Button
      color="bg-blue-500 p-4 rounded-xl border-2"
      mensaje="Agregar"
      handleClick={handleClick}
    >
      {/* children */}
      {/* <IconButton>Icono</IconButton> */}
    </Button>
  );
  const boton2 = (
    <Button
      color="bg-red-500 p-4 rounded-xl border-2"
      mensaje="Eliminar"
      // handleClick={deleteMinion}
    >
      {/* children */}
      {/* <IconButton>Icono</IconButton> */}
    </Button>
  );

  return <>{click ? boton2 : boton1}</>;
}

export default Ejercicio01;

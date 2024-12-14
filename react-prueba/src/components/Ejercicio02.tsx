import { useState } from "react";
import Button, { IconButton } from "./Button";
import List from "./List";

function Ejercicio02() {
  const [data, setData] = useState(["Sandia", "Pera", "Manzana"]);
  const minion = "Minion";
  const handleSelect = (item: string) => {
    console.log(item);
  };
  const addMinion = () => {
    // data.push(minion); esto no se debe hacer porque no se actualiza el estado.
    setData([...data, minion]);
  };
  const deleteMinion = () => {
    // data.pop(); esto no se debe hacer porque no se actualiza el estado.
    setData(data.slice(0, data.length - 1)); //en python sería data[:-1]
  };
  const botonAgregar = (
    <Button
      color="bg-blue-500 p-4 rounded-xl border-2"
      mensaje="Agregar"
      handleClick={addMinion}
    >
      {/* children */}
      {/* <IconButton>Icono</IconButton> */}
    </Button>
  );
  const botonEliminar = (
    <Button
      color="bg-red-500 p-4 rounded-xl border-2"
      mensaje="Eliminar"
      handleClick={deleteMinion}
    >
      {/* children */}
      {/* <IconButton>Icono</IconButton> */}
    </Button>
  );
  return (
    <>
      <div className="flex gap-2">
        {botonAgregar} {botonEliminar}
      </div>
      <br />

      <List data={data} onSelect={handleSelect}></List>
    </>
  );
}

export default Ejercicio02;

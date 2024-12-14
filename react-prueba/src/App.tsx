import Ejercicio01 from "./components/Ejercicio01";
import Ejercicio02 from "./components/Ejercicio02";
import Titulo from "./Titulo";

function App() {
  return (
    <>
      <Titulo />
      <div className="grid place-content-center w-full">
        <h1 className="text-2xl font-semibold text-center my-10">
          Ejercicio 01
        </h1>
        <br />
        <div>
          <Ejercicio01></Ejercicio01>
        </div>
      </div>
      <div className="grid place-content-center">
        <h1 className="text-2xl font-semibold text-center my-10">
          Ejercicio 02
        </h1>
        <br />
        <Ejercicio02></Ejercicio02>
      </div>
    </>
  );
}
export default App;

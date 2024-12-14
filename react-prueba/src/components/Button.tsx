// import React from "react";
// import { Fragment } from "react/jsx-runtime"; es como el <></>

import { ReactNode } from "react";

// import { Children } from "react";

//interface es para definir la forma de un objeto, nos da autocompletado. (Typescript)
interface ButtonProps {
  color: string;
  children?: ReactNode; // ReactNode es un tipo de dato que puede ser cualquier cosa que renderice React
  mensaje: string;
  handleClick?: () => void; // ? es para que sea opcional
}
function Button(props: ButtonProps) {
  const { color } = props; // destructuring de props
  const { children } = props;
  const { mensaje } = props;
  const { handleClick } = props;
  return (
    <button className={color} onClick={handleClick}>
      {/* <IconButton color={"white"} /> */}
      {children}
      <span className="p-2">{mensaje}</span>
    </button>
  );
}
interface IconButtonProps {
  // el signo de ? es para que sea opcional.
  color?: string;
  children?: ReactNode;
}
function IconButton(props: IconButtonProps) {
  const { color } = props;
  const { children } = props;
  return <i className={color}>{children}</i>;
}
export { IconButton }; // exportamos el componente IconButton
export default Button; // exportamos el componente Button por defecto

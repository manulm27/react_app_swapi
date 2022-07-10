//importar react en el paquete
import React from "react";
import ReactDOM from "react-dom";

//incluya su archivo index.scss en el paquete
import "../styles/index.css";

//importa tus propios componentes
import Layout from "./layout";

//renderiza tu aplicación de reacción
ReactDOM.render(<Layout />, document.querySelector("#app"));

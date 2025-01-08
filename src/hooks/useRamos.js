import { useState, useEffect } from "react";

import comercial from "../assets/Comercial.json";

const ramosTotales = { ...comercial };
const useRamos = () => {
  const [ramos, setRamos] = useState({});
  useEffect(() => {
    let opcionesRamos = Object.keys(ramosTotales);
    opcionesRamos = opcionesRamos.map((p) => [
      p,
      ramosTotales[p][0].nombre,
      ramosTotales[p][0].semestre,
    ]);
    const ramosSegunTematica = {
      Ingenieria: [],
      Informática: [],
      "Formación general": [],
      Desconocido: [],
      "Comercial x_x": [],
    };
    opcionesRamos.forEach((r) => {
      let codigo = r[0].slice(0, 3);
      if (codigo.includes("ECE")) {
        ramosSegunTematica["Comercial x_x"].push(r);
      } else if (codigo === "CIT") {
        ramosSegunTematica["Informática"].push(r);
      } else if (codigo === "CFG") {
        ramosSegunTematica["Formación general"].push(r);
      } else if (codigo === "CII") {
        ramosSegunTematica["Ingenieria"].push(r);
      } else {
        ramosSegunTematica["Comercial x_x"].push(r);
      }
    });
    setRamos(ramosSegunTematica);
  }, []);
  return [ramos, setRamos, ramosTotales];
};
export default useRamos;

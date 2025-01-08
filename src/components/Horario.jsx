import Card from "./Card";

const Horario = ({ horario }) => {
  const bloques = {
    "08:30 - 09:40": "A",
    "09:50 - 11:00": "B",
    "11:10 - 12:20": "C",
    "12:30 - 13:40": "D",
    "13:50 - 15:00": "E",
    "15:10 - 16:20": "F",
    "16:30 - 17:40": "G",
    "17:50 - 19:00": "H",
    "19:10 - 20:20": "I",
  };
  const bloqueA = Object.values(horario).map((d) => d.A);
  if (bloqueA.every((x) => !x)) {
    delete bloques["08:30 - 09:40"];
  }
  const bloqueH = Object.values(horario).map((d) => d.H);
  const bloqueI = Object.values(horario).map((d) => d.I);

  return (
    <div className="container-xl">
      <table className="table table-hover">
        <thead>
          <tr className="table-active">
            <th scope="col"></th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(bloques).map((b) => (
            <tr className="table-secondary" key={bloques[b]}>
              <th>{b}</th>
              <Card
                info={horario["LU"][bloques[b]]}
                bloque={["LU", bloques[b]]}
              />
              <Card
                info={horario["MA"][bloques[b]]}
                bloque={["MA", bloques[b]]}
              />
              <Card
                info={horario["MI"][bloques[b]]}
                bloque={["MI", bloques[b]]}
              />
              <Card
                info={horario["JU"][bloques[b]]}
                bloque={["JU", bloques[b]]}
              />

              <Card
                info={horario["VI"][bloques[b]]}
                bloque={["VI", bloques[b]]}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Horario;

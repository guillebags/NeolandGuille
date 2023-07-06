//! Iteración #2: Condicionales avanzados
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

console.log("........................");

const rateAlumns = (arrObj) => {
  arrObj.forEach((alumn) => {
    let grades = 0;
    alumn.T1 && grades++; // compruebo si el T1 está aprobado
    alumn.T2 && grades++; // compruebo si el T2 está aprobado
    alumn.T3 && grades++; // compruebo si el T3 está aprobado
    grades >= 2 ? (alumn.isApproved = true) : (alumn.isApproved = false); // si hay 2 o más T aprobados, isApproved es igual a true;
  });

  return arrObj;
};

console.log(rateAlumns(alumns));

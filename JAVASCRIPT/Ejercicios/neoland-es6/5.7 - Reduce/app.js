//!Iteración #7: Reduce
//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sum = exams.reduce((acc, student) => acc + student.score, 0);

console.log(sum);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const sumApproved = exams.reduce((acc, student) => {
  if (student.score >= 5) {
    return acc + student.score;
  }
  return acc;
}, 0); //tengo que inicializar el acc porque si no, coge el primer elemento(en este caso un objeto) como primer valor de acc
console.log(sumApproved);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const average = exams.reduce((acc, { score }) => acc + score, 0) / exams.length;
console.log(average);

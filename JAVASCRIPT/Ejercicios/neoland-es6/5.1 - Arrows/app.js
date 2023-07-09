//!Iteración #1: Arrows
//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.

const arrowSum = (a = 10, b = 5) => {
  console.log(a + b);
};

arrowSum();
arrowSum(13);
arrowSum(9, 3);

const generarNumeroEnteroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generarCienNumerosAleatorios = () => {
  const numeros = [];

  while (numeros.length < 100) {
    const numeroAleatorio = generarNumeroEnteroAleatorio(1, 1000);

    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio);
    }
  }

  numeros.sort(function (a, b) {
    return a - b;
  });

  // console.log(numeros);
  return numeros;
};

const numeros = generarCienNumerosAleatorios();
numeros.sort();
console.log(numeros);

//Para lograr ordenamiento ascendente de valores en arrays

numeros.sort((a, b) => a - b);
console.log(
  "Arrays de números ordenados ascendentemente (menor a mayor): " + numeros
);

//Para lograr ordenamiento descendente de valores en arrays

numeros.sort((a, b) => b - a);
console.log(
  "Arrays de números ordenados descendentemente (mayor a menor): " + numeros
);

//1. Duplicar todos los valores de un array de números

const numerosDuplicados = numeros.map((numero) => numero * 2);
console.log("Números Duplicados: " + numerosDuplicados);

//2. Filtrar los números pares de un array de números

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log("Números Pares: " + numerosPares);

//Declarar Función

const obtenerNumerosPares = (listaDeNumeros) => {
  const numerosPares = [];

  for (let i = 0; i < listaDeNumeros.length; i++) {
    const elemento = listaDeNumeros[i];

    if (elemento % 2 === 0) {
      numerosPares.push(elemento);
    }
  }

  return numerosPares;
};

const pares = obtenerNumerosPares(numeros);
console.log("Pares: " + pares);

//3. Calcular la suma de todos los números
const sumatoria = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);
console.log(
  "La sumatoria de los números dentro del array numeros es: " + sumatoria
);

//4. Encontrar el número más grande

const maximo = numeros.reduce(
  (max, valorActual) => Math.max(max, valorActual),
  numeros[0]
);

console.log("Valor máximo: " + maximo);

//Implementación del spread operator
const numeroMayor = Math.max(...numeros);
console.log("Número Mayor: " + numeroMayor);

//5. Convertir un array de string de minúscula a mayúscula
const nombres = [
  "Angie",
  "Carolina",
  "Daniela",
  "Fernanda",
  "Gustavo",
  "Holguer",
  "Olmar",
  "Jhon",
];

const nombresEnMayuscula = nombres.map((nombre) => nombre.toUpperCase());
console.log("Nombres en mayúscula: " + nombresEnMayuscula);

//6. Eliminar elementos duplicados dentro de un array
const categoriasProductos = [
  "collares",
  "aretes",
  "anillos",
  "brazaletes",
  "aretes",
  "anillos",
  "anillos",
  "collares",
];

const categoriasSet = new Set(categoriasProductos);
const categorias = [...categoriasSet];
// const categorias = Array.from(categoriasSet);//Convierte estructuras de datos en arrays

console.log("Tipos de accesorios: " + categorias);

//7. Contar la frecuencia de cada elemento en un array

const frecuencia = categoriasProductos.reduce((objetoFrecuencia, categoria) => {
  objetoFrecuencia[categoria] = objetoFrecuencia[categoria]
    ? objetoFrecuencia[categoria] + 1
    : 1;
  return objetoFrecuencia;
}, {});

console.log(
  "Frecuencia en que aparecen los elementos en el array categoriasProductos: "
);
console.log(frecuencia);

//¿Cómo sería un array dentro de un objeto?

const desarrollador = {
  nombre: "Angie",
  edad: 20,
  habilidades: ["JavaScript", "HTML:5", "CSS:3", "Responsive Design"],
  direccion: [
    {
      tipo: "domicilio",
      ciudad: "Medellín",
      barrio: "Poblado",
      calle: "Calle 123",
    },
    {
      tipo: "trabajo",
      ciudad: "Envigado",
      barrio: "San José",
      calle: "Calle 123",
    },
  ],
};

//Para agregar una dirección a desarrollador

const nuevaDireccion = {
  tipo: "vivienda de descanso",
  ciudad: "Cartagena",
  barrio: "Barú",
  calle: "Calle 123",
};

desarrollador.direccion.push(nuevaDireccion);

console.log(desarrollador.direccion)

//Para agregar una habilidad
desarrollador.habilidades.push("ReactJS");

console.log(desarrollador.habilidades);

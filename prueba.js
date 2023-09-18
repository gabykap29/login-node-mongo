let nombresHombres = [
    "Juan",
    "Carlos",
    "Luis",
    "Javier",
    "Miguel",
    "José",
    "Francisco",
    "Alejandro",
    "Diego",
    "Antonio",
    "Pedro",
    "Manuel",
    "Eduardo",
    "Raúl",
    "Daniel",
    "Sergio",
    "Guillermo",
    "Roberto",
    "Jorge",
    "Oscar",
    "Ricardo",
    "David",
    "Hugo",
    "Gabriel",
    "Ernesto",
    "Andrés",
    "Ángel",
    "Iván",
    "Felipe",
    "Iván",
    "Enrique",
    "Emilio",
    "Pablo",
    "Juan Carlos",
    "Fernando",
    "Adrián",
    "Mateo",
    "Alberto",
    "Rodrigo",
    "Sebastián",
    "Guillermo",
    "Eduardo",
    "Javier",
    "Mauricio",
    "Julián",
    "Felipe",
    "Germán",
    "Juan Pablo",
    "Rafael"
  ];
  const nombresMujer = [
    "Ana",
    "María",
    "Laura",
    "Sofía",
    "Carmen",
    "Julia",
    "Isabel",
    "Paula",
    "Marta",
    "Elena",
    "Andrea",
    "Lucía",
    "Clara",
    "Raquel",
    "Patricia",
    "Carolina",
    "Diana",
    "Beatriz",
    "Gloria",
    "Esther",
    "Irene",
    "Silvia",
    "Alicia",
    "Valeria",
    "Lourdes",
    "Rosa",
    "Natalia",
    "Paloma",
    "Lidia",
    "Emma",
    "Teresa",
    "Susana",
    "Vanessa",
    "Alejandra",
    "Adriana",
    "Miriam",
    "Victoria",
    "Rocío",
    "Olga",
    "Inés",
    "Marina",
    "Patricia",
    "Aurora",
    "Sandra",
    "Concha",
    "Lola",
    "Maribel",
    "Elena",
    "Gloria",
    "Martina"
  ];
  let apellidos = [
    "González",
    "Rodríguez",
    "Martínez",
    "López",
    "Sánchez",
    "Ramírez",
    "Torres",
    "García",
    "Fernández",
    "Díaz",
    "Castro",
    "Herrera",
    "Jiménez",
    "Ortiz",
    "Silva",
    "Vargas",
    "Flores",
    "Mendoza",
    "Ríos",
    "Pérez",
    "Morales",
    "Gómez",
    "Romero",
    "Cruz",
    "Ruiz",
    "Paredes",
    "Torres",
    "Vega",
    "Suárez",
    "Cabrera",
    "Alvarez",
    "Mendoza",
    "Rivera",
    "Lara",
    "Rojas",
    "Salazar",
    "Molina",
    "Vargas",
    "Fuentes",
    "Guerrero",
    "Palacios",
    "Luna",
    "Valencia",
    "Soto",
    "Contreras",
    "Olivares",
    "Navarro",
    "Araya",
    "Cortés"
  ];
  const materiasPrimaria = [
    "Lengua y literatura",
    "Matemáticas",
    "Ciencias Sociales",
    "Ciencias Naturales",
    "Educación Artística",
    "Educación Física",
    "Educación Tecnológica",
    "Formación Ética y Ciudadana"
  ]
  
  const materiasSecundaria = [
  "Lengua",
  "Matemática",
  "Lengua Extranjera",
  "Educación Física",
  "Lenguaje musical",
  "Lenguaje artístico combinado",
  "Biología I",
  "Biología II",
  "Biología III",
  "Ciencias Físico-Química I",
  "Ciencias Físico-Química II",
  "Ciencias Físico-Química III",
  "Historia I", 
  "Historia II",
  "Historia III",
  "Geografía (I, II y III)",
  "Geografía II",
  "Geografía III",
  "Tecnología",
  "Formación ética y ciudadana"
  ]
  const superior = [
  "Desarrollo de Software",
  "Telecomunicaciones",
  "Ingenieria Industrial",
  "Comercio y Relaciones Internacionales",
  "Contabilidad"
  
  ]
  
  let nacionalidad = ['Argentino','Paraguayo'];
  
  const edadDni = {
    27: [38800000, 39800000],
    26: [39800000, 40800000],
    25: [40800000, 41800000],
    24: [41800000, 42800000],
    23: [42800000, 43800000],
    22: [43800000, 44800000],
    21: [44800000, 45800000],
    20: [45800000, 46800000],
    19: [46800000, 47800000],
    18: [47800000, 48800000],
    17: [48800000, 49800000],
    16: [49800000, 50800000],
    15: [50800000, 51800000],
    14: [51800000, 52800000],
    13: [52800000, 53800000],
    12: [53800000, 54800000],
    11: [54800000, 55800000],
    10: [55800000, 56800000],
    9: [55800000, 56800000],
    8: [55800000, 56800000],
    7: [55800000, 56800000],
    6: [55800000, 56800000],
    5: [56000000, 56999999],
    4: [56000000, 56555555],
  };
  
  let codNivelEducativo = [{inicial:101},{primaria:102},{secundaria:110},{superior:115}];
  
  let barriosFormosa = [
    "San Juan",
    "Santa Rosa",
    "Los Pájaros",
    "Villa Esperanza",
    "La Candelaria",
    "San Martín",
    "San Antonio",
    "Nueva Formosa",
    "La Primavera",
    "Villa del Sol",
    "Bella Vista",
    "San Isidro",
    "La Victoria",
    "Villa Hermosa",
    "Las Acacias",
    "El Bosque",
    "La Rosada",
    "Los Alamos",
    "El Paraíso",
    "San Francisco"
  ];
  
  
  const alumno = {
    codNivelEducativo:"",
    nombre:"",
    apellido:"",
    edad:"",
    dni: "",
    fechaNac:"",
    domicilio:"",
    nacionalidad:"",
    fechaIngreso:"",
    materia:[],
    tutor:"",
    cicloLectivo:""
  }
  let numeroAleatorio = Math.floor(Math.random() * 49);
  
  console.log(numeroAleatorio);
  
  function generarDNI(edad) {
    if ( edad in edadDni) {
      const [min, max] = edadDni[edad];
      
      const numeroDNI = Math.floor(Math.random() * (max - min + 1)) + min;
  
      const dniFormateado = numeroDNI.toString().padStart(8, '0');
      return dniFormateado;
    } else {
      return "Edad no válida";
    }
  };
  
  function fechaAleatoriaJardin() {
    const inicio = new Date('2018-01-01').getTime();
    const fin = new Date('2019-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  
  function fechaAleatoriaPrimaria() {
    const inicio = new Date('2012-01-01').getTime();
    const fin = new Date('2017-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  function fechaAleatoriaSecundaria() {
    const inicio = new Date('2005-01-01').getTime();
    const fin = new Date('2011-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  function fechaAleatoriaSuperior() {
    const inicio = new Date('1995-01-01').getTime();
    const fin = new Date('2005-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  
  function crearAlumno(){
      let num = Math.floor(Math.random()*3);
      alumno.codNivelEducativo = codNivelEducativo[num];
      alumno.nombre = nombresHombres[Math.floor(Math.random()*49)];
      alumno.apellido = apellidos[Math.floor(Math.random()*49)];
      switch(num){
        case 0:{
          let edad = Math.floor(Math.random()*2 ) + 4;
          alumno.edad = edad;
          alumno.dni = generarDNI(edad);
          alumno.fechaNac = fechaAleatoriaJardin();
          alumno.domicilio = barriosFormosa[Math.floor(Math.random()*20)];
          alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
          alumno.fechaIngreso = new Date('2023-03-03');
          alumno.materia = [];
          alumno.tutor = [{
            nombre: nombresHombres[Math.floor(Math.random()*49)],
            apellido: alumno.apellido,
          }];
          alumno.cicloLectivo = '2023'
          break;
        }
          case 1:{
            let edad = Math.floor(Math.random() * 7) + 6;
          alumno.edad = edad;
          alumno.dni = generarDNI(edad);
          alumno.fechaNac = fechaAleatoriaPrimaria();
          alumno.domicilio = barriosFormosa[Math.floor(Math.random()*20)];
          alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
          alumno.fechaIngreso = new Date('2023-03-03');
          alumno.materia = [];
          alumno.tutor = [{
            nombre: nombresHombres[Math.floor(Math.random()*49)],
            apellido: alumno.apellido,
          }];
          alumno.cicloLectivo = '2023'
          break;
          }
          case 2:{
            let edad = Math.floor(Math.random() * 7) + 12;
          alumno.edad = edad;
          alumno.dni = generarDNI(edad);
          alumno.fechaNac = fechaAleatoriaSecundaria();
          alumno.domicilio = barriosFormosa[Math.floor(Math.random()*20)];
          alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
          alumno.fechaIngreso = new Date('2023-03-03');
          alumno.materia = [];
          alumno.tutor = [{
            nombre: nombresHombres[Math.floor(Math.random()*49)],
            apellido: alumno.apellido,
          }];
          alumno.cicloLectivo = '2023'
          break;
          }
          case 3:{
            let edad = Math.floor(Math.random() * 9) + 19;
            alumno.edad = edad;
            alumno.dni = generarDNI(edad);
            alumno.fechaNac = fechaAleatoriaSecundaria();
            alumno.domicilio = barriosFormosa[Math.floor(Math.random()*20)];
            alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
            alumno.fechaIngreso = new Date('2023-03-03');
            alumno.materia = [];
            alumno.tutor = [{
              nombre: nombresHombres[Math.floor(Math.random()*49)],
              apellido: alumno.apellido,
            }];
            alumno.cicloLectivo = '2023'
            break;
          }
      }
      return alumno;
  } 
  
  console.log(crearAlumno());